// ============================================================
// WK 2026 Wedstrijdvoorspellingen – Algoritme
// ============================================================
// Gebruikt: FIFA-ranking, WK-historie, head-to-head, gastlandvoordeel
// Output:   voorspelde score + korte onderbouwing per wedstrijd

const predictionsEngine = (function () {

  // ── Hulpfuncties ──

  // Bereken teamsterkte op basis van FIFA-ranking (0-100 schaal)
  function rankingStrength(fifaRanking) {
    // Ranking 1 → 100, Ranking 200 → 5
    return Math.max(5, 100 - (fifaRanking - 1) * 0.5);
  }

  // Bereken WK-winrate
  function wcWinRate(overall) {
    if (!overall || overall.matches === 0) return 0.25; // debutant default
    return (overall.wins + overall.draws * 0.4) / overall.matches;
  }

  // Zoek FIFA-ranking van een team via groupOpponents data
  function findFifaRanking(teamId, opponentId, analysis) {
    var teamData = analysis[teamId];
    if (!teamData || !teamData.groupOpponents) return 50;
    for (var i = 0; i < teamData.groupOpponents.length; i++) {
      // We zoeken de ranking van het team zelf via hoe tegenstanders het team ranken
    }
    // Alternatief: zoek in de opponent's data naar dit team
    var oppData = analysis[opponentId];
    if (oppData && oppData.groupOpponents) {
      for (var j = 0; j < oppData.groupOpponents.length; j++) {
        if (oppData.groupOpponents[j].code === getTeamCode(teamId)) {
          return oppData.groupOpponents[j].fifaRanking;
        }
      }
    }
    return 50;
  }

  // Team code ophalen
  function getTeamCode(teamId) {
    if (typeof teamsData === 'undefined') return '';
    var team = teamsData.teams.find(function (t) { return t.id === teamId; });
    return team ? team.code : '';
  }

  // Bepaal of team gastland is
  function isHost(teamId) {
    if (typeof teamsData === 'undefined') return false;
    var team = teamsData.teams.find(function (t) { return t.id === teamId; });
    return team ? !!team.host : false;
  }

  // Haal team naam op
  function getTeamName(teamId) {
    if (typeof teamsData === 'undefined') return 'Team ' + teamId;
    var team = teamsData.teams.find(function (t) { return t.id === teamId; });
    return team ? team.name : 'Team ' + teamId;
  }

  // ── Hoofdalgoritme ──

  function predictMatch(match, analysis) {
    var homeId = match.home;
    var awayId = match.away;
    var homeAnalysis = analysis[homeId] || {};
    var awayAnalysis = analysis[awayId] || {};

    // FIFA Rankings ophalen (via elkaars groupOpponents)
    var homeRanking = findFifaRanking(homeId, awayId, analysis);
    var awayRanking = findFifaRanking(awayId, homeId, analysis);

    // Als we geen ranking vonden, probeer een fallback
    if (homeRanking === 50 && homeAnalysis.groupOpponents) {
      // Zoek in de groupOpponents van het away-team
      var homeCode = getTeamCode(homeId);
      for (var i = 0; i < (awayAnalysis.groupOpponents || []).length; i++) {
        if (awayAnalysis.groupOpponents[i].code === homeCode) {
          homeRanking = awayAnalysis.groupOpponents[i].fifaRanking;
          break;
        }
      }
    }
    if (awayRanking === 50 && awayAnalysis.groupOpponents) {
      var awayCode = getTeamCode(awayId);
      for (var j = 0; j < (homeAnalysis.groupOpponents || []).length; j++) {
        if (homeAnalysis.groupOpponents[j].code === awayCode) {
          awayRanking = homeAnalysis.groupOpponents[j].fifaRanking;
          break;
        }
      }
    }

    // Sterktes berekenen
    var homeStrength = rankingStrength(homeRanking);
    var awayStrength = rankingStrength(awayRanking);

    // WK-historie meenemen (0-1)
    var homeWcRate = wcWinRate(homeAnalysis.overall);
    var awayWcRate = wcWinRate(awayAnalysis.overall);

    // Gecombineerde sterkte (60% ranking, 25% WK-historie, 15% toernooikansen)
    var homePred = homeAnalysis.prediction || {};
    var awayPred = awayAnalysis.prediction || {};
    var homeGroupChance = (homePred.groupStage || 30) / 100;
    var awayGroupChance = (awayPred.groupStage || 30) / 100;

    var homeTotal = homeStrength * 0.6 + homeWcRate * 100 * 0.25 + homeGroupChance * 100 * 0.15;
    var awayTotal = awayStrength * 0.6 + awayWcRate * 100 * 0.25 + awayGroupChance * 100 * 0.15;

    // Gastlandbonus (+12% sterkte)
    var homeIsHost = isHost(homeId);
    var awayIsHost = isHost(awayId);
    if (homeIsHost) homeTotal *= 1.12;
    if (awayIsHost) awayTotal *= 1.12;

    // Sterkteratio
    var homeRatio = homeTotal / (homeTotal + awayTotal);
    var awayRatio = 1 - homeRatio;
    var strengthGap = Math.abs(homeRatio - 0.5); // 0 = gelijk, 0.3 = groot verschil

    // Verwachte doelpunten – variëren op basis van sterkteverschil
    // Grote mismatches → meer goals (favoriet scoort veel)
    // Gelijke teams → minder goals (verdedigend, voorzichtig)
    var baseGoals = 2.4;
    var totalGoals = baseGoals + strengthGap * 2.5;

    // xG per team
    var homeXG = totalGoals * homeRatio + 0.1;
    var awayXG = totalGoals * awayRatio;

    // Deterministische "jitter" op basis van match-id voor variatie
    var seed = match.id * 7 + homeId * 3 + awayId * 11;
    var jitter = ((seed % 17) - 8) / 40; // -0.2 tot +0.2

    homeXG += jitter;
    awayXG -= jitter * 0.5;

    // Score genereren
    var homeGoals = Math.max(0, Math.round(homeXG));
    var awayGoals = Math.max(0, Math.round(awayXG));

    // Speciale scorecorrecties voor realisme
    // Grote favoriet maar slechts 1-0? Soms 2-0 of 3-0
    if (strengthGap > 0.18 && homeRatio > 0.6 && homeGoals <= 1) {
      homeGoals = 2 + (match.id % 3 === 0 ? 1 : 0);
      awayGoals = Math.min(awayGoals, 1);
    }
    if (strengthGap > 0.18 && awayRatio > 0.6 && awayGoals <= 1) {
      awayGoals = 2 + (match.id % 3 === 0 ? 1 : 0);
      homeGoals = Math.min(homeGoals, 1);
    }

    // Gelijkopgaande teams: varieer tussen 0-0, 1-1, 1-0, 0-1, 2-1
    if (strengthGap < 0.06) {
      var pattern = match.id % 5;
      if (pattern === 0) { homeGoals = 1; awayGoals = 1; }
      else if (pattern === 1) { homeGoals = 0; awayGoals = 0; }
      else if (pattern === 2) { homeGoals = 1; awayGoals = 0; }
      else if (pattern === 3) { homeGoals = 2; awayGoals = 1; }
      else { homeGoals = 0; awayGoals = 1; }
    }

    // Winkans percentages
    var homeWinPct = Math.round(homeRatio * 82 + (homeIsHost ? 5 : 0));
    var drawPct = Math.round(24 - strengthGap * 40);
    if (drawPct < 12) drawPct = 12;
    if (drawPct > 28) drawPct = 28;
    var awayWinPct = 100 - homeWinPct - drawPct;
    if (awayWinPct < 5) { awayWinPct = 5; homeWinPct = 100 - drawPct - awayWinPct; }

    // Onderbouwing genereren
    var reasoning = buildReasoning(homeId, awayId, homeRanking, awayRanking,
      homeIsHost, awayIsHost, homeWcRate, awayWcRate, homeGoals, awayGoals, analysis);

    return {
      matchId: match.id,
      homeId: homeId,
      awayId: awayId,
      homeGoals: homeGoals,
      awayGoals: awayGoals,
      homeWinPct: homeWinPct,
      drawPct: drawPct,
      awayWinPct: awayWinPct,
      reasoning: reasoning,
      confidence: Math.abs(homeRatio - 0.5) > 0.15 ? 'hoog' : 'gemiddeld'
    };
  }

  function buildReasoning(homeId, awayId, homeRank, awayRank, homeHost, awayHost, homeWcRate, awayWcRate, hGoals, aGoals, analysis) {
    var homeName = getTeamName(homeId);
    var awayName = getTeamName(awayId);
    var parts = [];

    // Ranking verschil
    var rankDiff = awayRank - homeRank;
    if (Math.abs(rankDiff) > 30) {
      var fav = rankDiff > 0 ? homeName : awayName;
      parts.push(fav + ' staat ' + Math.abs(rankDiff) + ' plekken hoger op de FIFA-ranking');
    } else if (Math.abs(rankDiff) > 10) {
      var fav2 = rankDiff > 0 ? homeName : awayName;
      parts.push(fav2 + ' staat hoger op de FIFA-ranking (' + Math.abs(rankDiff) + ' plekken verschil)');
    } else {
      parts.push('Teams staan dicht bij elkaar op de FIFA-ranking');
    }

    // Gastland
    if (homeHost) parts.push(homeName + ' speelt als gastland voor eigen publiek');
    if (awayHost) parts.push(awayName + ' heeft als gastland thuisvoordeel');

    // WK-ervaring
    var homeOverall = (analysis[homeId] || {}).overall || {};
    var awayOverall = (analysis[awayId] || {}).overall || {};
    if (homeOverall.matches > 30 && awayOverall.matches < 10) {
      parts.push(homeName + ' heeft veel meer WK-ervaring (' + homeOverall.matches + ' wed.)');
    } else if (awayOverall.matches > 30 && homeOverall.matches < 10) {
      parts.push(awayName + ' heeft veel meer WK-ervaring (' + awayOverall.matches + ' wed.)');
    }

    // Head-to-head
    var homeAnalysis = analysis[homeId] || {};
    if (homeAnalysis.groupOpponents) {
      var awayCode = getTeamCode(awayId);
      for (var i = 0; i < homeAnalysis.groupOpponents.length; i++) {
        var opp = homeAnalysis.groupOpponents[i];
        if (opp.code === awayCode && opp.matches && opp.matches.length > 0) {
          parts.push('Eerder WK-duel: ' + opp.h2hSummary);
          break;
        }
      }
    }

    return parts.join('. ') + '.';
  }

  // ── Alle wedstrijden voorspellen ──

  function predictAllMatches() {
    if (typeof matchesData === 'undefined' || typeof teamAnalysisData === 'undefined') {
      console.warn('predictions: matchesData of teamAnalysisData niet geladen');
      return {};
    }

    var predictions = {};
    matchesData.matches.forEach(function (match) {
      predictions[match.id] = predictMatch(match, teamAnalysisData);
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
