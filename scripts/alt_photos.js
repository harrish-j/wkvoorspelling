const fs = require('fs');
const https = require('https');
const path = require('path');

// Load all data
const teamsCode = fs.readFileSync(path.join(__dirname, '..', 'data', 'teams.js'), 'utf8');
const teamInfoCode = fs.readFileSync(path.join(__dirname, '..', 'data', 'teaminfo.js'), 'utf8');
const photosCode = fs.readFileSync(path.join(__dirname, '..', 'data', 'playerimages.js'), 'utf8');
const fn = new Function(teamsCode + '\n' + teamInfoCode + '\n' + photosCode + '\nreturn {teamsData, teamInfoData, playerPhotos};');
const { teamsData, teamInfoData, playerPhotos } = fn();

// Collect missing players with their team info
const missingPlayers = [];
teamsData.teams.forEach(team => {
  const info = teamInfoData[team.id];
  if (info && info.squad) {
    info.squad.forEach(p => {
      if (!playerPhotos[p.name]) {
        missingPlayers.push({ name: p.name, team: team.name, code: team.code });
      }
    });
  }
});
console.log(`Still missing: ${missingPlayers.length} players\n`);

// Map country codes to alternative Wikipedia languages
const langMap = {
  'kr': 'ko',    // Zuid-Korea → Korean Wikipedia
  'za': 'af',    // Zuid-Afrika → Afrikaans
  'cz': 'cs',    // Tsjechië → Czech
  'ba': 'bs',    // Bosnië → Bosnian
  'qa': 'ar',    // Qatar → Arabic
  'ht': 'fr',    // Haïti → French
  'tr': 'tr',    // Turkije → Turkish
  'cw': 'nl',    // Curaçao → Dutch
  'ci': 'fr',    // Ivoorkust → French
  'ec': 'es',    // Ecuador → Spanish
  'se': 'sv',    // Zweden → Swedish
  'tn': 'ar',    // Tunesië → Arabic
  'eg': 'ar',    // Egypte → Arabic
  'ir': 'fa',    // Iran → Persian
  'cv': 'pt',    // Kaapverdië → Portuguese
  'sa': 'ar',    // Saoedi-Arabië → Arabic
  'uy': 'es',    // Uruguay → Spanish
  'sn': 'fr',    // Senegal → French
  'iq': 'ar',    // Irak → Arabic
  'no': 'no',    // Noorwegen → Norwegian
  'dz': 'ar',    // Algerije → Arabic
  'at': 'de',    // Oostenrijk → German
  'jo': 'ar',    // Jordanië → Arabic
  'cd': 'fr',    // DR Congo → French
  'uz': 'uz',    // Oezbekistan → Uzbek
  'gh': 'en',    // Ghana → English (already tried)
  'pa': 'es',    // Panama → Spanish
  'py': 'es',    // Paraguay → Spanish
  'mx': 'es',    // Mexico → Spanish
  'gb-sct': 'en', // Schotland
  'au': 'en',    // Australië
  'nz': 'en',    // Nieuw-Zeeland
  'hr': 'hr',    // Kroatië → Croatian
  'ma': 'fr',    // Marokko → French
  'jp': 'ja',    // Japan → Japanese
};

function httpGet(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'WKVoorspelling/1.0 (educational project)' }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error(`Parse error: ${data.substring(0, 80)}`)); }
      });
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

