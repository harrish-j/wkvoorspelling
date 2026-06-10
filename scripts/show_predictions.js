// Helper: toon alle groepsfase-voorspellingen op volgorde
const fs = require('fs');
const vm = require('vm');

const ctx = vm.createContext({ console, Math, Object, Array, parseInt, parseFloat, undefined, JSON });
['teams.js', 'matches.js', 'team_analysis.js', 'predictions.js'].forEach(f => {
  vm.runInContext(fs.readFileSync(__dirname + '/../data/' + f, 'utf8'), ctx);
});

const code = `
(function() {
  var preds = predictionsEngine.predictAllMatches();
  var out = [];
  matchesData.matches
    .filter(function(m) { return m.stage === 'Groepsfase'; })
    .sort(function(a,b) { return a.id - b.id; })
    .forEach(function(m) {
      var p = preds[m.id];
      var home = teamsData.teams.find(function(t) { return t.id === m.home; });
      var away = teamsData.teams.find(function(t) { return t.id === m.away; });
      out.push({
        id: m.id, date: m.date, group: m.group,
        home: home.name, away: away.name,
        score: p.homeGoals + '-' + p.awayGoals,
        hw: p.homeWinPct, dw: p.drawPct, aw: p.awayWinPct,
        conf: p.confidence
      });
    });
  return JSON.stringify(out);
})()
`;

const matches = JSON.parse(vm.runInContext(code, ctx));
let curDate = '';
for (const m of matches) {
  if (m.date !== curDate) {
    curDate = m.date;
    console.log('');
    console.log('=== ' + m.date + ' ===');
  }
  const id = String(m.id).padStart(2);
  const home = m.home.padEnd(22);
  const away = m.away.padEnd(22);
  const hw = String(m.hw).padStart(2);
  const dw = String(m.dw).padStart(2);
  const aw = String(m.aw).padStart(2);
  console.log(`#${id} Gr.${m.group}  ${home} ${m.score}  ${away} W:${hw}% G:${dw}% V:${aw}% [${m.conf}]`);
}
