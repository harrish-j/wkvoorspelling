const fs = require('fs');
const https = require('https');
const path = require('path');

const teamsCode = fs.readFileSync(path.join(__dirname, '..', 'data', 'teams.js'), 'utf8');
const teamInfoCode = fs.readFileSync(path.join(__dirname, '..', 'data', 'teaminfo.js'), 'utf8');
const photosCode = fs.readFileSync(path.join(__dirname, '..', 'data', 'playerimages.js'), 'utf8');
const fn = new Function(teamsCode + '\n' + teamInfoCode + '\n' + photosCode + '\nreturn {teamsData, teamInfoData, playerPhotos};');
const { teamsData, teamInfoData, playerPhotos } = fn();

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
console.log(`Missing: ${missingPlayers.length} players\n`);

function httpGet(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'WKVoorspelling/1.0 (educational; harrish-j/wkvoorspelling)' }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error(`Parse: ${data.substring(0, 60)}`)); }
      });
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Strategy A: Wikipedia opensearch → fuzzy find page → get image
async function wikiOpenSearch(name, lang = 'en') {
  try {
    const url = `https://${lang}.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(name)}&limit=5&namespace=0&format=json`;
    const data = await httpGet(url);
    if (!data[1] || data[1].length === 0) return null;

    // data[1] = titles array
    const titles = data[1];
    // Try to get images for all results at once
    const encoded = titles.map(t => encodeURIComponent(t)).join('|');
    const imgUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&titles=${encoded}&prop=pageimages|categories&format=json&pithumbsize=250&cllimit=10&redirects=1`;
    const imgData = await httpGet(imgUrl);

    if (!imgData.query || !imgData.query.pages) return null;

    // Find a page that looks like a footballer
    const pages = Object.values(imgData.query.pages);
    for (const page of pages) {
      if (!page.thumbnail || !page.thumbnail.source) continue;
      // Check categories for football-related
      const cats = (page.categories || []).map(c => c.title.toLowerCase());
      const isFootball = cats.some(c =>
        c.includes('football') || c.includes('soccer') || c.includes('voetbal') ||
        c.includes('fußball') || c.includes('futbol') || c.includes('calciat') ||
        c.includes('footballer') || c.includes('fifa') || c.includes('club')
      );
      // Also check if the title closely matches the player name
      const titleNorm = page.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const nameNorm = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const isNameMatch = titleNorm.includes(nameNorm) || nameNorm.includes(titleNorm) ||
        titleNorm.split(/\s+/).every(w => nameNorm.includes(w));

      if (isFootball || isNameMatch) {
        return page.thumbnail.source;
      }
    }
    // Fallback: if first result has an image and title is close enough
    if (pages[0] && pages[0].thumbnail) {
      const t = (pages[0].title || '').toLowerCase();
      const n = name.toLowerCase();
      const lastName = n.split(' ').pop();
      if (t.includes(lastName) && t.includes(n.split(' ')[0])) {
        return pages[0].thumbnail.source;
      }
    }
    return null;
  } catch (e) { return null; }
}

// Strategy B: Wikipedia REST API /page/summary
async function wikiRestSummary(name, lang = 'en') {
  try {
    const title = name.replace(/ /g, '_');
    const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
    const data = await httpGet(url);
    if (data.thumbnail && data.thumbnail.source) {
      return data.thumbnail.source;
    }
    return null;
  } catch (e) { return null; }
}

// Strategy C: Wikidata SPARQL - search by label, filter for footballer
async function wikidataSparql(name) {
  try {
    const sparql = `SELECT ?item ?image WHERE {
      ?item rdfs:label "${name}"@en .
      ?item wdt:P106 wd:Q937857 .
      ?item wdt:P18 ?image .
    } LIMIT 1`;
    const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(sparql)}&format=json`;
    const data = await httpGet(url);
    if (data.results && data.results.bindings && data.results.bindings.length > 0) {
      const imageFile = data.results.bindings[0].image.value;
      // Convert commons file URL to thumbnail
      const filename = decodeURIComponent(imageFile.split('/').pop());
      const encoded = filename.replace(/ /g, '_');
      const md5 = require('crypto').createHash('md5').update(encoded).digest('hex');
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/${md5[0]}/${md5[0]}${md5[1]}/${encodeURIComponent(encoded)}/250px-${encodeURIComponent(encoded)}`;
    }
    return null;
  } catch (e) { return null; }
}

// Map country codes to alt wiki languages (for opensearch on alt wikis)
const altLangs = {
  'za': ['af'], 'kr': ['ko'], 'cz': ['cs'], 'ba': ['bs', 'hr'],
  'qa': ['ar'], 'ht': ['fr'], 'tr': ['tr'], 'cw': ['nl'],
  'ci': ['fr'], 'ec': ['es'], 'se': ['sv'], 'tn': ['ar', 'fr'],
  'eg': ['ar'], 'ir': ['fa'], 'cv': ['pt'], 'sa': ['ar'],
  'uy': ['es'], 'sn': ['fr'], 'iq': ['ar'], 'dz': ['ar', 'fr'],
  'at': ['de'], 'jo': ['ar'], 'cd': ['fr'], 'uz': ['ru'],
  'gh': [], 'pa': ['es'], 'py': ['es'], 'mx': ['es'],
  'no': ['no', 'nb'], 'hr': ['hr'], 'ma': ['fr', 'ar'],
  'jp': ['ja'], 'nz': [], 'gb-sct': [],
  'au': []
};

async function main() {
  const foundPhotos = {};
  let found = 0;

  for (let i = 0; i < missingPlayers.length; i++) {
    const p = missingPlayers[i];
    let url = null;

    // Try EN opensearch first
    url = await wikiOpenSearch(p.name, 'en');
    if (url) { foundPhotos[p.name] = url; found++; }

    // Try REST API summary
    if (!url) {
      await sleep(200);
      url = await wikiRestSummary(p.name, 'en');
      if (url) { foundPhotos[p.name] = url; found++; }
    }

    // Try "(footballer)" with REST
    if (!url) {
      await sleep(200);
      url = await wikiRestSummary(`${p.name} (footballer)`, 'en');
      if (url) { foundPhotos[p.name] = url; found++; }
    }

    // Try Wikidata SPARQL
    if (!url) {
      await sleep(300);
      url = await wikidataSparql(p.name);
      if (url) { foundPhotos[p.name] = url; found++; }
    }

    // Try alt-language Wikipedia opensearch
    if (!url) {
      const langs = altLangs[p.code] || [];
      for (const lang of langs) {
        await sleep(300);
        url = await wikiOpenSearch(p.name, lang);
        if (url) { foundPhotos[p.name] = url; found++; break; }
      }
    }

    if ((i + 1) % 10 === 0 || i === missingPlayers.length - 1) {
      const pct = Math.round((i+1)/missingPlayers.length*100);
      console.log(`  ${i+1}/${missingPlayers.length} (${pct}%) | Found: ${found}${url ? ` ← ${p.name}` : ''}`);
    }
    await sleep(300);
  }

  const finalMissing = missingPlayers.filter(p => !foundPhotos[p.name]);
  console.log(`\n=== RESULTS ===`);
  console.log(`Found: ${Object.keys(foundPhotos).length} new photos`);
  console.log(`Still missing: ${finalMissing.length}`);

  const byTeam = {};
  finalMissing.forEach(p => { if (!byTeam[p.team]) byTeam[p.team] = []; byTeam[p.team].push(p.name); });
  console.log('\nPer team:');
  Object.keys(byTeam).sort().forEach(t => console.log(`  ${t}: ${byTeam[t].length} - ${byTeam[t].join(', ')}`));

  fs.writeFileSync(path.join(__dirname, '..', 'data', 'found_photos.json'), JSON.stringify(foundPhotos, null, 2), 'utf8');
  console.log(`\nSaved to found_photos.json`);
}

main().catch(console.error);
