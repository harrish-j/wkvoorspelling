const teamInfoData = {
  // Background info and squads for all 48 teams
  // pos: DL=Doelman, VD=Verdediger, MV=Middenvelder, AA=Aanvaller

  1: {
    coach: "Javier Aguirre",
    fifaRanking: 15,
    wcAppearances: 17,
    bestResult: "Kwartfinale (1970, 1986)",
    titles: 0,
    description: "Mexico is gastland en doet voor de 17e keer mee aan het WK. Als drievoudig gastheer (1970, 1986, 2026) schrijft het land geschiedenis. Het Mexicaanse elftal staat bekend om zijn passie en thuispubliek.",
    squad: [
      { num: 1, name: "Guillermo Ochoa", pos: "DL", club: "CF América" },
      { num: 13, name: "Jorge Sánchez", pos: "VD", club: "Cruz Azul" },
      { num: 3, name: "César Montes", pos: "VD", club: "Monterrey" },
      { num: 4, name: "Edson Álvarez", pos: "MV", club: "West Ham United" },
      { num: 15, name: "Héctor Herrera", pos: "MV", club: "Houston Dynamo" },
      { num: 10, name: "Orbelin Pineda", pos: "MV", club: "AEK Athene" },
      { num: 7, name: "Luis Romo", pos: "MV", club: "Monterrey" },
      { num: 14, name: "Erick Sánchez", pos: "MV", club: "PSV" },
      { num: 9, name: "Santiago Giménez", pos: "AA", club: "Feyenoord" },
      { num: 11, name: "Hirving Lozano", pos: "AA", club: "PSV" },
      { num: 20, name: "Henry Martín", pos: "AA", club: "CF América" }
    ]
  },

  2: {
    coach: "Hugo Broos",
    fifaRanking: 58,
    wcAppearances: 4,
    bestResult: "Groepsfase (2002, 2010)",
    titles: 0,
    description: "Zuid-Afrika, gastheer van het WK 2010, keert terug op het wereldtoneel. De Bafana Bafana hopen met een mix van ervaring en jong talent voor verrassingen te zorgen."
  },

  3: {
    coach: "Hong Myung-bo",
    fifaRanking: 22,
    wcAppearances: 11,
    bestResult: "Halve finale (2002)",
    titles: 0,
    description: "Zuid-Korea behaalde een historische vierde plaats op het WK 2002 als gastland. Met spelers als Son Heung-min beschikt het team over wereldklasse."
  },

  4: {
    coach: "Miroslav Koubek",
    fifaRanking: 36,
    wcAppearances: 7,
    bestResult: "Runner-up (1934, 1962, als Tsjechoslowakije)",
    titles: 0,
    description: "Tsjechië keert terug op het WK na een afwezigheid. Het land heeft een rijke voetbaltraditie die teruggaat tot de Tsjechoslowaakse finalisten van 1934 en 1962."
  },

  5: {
    coach: "Jesse Marsch",
    fifaRanking: 42,
    wcAppearances: 3,
    bestResult: "Groepsfase (2022)",
    titles: 0,
    description: "Canada is mede-gastheer en doet voor de derde keer mee. Na het WK 2022 wil de Canadese ploeg met thuisvoordeel een stap verder zetten.",
    squad: [
      { num: 0, name: "Maxime Crépeau", pos: "DL", club: "Orlando City SC" },
      { num: 0, name: "Dayne St. Clair", pos: "DL", club: "Inter Miami CF" },
      { num: 0, name: "Owen Goodman", pos: "DL", club: "Barnsley" },
      { num: 0, name: "Richie Laryea", pos: "VD", club: "Toronto FC" },
      { num: 0, name: "Alphonso Davies", pos: "VD", club: "Bayern Munich" },
      { num: 0, name: "Alistair Johnston", pos: "VD", club: "Celtic" },
      { num: 0, name: "Derek Cornelius", pos: "VD", club: "Rangers" },
      { num: 0, name: "Moïse Bombito", pos: "VD", club: "Nice" },
      { num: 0, name: "Niko Sigur", pos: "VD", club: "Hajduk Split" },
      { num: 0, name: "Joel Waterman", pos: "VD", club: "Chicago Fire FC" },
      { num: 0, name: "Luc de Fougerolles", pos: "VD", club: "Dender" },
      { num: 0, name: "Zorhan Bassong", pos: "VD", club: "Sporting Kansas City" },
      { num: 0, name: "Jamie Knight-Lebel", pos: "VD", club: "Swindon Town" },
      { num: 0, name: "Ralph Priso", pos: "VD", club: "Vancouver Whitecaps FC" },
      { num: 0, name: "Alfie Jones", pos: "VD", club: "Middlesbrough" },
      { num: 0, name: "Jonathan Osorio", pos: "MV", club: "Toronto FC" },
      { num: 0, name: "Tajon Buchanan", pos: "MV", club: "Villarreal" },
      { num: 0, name: "Stephen Eustáquio", pos: "MV", club: "Los Angeles FC" },
      { num: 0, name: "Liam Millar", pos: "MV", club: "Hull City" },
      { num: 0, name: "Ismaël Koné", pos: "MV", club: "Sassuolo" },
      { num: 0, name: "Jacob Shaffelburg", pos: "MV", club: "Los Angeles FC" },
      { num: 0, name: "Ali Ahmed", pos: "MV", club: "Norwich City" },
      { num: 0, name: "Mathieu Choinière", pos: "MV", club: "Los Angeles FC" },
      { num: 0, name: "Nathan Saliba", pos: "MV", club: "Anderlecht" },
      { num: 0, name: "Jayden Nelson", pos: "MV", club: "Austin FC" },
      { num: 0, name: "Marcelo Flores", pos: "MV", club: "UANL" },
      { num: 0, name: "Cyle Larin", pos: "AA", club: "Southampton" },
      { num: 0, name: "Jonathan David", pos: "AA", club: "Juventus" },
      { num: 0, name: "Tani Oluwaseyi", pos: "AA", club: "Villarreal" },
      { num: 0, name: "Promise David", pos: "AA", club: "Union Saint-Gilloise" },
      { num: 0, name: "Jacen Russell-Rowe", pos: "AA", club: "Toulouse" },
      { num: 0, name: "Daniel Jebbison", pos: "AA", club: "Preston North End" }
    ]
  },

  6: {
    coach: "Sergej Barbarez",
    fifaRanking: 55,
    wcAppearances: 4,
    bestResult: "Groepsfase (2014)",
    titles: 0,
    description: "Bosnië-Herzegovina neemt voor de vierde keer deel aan het WK. Het land bracht talentvolle spelers voort zoals Džeko en Pjanić."
  },

  7: {
    coach: "Julen Lopetegui",
    fifaRanking: 38,
    wcAppearances: 4,
    bestResult: "Groepsfase (2022)",
    titles: 0,
    description: "Qatar was gastheer van het WK 2022 en kwalificeerde zich nu op sportief vlak. De Aziatische kampioen wil op het wereldtoneel bewijzen dat 2022 geen eenmalig succes was."
  },

  8: {
    coach: "Murat Yakin",
    fifaRanking: 16,
    wcAppearances: 13,
    bestResult: "Kwartfinale (1934, 1938, 1954)",
    titles: 0,
    description: "Zwitserland is een vaste waarde op het WK. De Nati bereikten de kwartfinale op het EK 2020 en willen die lijn doortrekken.",
    squad: [
      { num: 1, name: "Gregor Kobel", pos: "DL", club: "Borussia Dortmund" },
      { num: 2, name: "Miro Muheim", pos: "VD", club: "Hamburger SV" },
      { num: 3, name: "Silvan Widmer", pos: "VD", club: "Mainz 05" },
      { num: 4, name: "Nico Elvedi", pos: "VD", club: "Borussia Mönchengladbach" },
      { num: 5, name: "Manuel Akanji", pos: "VD", club: "Inter Milan" },
      { num: 6, name: "Denis Zakaria", pos: "MV", club: "Monaco" },
      { num: 7, name: "Breel Embolo", pos: "AA", club: "Rennes" },
      { num: 8, name: "Remo Freuler", pos: "MV", club: "Bologna" },
      { num: 9, name: "Johan Manzambi", pos: "MV", club: "SC Freiburg" },
      { num: 10, name: "Granit Xhaka", pos: "MV", club: "Sunderland" },
      { num: 11, name: "Dan Ndoye", pos: "AA", club: "Nottingham Forest" },
      { num: 12, name: "Yvon Mvogo", pos: "DL", club: "Lorient" },
      { num: 13, name: "Ricardo Rodriguez", pos: "VD", club: "Real Betis" },
      { num: 14, name: "Ardon Jashari", pos: "MV", club: "Milan" },
      { num: 15, name: "Djibril Sow", pos: "MV", club: "Sevilla" },
      { num: 16, name: "Christian Fassnacht", pos: "MV", club: "Young Boys" },
      { num: 17, name: "Rubén Vargas", pos: "AA", club: "Sevilla" },
      { num: 18, name: "Eray Cömert", pos: "VD", club: "Valencia" },
      { num: 19, name: "Noah Okafor", pos: "AA", club: "Leeds United" },
      { num: 20, name: "Michel Aebischer", pos: "MV", club: "Pisa" },
      { num: 21, name: "Marvin Keller", pos: "DL", club: "Young Boys" },
      { num: 22, name: "Fabian Rieder", pos: "MV", club: "FC Augsburg" },
      { num: 23, name: "Zeki Amdouni", pos: "AA", club: "Burnley" },
      { num: 24, name: "Aurèle Amenda", pos: "VD", club: "Eintracht Frankfurt" },
      { num: 25, name: "Luca Jaquez", pos: "VD", club: "VfB Stuttgart" },
      { num: 26, name: "Cedric Itten", pos: "AA", club: "Fortuna Düsseldorf" }
    ]
  },

  9: {
    coach: "Carlo Ancelotti",
    fifaRanking: 5,
    wcAppearances: 23,
    bestResult: "Winnaar (1958, 1962, 1970, 1994, 2002)",
    titles: 5,
    description: "Brazilië is recordhouder met vijf wereldtitels. De Seleção jagen op hun eerste titel sinds 2002, met een nieuwe generatie die de glorie van weleer wil herstellen.",
    squad: [
      { num: 0, name: "Alisson", pos: "DL", club: "Liverpool" },
      { num: 0, name: "Ederson", pos: "DL", club: "Fenerbahçe" },
      { num: 0, name: "Weverton", pos: "DL", club: "Grêmio" },
      { num: 0, name: "Marquinhos", pos: "VD", club: "Paris Saint-Germain" },
      { num: 0, name: "Danilo Luiz", pos: "VD", club: "Flamengo" },
      { num: 0, name: "Alex Sandro", pos: "VD", club: "Flamengo" },
      { num: 0, name: "Gabriel Magalhães", pos: "VD", club: "Arsenal" },
      { num: 0, name: "Bremer", pos: "VD", club: "Juventus" },
      { num: 0, name: "Wesley", pos: "VD", club: "Roma" },
      { num: 0, name: "Roger Ibañez", pos: "VD", club: "Al-Ahli" },
      { num: 0, name: "Douglas Santos", pos: "VD", club: "Zenit Saint Petersburg" },
      { num: 0, name: "Léo Pereira", pos: "VD", club: "Flamengo" },
      { num: 0, name: "Casemiro", pos: "MV", club: "Manchester United" },
      { num: 0, name: "Lucas Paquetá", pos: "MV", club: "Flamengo" },
      { num: 0, name: "Bruno Guimarães", pos: "MV", club: "Newcastle United" },
      { num: 0, name: "Fabinho", pos: "MV", club: "Al-Ittihad" },
      { num: 0, name: "Danilo Santos", pos: "MV", club: "Botafogo" },
      { num: 0, name: "Neymar", pos: "AA", club: "Santos" },
      { num: 0, name: "Vinícius Júnior", pos: "AA", club: "Real Madrid" },
      { num: 0, name: "Raphinha", pos: "AA", club: "Barcelona" },
      { num: 0, name: "Gabriel Martinelli", pos: "AA", club: "Arsenal" },
      { num: 0, name: "Matheus Cunha", pos: "AA", club: "Manchester United" },
      { num: 0, name: "Endrick", pos: "AA", club: "Lyon" },
      { num: 0, name: "Luiz Henrique", pos: "AA", club: "Zenit Saint Petersburg" },
      { num: 0, name: "Igor Thiago", pos: "AA", club: "Brentford" },
      { num: 0, name: "Rayan", pos: "AA", club: "Bournemouth" }
    ]
  },

  10: {
    coach: "Mohamed Ouahbi",
    fifaRanking: 13,
    wcAppearances: 7,
    bestResult: "Halve finale (2022)",
    titles: 0,
    description: "Marokko schreef geschiedenis op het WK 2022 als eerste Afrikaans land in de halve finale. De Atlas Leeuwen zijn een van de sterkste Afrikaanse teams ooit."
  },

  11: {
    coach: "Sébastien Migné",
    fifaRanking: 88,
    wcAppearances: 2,
    bestResult: "Groepsfase (1974)",
    titles: 0,
    description: "Haïti keert na meer dan 50 jaar terug op het WK. Het eiland leeft voor voetbal en droomt ervan om geschiedenis te schrijven."
  },

  12: {
    coach: "Steve Clarke",
    fifaRanking: 45,
    wcAppearances: 9,
    bestResult: "Groepsfase (1998)",
    titles: 0,
    description: "Schotland keert terug op het WK na een lange afwezigheid. De Tartan Army reist altijd in grote aantallen mee en staat bekend als een van de meest loyale supportersgroepen."
  },

  13: {
    coach: "Mauricio Pochettino",
    fifaRanking: 11,
    wcAppearances: 12,
    bestResult: "Halve finale (1930)",
    titles: 0,
    description: "De Verenigde Staten zijn mede-gastheer en willen profiteren van het thuisvoordeel. Met een gouden generatie spelers die in Europa speelt, zijn de verwachtingen hoog.",
    squad: [
      { num: 1, name: "Matt Turner", pos: "DL", club: "New England Revolution" },
      { num: 2, name: "Sergiño Dest", pos: "VD", club: "PSV Eindhoven" },
      { num: 3, name: "Chris Richards", pos: "VD", club: "Crystal Palace" },
      { num: 4, name: "Tyler Adams", pos: "MV", club: "Bournemouth" },
      { num: 5, name: "Antonee Robinson", pos: "VD", club: "Fulham" },
      { num: 6, name: "Auston Trusty", pos: "VD", club: "Celtic" },
      { num: 7, name: "Giovanni Reyna", pos: "MV", club: "Borussia Mönchengladbach" },
      { num: 8, name: "Weston McKennie", pos: "MV", club: "Juventus" },
      { num: 9, name: "Ricardo Pepi", pos: "AA", club: "PSV Eindhoven" },
      { num: 10, name: "Christian Pulisic", pos: "AA", club: "Milan" },
      { num: 11, name: "Brenden Aaronson", pos: "AA", club: "Leeds United" },
      { num: 12, name: "Miles Robinson", pos: "VD", club: "FC Cincinnati" },
      { num: 13, name: "Tim Ream", pos: "VD", club: "Charlotte FC" },
      { num: 14, name: "Sebastian Berhalter", pos: "MV", club: "Vancouver Whitecaps FC" },
      { num: 15, name: "Cristian Roldan", pos: "MV", club: "Seattle Sounders FC" },
      { num: 16, name: "Alex Freeman", pos: "VD", club: "Villarreal" },
      { num: 17, name: "Malik Tillman", pos: "MV", club: "Bayer Leverkusen" },
      { num: 18, name: "Maximilian Arfsten", pos: "VD", club: "Columbus Crew" },
      { num: 19, name: "Haji Wright", pos: "AA", club: "Coventry City" },
      { num: 20, name: "Folarin Balogun", pos: "AA", club: "Monaco" },
      { num: 21, name: "Timothy Weah", pos: "AA", club: "Marseille" },
      { num: 22, name: "Mark McKenzie", pos: "VD", club: "Toulouse" },
      { num: 23, name: "Joe Scally", pos: "VD", club: "Borussia Mönchengladbach" },
      { num: 24, name: "Matt Freese", pos: "DL", club: "New York City FC" },
      { num: 25, name: "Chris Brady", pos: "DL", club: "Chicago Fire FC" },
      { num: 26, name: "Alejandro Zendejas", pos: "AA", club: "América" }
    ]
  },

  14: {
    coach: "Gustavo Alfaro",
    fifaRanking: 52,
    wcAppearances: 9,
    bestResult: "Runner-up (2010)",
    titles: 0,
    description: "Paraguay bereikte de kwartfinale in 2010. Het land is een taaie tegenstander in het Zuid-Amerikaanse voetbal en staat bekend om zijn verdedigende kracht."
  },

  15: {
    coach: "Tony Popovic",
    fifaRanking: 24,
    wcAppearances: 7,
    bestResult: "Achtste finale (2006, 2022)",
    titles: 0,
    description: "De Socceroos zijn een vaste waarde op het WK en de sterkste ploeg van Oceanië/Azië. Australië bracht het tot de achtste finale in 2006 en 2022."
  },

  16: {
    coach: "Vincenzo Montella",
    fifaRanking: 25,
    wcAppearances: 3,
    bestResult: "Halve finale (2002)",
    titles: 0,
    description: "Turkije bereikte verrassend de halve finale op het WK 2002 en werd derde. De Turkse competitie is sterk en het land hoopt op een herhaling van dat succes."
  },

  17: {
    coach: "Julian Nagelsmann",
    fifaRanking: 3,
    wcAppearances: 20,
    bestResult: "Winnaar (1954, 1974, 1990, 2014)",
    titles: 4,
    description: "Duitsland is viervoudig wereldkampioen en altijd een topfavoriet. Na een teleurstellend WK 2022 wil Die Mannschaft onder Nagelsmann terugkeren naar de top.",
    squad: [
      { num: 1, name: "Manuel Neuer", pos: "DL", club: "Bayern Munich" },
      { num: 2, name: "Antonio Rüdiger", pos: "VD", club: "Real Madrid" },
      { num: 3, name: "Waldemar Anton", pos: "VD", club: "Borussia Dortmund" },
      { num: 4, name: "Jonathan Tah", pos: "VD", club: "Bayern Munich" },
      { num: 5, name: "Aleksandar Pavlović", pos: "MV", club: "Bayern Munich" },
      { num: 6, name: "Joshua Kimmich", pos: "MV", club: "Bayern Munich" },
      { num: 7, name: "Kai Havertz", pos: "AA", club: "Arsenal" },
      { num: 8, name: "Leon Goretzka", pos: "MV", club: "Bayern Munich" },
      { num: 9, name: "Jamie Leweling", pos: "MV", club: "VfB Stuttgart" },
      { num: 10, name: "Jamal Musiala", pos: "MV", club: "Bayern Munich" },
      { num: 11, name: "Nick Woltemade", pos: "AA", club: "Newcastle United" },
      { num: 12, name: "Oliver Baumann", pos: "DL", club: "TSG Hoffenheim" },
      { num: 13, name: "Pascal Groß", pos: "VD", club: "Brighton & Hove Albion" },
      { num: 14, name: "Maximilian Beier", pos: "AA", club: "Borussia Dortmund" },
      { num: 15, name: "Nico Schlotterbeck", pos: "VD", club: "Borussia Dortmund" },
      { num: 16, name: "Angelo Stiller", pos: "MV", club: "VfB Stuttgart" },
      { num: 17, name: "Florian Wirtz", pos: "MV", club: "Liverpool" },
      { num: 18, name: "Nathaniel Brown", pos: "VD", club: "Eintracht Frankfurt" },
      { num: 19, name: "Leroy Sané", pos: "MV", club: "Galatasaray" },
      { num: 20, name: "Nadiem Amiri", pos: "MV", club: "Mainz 05" },
      { num: 21, name: "Alexander Nübel", pos: "DL", club: "VfB Stuttgart" },
      { num: 22, name: "David Raum", pos: "VD", club: "RB Leipzig" },
      { num: 23, name: "Felix Nmecha", pos: "MV", club: "Borussia Dortmund" },
      { num: 24, name: "Malick Thiaw", pos: "VD", club: "Newcastle United" },
      { num: 25, name: "Lennart Karl", pos: "MV", club: "Bayern Munich" },
      { num: 26, name: "Deniz Undav", pos: "AA", club: "VfB Stuttgart" }
    ]
  },

  18: {
    coach: "Dick Advocaat",
    fifaRanking: 110,
    wcAppearances: 1,
    bestResult: "Debuut (2026)",
    titles: 0,
    description: "Curaçao maakt zijn WK-debuut! Het kleine Caribische eiland, onderdeel van het Koninkrijk der Nederlanden, schrijft sportgeschiedenis. Veel spelers hebben ook een Nederlands paspoort."
  },

  19: {
    coach: "Emerse Faé",
    fifaRanking: 39,
    wcAppearances: 4,
    bestResult: "Groepsfase (2006, 2010, 2014)",
    titles: 0,
    description: "Ivoorkust won de Afrika Cup 2024 op eigen bodem en brengt dat momentum mee naar het WK. De Olifanten beschikken over een sterke mix van ervaring en talent."
  },

  20: {
    coach: "Sebastián Beccacece",
    fifaRanking: 28,
    wcAppearances: 5,
    bestResult: "Groepsfase (2006, 2014)",
    titles: 0,
    description: "Ecuador heeft zich de afgelopen jaren gevestigd als vaste WK-deelnemer. Het land staat bekend om zijn snelle, atletische speelstijl en talentontwikkeling."
  },

  21: {
    coach: "Ronald Koeman",
    fifaRanking: 7,
    wcAppearances: 11,
    bestResult: "Runner-up (1974, 1978, 2010)",
    titles: 0,
    description: "Het Nederlands elftal, driemaal WK-finalist, jaagt nog altijd op die eerste wereldtitel. Oranje staat bekend om het totaalvoetbal en heeft onder Koeman een nieuwe generatie sterren.",
    squad: [
      { num: 0, name: "Bart Verbruggen", pos: "DL", club: "Brighton & Hove Albion" },
      { num: 0, name: "Mark Flekken", pos: "DL", club: "Bayer Leverkusen" },
      { num: 0, name: "Robin Roefs", pos: "DL", club: "Sunderland" },
      { num: 0, name: "Virgil van Dijk", pos: "VD", club: "Liverpool" },
      { num: 0, name: "Denzel Dumfries", pos: "VD", club: "Inter Milan" },
      { num: 0, name: "Nathan Aké", pos: "VD", club: "Manchester City" },
      { num: 0, name: "Jurriën Timber", pos: "VD", club: "Arsenal" },
      { num: 0, name: "Micky van de Ven", pos: "VD", club: "Tottenham Hotspur" },
      { num: 0, name: "Mats Wieffer", pos: "VD", club: "Brighton & Hove Albion" },
      { num: 0, name: "Jan Paul van Hecke", pos: "VD", club: "Brighton & Hove Albion" },
      { num: 0, name: "Jorrel Hato", pos: "VD", club: "Chelsea" },
      { num: 0, name: "Frenkie de Jong", pos: "MV", club: "Barcelona" },
      { num: 0, name: "Marten de Roon", pos: "MV", club: "Atalanta" },
      { num: 0, name: "Tijjani Reijnders", pos: "MV", club: "Manchester City" },
      { num: 0, name: "Teun Koopmeiners", pos: "MV", club: "Juventus" },
      { num: 0, name: "Ryan Gravenberch", pos: "MV", club: "Liverpool" },
      { num: 0, name: "Justin Kluivert", pos: "MV", club: "Bournemouth" },
      { num: 0, name: "Quinten Timber", pos: "MV", club: "Marseille" },
      { num: 0, name: "Guus Til", pos: "MV", club: "PSV Eindhoven" },
      { num: 0, name: "Memphis Depay", pos: "AA", club: "Corinthians" },
      { num: 0, name: "Wout Weghorst", pos: "AA", club: "Ajax" },
      { num: 0, name: "Donyell Malen", pos: "AA", club: "Roma" },
      { num: 0, name: "Cody Gakpo", pos: "AA", club: "Liverpool" },
      { num: 0, name: "Noa Lang", pos: "AA", club: "Galatasaray" },
      { num: 0, name: "Brian Brobbey", pos: "AA", club: "Sunderland" },
      { num: 0, name: "Crysencio Summerville", pos: "AA", club: "West Ham United" }
    ]
  },

  22: {
    coach: "Hajime Moriyasu",
    fifaRanking: 14,
    wcAppearances: 8,
    bestResult: "Achtste finale (2002, 2018, 2022)",
    titles: 0,
    description: "Japan is een van de sterkst groeiende voetballanden ter wereld. De Samurai Blue versloegen Duitsland en Spanje op het WK 2022 en zijn nu een serieuze outsider.",
    squad: [
      { num: 1, name: "Zion Suzuki", pos: "DL", club: "Parma" },
      { num: 2, name: "Yukinari Sugawara", pos: "VD", club: "Werder Bremen" },
      { num: 3, name: "Shōgo Taniguchi", pos: "VD", club: "Sint-Truiden" },
      { num: 4, name: "Kō Itakura", pos: "VD", club: "Ajax" },
      { num: 5, name: "Yūto Nagatomo", pos: "VD", club: "FC Tokyo" },
      { num: 6, name: "Wataru Endo", pos: "MV", club: "Liverpool" },
      { num: 7, name: "Ao Tanaka", pos: "MV", club: "Leeds United" },
      { num: 8, name: "Takefusa Kubo", pos: "MV", club: "Real Sociedad" },
      { num: 9, name: "Keisuke Gotō", pos: "AA", club: "Sint-Truiden" },
      { num: 10, name: "Ritsu Dōan", pos: "MV", club: "Eintracht Frankfurt" },
      { num: 11, name: "Daizen Maeda", pos: "AA", club: "Celtic" },
      { num: 12, name: "Keisuke Ōsako", pos: "DL", club: "Sanfrecce Hiroshima" },
      { num: 13, name: "Keito Nakamura", pos: "MV", club: "Reims" },
      { num: 14, name: "Junya Itō", pos: "MV", club: "Genk" },
      { num: 15, name: "Daichi Kamada", pos: "MV", club: "Crystal Palace" },
      { num: 16, name: "Tsuyoshi Watanabe", pos: "VD", club: "Feyenoord" },
      { num: 17, name: "Yuito Suzuki", pos: "AA", club: "SC Freiburg" },
      { num: 18, name: "Ayase Ueda", pos: "AA", club: "Feyenoord" },
      { num: 19, name: "Kōki Ogawa", pos: "AA", club: "NEC" },
      { num: 20, name: "Ayumu Seko", pos: "VD", club: "Le Havre" },
      { num: 21, name: "Hiroki Itō", pos: "VD", club: "Bayern Munich" },
      { num: 22, name: "Takehiro Tomiyasu", pos: "VD", club: "Ajax" },
      { num: 23, name: "Tomoki Hayakawa", pos: "DL", club: "Kashima Antlers" },
      { num: 24, name: "Kaishū Sano", pos: "MV", club: "Mainz 05" },
      { num: 25, name: "Junnosuke Suzuki", pos: "VD", club: "Copenhagen" },
      { num: 26, name: "Kento Shiogai", pos: "AA", club: "VfL Wolfsburg" }
    ]
  },

  23: {
    coach: "Graham Potter",
    fifaRanking: 18,
    wcAppearances: 13,
    bestResult: "Runner-up (1958)",
    titles: 0,
    description: "Zweden is terug op het WK. Met een rijke voetbalhistorie en spelers in topcompetities hoopt het Scandinavische land op een goed toernooi."
  },

  24: {
    coach: "Sabri Lamouchi",
    fifaRanking: 40,
    wcAppearances: 7,
    bestResult: "Groepsfase (1998, 2006, 2018)",
    titles: 0,
    description: "Tunesië is een vaste waarde op het WK vanuit Afrika. De Adelaars van Carthago staan bekend om hun gedisciplineerde speelstijl."
  },

  25: {
    coach: "Rudi Garcia",
    fifaRanking: 6,
    wcAppearances: 15,
    bestResult: "Halve finale (2018)",
    titles: 0,
    description: "België's gouden generatie (De Bruyne, Courtois, Lukaku) nadert mogelijk zijn laatste WK. De Rode Duivels werden derde in 2018 en willen nog één keer schitteren.",
    squad: [
      { num: 0, name: "Thibaut Courtois", pos: "DL", club: "Real Madrid" },
      { num: 0, name: "Senne Lammens", pos: "DL", club: "Manchester United" },
      { num: 0, name: "Mike Penders", pos: "DL", club: "Strasbourg" },
      { num: 0, name: "Thomas Meunier", pos: "VD", club: "Lille" },
      { num: 0, name: "Timothy Castagne", pos: "VD", club: "Fulham" },
      { num: 0, name: "Arthur Theate", pos: "VD", club: "Eintracht Frankfurt" },
      { num: 0, name: "Zeno Debast", pos: "VD", club: "Sporting CP" },
      { num: 0, name: "Maxim De Cuyper", pos: "VD", club: "Brighton & Hove Albion" },
      { num: 0, name: "Brandon Mechele", pos: "VD", club: "Club Brugge" },
      { num: 0, name: "Koni De Winter", pos: "VD", club: "Milan" },
      { num: 0, name: "Joaquin Seys", pos: "VD", club: "Club Brugge" },
      { num: 0, name: "Nathan Ngoy", pos: "VD", club: "Lille" },
      { num: 0, name: "Axel Witsel", pos: "MV", club: "Girona" },
      { num: 0, name: "Kevin De Bruyne", pos: "MV", club: "Napoli" },
      { num: 0, name: "Youri Tielemans", pos: "MV", club: "Aston Villa" },
      { num: 0, name: "Hans Vanaken", pos: "MV", club: "Club Brugge" },
      { num: 0, name: "Amadou Onana", pos: "MV", club: "Aston Villa" },
      { num: 0, name: "Nicolas Raskin", pos: "MV", club: "Rangers" },
      { num: 0, name: "Romelu Lukaku", pos: "AA", club: "Napoli" },
      { num: 0, name: "Leandro Trossard", pos: "AA", club: "Arsenal" },
      { num: 0, name: "Jérémy Doku", pos: "AA", club: "Manchester City" },
      { num: 0, name: "Dodi Lukébakio", pos: "AA", club: "Benfica" },
      { num: 0, name: "Charles De Ketelaere", pos: "AA", club: "Atalanta" },
      { num: 0, name: "Alexis Saelemaekers", pos: "AA", club: "Milan" },
      { num: 0, name: "Diego Moreira", pos: "AA", club: "Strasbourg" },
      { num: 0, name: "Matias Fernandez-Pardo", pos: "AA", club: "Lille" }
    ]
  },

  26: {
    coach: "Hossam Hassan",
    fifaRanking: 33,
    wcAppearances: 4,
    bestResult: "Groepsfase (1990, 2018)",
    titles: 0,
    description: "Egypte keert terug op het WK met Mohamed Salah als sterspeler. De Farao's zijn zevenvoudig Afrika Cup-winnaar en een grootmacht op het continent."
  },

  27: {
    coach: "Amir Ghalenoei",
    fifaRanking: 20,
    wcAppearances: 7,
    bestResult: "Groepsfase (2018, 2022)",
    titles: 0,
    description: "Iran is de sterkste ploeg van West-Azië en een vaste WK-deelnemer. Team Melli staat bekend om zijn verdedigende organisatie en vechtlust."
  },

  28: {
    coach: "Darren Bazeley",
    fifaRanking: 105,
    wcAppearances: 3,
    bestResult: "Groepsfase (2010)",
    titles: 0,
    description: "Nieuw-Zeeland is de enige OFC-vertegenwoordiger op dit WK. De All Whites willen bewijzen dat ook Oceanisch voetbal kan verrassen op het wereldtoneel."
  },

  29: {
    coach: "Luis de la Fuente",
    fifaRanking: 1,
    wcAppearances: 17,
    bestResult: "Winnaar (2010)",
    titles: 1,
    description: "Spanje is de regerend Europees kampioen (2024) en won het WK 2010. La Roja speelt betoverend tikitaka-voetbal met een extreem talentvolle jonge generatie.",
    squad: [
      { num: 0, name: "Unai Simón", pos: "DL", club: "Athletic Bilbao" },
      { num: 0, name: "David Raya", pos: "DL", club: "Arsenal" },
      { num: 0, name: "Joan Garcia", pos: "DL", club: "Barcelona" },
      { num: 0, name: "Aymeric Laporte", pos: "VD", club: "Athletic Bilbao" },
      { num: 0, name: "Marc Cucurella", pos: "VD", club: "Chelsea" },
      { num: 0, name: "Marcos Llorente", pos: "VD", club: "Atlético Madrid" },
      { num: 0, name: "Eric García", pos: "VD", club: "Barcelona" },
      { num: 0, name: "Pedro Porro", pos: "VD", club: "Tottenham Hotspur" },
      { num: 0, name: "Álex Grimaldo", pos: "VD", club: "Bayer Leverkusen" },
      { num: 0, name: "Pau Cubarsí", pos: "VD", club: "Barcelona" },
      { num: 0, name: "Marc Pubill", pos: "VD", club: "Atlético Madrid" },
      { num: 0, name: "Rodri", pos: "MV", club: "Manchester City" },
      { num: 0, name: "Mikel Merino", pos: "MV", club: "Arsenal" },
      { num: 0, name: "Fabián Ruiz", pos: "MV", club: "Paris Saint-Germain" },
      { num: 0, name: "Pedri", pos: "MV", club: "Barcelona" },
      { num: 0, name: "Gavi", pos: "MV", club: "Barcelona" },
      { num: 0, name: "Martín Zubimendi", pos: "MV", club: "Arsenal" },
      { num: 0, name: "Álex Baena", pos: "MV", club: "Atlético Madrid" },
      { num: 0, name: "Ferran Torres", pos: "AA", club: "Barcelona" },
      { num: 0, name: "Mikel Oyarzabal", pos: "AA", club: "Real Sociedad" },
      { num: 0, name: "Dani Olmo", pos: "AA", club: "Barcelona" },
      { num: 0, name: "Nico Williams", pos: "AA", club: "Athletic Bilbao" },
      { num: 0, name: "Lamine Yamal", pos: "AA", club: "Barcelona" },
      { num: 0, name: "Yéremy Pino", pos: "AA", club: "Crystal Palace" },
      { num: 0, name: "Borja Iglesias", pos: "AA", club: "Celta Vigo" },
      { num: 0, name: "Víctor Muñoz", pos: "AA", club: "Osasuna" }
    ]
  },

  30: {
    coach: "Bubista",
    fifaRanking: 72,
    wcAppearances: 1,
    bestResult: "Debuut (2026)",
    titles: 0,
    description: "Kaapverdië maakt zijn WK-debuut! De eilandengroep voor de westkust van Afrika heeft een indrukwekkende kwalificatie achter de rug en schrijft sporthistorie."
  },

  31: {
    coach: "Georgios Donis",
    fifaRanking: 56,
    wcAppearances: 7,
    bestResult: "Achtste finale (1994)",
    titles: 0,
    description: "Saoedi-Arabië versloeg Argentinië op het WK 2022 in een van de grootste verrassingen ooit. De Groene Valken willen opnieuw voor sensatie zorgen."
  },

  32: {
    coach: "Marcelo Bielsa",
    fifaRanking: 10,
    wcAppearances: 14,
    bestResult: "Winnaar (1930, 1950)",
    titles: 2,
    description: "Uruguay is tweevoudig wereldkampioen en won het allereerste WK in 1930. La Celeste beschikt met spelers als Valverde en Núñez over een sterke nieuwe generatie."
  },

  33: {
    coach: "Didier Deschamps",
    fifaRanking: 2,
    wcAppearances: 17,
    bestResult: "Winnaar (1998, 2018)",
    titles: 2,
    description: "Frankrijk is tweevoudig wereldkampioen en de runner-up van 2022. Les Bleus beschikken over de diepste selectie ter wereld met Mbappé als absolute ster.",
    squad: [
      { num: 1, name: "Brice Samba", pos: "DL", club: "Rennes" },
      { num: 2, name: "Malo Gusto", pos: "VD", club: "Chelsea" },
      { num: 3, name: "Lucas Digne", pos: "VD", club: "Aston Villa" },
      { num: 4, name: "Dayot Upamecano", pos: "VD", club: "Bayern Munich" },
      { num: 5, name: "Jules Koundé", pos: "VD", club: "Barcelona" },
      { num: 6, name: "Manu Koné", pos: "MV", club: "Roma" },
      { num: 7, name: "Ousmane Dembélé", pos: "AA", club: "Paris Saint-Germain" },
      { num: 8, name: "Aurélien Tchouaméni", pos: "MV", club: "Real Madrid" },
      { num: 9, name: "Marcus Thuram", pos: "AA", club: "Inter Milan" },
      { num: 10, name: "Kylian Mbappé", pos: "AA", club: "Real Madrid" },
      { num: 11, name: "Michael Olise", pos: "AA", club: "Bayern Munich" },
      { num: 12, name: "Bradley Barcola", pos: "AA", club: "Paris Saint-Germain" },
      { num: 13, name: "N\'Golo Kanté", pos: "MV", club: "Fenerbahçe" },
      { num: 14, name: "Adrien Rabiot", pos: "MV", club: "Milan" },
      { num: 15, name: "Ibrahima Konaté", pos: "VD", club: "Liverpool" },
      { num: 16, name: "Mike Maignan", pos: "DL", club: "Milan" },
      { num: 17, name: "William Saliba", pos: "VD", club: "Arsenal" },
      { num: 18, name: "Warren Zaïre-Emery", pos: "MV", club: "Paris Saint-Germain" },
      { num: 19, name: "Théo Hernandez", pos: "VD", club: "Al-Hilal" },
      { num: 20, name: "Désiré Doué", pos: "AA", club: "Paris Saint-Germain" },
      { num: 21, name: "Lucas Hernandez", pos: "VD", club: "Paris Saint-Germain" },
      { num: 22, name: "Jean-Philippe Mateta", pos: "AA", club: "Crystal Palace" },
      { num: 23, name: "Robin Risser", pos: "DL", club: "Lens" },
      { num: 24, name: "Rayan Cherki", pos: "AA", club: "Manchester City" },
      { num: 25, name: "Maghnes Akliouche", pos: "AA", club: "Monaco" },
      { num: 26, name: "Maxence Lacroix", pos: "VD", club: "Crystal Palace" }
    ]
  },

  34: {
    coach: "Pape Thiaw",
    fifaRanking: 17,
    wcAppearances: 4,
    bestResult: "Kwartfinale (2002)",
    titles: 0,
    description: "Senegal is Afrika Cup-winnaar (2022) en bereikte de kwartfinale op het WK 2002. De Leeuwen van Teranga zijn een van de sterkste Afrikaanse teams."
  },

  35: {
    coach: "Graham Arnold",
    fifaRanking: 63,
    wcAppearances: 2,
    bestResult: "Groepsfase (1986)",
    titles: 0,
    description: "Irak keert na 40 jaar terug op het WK. Het land won de Aziatische beker in 2007 en het voetbal leeft enorm in de regio."
  },

  36: {
    coach: "Ståle Solbakken",
    fifaRanking: 30,
    wcAppearances: 4,
    bestResult: "Groepsfase (1998)",
    titles: 0,
    description: "Noorwegen is terug op het WK voor het eerst sinds 1998. Met Martin Ødegaard en Erling Haaland beschikt het team over twee van de beste spelers ter wereld.",
    squad: [
      { num: 1, name: "Ørjan Nyland", pos: "DL", club: "Sevilla" },
      { num: 2, name: "Morten Thorsby", pos: "MV", club: "Cremonese" },
      { num: 3, name: "Kristoffer Ajer", pos: "VD", club: "Brentford" },
      { num: 4, name: "Leo Østigård", pos: "VD", club: "Genoa" },
      { num: 5, name: "David Møller Wolfe", pos: "VD", club: "Wolverhampton Wanderers" },
      { num: 6, name: "Patrick Berg", pos: "MV", club: "Bodø/Glimt" },
      { num: 7, name: "Alexander Sørloth", pos: "AA", club: "Atlético Madrid" },
      { num: 8, name: "Sander Berge", pos: "MV", club: "Fulham" },
      { num: 9, name: "Erling Haaland", pos: "AA", club: "Manchester City" },
      { num: 10, name: "Martin Ødegaard", pos: "MV", club: "Arsenal" },
      { num: 11, name: "Jørgen Strand Larsen", pos: "AA", club: "Crystal Palace" },
      { num: 12, name: "Sander Tangvik", pos: "DL", club: "Hamburger SV" },
      { num: 13, name: "Egil Selvik", pos: "DL", club: "Watford" },
      { num: 14, name: "Fredrik Aursnes", pos: "MV", club: "Benfica" },
      { num: 15, name: "Fredrik André Bjørkan", pos: "VD", club: "Bodø/Glimt" },
      { num: 16, name: "Marcus Holmgren Pedersen", pos: "VD", club: "Torino" },
      { num: 17, name: "Torbjørn Heggem", pos: "VD", club: "Bologna" },
      { num: 18, name: "Kristian Thorstvedt", pos: "MV", club: "Sassuolo" },
      { num: 19, name: "Thelo Aasgaard", pos: "MV", club: "Rangers" },
      { num: 20, name: "Antonio Nusa", pos: "MV", club: "RB Leipzig" },
      { num: 21, name: "Andreas Schjelderup", pos: "MV", club: "Benfica" },
      { num: 22, name: "Oscar Bobb", pos: "MV", club: "Fulham" },
      { num: 23, name: "Jens Petter Hauge", pos: "MV", club: "Bodø/Glimt" },
      { num: 24, name: "Sondre Langås", pos: "VD", club: "Derby County" },
      { num: 25, name: "Henrik Falchener", pos: "VD", club: "Viking" },
      { num: 26, name: "Julian Ryerson", pos: "VD", club: "Borussia Dortmund" }
    ]
  },

  37: {
    coach: "Lionel Scaloni",
    fifaRanking: 1,
    wcAppearances: 18,
    bestResult: "Winnaar (1978, 1986, 2022)",
    titles: 3,
    description: "Argentinië is de regerend wereldkampioen! De Albiceleste won het WK 2022 in Qatar met Messi als ster. Het team heeft een ongelooflijke reeks en wil de titel verdedigen.",
    squad: [
      { num: 1, name: "Juan Musso", pos: "DL", club: "Atlético Madrid" },
      { num: 2, name: "Leonardo Balerdi", pos: "VD", club: "Marseille" },
      { num: 3, name: "Nicolás Tagliafico", pos: "VD", club: "Lyon" },
      { num: 4, name: "Gonzalo Montiel", pos: "VD", club: "River Plate" },
      { num: 5, name: "Leandro Paredes", pos: "MV", club: "Boca Juniors" },
      { num: 6, name: "Lisandro Martínez", pos: "VD", club: "Manchester United" },
      { num: 7, name: "Rodrigo De Paul", pos: "MV", club: "Inter Miami CF" },
      { num: 8, name: "Valentín Barco", pos: "MV", club: "Strasbourg" },
      { num: 9, name: "Julián Alvarez", pos: "AA", club: "Atlético Madrid" },
      { num: 10, name: "Lionel Messi", pos: "AA", club: "Inter Miami CF" },
      { num: 11, name: "Giovani Lo Celso", pos: "MV", club: "Real Betis" },
      { num: 12, name: "Gerónimo Rulli", pos: "DL", club: "Marseille" },
      { num: 13, name: "Cristian Romero", pos: "VD", club: "Tottenham Hotspur" },
      { num: 14, name: "Exequiel Palacios", pos: "MV", club: "Bayer Leverkusen" },
      { num: 15, name: "Nicolás González", pos: "AA", club: "Atlético Madrid" },
      { num: 16, name: "Thiago Almada", pos: "AA", club: "Atlético Madrid" },
      { num: 17, name: "Giuliano Simeone", pos: "AA", club: "Atlético Madrid" },
      { num: 18, name: "Nico Paz", pos: "AA", club: "Como" },
      { num: 19, name: "Nicolás Otamendi", pos: "VD", club: "Benfica" },
      { num: 20, name: "Alexis Mac Allister", pos: "MV", club: "Liverpool" },
      { num: 21, name: "José Manuel López", pos: "AA", club: "Palmeiras" },
      { num: 22, name: "Lautaro Martínez", pos: "AA", club: "Inter Milan" },
      { num: 23, name: "Emiliano Martínez", pos: "DL", club: "Aston Villa" },
      { num: 24, name: "Enzo Fernández", pos: "MV", club: "Chelsea" },
      { num: 25, name: "Facundo Medina", pos: "VD", club: "Marseille" },
      { num: 26, name: "Nahuel Molina", pos: "VD", club: "Atlético Madrid" }
    ]
  },

  38: {
    coach: "Vladimir Petković",
    fifaRanking: 34,
    wcAppearances: 5,
    bestResult: "Groepsfase (2014)",
    titles: 0,
    description: "Algerije won de Afrika Cup in 2019 en is een van de sterkste Noord-Afrikaanse teams. De Woestijnvossen hebben een passionele supportersschare."
  },

  39: {
    coach: "Ralf Rangnick",
    fifaRanking: 19,
    wcAppearances: 8,
    bestResult: "Halve finale (1934, 1954)",
    titles: 0,
    description: "Oostenrijk keert terug op het WK na een lange afwezigheid. Onder Rangnick speelt het team aanvallend pressend voetbal met een sterke Bundesliga-kern."
  },

  40: {
    coach: "Jamal Sellami",
    fifaRanking: 68,
    wcAppearances: 1,
    bestResult: "Debuut (2026)",
    titles: 0,
    description: "Jordanië maakt zijn WK-debuut! Het land bereikte de finale van de Aziatische beker 2024 en groeit snel als voetbalnatie."
  },

  41: {
    coach: "Roberto Martínez",
    fifaRanking: 4,
    wcAppearances: 8,
    bestResult: "Halve finale (1966, 2006)",
    titles: 0,
    description: "Portugal beschikt met een gouden generatie over een van de sterkste selecties ooit. Na het EK 2016 en de Nations League 2019 jagen ze nu op WK-goud.",
    squad: [
      { num: 0, name: "Diogo Costa", pos: "DL", club: "Porto" },
      { num: 0, name: "José Sá", pos: "DL", club: "Wolverhampton Wanderers" },
      { num: 0, name: "Rui Silva", pos: "DL", club: "Sporting CP" },
      { num: 0, name: "Rúben Dias", pos: "VD", club: "Manchester City" },
      { num: 0, name: "João Cancelo", pos: "VD", club: "Barcelona" },
      { num: 0, name: "Nélson Semedo", pos: "VD", club: "Fenerbahçe" },
      { num: 0, name: "Nuno Mendes", pos: "VD", club: "Paris Saint-Germain" },
      { num: 0, name: "Diogo Dalot", pos: "VD", club: "Manchester United" },
      { num: 0, name: "Gonçalo Inácio", pos: "VD", club: "Sporting CP" },
      { num: 0, name: "Matheus Nunes", pos: "VD", club: "Manchester City" },
      { num: 0, name: "Renato Veiga", pos: "VD", club: "Villarreal" },
      { num: 0, name: "Tomás Araújo", pos: "VD", club: "Benfica" },
      { num: 0, name: "Bernardo Silva", pos: "MV", club: "Manchester City" },
      { num: 0, name: "Bruno Fernandes", pos: "MV", club: "Manchester United" },
      { num: 0, name: "Rúben Neves", pos: "MV", club: "Al-Hilal" },
      { num: 0, name: "Vitinha", pos: "MV", club: "Paris Saint-Germain" },
      { num: 0, name: "João Neves", pos: "MV", club: "Paris Saint-Germain" },
      { num: 0, name: "Samú Costa", pos: "MV", club: "Mallorca" },
      { num: 0, name: "Cristiano Ronaldo", pos: "AA", club: "Al-Nassr" },
      { num: 0, name: "João Félix", pos: "AA", club: "Al-Nassr" },
      { num: 0, name: "Rafael Leão", pos: "AA", club: "Milan" },
      { num: 0, name: "Gonçalo Guedes", pos: "AA", club: "Real Sociedad" },
      { num: 0, name: "Gonçalo Ramos", pos: "AA", club: "Paris Saint-Germain" },
      { num: 0, name: "Pedro Neto", pos: "AA", club: "Chelsea" },
      { num: 0, name: "Francisco Trincão", pos: "AA", club: "Sporting CP" },
      { num: 0, name: "Francisco Conceição", pos: "AA", club: "Juventus" }
    ]
  },

  42: {
    coach: "Sébastien Desabre",
    fifaRanking: 50,
    wcAppearances: 2,
    bestResult: "Groepsfase (1974)",
    titles: 0,
    description: "DR Congo keert na meer dan 50 jaar terug op het WK. De Leoparden beschikken over veel talent in Europese competities en zijn hongerig om te presteren."
  },

  43: {
    coach: "Fabio Cannavaro",
    fifaRanking: 65,
    wcAppearances: 1,
    bestResult: "Debuut (2026)",
    titles: 0,
    description: "Oezbekistan maakt zijn WK-debuut! Het Centraal-Aziatische land heeft een sterke voetbalcultuur en verraste in de kwalificatie."
  },

  44: {
    coach: "Néstor Lorenzo",
    fifaRanking: 9,
    wcAppearances: 7,
    bestResult: "Kwartfinale (2014)",
    titles: 0,
    description: "Colombia bereikte de finale van de Copa América 2024 en is in topvorm. Los Cafeteros beschikken over wereldsterren en spelen aanvallend, spectaculair voetbal.",
    squad: [
      { num: 0, name: "David Ospina", pos: "DL", club: "Atlético Nacional" },
      { num: 0, name: "Camilo Vargas", pos: "DL", club: "Atlas" },
      { num: 0, name: "Álvaro Montero", pos: "DL", club: "Vélez Sarsfield" },
      { num: 0, name: "Davinson Sánchez", pos: "VD", club: "Galatasaray" },
      { num: 0, name: "Santiago Arias", pos: "VD", club: "Independiente" },
      { num: 0, name: "Yerry Mina", pos: "VD", club: "Cagliari" },
      { num: 0, name: "Daniel Muñoz", pos: "VD", club: "Crystal Palace" },
      { num: 0, name: "Johan Mojica", pos: "VD", club: "Mallorca" },
      { num: 0, name: "Jhon Lucumí", pos: "VD", club: "Bologna" },
      { num: 0, name: "Deiver Machado", pos: "VD", club: "Nantes" },
      { num: 0, name: "Willer Ditta", pos: "VD", club: "Cruz Azul" },
      { num: 0, name: "James Rodríguez", pos: "MV", club: "Minnesota United FC" },
      { num: 0, name: "Jefferson Lerma", pos: "MV", club: "Crystal Palace" },
      { num: 0, name: "Juan Fernando Quintero", pos: "MV", club: "River Plate" },
      { num: 0, name: "Jhon Arias", pos: "MV", club: "Palmeiras" },
      { num: 0, name: "Richard Ríos", pos: "MV", club: "Benfica" },
      { num: 0, name: "Kevin Castaño", pos: "MV", club: "River Plate" },
      { num: 0, name: "Jorge Carrascal", pos: "MV", club: "Flamengo" },
      { num: 0, name: "Jaminton Campaz", pos: "MV", club: "Rosario Central" },
      { num: 0, name: "Juan Portilla", pos: "MV", club: "Athletico Paranaense" },
      { num: 0, name: "Gustavo Puerta", pos: "MV", club: "Racing Santander" },
      { num: 0, name: "Luis Díaz", pos: "AA", club: "Bayern Munich" },
      { num: 0, name: "Jhon Córdoba", pos: "AA", club: "Krasnodar" },
      { num: 0, name: "Luis Suárez", pos: "AA", club: "Sporting CP" },
      { num: 0, name: "Cucho Hernández", pos: "AA", club: "Real Betis" },
      { num: 0, name: "Andrés Gómez", pos: "AA", club: "Vasco da Gama" }
    ]
  },

  45: {
    coach: "Thomas Tuchel",
    fifaRanking: 4,
    wcAppearances: 17,
    bestResult: "Winnaar (1966)",
    titles: 1,
    description: "Engeland, uitvinders van het voetbal, won het WK in 1966 en werden runner-up op het EK 2024. De Three Lions beschikken over een uitzonderlijk talentvolle selectie.",
    squad: [
      { num: 0, name: "Jordan Pickford", pos: "DL", club: "Everton" },
      { num: 0, name: "Dean Henderson", pos: "DL", club: "Crystal Palace" },
      { num: 0, name: "James Trafford", pos: "DL", club: "Manchester City" },
      { num: 0, name: "John Stones", pos: "VD", club: "Manchester City" },
      { num: 0, name: "Marc Guéhi", pos: "VD", club: "Manchester City" },
      { num: 0, name: "Reece James", pos: "VD", club: "Chelsea" },
      { num: 0, name: "Ezri Konsa", pos: "VD", club: "Aston Villa" },
      { num: 0, name: "Dan Burn", pos: "VD", club: "Newcastle United" },
      { num: 0, name: "Tino Livramento", pos: "VD", club: "Newcastle United" },
      { num: 0, name: "Djed Spence", pos: "VD", club: "Tottenham Hotspur" },
      { num: 0, name: "Nico O\'Reilly", pos: "VD", club: "Manchester City" },
      { num: 0, name: "Jarell Quansah", pos: "VD", club: "Bayer Leverkusen" },
      { num: 0, name: "Jordan Henderson", pos: "MV", club: "Brentford" },
      { num: 0, name: "Declan Rice", pos: "MV", club: "Arsenal" },
      { num: 0, name: "Jude Bellingham", pos: "MV", club: "Real Madrid" },
      { num: 0, name: "Morgan Rogers", pos: "MV", club: "Aston Villa" },
      { num: 0, name: "Kobbie Mainoo", pos: "MV", club: "Manchester United" },
      { num: 0, name: "Elliot Anderson", pos: "MV", club: "Nottingham Forest" },
      { num: 0, name: "Harry Kane", pos: "AA", club: "Bayern Munich" },
      { num: 0, name: "Marcus Rashford", pos: "AA", club: "Barcelona" },
      { num: 0, name: "Bukayo Saka", pos: "AA", club: "Arsenal" },
      { num: 0, name: "Ollie Watkins", pos: "AA", club: "Aston Villa" },
      { num: 0, name: "Anthony Gordon", pos: "AA", club: "Newcastle United" },
      { num: 0, name: "Eberechi Eze", pos: "AA", club: "Arsenal" },
      { num: 0, name: "Noni Madueke", pos: "AA", club: "Arsenal" },
      { num: 0, name: "Ivan Toney", pos: "AA", club: "Al-Ahli" }
    ]
  },

  46: {
    coach: "Zlatko Dalić",
    fifaRanking: 8,
    wcAppearances: 7,
    bestResult: "Runner-up (2018)",
    titles: 0,
    description: "Kroatië werd runner-up in 2018 en derde in 2022. Het kleine land aan de Adriatische Zee produceert buitenproportioneel veel topspelers.",
    squad: [
      { num: 0, name: "Dominik Livaković", pos: "DL", club: "Dinamo Zagreb" },
      { num: 0, name: "Dominik Kotarski", pos: "DL", club: "Copenhagen" },
      { num: 0, name: "Ivor Pandur", pos: "DL", club: "Hull City" },
      { num: 0, name: "Joško Gvardiol", pos: "VD", club: "Manchester City" },
      { num: 0, name: "Duje Ćaleta-Car", pos: "VD", club: "Real Sociedad" },
      { num: 0, name: "Josip Šutalo", pos: "VD", club: "Ajax" },
      { num: 0, name: "Josip Stanišić", pos: "VD", club: "Bayern Munich" },
      { num: 0, name: "Marin Pongračić", pos: "VD", club: "Fiorentina" },
      { num: 0, name: "Martin Erlić", pos: "VD", club: "Midtjylland" },
      { num: 0, name: "Luka Vušković", pos: "VD", club: "Hamburger SV" },
      { num: 0, name: "Luka Modrić", pos: "MV", club: "Milan" },
      { num: 0, name: "Mateo Kovačić", pos: "MV", club: "Manchester City" },
      { num: 0, name: "Mario Pašalić", pos: "MV", club: "Atalanta" },
      { num: 0, name: "Nikola Vlašić", pos: "MV", club: "Torino" },
      { num: 0, name: "Luka Sučić", pos: "MV", club: "Real Sociedad" },
      { num: 0, name: "Martin Baturina", pos: "MV", club: "Como" },
      { num: 0, name: "Kristijan Jakić", pos: "MV", club: "FC Augsburg" },
      { num: 0, name: "Petar Sučić", pos: "MV", club: "Inter Milan" },
      { num: 0, name: "Nikola Moro", pos: "MV", club: "Bologna" },
      { num: 0, name: "Toni Fruk", pos: "MV", club: "Rijeka" },
      { num: 0, name: "Ivan Perišić", pos: "AA", club: "PSV Eindhoven" },
      { num: 0, name: "Andrej Kramarić", pos: "AA", club: "TSG Hoffenheim" },
      { num: 0, name: "Ante Budimir", pos: "AA", club: "Osasuna" },
      { num: 0, name: "Marco Pašalić", pos: "AA", club: "Orlando City" },
      { num: 0, name: "Petar Musa", pos: "AA", club: "FC Dallas" },
      { num: 0, name: "Igor Matanović", pos: "AA", club: "SC Freiburg" }
    ]
  },

  47: {
    coach: "Carlos Queiroz",
    fifaRanking: 44,
    wcAppearances: 5,
    bestResult: "Kwartfinale (2010)",
    titles: 0,
    description: "Ghana bereikte de kwartfinale op het WK 2010 en miste op een haar na de halve finale. De Black Stars zijn een van de meest getalenteerde Afrikaanse teams."
  },

  48: {
    coach: "Thomas Christiansen",
    fifaRanking: 43,
    wcAppearances: 2,
    bestResult: "Groepsfase (2018)",
    titles: 0,
    description: "Panama debuteerde op het WK 2018 en is terug voor meer. Het Midden-Amerikaanse land heeft een groeiende voetbalcultuur en passionele fans."
  }
};
