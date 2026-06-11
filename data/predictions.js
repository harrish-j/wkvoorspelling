// ============================================================
// WK 2026 Wedstrijdvoorspellingen – v3 (Dixon-Coles+)
// ============================================================
// Nieuw in v3:
//   - Exponentiële rankingToElo (meer spreiding top, afvlakking onderkant)
//   - Logaritmische ploegwaardebonus (diminishing returns)
//   - Confederatiesterktefactor (UEFA/CONMEBOL historisch sterk)
//   - WK recente vorm (winratio-gewogen) vervangt stap-ervaring
//   - H2H-bonus uit groupOpponents data
//   - Altitude/venue xG-correctie (Mexico-stadions)
//   - Dynamische ρ (sterkere correctie bij lage scores)
//   - Gelijkspel-inflatie (Poisson onderschat WK-remises)
//   - Volledige CDF-scorekeuze i.p.v. top-5
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

  // Elo-achtige sterkte op basis van FIFA-ranking (exponentieel)
  // Ranking 1 → ~1776, Ranking 10 → ~1601, Ranking 50 → ~1281, Ranking 85 → ~1233
  function rankingToElo(ranking) {
    // Exponential: more spread at top, diminishing at bottom
    return 1200 + 600 * Math.exp(-ranking / 25);
  }

  // Ploegwaarde naar Elo-bonus (logaritmisch, diminishing returns)
  function squadValueBonus(teamId) {
    var val = SQUAD_VALUES[teamId] || 50;
    // Logarithmic: diminishing returns for very expensive squads
    var bonus = 45 * (Math.log(val / 100) / Math.log(15));
    return Math.max(-50, Math.min(50, bonus));
  }

  // Confederation strength based on historical WC performance
  var CONFEDERATION_STRENGTH = {
    'UEFA': 12,
    'CONMEBOL': 8,
    'CAF': -3,
    'CONCACAF': -5,
    'AFC': -10,
    'OFC': -18
  };

  function confederationBonus(teamId) {
    if (typeof teamsData === 'undefined') return 0;
    var team = teamsData.teams.find(function(t) { return t.id === teamId; });
    if (!team || !team.confederation) return 0;
    return CONFEDERATION_STRENGTH[team.confederation] || 0;
  }

  // WK recente vorm: combineert ervaring met winratio
  function wcRecentForm(overall) {
    if (!overall || overall.matches === 0) return -35;
    if (overall.matches < 5) return -15;
    var winRate = overall.wins / overall.matches;
    var formBonus = (winRate - 0.33) * 80;
    var expBase = 0;
    if (overall.matches > 50) expBase = 20;
    else if (overall.matches > 30) expBase = 12;
    else if (overall.matches > 15) expBase = 5;
    return Math.max(-35, Math.min(35, expBase + formBonus));
  }

  // WK-pedigree: hoe ver kwam een team in recente WK's?
  // Recenter = zwaarder gewogen. Tag-scores: group=0, r16=2, qf=5, sf=10, final=18, winner=25
  var PEDIGREE_TAG_SCORES = { group: 0, r16: 2, qf: 5, sf: 10, final: 18, winner: 25 };
  var PEDIGREE_RECENCY = { 2022: 1.0, 2018: 0.7, 2014: 0.4 };

  function wcPedigreeBonus(history) {
    if (!history || history.length === 0) return -10;
    var totalScore = 0;
    var counted = 0;
    for (var i = 0; i < history.length; i++) {
      var entry = history[i];
      var recency = PEDIGREE_RECENCY[entry.year] || 0.15;
      var tagScore = PEDIGREE_TAG_SCORES[entry.tag] || 0;
      totalScore += tagScore * recency;
      if (entry.year >= 2014) counted++;
    }
    if (counted === 0) return -5;
    return Math.max(-10, Math.min(35, totalScore));
  }

  // H2H bonus from groupOpponents data
  function h2hBonus(homeId, awayId, analysis) {
    var homeData = analysis[homeId] || {};
    var awayCode = getTeamCode(awayId);
    if (!homeData.groupOpponents || !awayCode) return 0;
    for (var i = 0; i < homeData.groupOpponents.length; i++) {
      var opp = homeData.groupOpponents[i];
      if (opp.code === awayCode && opp.h2h) {
        var wins = opp.h2h.wins || 0;
        var total = (opp.h2h.wins || 0) + (opp.h2h.draws || 0) + (opp.h2h.losses || 0);
        if (total === 0) return 0;
        var winRate = wins / total;
        return Math.round((winRate - 0.5) * 30); // max ±15
      }
    }
    return 0;
  }

  // Altitude xG bonus for teams acclimatized to altitude (Mexico hosts)
  var VENUE_ALTITUDE = {
    'azteca': 2240,
    'bbva': 540,
    'akron': 1560
  };

  function altitudeXGBonus(match) {
    var altitude = VENUE_ALTITUDE[match.venue] || 0;
    if (altitude < 500) return { home: 0, away: 0 };
    // Non-acclimatized teams lose ~0.1 xG per 1000m
    var penalty = altitude / 10000;
    var homeAcclimatized = isHost(match.home);
    var awayAcclimatized = isHost(match.away);
    return {
      home: homeAcclimatized ? penalty * 0.5 : -penalty,
      away: awayAcclimatized ? penalty * 0.5 : -penalty
    };
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

    // 1. Basis-sterkte via FIFA-ranking (exponentiële Elo-schaal)
    var homeRanking = FIFA_RANKINGS[homeId] || 50;
    var awayRanking = FIFA_RANKINGS[awayId] || 50;
    var homeElo = rankingToElo(homeRanking);
    var awayElo = rankingToElo(awayRanking);

    // 2. Ploegwaarde-correctie (logaritmisch, max ±50 Elo)
    homeElo += squadValueBonus(homeId);
    awayElo += squadValueBonus(awayId);

    // 3. WK-ervaring + recente vorm (max ±35 Elo)
    homeElo += wcRecentForm(homeAnalysis.overall);
    awayElo += wcRecentForm(awayAnalysis.overall);

    // 3b. WK-pedigree: hoe ver kwam team in recente WK's (max ±35 Elo)
    homeElo += wcPedigreeBonus(homeAnalysis.history);
    awayElo += wcPedigreeBonus(awayAnalysis.history);

    // 4. Confederatiesterkte (max ±18 Elo)
    homeElo += confederationBonus(homeId);
    awayElo += confederationBonus(awayId);

    // 5. Toernooi-voorspelling bonus (kleine boost, max ±25 Elo)
    var homePred = homeAnalysis.prediction || {};
    var awayPred = awayAnalysis.prediction || {};
    var homeChampPct = homePred.champion || 0.1;
    var awayChampPct = awayPred.champion || 0.1;
    homeElo += Math.min(25, Math.log(1 + homeChampPct) * 30);
    awayElo += Math.min(25, Math.log(1 + awayChampPct) * 30);

    // 6. H2H-bonus (max ±15 Elo)
    var homeH2H = h2hBonus(homeId, awayId, analysis);
    var awayH2H = h2hBonus(awayId, homeId, analysis);
    homeElo += homeH2H;
    awayElo += awayH2H;

    // 7. Gastlandvoordeel
    var homeIsHost = isHost(homeId);
    var awayIsHost = isHost(awayId);

    // 8. Verwachte doelpunten berekenen (Poisson λ)
    var TOTAL_GOALS = 2.72;

    // Elo-verschil naar verwachte score (logistische functie, c=800)
    // Neutralisatie: WK-underdogs spelen defensiever → kwaliteitsverschil afvlakken
    var eloDiff = (homeElo - awayElo) * 0.88;
    var homeExpected = 1.0 / (1.0 + Math.pow(10, -eloDiff / 800));
    homeExpected = Math.max(0.12, Math.min(0.88, homeExpected));

    // λ berekenen
    var homeXG = TOTAL_GOALS * homeExpected;
    var awayXG = TOTAL_GOALS * (1 - homeExpected);

    // Offensief/defensief profiel: aanvallende teams scoren meer, verdedigende minder
    function attackProfile(overall) {
      if (!overall || !overall.goalsFor || overall.matches === 0) return 1.0;
      var gfPerMatch = overall.goalsFor / overall.matches;
      var gaPerMatch = overall.goalsAgainst / overall.matches;
      var ratio = gfPerMatch / (gfPerMatch + gaPerMatch + 0.01);
      return 0.85 + 0.3 * ratio; // range ~0.85 (defensief) tot ~1.15 (aanvallend)
    }
    homeXG *= attackProfile(homeAnalysis.overall);
    awayXG *= attackProfile(awayAnalysis.overall);

    // Gastlandbonus: +0.35 goals
    if (homeIsHost) homeXG += 0.35;
    if (awayIsHost) awayXG += 0.35;

    // 9. Altitude xG-correctie
    var altBonus = altitudeXGBonus(match);
    homeXG += altBonus.home;
    awayXG += altBonus.away;

    // Minimum λ
    homeXG = Math.max(0.35, homeXG);
    awayXG = Math.max(0.35, awayXG);

    // Regressie naar gemiddelde: trek extreme xG richting toernooigemiddelde
    var MEAN_XG = TOTAL_GOALS / 2;
    var REGRESSION = 0.10;
    homeXG = homeXG * (1 - REGRESSION) + MEAN_XG * REGRESSION;
    awayXG = awayXG * (1 - REGRESSION) + MEAN_XG * REGRESSION;

    // 10. Poisson-verdeling met dynamische ρ
    function poissonProb(lambda, k) {
      var fact = 1;
      for (var i = 2; i <= k; i++) fact *= i;
      return Math.exp(-lambda) * Math.pow(lambda, k) / fact;
    }

    // Dynamic rho: stronger correction for low-scoring matches
    var avgLambda = (homeXG + awayXG) / 2;
    var RHO = -0.02 - 0.04 / (1 + avgLambda);

    function dixonColesAdj(homeG, awayG, homeL, awayL) {
      if (homeG === 0 && awayG === 0) return 1 - homeL * awayL * RHO;
      if (homeG === 1 && awayG === 0) return 1 + awayL * RHO;
      if (homeG === 0 && awayG === 1) return 1 + homeL * RHO;
      if (homeG === 1 && awayG === 1) return 1 - RHO;
      return 1;
    }

    // Score-matrix berekenen (0-5 × 0-5) met draw-inflatie op scoreniveau
    var maxGoals = 6;
    // Speeldag-dynamiek: MD1 iets minder draws (zenuwen/open spel), MD3 meer draws (tactisch)
    var matchdayFactor = 1.0;
    if (match.matchday === 1) matchdayFactor = 0.95;
    else if (match.matchday === 3) matchdayFactor = 1.08;
    var DRAW_INFLATION = 1.12 * matchdayFactor;
    var scoreProbs = [];
    var homeWinProb = 0, drawProb = 0, awayWinProb = 0;

    for (var h = 0; h < maxGoals; h++) {
      for (var a = 0; a < maxGoals; a++) {
        var prob = poissonProb(homeXG, h) * poissonProb(awayXG, a);
        prob *= dixonColesAdj(h, a, homeXG, awayXG);
        // Draw inflation: inflate individual draw scores so they're selected more often
        if (h === a) prob *= DRAW_INFLATION;
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

    // 12. Score selection via CDF met 93% cap (voorkomt extreme tail-events)
    scoreProbs.sort(function(a, b) { return b.prob - a.prob; });
    var CDF_CAP = 0.93;
    var capTotal = 0;
    var cappedCount = 0;
    for (var ci = 0; ci < scoreProbs.length; ci++) {
      capTotal += scoreProbs[ci].prob;
      cappedCount = ci + 1;
      if (capTotal >= CDF_CAP) break;
    }
    var seed = match.id * 13 + homeId * 7 + awayId * 3;
    var roll = seededRandom(seed) * capTotal; // scale roll to capped range
    var cumulative = 0;
    var selectedScore = scoreProbs[0];
    for (var si = 0; si < cappedCount; si++) {
      cumulative += scoreProbs[si].prob;
      if (roll < cumulative) {
        selectedScore = scoreProbs[si];
        break;
      }
    }
    var homeGoals = selectedScore.home;
    var awayGoals = selectedScore.away;

    // 13. Winkansen als percentages
    var homeWinPct = Math.round(homeWinProb * 100);
    var drawPct = Math.round(drawProb * 100);
    var awayWinPct = 100 - homeWinPct - drawPct;

    // 14. Confidence bepalen
    var maxProb = Math.max(homeWinProb, drawProb, awayWinProb);
    var confidence = maxProb > 0.55 ? 'hoog' : maxProb > 0.42 ? 'gemiddeld' : 'laag';

    // 15. Onderbouwing
    var reasoning = buildReasoning(homeId, awayId, homeRanking, awayRanking,
      homeIsHost, awayIsHost, homeXG, awayXG, analysis, homeH2H, awayH2H);

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

  function buildReasoning(homeId, awayId, homeRank, awayRank, homeHost, awayHost, homeXG, awayXG, analysis, homeH2H, awayH2H) {
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

    // Confederatie
    var homeConfed = confederationBonus(homeId);
    var awayConfed = confederationBonus(awayId);
    if (Math.abs(homeConfed - awayConfed) >= 10) {
      var strongerConfed = homeConfed > awayConfed ? homeName : awayName;
      parts.push(strongerConfed + ' profiteert van sterkere confederatie');
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

    // H2H bonus
    if (homeH2H !== 0 || awayH2H !== 0) {
      var homeAnalysisData = analysis[homeId] || {};
      if (homeAnalysisData.groupOpponents) {
        var awayCode = getTeamCode(awayId);
        for (var i = 0; i < homeAnalysisData.groupOpponents.length; i++) {
          var opp = homeAnalysisData.groupOpponents[i];
          if (opp.code === awayCode && opp.matches && opp.matches.length > 0) {
            parts.push('H2H: ' + opp.h2hSummary + ' (Elo-correctie: ' + (homeH2H > 0 ? '+' : '') + homeH2H + ')');
            break;
          }
        }
      }
    } else {
      // Fallback: toon H2H summary zonder bonus
      var homeAnalysisData2 = analysis[homeId] || {};
      if (homeAnalysisData2.groupOpponents) {
        var awayCode2 = getTeamCode(awayId);
        for (var j = 0; j < homeAnalysisData2.groupOpponents.length; j++) {
          var opp2 = homeAnalysisData2.groupOpponents[j];
          if (opp2.code === awayCode2 && opp2.matches && opp2.matches.length > 0) {
            parts.push('H2H: ' + opp2.h2hSummary);
            break;
          }
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
