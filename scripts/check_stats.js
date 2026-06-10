const fs = require('fs'), vm = require('vm');
const ctx = vm.createContext({console, Math, Object, Array, parseInt, parseFloat, undefined, JSON});
['teams.js','matches.js','team_analysis.js','predictions.js'].forEach(f =>
  vm.runInContext(fs.readFileSync(__dirname + '/../data/' + f, 'utf8'), ctx));

const code = `(function(){
  var p = predictionsEngine.predictAllMatches();
  var sc={}, cf={}, tg=0;
  Object.values(p).forEach(function(v){
    var s = v.homeGoals + "-" + v.awayGoals;
    sc[s] = (sc[s]||0) + 1;
    cf[v.confidence] = (cf[v.confidence]||0) + 1;
    tg += v.homeGoals + v.awayGoals;
  });
  return JSON.stringify({scores:sc, conf:cf, avgGoals: Math.round(tg/Object.keys(p).length*100)/100, total: Object.keys(p).length});
})()`;

const r = JSON.parse(vm.runInContext(code, ctx));
console.log('Totaal wedstrijden:', r.total);
console.log('Gem. goals/wedstrijd:', r.avgGoals);
console.log('');
console.log('Score verdeling:');
Object.entries(r.scores).sort((a,b) => b[1]-a[1]).forEach(e => console.log('  ' + e[0] + ': ' + e[1] + 'x'));
console.log('');
console.log('Confidence verdeling:');
Object.entries(r.conf).forEach(e => console.log('  ' + e[0] + ': ' + e[1] + 'x'));
