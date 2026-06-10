// ============================================================
// WK 2026 Wedstrijdvoorspellingen – v2 (Dixon-Coles-geïnspireerd)
// ============================================================
// Bronnen:
//   - FIFA World Rankings april 2026 (via amirdaraee/world-cup-predictions)
//   - Dixon-Coles Poisson goal model (1997) principes
//   - Gastlandvoordeel: +0.277 log-goals (~32% scoring boost, gefitted op historische data)
//   - Transfermarkt ploegwaarden juni 2026
//   - WK-historie uit teamAnalysisData
//   - Gemiddeld 2.67 goals/wedstrijd (2014-2022 WK gemiddelde)
//   - Gelijkspelkans groepsfase: ~25% historisch

const predictionsEngine = (function () {

  // ── Actuele FIFA Rankings april 2026 ──
  // Bron: amirdaraee/world-cup-predictions:fifa_world_cup_2026.json
  var FIFA_RANKINGS = {
    1: 15,   // Mexico
    2: 60,   // Zuid-Afrika
    3: 25,   // Zuid-Korea
    4: 41,   // Tsjechië
    5: 30,   // Canada
    6: 65,   // Bosnië-Herzegovina
    7: 55,   // Qatar
    8: 19,   // Zwitserland
    9: 6,    // Brazilië
    10: 8,   // Marokko
    11: 83,  // Haïti
    12: 43,  // Schotland
    13: 16,  // Verenigde Staten
    14: 40,  // Paraguay
    15: 27,  // Australië
    16: 22,  // Turkije
    17: 10,  // Duitsland
    18: 82,  // Curaçao
    19: 34,  // Ivoorkust
    20: 23,  // Ecuador
    21: 7,   // Nederland
    22: 18,  // Japan
    23: 38,  // Zweden
    24: 44,  // Tunesië
    25: 9,   // België
    26: 29,  // Egypte
    27: 21,  // Iran
    28: 85,  // Nieuw-Zeeland
    29: 2,   // Spanje
    30: 69,  // Kaapverdië
    31: 61,  // Saoedi-Arabië
    32: 17,  // Uruguay
    33: 1,   // Frankrijk
    34: 14,  // Senegal
    35: 57,  // Irak
    36: 31,  // Noorwegen
    37: 3,   // Argentinië
    38: 28,  // Algerije
    39: 24,  // Oostenrijk
    40: 63,  // Jordanië
    41: 5,   // Portugal
    42: 46,  // DR Congo
    43: 50,  // Oezbekistan
    44: 13,  // Colombia
    45: 4,   // Engeland
    46: 11,  // Kroatië
    47: 74,  // Ghana
    48: 33   // Panama
  };

  // ── Transfermarkt ploegwaarden (€M, juni 2026) ──
  // Bron: amirdaraee/world-cup-predictions:wc26_squad_values.json
  var SQUAD_VALUES = {
    1: 280, 2: 45, 3: 139, 4: 120, 5: 180, 6: 85, 7: 20, 8: 333,
    9: 928, 10: 498, 11: 56, 12: 150, 13: 420, 14: 130, 15: 160, 16: 474,
    17: 947, 18: 26, 19: 522, 20: 369, 21: 754, 22: 271, 23: 200, 24: 110,
    25: 548, 26: 180, 27: 32, 28: 34, 29: 1220, 30: 30, 31: 41, 32: 359,
    33: 1520, 34: 478, 35: 60, 36: 590, 37: 783, 38: 257, 39: 242, 40: 40,
    41: 1010, 42: 80, 43: 55, 44: 302, 45: 1360, 46: 387, 47: 100, 48: 65
  };

  // ── Hulpfuncties ──

  function getTeamCode(teamId) {
    if (typeof teamsData === 'undefined') return '';
    var team = teamsData.teams.find(function (t) { return t.id === teamId; });
    return team ? team.code : '';
  }

  function isHost(teamId) {
    if (typeof teamsData === 'undefined') return false;
    var team = teamsData.teams.find(function (t) { return t.id === teamId; });
    return team ? !!team.host : false;
  }

  function getTeamName(teamId) {
    if (typeof teamsData === 'undefined') return 'Team ' + teamId;
    var team = teamsData.teams.find(function (t) { return t.id === teamId; });
    return team ? team.name : 'Team ' + teamId;
  }

  // Elo-achtige sterkte op basis van FIFA-ranking
  // Ranking 1 → ~1995, Ranking 85 → ~1080
  function rankingToElo(ranking) {
    return 1500 + (100 - ranking) * 5.5;
  }

  // Ploegwaarde naar Elo-bonus (max ±60)
  function squadValueBonus(teamId) {
    var val = SQUAD_VALUES[teamId] || 50;
    var z = (val - 300) / 400;
    return Math.max(-60, Math.min(60, z * 60));
  }

  // WK-ervaring factor → Elo bonus
  function wcExperienceBonus(overall) {
    if (!overall || overall.matches === 0) return -40; // WK-debutant penalty
    if (overall.matches < 5) return -20;
    if (overall.matches > 50) return 30;
    if (overall.matches > 30) return 20;
    if (overall.matches > 15) return 10;
    return 0;
  }

  // Deterministische pseudo-random op basis van seed (0-1)
  function seededRandom(seed) {
    var x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  }

  // ── Dixon-Coles geïnspireerd hoofdalgoritme ──
  // Berekent verwachte doelpunten (λ) per team via Poisson-model

  function predictMatch(match, analysis) {
    var homeId = match.home;
    var awayId = match.away;
    var homeAnalysis = analysis[homeId] || {};
    var awayAnalysis = analysis[awayId] || {};

    // 1. Basis-sterkte via FIFA-ranking (Elo-schaal)
    var homeRanking = FIFA_RANKINGS[homeId] || 50;
    var awayRanking = FIFA_RANKINGS[awayId] || 50;
    var homeElo = rankingToElo(homeRanking);
    var awayElo = rankingToElo(awayRanking);

    // 2. Ploegwaarde-correctie (max ±60 Elo)
    homeElo += squadValueBonus(homeId);
    awayElo += squadValueBonus(awayId);

    // 3. WK-ervaring (max ±40 Elo)
    homeElo += wcExperienceBonus(homeAnalysis.overall);
    awayElo += wcExperienceBonus(awayAnalysis.overall);

    // 4. Toernooi-voorspelling bonus (kleine boost, max ±25 Elo)
    var homePred = homeAnalysis.prediction || {};
    var awayPred = awayAnalysis.prediction || {};
    var homeChampPct = homePred.champion || 0.1;
    var awayChampPct = awayPred.champion || 0.1;
    homeElo += Math.min(25, Math.log(1 + homeChampPct) * 30);
    awayElo += Math.min(25, Math.log(1 + awayChampPct) * 30);

    // 5. Gastlandvoordeel: +0.35 expected goals (bron: Dixon-Coles fitted 0.277 log → ~0.35 goals)
    var homeIsHost = isHost(homeId);
    var awayIsHost = isHost(awayId);

    // 6. Verwachte doelpunten berekenen (Poisson λ)
    // Gemiddeld WK-wedstrijd: 2.67 goals (2014-2022 gemiddelde)
    var TOTAL_GOALS = 2.67;

    // Elo-verschil naar verwachte score (logistische functie, c=800 voor bredere spreiding)
    var eloDiff = homeElo - awayElo;
    var homeExpected = 1.0 / (1.0 + Math.pow(10, -eloDiff / 800));
    // Cap: zelfs de grootste favoriet wint niet met >85% zekerheid
    homeExpected = Math.max(0.12, Math.min(0.88, homeExpected));

    // λ berekenen: verdeel totale verwachte goals op basis van sterkteverhouding
    var homeXG = TOTAL_GOALS * homeExpected;
    var awayXG = TOTAL_GOALS * (1 - homeExpected);

    // Gastlandbonus: +0.35 goals
    if (homeIsHost) homeXG += 0.35;
    if (awayIsHost) awayXG += 0.35;

    // Minimum λ: zelfs zwakste teams scoren soms op een WK
    homeXG = Math.max(0.35, homeXG);
    awayXG = Math.max(0.35, awayXG);

    // 7. Poisson-verdeling: kans op elke score berekenen
    // P(k goals) = e^(-λ) × λ^k / k!
    function poissonProb(lambda, k) {
      var fact = 1;
      for (var i = 2; i <= k; i++) fact *= i;
      return Math.exp(-lambda) * Math.pow(lambda, k) / fact;
    }

    // Dixon-Coles correctie (ρ = -0.05): corrigeert lage scores
    var RHO = -0.05;
    function dixonColesAdj(homeG, awayG, homeL, awayL) {
      if (homeG === 0 && awayG === 0) return 1 - homeL * awayL * RHO;
      if (homeG === 1 && awayG === 0) return 1 + awayL * RHO;
      if (homeG === 0 && awayG === 1) return 1 + homeL * RHO;
      if (homeG === 1 && awayG === 1) return 1 - RHO;
      return 1;
    }

    // Score-matrix berekenen (0-5 × 0-5)
    var maxGoals = 6;
    var scoreProbs = [];
    var homeWinProb = 0, drawProb = 0, awayWinProb = 0;

    for (var h = 0; h < maxGoals; h++) {
      for (var a = 0; a < maxGoals; a++) {
        var prob = poissonProb(homeXG, h) * poissonProb(awayXG, a);
        prob *= dixonColesAdj(h, a, homeXG, awayXG);
        scoreProbs.push({ home: h, away: a, prob: prob });
        if (h > a) homeWinProb += prob;
        else if (h === a) drawProb += prob;
        else awayWinProb += prob;
      }
    }

    // Normaliseer
    var totalProb = homeWinProb + drawProb + awayWinProb;
    homeWinProb /= totalProb;
    drawProb /= totalProb;
    awayWinProb /= totalProb;

    // 8. Score selecteren met realistische variatie
    scoreProbs.sort(function(a, b) { return b.prob - a.prob; });

    // Gebruik seeded random om niet altijd de meest waarschijnlijke te pakken
    var seed = match.id * 13 + homeId * 7 + awayId * 3;
    var roll = seededRandom(seed);
    var scoreIdx = 0;

    // Kies score op basis van cumulatieve kans van top-5 meest waarschijnlijke
    if (scoreProbs.length >= 5) {
      var topTotal = scoreProbs[0].prob + scoreProbs[1].prob + scoreProbs[2].prob +
                     scoreProbs[3].prob + scoreProbs[4].prob;
      var cum = 0;
      for (var si = 0; si < 5; si++) {
        cum += scoreProbs[si].prob / topTotal;
        if (roll < cum) { scoreIdx = si; break; }
      }
    }

    var selectedScore = scoreProbs[scoreIdx];
    var homeGoals = selectedScore.home;
    var awayGoals = selectedScore.away;

    // 9. Winkansen als percentages
    var homeWinPct = Math.round(homeWinProb * 100);
    var drawPct = Math.round(drawProb * 100);
    var awayWinPct = 100 - homeWinPct - drawPct;

    // 10. Confidence bepalen
    var maxProb = Math.max(homeWinProb, drawProb, awayWinProb);
    var confidence = maxProb > 0.55 ? 'hoog' : maxProb > 0.42 ? 'gemiddeld' : 'laag';

    // 11. Onderbouwing
    var reasoning = buildReasoning(homeId, awayId, homeRanking, awayRanking,
      homeIsHost, awayIsHost, homeXG, awayXG, analysis);

    return {
      matchId: match.id,
      homeId: homeId,
      awayId: awayId,
      homeGoals: homeGoals,
      awayGoals: awayGoals,
      homeWinPct: homeWinPct,
      drawPct: drawPct,
      awayWinPct: awayWinPct,
      homeXG: Math.round(homeXG * 100) / 100,
      awayXG: Math.round(awayXG * 100) / 100,
      reasoning: reasoning,
      confidence: confidence
    };
  }

  function buildReasoning(homeId, awayId, homeRank, awayRank, homeHost, awayHost, homeXG, awayXG, analysis) {
    var homeName = getTeamName(homeId);
    var awayName = getTeamName(awayId);
    var parts = [];

    // Ranking verschil
    var rankDiff = awayRank - homeRank;
    if (Math.abs(rankDiff) > 40) {
      var fav = rankDiff > 0 ? homeName : awayName;
      parts.push('Groot klasseverschil: ' + fav + ' staat ' + Math.abs(rankDiff) + ' plaatsen hoger (FIFA #' + Math.min(homeRank, awayRank) + ')');
    } else if (Math.abs(rankDiff) > 15) {
      var fav2 = rankDiff > 0 ? homeName : awayName;
      parts.push(fav2 + ' is favoriet (FIFA #' + Math.min(homeRank, awayRank) + ' vs #' + Math.max(homeRank, awayRank) + ')');
    } else {
      parts.push('Gelijkwaardig op papier (FIFA #' + homeRank + ' vs #' + awayRank + ')');
    }

    // Gastland
    if (homeHost) parts.push(homeName + ' heeft als gastland ~32% scoring-boost voor eigen publiek');
    if (awayHost) parts.push(awayName + ' speelt als gastland voor eigen publiek');

    // Ploegwaarde
    var homeVal = SQUAD_VALUES[homeId] || 50;
    var awayVal = SQUAD_VALUES[awayId] || 50;
    if (homeVal > awayVal * 3) {
      parts.push('Ploegwaarde ' + homeName + ' (€' + homeVal + 'M) is veel hoger');
    } else if (awayVal > homeVal * 3) {
      parts.push('Ploegwaarde ' + awayName + ' (€' + awayVal + 'M) is veel hoger');
    }

    // WK-ervaring
    var homeOverall = (analysis[homeId] || {}).overall || {};
    var awayOverall = (analysis[awayId] || {}).overall || {};
    if (homeOverall.matches > 30 && awayOverall.matches < 10) {
      parts.push(homeName + ' heeft enorm veel meer WK-ervaring (' + homeOverall.matches + ' wed.)');
    } else if (awayOverall.matches > 30 && homeOverall.matches < 10) {
      parts.push(awayName + ' heeft enorm veel meer WK-ervaring (' + awayOverall.matches + ' wed.)');
    }

    // Head-to-head
    var homeAnalysisData = analysis[homeId] || {};
    if (homeAnalysisData.groupOpponents) {
      var awayCode = getTeamCode(awayId);
      for (var i = 0; i < homeAnalysisData.groupOpponents.length; i++) {
        var opp = homeAnalysisData.groupOpponents[i];
        if (opp.code === awayCode && opp.matches && opp.matches.length > 0) {
          parts.push('H2H: ' + opp.h2hSummary);
          break;
        }
      }
    }

    // xG
    parts.push('xG: ' + Math.round(homeXG * 100) / 100 + ' – ' + Math.round(awayXG * 100) / 100);

    return parts.join('. ') + '.';
  }

  // ── Alle groepswedstrijden voorspellen ──

  function predictAllMatches() {
    if (typeof matchesData === 'undefined' || typeof teamAnalysisData === 'undefined') {
      console.warn('predictions: matchesData of teamAnalysisData niet geladen');
      return {};
    }

    var predictions = {};
    matchesData.matches.forEach(function (match) {
      if (match.stage === 'Groepsfase') {
        predictions[match.id] = predictMatch(match, teamAnalysisData);
      }
    });
    return predictions;
  }

  // ── Publieke API ──
  return {
    predictMatch: predictMatch,
    predictAllMatches: predictAllMatches,
    getTeamName: getTeamName
  };

})();