// Strategy 1: Wikidata search → get P18 image
async function searchWikidata(playerName) {
  const url = `https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(playerName)}&language=en&type=item&limit=5&format=json`;
  try {
    const data = await httpGet(url);
    if (!data.search || data.search.length === 0) return null;

    // Check first few results for footballer description
    for (const result of data.search) {
      const desc = (result.description || '').toLowerCase();
      if (desc.includes('football') || desc.includes('soccer') || desc.includes('joueur') || desc.includes('voetbal') || desc.includes('fußball') || desc.includes('futbol') || desc.includes('calciatore')) {
        // Get P18 (image) for this entity
        const entityUrl = `https://www.wikidata.org/w/api.php?action=wbgetclaims&entity=${result.id}&property=P18&format=json`;
        const claims = await httpGet(entityUrl);
        if (claims.claims && claims.claims.P18 && claims.claims.P18.length > 0) {
          const filename = claims.claims.P18[0].mainsnak.datavalue.value;
          // Convert filename to Commons thumbnail URL
          const encoded = filename.replace(/ /g, '_');
          const md5 = require('crypto').createHash('md5').update(encoded).digest('hex');
          const thumbUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/${md5[0]}/${md5[0]}${md5[1]}/${encodeURIComponent(encoded)}/250px-${encodeURIComponent(encoded)}`;
          return thumbUrl;
        }
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}

// Strategy 2: Try alternative language Wikipedia
async function tryAltWiki(playerName, lang) {
  if (!lang || lang === 'en') return null;
  const url = `https://${lang}.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(playerName)}&prop=pageimages&format=json&pithumbsize=250&redirects=1`;
  try {
    const data = await httpGet(url);
    if (data.query && data.query.pages) {
      const pages = Object.values(data.query.pages);
      for (const page of pages) {
        if (page.thumbnail && page.thumbnail.source) {
          return page.thumbnail.source;
        }
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}

// Strategy 3: Try alt wiki with "(footballer)" disambiguation
async function tryAltWikiFootballer(playerName, lang) {
  if (!lang || lang === 'en') return null;
  // Different languages use different disambiguation
  const disambigs = {
    'es': 'futbolista', 'fr': 'footballeur', 'de': 'Fußballspieler',
    'pt': 'futebolista', 'nl': 'voetballer', 'ar': 'لاعب كرة قدم',
    'tr': 'futbolcu', 'ko': '축구 선수', 'ja': 'サッカー選手',
    'cs': 'fotbalista', 'bs': 'fudbaler', 'sv': 'fotbollsspelare',
    'hr': 'nogometaš', 'fa': 'فوتبالیست', 'no': 'fotballspiller',
    'uz': 'futbolchi', 'af': 'sokkerspeler'
  };
  const disambig = disambigs[lang] || 'footballer';
  const title = `${playerName} (${disambig})`;
  const url = `https://${lang}.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=250&redirects=1`;
  try {
    const data = await httpGet(url);
    if (data.query && data.query.pages) {
      const pages = Object.values(data.query.pages);
      for (const page of pages) {
        if (page.thumbnail && page.thumbnail.source) {
          return page.thumbnail.source;
        }
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function main() {
  const foundPhotos = {};
  let found = 0;
  const total = missingPlayers.length;

  console.log('=== Strategy 1: Wikidata P18 images ===');
  for (let i = 0; i < missingPlayers.length; i++) {
    const p = missingPlayers[i];
    if (foundPhotos[p.name]) continue;

    const url = await searchWikidata(p.name);
    if (url) {
      foundPhotos[p.name] = url;
      found++;
    }

    if ((i + 1) % 20 === 0 || i === total - 1) {
      console.log(`  ${i+1}/${total} | Found: ${found}`);
    }
    await sleep(500); // Be respectful to Wikidata
  }

  console.log(`\n=== Strategy 2: Alternative language Wikipedias ===`);
  const still1 = missingPlayers.filter(p => !foundPhotos[p.name]);
  console.log(`  ${still1.length} players remaining`);

  for (let i = 0; i < still1.length; i++) {
    const p = still1[i];
    const lang = langMap[p.code];
    if (!lang || lang === 'en') continue;

    let url = await tryAltWiki(p.name, lang);
    if (!url) {
      await sleep(300);
      url = await tryAltWikiFootballer(p.name, lang);
    }
    if (url) {
      foundPhotos[p.name] = url;
      found++;
    }

    if ((i + 1) % 20 === 0 || i === still1.length - 1) {
      console.log(`  ${i+1}/${still1.length} | Found: ${found}`);
    }
    await sleep(500);
  }

  // Summary
  const finalMissing = missingPlayers.filter(p => !foundPhotos[p.name]);
  console.log(`\n=== RESULTS ===`);
  console.log(`Total searched: ${total}`);
  console.log(`Found: ${Object.keys(foundPhotos).length}`);
  console.log(`Still missing: ${finalMissing.length}`);

  const missingByTeam = {};
  finalMissing.forEach(p => {
    if (!missingByTeam[p.team]) missingByTeam[p.team] = [];
    missingByTeam[p.team].push(p.name);
  });
  console.log('\nPer team:');
  Object.keys(missingByTeam).sort().forEach(team => {
    console.log(`  ${team}: ${missingByTeam[team].length} - ${missingByTeam[team].join(', ')}`);
  });

  // Save
  fs.writeFileSync(path.join(__dirname, '..', 'data', 'found_photos.json'), JSON.stringify(foundPhotos, null, 2), 'utf8');
  console.log(`\nSaved ${Object.keys(foundPhotos).length} photos to found_photos.json`);
}

main().catch(console.error);
