// Uitgebreide team-analyses op basis van historische WK-statistieken
// Gegevens per teamId – alle 48 WK 2026-deelnemers

const teamAnalysisData = {

  // ═══════════════════════════════════════════════════════
  // MEXICO (teamId: 1) – Gastland, Groep A
  // ═══════════════════════════════════════════════════════
  1: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 60,
      wins: 17,
      draws: 14,
      losses: 29,
      goalsFor: 62,
      goalsAgainst: 101
    },

    // ── WK-deelnames ──
    history: [
      { year: 1930, host: "Uruguay",       result: "Groepsfase",   tag: "group",  detail: "Eerste WK-wedstrijd ooit: Frankrijk 4-1 Mexico. Manuel Rosas scoorde de eerste strafschop in WK-geschiedenis." },
      { year: 1950, host: "Brazilië",      result: "Groepsfase",   tag: "group",  detail: "Geen overwinning in drie duels" },
      { year: 1954, host: "Zwitserland",   result: "Groepsfase",   tag: "group",  detail: "Twee wedstrijden, twee nederlagen" },
      { year: 1958, host: "Zweden",        result: "Groepsfase",   tag: "group",  detail: "Eerste punt: 1-1 tegen Wales" },
      { year: 1962, host: "Chili",         result: "Groepsfase",   tag: "group",  detail: "Eerste WK-zege: 3-1 vs Tsjechoslowakije" },
      { year: 1966, host: "Engeland",      result: "Groepsfase",   tag: "group",  detail: "Twee gelijke spelen, één nederlaag" },
      { year: 1970, host: "Mexico 🏠",     result: "Kwartfinale",  tag: "qf",     detail: "Als gastland naar de kwartfinale – verlies 1-4 tegen Italië" },
      { year: 1978, host: "Argentinië",    result: "Groepsfase",   tag: "group",  detail: "Drie nederlagen, nul punten" },
      { year: 1986, host: "Mexico 🏠",     result: "Kwartfinale",  tag: "qf",     detail: "Beste WK ooit – ongeslagen in reguliere speeltijd. Verlies na strafschoppen tegen West-Duitsland (0-0 n.v., 1-4 pen)" },
      { year: 1994, host: "VS",            result: "Achtste finale", tag: "r16",  detail: "1-3 verlies tegen Bulgarije" },
      { year: 1998, host: "Frankrijk",     result: "Achtste finale", tag: "r16",  detail: "1-2 verlies tegen Duitsland" },
      { year: 2002, host: "Japan/Z-Korea", result: "Achtste finale", tag: "r16",  detail: "Pijnlijk 0-2 verlies tegen aartsrivaal VS" },
      { year: 2006, host: "Duitsland",     result: "Achtste finale", tag: "r16",  detail: "1-2 n.v. tegen Argentinië – Maxi Rodríguez' wereldgoal" },
      { year: 2010, host: "Zuid-Afrika",    result: "Achtste finale", tag: "r16",  detail: "1-1 opening van het toernooi vs gastland ZA; 2-0 winst tegen titelhouder Frankrijk; 1-3 verlies tegen Argentinië (buitenspeldoel Tévez)" },
      { year: 2014, host: "Brazilië",      result: "Achtste finale", tag: "r16",  detail: "Ochoa's legendarische reddingen vs Brazilië (0-0); 3-1 winst tegen Kroatië; 'No era penal!' in 88e minuut vs Nederland (1-2 n.v.)" },
      { year: 2018, host: "Rusland",       result: "Achtste finale", tag: "r16",  detail: "Sensationele 1-0 zege op titelhouder Duitsland (Lozano); 2-1 winst vs Zuid-Korea; 0-2 kansloos tegen Brazilië in achtste finale" },
      { year: 2022, host: "Qatar",         result: "Groepsfase",   tag: "group",  detail: "Uitgeschakeld op doelsaldo – einde van 28 jaar achtste finales" }
    ],

    // ── El Quinto Partido: de vloek ──
    quintoPartido: {
      intro: "Tussen 1994 en 2018 bereikte Mexico zeven opeenvolgende keren de achtste finale van het WK – maar kwam er nooit doorheen. Deze pijnlijke traditie staat in Mexico bekend als <strong>'El Quinto Partido'</strong> (de vijfde wedstrijd).",
      matches: [
        { year: 1994, opponent: "Bulgarije",   score: "1-1 n.v. (1-3 pen)", detail: "Na verlenging gelijk, verloren op strafschoppen" },
        { year: 1998, opponent: "Duitsland",    score: "1-2", detail: "Hernández scoorde, maar Klinsmann en Bierhoff beslisten" },
        { year: 2002, opponent: "Verenigde Staten", score: "0-2", detail: "Vernederend verlies tegen aartsrivaal op Aziatische bodem" },
        { year: 2006, opponent: "Argentinië",   score: "1-2 n.v.", detail: "Maxi Rodríguez' volley vanuit 35 meter is een WK-icoon" },
        { year: 2010, opponent: "Argentinië",   score: "1-3", detail: "Tévez' buitenspeldoel gaf Mexico een onmogelijke achterstand" },
        { year: 2014, opponent: "Nederland",    score: "1-2", detail: "De beroemdste schwalbe: Robben dook in de 88e minuut → strafschop" },
        { year: 2018, opponent: "Brazilië",     score: "0-2", detail: "Neymar en Firmino maakten korte metten met Mexicaanse dromen" }
      ],
      conclusion: "In 2022 brak de reeks: Mexico werd al in de groepsfase uitgeschakeld – op doelsaldo achter Polen. Kan het gastland in 2026 eindelijk <em>el quinto partido</em> winnen?"
    },

    // ── Thuisvoordeel als gastland ──
    hostRecord: {
      intro: "Mexico is het enige land ter wereld dat voor de <strong>derde keer</strong> een WK organiseert (na 1970 en 1986). Als gastland heeft El Tri een indrukwekkend palmares.",
      tournaments: [
        {
          year: 1970,
          matches: 4, wins: 2, draws: 1, losses: 1,
          detail: "Groep gewonnen (0-0 vs USSR, 4-0 vs El Salvador, 1-0 vs België). In de kwartfinale 1-4 verloren van Italië – dat de finale bereikte."
        },
        {
          year: 1986,
          matches: 5, wins: 3, draws: 2, losses: 0,
          detail: "Ongeslagen in reguliere speeltijd: 2-1 vs België, 1-1 vs Paraguay, 1-0 vs Irak, 2-0 vs Bulgarije (achtste finale). Pas in kwartfinale uitgeschakeld na strafschoppen (0-0, 1-4 pen) vs West-Duitsland."
        }
      ],
      combined: { matches: 9, wins: 5, draws: 3, losses: 1, goalsFor: 11, goalsAgainst: 6 },
      conclusion: "Met een winpercentage van <strong>56%</strong> als gastland (vs 28% totaal) is het thuisvoordeel voor Mexico enorm. In reguliere speeltijd bleef El Tri in 1986 zelfs ongeslagen. In 2026 speelt El Tri hun groepswedstrijden in het Estadio Azteca en Estadio BBVA – beide in Mexico. Het Azteca (83.000 plaatsen) was ook het decor van de WK-finales van 1970 en 1986."
    },

    // ── Head-to-Head Groep A ──
    groupOpponents: [
      {
        name: "Zuid-Afrika",
        code: "za",
        fifaRanking: 68,
        h2hSummary: "1 WK-duel: 1 gelijkspel",
        verdict: "even",
        matches: [
          { tournament: "WK 2010 Groepsfase", score: "1-1", detail: "Openingswedstrijd van het toernooi in Johannesburg. Tshabalala scoorde in de 55e minuut; Márquez maakte gelijk in de 79e. In 2026 treffen ze elkaar opnieuw in de openingswedstrijd – nu met Mexico als gastland." }
        ],
        analysis: "Zuid-Afrika heeft sinds het WK 2010 geen WK meer gespeeld en keert terug na 16 jaar afwezigheid. Mexico is op papier favoriet, maar de openingswedstrijd brengt altijd extra druk – zeker als gastland."
      },
      {
        name: "Zuid-Korea",
        code: "kr",
        fifaRanking: 23,
        h2hSummary: "2 WK-duels: 2× winst Mexico",
        verdict: "fav",
        matches: [
          { tournament: "WK 1998 Groepsfase", score: "3-1", detail: "Overtuigende zege in Lyon. Mexico domineerde de wedstrijd volledig." },
          { tournament: "WK 2018 Groepsfase", score: "2-1", detail: "Vela (strafschop 26') en Hernández (66', zijn 50e interlandgoal) bezegelden de zege. Ironisch: Zuid-Korea versloeg later Duitsland 2-0 en hielp Mexico naar de achtste finale." }
        ],
        analysis: "Mexico heeft beide WK-duels gewonnen tegen Zuid-Korea. Maar de Taegeuk Warriors zijn flink sterker geworden met spelers als Son Heung-min (Tottenham) en Lee Kang-in (PSG). In 2002 bereikten zij als gastland de halve finale."
      },
      {
        name: "Tsjechië",
        code: "cz",
        fifaRanking: 47,
        h2hSummary: "1 WK-duel: 1× winst Mexico",
        verdict: "fav",
        matches: [
          { tournament: "WK 1962 Groepsfase", score: "3-1", detail: "Mexico versloeg Tsjechoslowakije voor hun allereerste WK-overwinning – na vijf toernooien zonder zege. Mašek scoorde al na 15 seconden voor Tsjechoslowakije (destijds 2e snelste WK-goal ooit), maar Mexico kwam knap terug." }
        ],
        analysis: "Het huidige Tsjechië kwalificeert zich voor het eerst sinds 2006 voor een WK. Het team mist de supersterren van weleer (Nedvěd, Rosický, Čech), maar heeft een solide Europese kern. Als laagst geplaatste team in Groep A zijn ze de underdog."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Santiago Giménez", role: "Topscorer", detail: "AC Milan-spits die doorbraak beleefde bij Feyenoord. Topscorer van de selectie met 22 interlandgoals." },
      { name: "Edson Álvarez", role: "Aanvoerder & motor", detail: "Ervaren verdedigende middenvelder, het kloppend hart van El Tri. Leiderschap en duels zijn zijn kracht." },
      { name: "Raúl Jiménez", role: "Ervaren spits", detail: "Veteraan (35 jaar) die bij eerdere WK's (2014, 2018) al scoorde. Brengt onvervangbare ervaring." },
      { name: "Guillermo Ochoa", role: "Keeperslegende", detail: "Speelt zijn vijfde WK – een record voor een Mexicaanse keeper. Zijn reddingen tegen Brazilië (2014) zijn iconisch." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Enorm thuisvoordeel: 2 van 3 groepswedstrijden in Mexico",
      "Fanatiek publiek: het Azteca-stadion (83.000 plaatsen) wordt een heksenketel",
      "WK-ervaring: 17e deelname, meest ervaren CONCACAF-team",
      "Technisch vaardig middenveld met snelle vleugelaanvallers",
      "Bondscoach Aguirre kent het grote podium (3e periode als bondscoach)"
    ],
    weaknesses: [
      "El Quinto Partido: mentaal blok bij knockoutwedstrijden",
      "2022-debakel: als groepsfase-exit een diepe wond achterliet",
      "Verdediging: gemiddeld 1,68 tegendoelpunten per WK-wedstrijd (historisch)",
      "Afhankelijkheid van Liga MX-spelers: minder Europese topcompetitie-ervaring dan concurrenten",
      "Leeftijd: meerdere sterkhouders (Jiménez 35, Ochoa 40) naderen het einde"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 92,      // % kans op doorkomen groepsfase
      roundOf32: 75,        // % kans op winnen ronde van 32
      roundOf16: 35,        // % kans op kwartfinale
      quarterFinal: 12,     // % kans op halve finale
      semiFinal: 4,         // % kans op finale
      champion: 1.5,        // % kans op wereldtitel
      mostLikelyResult: "Achtste finale / Kwartfinale",
      summary: "Als gastland met een gunstige groep moet Mexico probleemloos de groepsfase overleven. De grote vraag is of El Tri eindelijk de vloek van 'el quinto partido' kan doorbreken. Het thuisvoordeel in het Azteca-stadion en de ervaring van Aguirre geven hoop, maar de mentale barrière bij knockoutwedstrijden blijft een reëel risico. <em>Een kwartfinale – zoals in 1970 en 1986 als gastland – is het realistische plafond.</em>"
    }
  },
  // ═══════════════════════════════════════════════════════
  // ZUID-AFRIKA (teamId: 2) – Groep A
  // ═══════════════════════════════════════════════════════
  2: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 9,
      wins: 3,
      draws: 3,
      losses: 3,
      goalsFor: 11,
      goalsAgainst: 15
    },

    // ── WK-deelnames ──
    history: [
      { year: 1998, host: "Frankrijk",     result: "Groepsfase",  tag: "group",  detail: "Eerste WK ooit voor Zuid-Afrika. Verlies tegen Frankrijk (0-3), gelijkspel tegen Denemarken (1-1), zege op Saoedi-Arabië (2-1). Na het apartheidsverbod was dit een historisch moment." },
      { year: 2002, host: "Japan/Z-Korea", result: "Groepsfase",  tag: "group",  detail: "Gelijkspel tegen Paraguay (2-2), zege op Slovenië (1-0), maar verlies tegen Spanje (2-3). Ondanks 4 punten uitgeschakeld op doelsaldo." },
      { year: 2010, host: "Zuid-Afrika 🏠", result: "Groepsfase", tag: "group",  detail: "Historisch WK als gastheer. Tshabalala scoorde het openingsdoelpunt van het toernooi (1-1 vs Mexico). Knappe 2-1 zege op Frankrijk, maar 0-3 verlies tegen Uruguay betekende uitschakeling als eerste gastland ooit in de groepsfase." }
    ],

    // ── Head-to-Head Groep A ──
    groupOpponents: [
      {
        name: "Mexico",
        code: "mx",
        fifaRanking: 15,
        h2hSummary: "1 WK-duel: 1 gelijkspel",
        verdict: "unfav",
        matches: [
          { tournament: "WK 2010 Groepsfase", score: "1-1", detail: "Openingswedstrijd van het WK 2010 in Johannesburg. Tshabalala scoorde een prachtig doelpunt in de 55e minuut, maar Márquez maakte gelijk in de 79e. Zuid-Afrika was de eerste gastheer die niet won in de openingswedstrijd." }
        ],
        analysis: "Mexico is als gastland en met FIFA-ranking 15 de grote favoriet van Groep A. Zuid-Afrika heeft één WK-precedent: het 1-1 gelijkspel in 2010. De Bafana Bafana zullen opnieuw als underdog moeten verrassen."
      },
      {
        name: "Zuid-Korea",
        code: "kr",
        fifaRanking: 23,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Zuid-Korea is met FIFA-ranking 23 en elf WK-deelnames een zwaargewicht in de groep. De Taegeuk Warriors beschikken over wereldklassespelers als Son Heung-min en Lee Kang-in. Zuid-Afrika zal een verrassing moeten forceren."
      },
      {
        name: "Tsjechië",
        code: "cz",
        fifaRanking: 47,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "even",
        matches: [],
        analysis: "Tsjechië is de meest haalbare tegenstander voor Zuid-Afrika in Groep A. Het team heeft geen WK-ervaring als onafhankelijk land sinds 2006 en mist absolute topspelers. Dit is waarschijnlijk de sleutelwedstrijd voor beide teams."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Ronwen Williams", role: "Aanvoerder & keeper", detail: "Mamelodi Sundowns-keeper en Afrikaans Voetballer van het Jaar 2024. Uitstekende reflexen en penaltykiller – de hoeksteen van de Bafana Bafana-defensie." },
      { name: "Teboho Mokoena", role: "Middenvelder & spelmaker", detail: "Dynamische middenvelder van Mamelodi Sundowns met een krachtig schot. Verantwoordelijk voor de opbouw en standaardsituaties." },
      { name: "Relebohile Mofokeng", role: "Creatieve aanvaller", detail: "Jong talent van Orlando Pirates dat met zijn dribbels en snelheid het verschil kan maken. De toekomst van het Zuid-Afrikaanse voetbal." },
      { name: "Lyle Foster", role: "Spits", detail: "Burnley-aanvaller en de meest ervaren Europese speler in de selectie. Brengt fysieke kracht en doelgerichtheid." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Sterke teamgeest en collectieve mentaliteit",
      "Uitstekende doelman in Ronwen Williams",
      "Ervaring met WK-druk door 2010 als gastland",
      "Jong en dynamisch aanvallend talent (Mofokeng, Appollis)",
      "Afrika Cup-ervaring geeft wedstrijdharding"
    ],
    weaknesses: [
      "Nooit de WK-groepsfase overleefd in drie pogingen",
      "Beperkte Europese topcompetitie-ervaring in de selectie",
      "Laagste FIFA-ranking van Groep A",
      "Defensief kwetsbaar: 15 tegendoelpunten in 9 WK-wedstrijden",
      "Groot deel van selectie speelt in Zuid-Afrikaanse competitie"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 25,
      roundOf32: 12,
      roundOf16: 4,
      quarterFinal: 1.5,
      semiFinal: 0.3,
      champion: 0.05,
      mostLikelyResult: "Groepsfase-uitschakeling",
      summary: "Zuid-Afrika is de underdog van Groep A en zal het moeilijk krijgen tegen Mexico (gastland) en Zuid-Korea. De sleutelwedstrijd tegen Tsjechië wordt bepalend. Een derde plek en mogelijke kwalificatie als beste nummer drie is het maximaal haalbare. De Bafana Bafana hebben in negen WK-wedstrijden nooit de groepsfase overleefd."
    }
  },

  // ═══════════════════════════════════════════════════════
  // ZUID-KOREA (teamId: 3) – Groep A
  // ═══════════════════════════════════════════════════════
  3: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 37,
      wins: 8,
      draws: 10,
      losses: 19,
      goalsFor: 35,
      goalsAgainst: 73
    },

    // ── WK-deelnames ──
    history: [
      { year: 1954, host: "Zwitserland",   result: "Groepsfase",   tag: "group",  detail: "WK-debuut eindigde in twee zware nederlagen: 0-9 tegen Hongarije en 0-7 tegen Turkije." },
      { year: 1986, host: "Mexico",         result: "Groepsfase",   tag: "group",  detail: "Terugkeer na 32 jaar. 1-3 verlies tegen Argentinië (Maradona), 1-1 tegen Bulgarije, 2-3 tegen Italië." },
      { year: 1990, host: "Italië",         result: "Groepsfase",   tag: "group",  detail: "Drie nederlagen zonder punt: 0-2 België, 1-3 Spanje, 0-1 Uruguay." },
      { year: 1994, host: "VS",             result: "Groepsfase",   tag: "group",  detail: "Eerste WK-punt in 40 jaar: 2-2 tegen Spanje. Verder 0-2 verlies tegen Bolivia en 0-0 tegen Duitsland... nee 2-3 verlies tegen Duitsland." },
      { year: 1998, host: "Frankrijk",      result: "Groepsfase",   tag: "group",  detail: "1-3 verlies tegen Mexico, 1-1 tegen België, 0-5 verlies tegen Nederland. Weer vroeg naar huis." },
      { year: 2002, host: "Japan/Z-Korea 🏠", result: "Halve finale", tag: "sf",   detail: "Historisch toernooi als co-gastheer! Poulewinst, daarna Spanje verslagen na strafschoppen (5-3) in kwartfinale en Italië uitgeschakeld in achtste finale (2-1 n.v., gouden goal Ahn Jung-hwan). Pas in halve finale gestopt door Duitsland (0-1). Vierde plaats na verlies in troostfinale tegen Turkije (2-3)." },
      { year: 2006, host: "Duitsland",      result: "Groepsfase",   tag: "group",  detail: "2-1 zege op Togo, 1-1 tegen Frankrijk, 0-2 verlies tegen Zwitserland. Uitgeschakeld op doelsaldo." },
      { year: 2010, host: "Zuid-Afrika",     result: "Achtste finale", tag: "r16",  detail: "2-0 zege op Griekenland, 1-4 verlies tegen Argentinië, 2-2 tegen Nigeria. In achtste finale 1-2 verlies tegen Uruguay." },
      { year: 2014, host: "Brazilië",       result: "Groepsfase",   tag: "group",  detail: "Teleurstellend toernooi: 1-1 tegen Rusland, 2-4 verlies tegen Algerije, 0-1 verlies tegen België. Son Heung-min maakte zijn WK-debuut." },
      { year: 2018, host: "Rusland",        result: "Groepsfase",   tag: "group",  detail: "Sensationele 2-0 zege op titelhouder Duitsland in de laatste groepswedstrijd (doelpunten Kim Young-gwon en Son Heung-min). Eerder verloren van Zweden (0-1) en Mexico (1-2)." },
      { year: 2022, host: "Qatar",          result: "Achtste finale", tag: "r16",  detail: "Spectaculaire 2-1 comeback-zege op Portugal in de groepsfase. 0-0 tegen Uruguay, 2-3 verlies tegen Ghana. In achtste finale 1-4 verloren tegen Brazilië." }
    ],

    // ── Head-to-Head Groep A ──
    groupOpponents: [
      {
        name: "Mexico",
        code: "mx",
        fifaRanking: 15,
        h2hSummary: "2 WK-duels: 2× verlies",
        verdict: "unfav",
        matches: [
          { tournament: "WK 1998 Groepsfase", score: "1-3", detail: "Ruime nederlaag in Lyon. Mexico was de betere ploeg en won overtuigend." },
          { tournament: "WK 2018 Groepsfase", score: "1-2", detail: "Vela (strafschop 26') en Hernández (66') scoorden voor Mexico. Zuid-Korea verloor maar versloeg later Duitsland 2-0, waardoor Mexico alsnog de achtste finale bereikte." }
        ],
        analysis: "Zuid-Korea heeft beide WK-ontmoetingen met Mexico verloren. Als gastland heeft Mexico extra voordeel. Dit wordt een zware wedstrijd, maar de Koreanen hebben bewezen grote landen te kunnen verslaan (Duitsland 2018, Portugal 2022)."
      },
      {
        name: "Zuid-Afrika",
        code: "za",
        fifaRanking: 68,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Er zijn geen WK-precedenten tussen beide landen. Zuid-Korea is met een veel hogere FIFA-ranking en aanzienlijk meer WK-ervaring de duidelijke favoriet. Zuid-Afrika heeft nog nooit de groepsfase van een WK overleefd."
      },
      {
        name: "Tsjechië",
        code: "cz",
        fifaRanking: 47,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Geen WK-historie tussen beide landen. Zuid-Korea is favoriet dankzij een hogere ranking en meer WK-ervaring. Tsjechië mist topspelers van het niveau Son Heung-min of Lee Kang-in. Een belangrijk duel voor de tweede groepsplaats."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Son Heung-min", role: "Aanvoerder & sterspeler", detail: "De beste Aziatische voetballer van zijn generatie. Met meer dan 100 Premier League-goals bij Tottenham en nu bij Los Angeles FC, is hij de absolute leider en gevaarlijkste aanvaller." },
      { name: "Lee Kang-in", role: "Creatieve middenvelder", detail: "Paris Saint-Germain-spelmaker met uitzonderlijk talent aan de bal. Winnaar van de Gouden Bal op het WK U-20 in 2019. Cruciaal voor de aanvoer naar Son." },
      { name: "Kim Min-jae", role: "Centrale verdediger", detail: "Bayern Munich-verdediger en een van de beste centrumverdedigers van Azië. Sterk in de lucht, snel en tactisch intelligent. De muur van de Koreaanse defensie." },
      { name: "Hwang Hee-chan", role: "Aanvallende middenvelder", detail: "Wolverhampton Wanderers-speler met snelheid en doelpunten. Brengt dynamiek in de omschakeling en is een ideale partner voor Son in de aanval." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Wereldklassespelers: Son Heung-min, Lee Kang-in, Kim Min-jae",
      "Enorme WK-ervaring: twaalfde deelname op rij",
      "Bewezen vermogen om topteams te verslaan (Duitsland 2018, Portugal 2022)",
      "Tactisch discipline en hoog loopvermogen",
      "Historische halve finale in 2002 als co-gastheer geeft inspiratie"
    ],
    weaknesses: [
      "Wisselvallige prestaties: groepsfase-exits afgewisseld met sterke toernooien",
      "Afhankelijkheid van Son Heung-min als eindproduct",
      "Gebrek aan breedte en diepgang in de spitspositie",
      "Historisch zwak tegen Latijns-Amerikaanse teams op WK's",
      "Veroudering van de generatie: Son (33) en andere sterkhouders naderen hun piek"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 78,
      roundOf32: 52,
      roundOf16: 25,
      quarterFinal: 10,
      semiFinal: 3,
      champion: 0.8,
      mostLikelyResult: "Achtste finale / Ronde van 32",
      summary: "Zuid-Korea is de op één na sterkste ploeg in Groep A en moet de groepsfase comfortabel overleven. Met Son Heung-min, Lee Kang-in en Kim Min-jae beschikt het team over individuele kwaliteit die het verschil kan maken. De grote vraag is of de Taegeuk Warriors in 2026 hun inconsistentie kunnen overwinnen – de helft van hun WK-deelnames eindigde in de groepsfase."
    }
  },

  // ═══════════════════════════════════════════════════════
  // TSJECHIË (teamId: 4) – Groep A
  // ═══════════════════════════════════════════════════════
  4: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 33,
      wins: 12,
      draws: 5,
      losses: 16,
      goalsFor: 47,
      goalsAgainst: 49
    },

    // ── WK-deelnames ──
    history: [
      { year: 1934, host: "Italië",         result: "Finale",        tag: "final",  detail: "Als Tsjechoslowakije: de eerste grote WK-prestatie. Zege op Roemenië (2-1), Zwitserland (3-2) en Duitsland (3-1) op weg naar de finale. Verlies in de eindstrijd tegen gastland Italië (1-2 n.v.)." },
      { year: 1938, host: "Frankrijk",       result: "Kwartfinale",   tag: "qf",     detail: "Als Tsjechoslowakije: na een herkansingswedstrijd tegen Nederland (3-0) verloren in de kwartfinale van Brazilië." },
      { year: 1954, host: "Zwitserland",     result: "Groepsfase",    tag: "group",  detail: "Als Tsjechoslowakije: twee groepswedstrijden, uitgeschakeld na verlies tegen Uruguay." },
      { year: 1958, host: "Zweden",          result: "Groepsfase",    tag: "group",  detail: "Als Tsjechoslowakije: puntloos in de groepsfase met drie nederlagen." },
      { year: 1962, host: "Chili",           result: "Finale",        tag: "final",  detail: "Als Tsjechoslowakije: opnieuw WK-finalist! Overwinningen op Spanje en Hongarije in de knock-outfase, maar verlies in de finale tegen Brazilië van Garrincha (1-3)." },
      { year: 1970, host: "Mexico",          result: "Groepsfase",    tag: "group",  detail: "Als Tsjechoslowakije: verlies tegen Brazilië (1-4) en Roemenië (1-2), zege op Engeland... nee, uitgeschakeld in groepsfase." },
      { year: 1982, host: "Spanje",          result: "Groepsfase",    tag: "group",  detail: "Als Tsjechoslowakije: twee gelijkspelen en een verlies in de groepsfase." },
      { year: 1990, host: "Italië",          result: "Kwartfinale",   tag: "qf",     detail: "Als Tsjechoslowakije: laatste WK als gezamenlijk land. Indrukwekkende kwartfinale bereikt, maar verlies tegen West-Duitsland (0-1)." },
      { year: 2006, host: "Duitsland",       result: "Groepsfase",    tag: "group",  detail: "Eerste en tot nu toe enige WK als Tsjechië. Sterke 3-0 zege op de VS, maar nederlagen tegen Ghana (0-2) en Italië (0-2) betekenden uitschakeling." }
    ],

    // ── Head-to-Head Groep A ──
    groupOpponents: [
      {
        name: "Mexico",
        code: "mx",
        fifaRanking: 15,
        h2hSummary: "1 WK-duel: 1× verlies (als Tsjechoslowakije)",
        verdict: "unfav",
        matches: [
          { tournament: "WK 1962 Groepsfase", score: "1-3", detail: "Tsjechoslowakije leed een pijnlijke nederlaag tegen Mexico – het was Mexico's allereerste WK-overwinning na vijf toernooien. Mašek scoorde al na 15 seconden voor Tsjechoslowakije, maar Mexico kwam knap terug met drie doelpunten." }
        ],
        analysis: "Het enige WK-duel dateert uit 1962 als Tsjechoslowakije. Mexico is als gastland en met FIFA-ranking 15 de grote favoriet. Tsjechië zal als underdog moeten spelen met een georganiseerde defensie."
      },
      {
        name: "Zuid-Afrika",
        code: "za",
        fifaRanking: 68,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Geen WK-precedenten. Tsjechië is op papier sterker dan Zuid-Afrika dankzij meer Europese competitie-ervaring en spelers bij topclubs. Dit is de wedstrijd die Tsjechië moet winnen om kans te maken op de tweede groepsplaats."
      },
      {
        name: "Zuid-Korea",
        code: "kr",
        fifaRanking: 23,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Geen WK-historie tussen de twee landen. Zuid-Korea is met spelers als Son Heung-min en Lee Kang-in individueel sterker, maar Tsjechië kan met tactische discipline en fysieke kracht compenseren. Een gelijkspel zou al een goed resultaat zijn."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Tomáš Souček", role: "Aanvoerder & motor op middenveld", detail: "West Ham United-middenvelder die bekendstaat om zijn kopkracht, loopvermogen en doelpunten vanuit de tweede lijn. De onbetwiste leider van het team." },
      { name: "Patrik Schick", role: "Spits & topscorer", detail: "Bayer Leverkusen-aanvaller die op het EK 2020 vijf keer scoorde, waaronder een legendarische goal van de middenlijn tegen Schotland. De grootste doelpuntendreiging." },
      { name: "Adam Hložek", role: "Aanvaller & veelzijdig talent", detail: "TSG Hoffenheim-aanvaller die zowel als spits als op de vleugel kan spelen. Jong (23), technisch begaafd en het toekomstige boegbeeld van Tsjechisch voetbal." },
      { name: "Matěj Kovář", role: "Doelman", detail: "PSV Eindhoven-keeper met Nederlandse Eredivisie-ervaring. Betrouwbaar en kalm onder druk, de nummer één onder de lat." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Rijke WK-traditie: twee WK-finales als Tsjechoslowakije (1934, 1962)",
      "Sterke fysieke en tactische discipline – typisch Midden-Europees voetbal",
      "Ervaren kern met spelers uit Europese topcompetities (Souček, Schick, Hložek)",
      "Kopkracht en standaardsituaties als wapen",
      "Onderschatte outsider: minder druk dan favorieten"
    ],
    weaknesses: [
      "Slechts één WK als onafhankelijk Tsjechië (2006, groepsfase-exit)",
      "Geen absolute wereldsterren in de huidige selectie",
      "Vergrijzing: Schick en Souček naderen de dertig",
      "Beperkte aanvallende creativiteit buiten standaardsituaties",
      "Weinig recente grote-toernooiervaring op WK-niveau"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 45,
      roundOf32: 25,
      roundOf16: 10,
      quarterFinal: 3,
      semiFinal: 1,
      champion: 0.2,
      mostLikelyResult: "Groepsfase / Derde in de groep",
      summary: "Tsjechië is de outsider van Groep A en zal het moeilijk krijgen tegen Mexico en Zuid-Korea. De wedstrijd tegen Zuid-Afrika wordt cruciaal – een overwinning kan voldoende zijn voor een derde plaats en mogelijk kwalificatie als beste nummer drie. Het team mist de individuele klasse van de groepsfavorieten, maar kan met collectieve kracht en ervaring voor een verrassing zorgen."
    }
  },

  // ═══════════════════════════════════════════════════════
  // CANADA (teamId: 5) – Mede-gastland, Groep B
  // ═══════════════════════════════════════════════════════
  5: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 6,
      wins: 0,
      draws: 0,
      losses: 6,
      goalsFor: 2,
      goalsAgainst: 12
    },

    // ── WK-deelnames ──
    history: [
      { year: 1986, host: "Mexico",   result: "Groepsfase",  tag: "group",  detail: "WK-debuut, maar pijnlijk: drie nederlagen zonder eigen doelpunt. 0-1 vs Frankrijk, 0-2 vs Hongarije, 0-2 vs Sovjet-Unie. Canada werd het enige team zonder goal op het toernooi." },
      { year: 2022, host: "Qatar",    result: "Groepsfase",  tag: "group",  detail: "Terugkeer na 36 jaar. Ondanks veelbelovend spel (grote kansen gemist tegen België) drie keer verloren: 0-1 België, 1-4 Kroatië, 1-2 Marokko. Alphonso Davies scoorde Canada's eerste WK-goal ooit." }
    ],

    // ── Thuisvoordeel als gastland ──
    hostRecord: {
      intro: "Canada is mede-gastheer van het WK 2026, samen met Mexico en de Verenigde Staten. Het is de eerste keer dat Canada een WK organiseert. De groepswedstrijden worden gespeeld in Canadese steden, wat een enorm thuisvoordeel oplevert.",
      conclusion: "Als mede-gastheer heeft Canada geen eerdere ervaring als WK-organisator. Het Canadese publiek zal voor een unieke sfeer zorgen en het team een emotionele boost geven."
    },

    // ── Head-to-Head Groep B ──
    groupOpponents: [
      {
        name: "Bosnië-Herzegovina",
        code: "ba",
        fifaRanking: 58,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Geen WK-historie. Canada is als mede-gastheer en met een hogere FIFA-ranking de lichte favoriet. Bosnië-Herzegovina heeft meer WK-ervaring (2014), maar Canada beschikt over betere individuele spelers in de Europese topcompetities."
      },
      {
        name: "Qatar",
        code: "qa",
        fifaRanking: 45,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Geen WK-precedenten. Canada is op papier de favoriet, zeker met thuisvoordeel. Qatar verloor alle drie de wedstrijden op het WK 2022 als gastland en zal het zonder thuispubliek nog moeilijker krijgen."
      },
      {
        name: "Zwitserland",
        code: "ch",
        fifaRanking: 19,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Zwitserland is de sterkste tegenstander in Groep B met FIFA-ranking 19 en vier opeenvolgende WK-achtste finales (2006-2022). Canada zal hier als underdog moeten spelen, maar het thuisvoordeel kan het verschil maken."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Alphonso Davies", role: "Vleugelverdediger & sterspeler", detail: "Bayern Munich-verdediger en de snelste speler van de selectie. Scoorde Canada's allereerste WK-doelpunt (vs Kroatië in 2022). Absoluut boegbeeld van het Canadese voetbal." },
      { name: "Jonathan David", role: "Topscorer & spits", detail: "Juventus-aanvaller en Canada's meest productieve speler. Snelle, technische spits met oog voor goal in de Europese topcompetities." },
      { name: "Cyle Larin", role: "Ervaren aanvaller", detail: "Southampton-spits met meer dan 30 interlandgoals. Grote wedstrijdspeler die op cruciale momenten kan scoren." },
      { name: "Stephen Eustáquio", role: "Controlerende middenvelder", detail: "Los Angeles FC-middenvelder die de balans op het middenveld bewaakt. Technisch sterk en tactisch intelligent, de stille kracht van het team." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Enorm thuisvoordeel als mede-gastheer met fanatiek publiek",
      "Individuele topkwaliteit: Davies (Bayern), David (Juventus)",
      "Snelheid en atletisch vermogen in de omschakeling",
      "Jonge, hongerige selectie die geschiedenis wil schrijven",
      "Ervaring opgedaan op WK 2022 als leerschool"
    ],
    weaknesses: [
      "Nog nooit een WK-wedstrijd gewonnen (0 zeges in 6 duels)",
      "Beperkte WK-traditie: slechts twee eerdere deelnames",
      "Defensieve kwetsbaarheid: 12 tegendoelpunten in 6 WK-wedstrijden",
      "Gebrek aan ervaring in knock-outwedstrijden op het hoogste niveau",
      "Breedte van de selectie: groot niveauverschil tussen sterkhouders en reserves"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 72,
      roundOf32: 45,
      roundOf16: 20,
      quarterFinal: 7,
      semiFinal: 2,
      champion: 0.5,
      mostLikelyResult: "Ronde van 32 / Achtste finale",
      summary: "Canada heeft als mede-gastheer een gouden kans om voor het eerst de WK-groepsfase te overleven. Met Davies en David beschikt het team over de individuele klasse om Bosnië-Herzegovina en Qatar te verslaan. De wedstrijd tegen Zwitserland wordt de lakmoesproef. Het thuispubliek kan het verschil maken – maar de nul overwinningen in zes WK-wedstrijden is een zorgwekkende statistiek."
    }
  },

  // ═══════════════════════════════════════════════════════
  // BOSNIË-HERZEGOVINA (teamId: 6) – Groep B
  // ═══════════════════════════════════════════════════════
  6: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 3,
      wins: 1,
      draws: 0,
      losses: 2,
      goalsFor: 4,
      goalsAgainst: 4
    },

    // ── WK-deelnames ──
    history: [
      { year: 2014, host: "Brazilië",  result: "Groepsfase",  tag: "group",  detail: "Historisch WK-debuut als onafhankelijke natie. Verlies tegen Argentinië (1-2, doelpunt Ibišević), verlies tegen Nigeria (0-1), maar troostrijke afsluiting met 3-1 zege op Iran (doelpunten Džeko, Pjanić en Vršajević). Uitgeschakeld ondanks niveauvolle prestaties." }
    ],

    // ── Head-to-Head Groep B ──
    groupOpponents: [
      {
        name: "Canada",
        code: "ca",
        fifaRanking: 43,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "even",
        matches: [],
        analysis: "Geen WK-precedenten. Canada is als mede-gastheer de lichte favoriet dankzij thuisvoordeel, maar Bosnië-Herzegovina heeft meer ervaring in Europese kwalificatiecampagnes. Een open wedstrijd die beide kanten op kan vallen."
      },
      {
        name: "Qatar",
        code: "qa",
        fifaRanking: 45,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Geen WK-historie. Bosnië-Herzegovina is favoriet tegen Qatar, dat op het eigen WK 2022 alle drie de wedstrijden verloor. De Europese kwaliteit en ervaring van spelers als Džeko en Demirović zou het verschil moeten maken."
      },
      {
        name: "Zwitserland",
        code: "ch",
        fifaRanking: 19,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Zwitserland is de favoriet van Groep B met veel meer WK-ervaring en een sterkere selectie. Bosnië-Herzegovina zal zich als underdog moeten opstellen en hopen op een tegenstoot. Een punt zou al een uitstekend resultaat zijn."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Edin Džeko", role: "Aanvoerder & legende", detail: "Schalke 04-spits en de all-time topscorer van Bosnië-Herzegovina met meer dan 65 interlandgoals. Op 40-jarige leeftijd waarschijnlijk zijn laatste WK – een levende legende die het team inspireert." },
      { name: "Ermedin Demirović", role: "Aanvaller & opvolger", detail: "VfB Stuttgart-spits die uitgroeide tot de nieuwe spits naast Džeko. Snelheid, techniek en doelgerichtheid maken hem de toekomst van de Bosnische aanval." },
      { name: "Sead Kolašinac", role: "Ervaren verdediger", detail: "Atalanta-verdediger met Champions League-ervaring. Fysiek dominant en ervaren op het hoogste niveau, de hoeksteen van de defensie." },
      { name: "Nikola Vasilj", role: "Doelman", detail: "FC St. Pauli-keeper die zich bewees in de Bundesliga. Betrouwbaar en kalm, een solide laatste lijn." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Ervaren aanval met Edin Džeko als inspirerend boegbeeld",
      "Fysiek sterke en strijdlustige selectie – typisch Balkan-voetbal",
      "Europese competitie-ervaring bij meerdere spelers",
      "Niets te verliezen: underdog-mentaliteit kan bevrijdend werken",
      "Sterke teamgeest en nationale trots als drijfveer"
    ],
    weaknesses: [
      "Minimale WK-ervaring: slechts drie wedstrijden gespeeld",
      "Verouderde selectie: Džeko (40) en Kolašinac (33) naderen het einde",
      "Beperkte breedte: groot kwaliteitsverschil tussen basis en bank",
      "Nooit de WK-groepsfase overleefd",
      "Geen toernooiervaring op het hoogste niveau buiten het WK 2014"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 30,
      roundOf32: 15,
      roundOf16: 5,
      quarterFinal: 1.5,
      semiFinal: 0.3,
      champion: 0.05,
      mostLikelyResult: "Groepsfase-uitschakeling / Derde in de groep",
      summary: "Bosnië-Herzegovina is een sympathieke outsider in Groep B. De wedstrijd tegen Qatar is cruciaal voor het overleven, terwijl punten tegen Canada of Zwitserland als bonus gelden. Džeko's laatste WK kan voor extra motivatie zorgen, maar de selectie mist de breedte en kwaliteit om structureel mee te draaien. Een derde groepsplaats is het realistische doel."
    }
  },

  // ═══════════════════════════════════════════════════════
  // QATAR (teamId: 7) – Groep B
  // ═══════════════════════════════════════════════════════
  7: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 3,
      wins: 0,
      draws: 0,
      losses: 3,
      goalsFor: 1,
      goalsAgainst: 7
    },

    // ── WK-deelnames ──
    history: [
      { year: 2022, host: "Qatar 🏠",  result: "Groepsfase",  tag: "group",  detail: "Als gastland schreef Qatar ongewilde geschiedenis: het werd de eerste gastheer ooit die alle drie de groepswedstrijden verloor. 0-2 tegen Ecuador in de openingswedstrijd, 1-3 tegen Senegal (Mohammed Muntari scoorde het enige Qatarese WK-doelpunt), en 0-2 tegen Nederland. Totaal: 1 goal voor, 7 tegen." }
    ],

    // ── Head-to-Head Groep B ──
    groupOpponents: [
      {
        name: "Canada",
        code: "ca",
        fifaRanking: 43,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Geen WK-historie. Canada is als mede-gastheer en met individueel sterkere spelers (Davies, David) de favoriet. Qatar zal zich moeten bewijzen zonder het thuisvoordeel van 2022."
      },
      {
        name: "Bosnië-Herzegovina",
        code: "ba",
        fifaRanking: 58,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "even",
        matches: [],
        analysis: "Geen WK-precedenten. De wedstrijd tegen Bosnië-Herzegovina is waarschijnlijk de meest haalbare voor Qatar in Groep B. Beide teams hebben beperkte WK-ervaring, maar Bosnië beschikt over meer Europese topspelers."
      },
      {
        name: "Zwitserland",
        code: "ch",
        fifaRanking: 19,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Zwitserland is veruit de sterkste tegenstander voor Qatar. De Nati hebben twaalf eerdere WK-deelnames en spelers bij Europese topclubs. Qatar zal een mirakel nodig hebben om hier iets te halen."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Akram Afif", role: "Sterspeler & Aziatisch Voetballer van het Jaar", detail: "Al-Sadd-aanvaller en tweevoudig Aziatisch Voetballer van het Jaar. De creatieve motor van het team met een uitzonderlijke dribbel en vrije trap. De beste speler die Qatar ooit heeft voortgebracht." },
      { name: "Almoez Ali", role: "Topscorer & spits", detail: "Al-Duhail-aanvaller en Qatar's all-time topscorer. Scoorde 9 goals op de Azië Cup 2019 – een record. Snelle, beweeglijke spits die vanuit de diepte gevaarlijk is." },
      { name: "Mohammed Muntari", role: "Aanvaller & WK-doelpuntenmaker", detail: "Al-Gharafa-spits die Qatar's enige WK-doelpunt ooit scoorde (tegen Senegal in 2022). Fysiek sterke targetman." },
      { name: "Meshaal Barsham", role: "Doelman", detail: "Al-Sadd-keeper en eerste keus onder de lat. Ervaren internationaal die op het WK 2022 onder grote druk stond." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Tweevoudig Aziatisch kampioen (2019, 2023) – dominant in de regio",
      "Sterspeler Akram Afif is een verschilmaker op individueel niveau",
      "Tactisch georganiseerd onder ervaren Europese coach Lopetegui",
      "Ervaring uit het WK 2022, hoe pijnlijk ook, geeft leermomenten",
      "Financiële middelen voor topfaciliteiten en voorbereiding"
    ],
    weaknesses: [
      "WK-record: 0 zeges, 0 gelijkspelen, 3 nederlagen – slechtste gastheer ooit",
      "Alle spelers actief in de Qatarese competitie – laag competitieniveau",
      "Geen uitpubliek-voordeel meer zoals in 2022",
      "Fysiek en qua snelheid ondergeschikt aan Europese en Amerikaanse tegenstanders",
      "Nauwelijks ervaring tegen topteams buiten Aziatisch voetbal"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 15,
      roundOf32: 6,
      roundOf16: 2,
      quarterFinal: 0.5,
      semiFinal: 0.1,
      champion: 0.02,
      mostLikelyResult: "Groepsfase-uitschakeling",
      summary: "Qatar wordt wederom als een van de zwakste teams op het WK beschouwd. Het verlies van alle drie de wedstrijden op het eigen WK 2022 is een zware hypotheek. Zonder thuisvoordeel en met een selectie die volledig in de eigen competitie speelt, is de groepsfase overleven vrijwel onmogelijk. De Azië Cup-successen vertalen zich niet naar WK-niveau. Een eervol punt zou al een overwinning zijn."
    }
  },

  // ═══════════════════════════════════════════════════════
  // ZWITSERLAND (teamId: 8) – Groep B
  // ═══════════════════════════════════════════════════════
  8: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 40,
      wins: 15,
      draws: 10,
      losses: 15,
      goalsFor: 60,
      goalsAgainst: 62
    },

    // ── WK-deelnames ──
    history: [
      { year: 1934, host: "Italië",         result: "Kwartfinale",   tag: "qf",     detail: "Eerste WK-deelname. Zege op Nederland (3-2) in de eerste ronde, maar verlies in kwartfinale tegen Tsjechoslowakije (2-3)." },
      { year: 1938, host: "Frankrijk",       result: "Kwartfinale",   tag: "qf",     detail: "Na een herkansing tegen Duitsland (1-1, herw. 4-2) verloor Zwitserland in de kwartfinale van Hongarije (0-2)." },
      { year: 1950, host: "Brazilië",        result: "Groepsfase",    tag: "group",  detail: "Wisselvallige groepsfase: zege op Mexico (2-1), maar twee nederlagen tegen het sterke Joegoslavië en Brazilië." },
      { year: 1954, host: "Zwitserland 🏠",  result: "Kwartfinale",   tag: "qf",     detail: "Als gastland een memorabel toernooi. Zege op Italië (2-1) in de groepsfase, maar in de kwartfinale het legendarische 5-7 verlies tegen Oostenrijk – de meest doelpuntrijke WK-wedstrijd ooit." },
      { year: 1962, host: "Chili",           result: "Groepsfase",    tag: "group",  detail: "Zwak toernooi: geen overwinning in de groepsfase en vroeg naar huis." },
      { year: 1966, host: "Engeland",        result: "Groepsfase",    tag: "group",  detail: "Opnieuw uitgeschakeld in de groepsfase na een zware loting." },
      { year: 1994, host: "VS",              result: "Achtste finale", tag: "r16",   detail: "Terugkeer na 28 jaar! Spectaculaire 4-1 zege op Roemenië, maar in de achtste finale kansloos verloren tegen Spanje (0-3)." },
      { year: 2006, host: "Duitsland",       result: "Achtste finale", tag: "r16",   detail: "Indrukwekkend toernooi: geen enkel tegendoelpunt in de reguliere speeltijd. Groep gewonnen voor Frankrijk. In achtste finale 0-0 tegen Oekraïne, maar verlies na strafschoppen (0-3 pen) – zonder een enkele penalty te benutten." },
      { year: 2010, host: "Zuid-Afrika",      result: "Groepsfase",    tag: "group",  detail: "Verrassende 1-0 zege op titelhouder Spanje in de openingswedstrijd (Fernandes), maar daarna verlies tegen Chili (0-1) en gelijkspel tegen Honduras (0-0). Uitgeschakeld op doelsaldo." },
      { year: 2014, host: "Brazilië",        result: "Achtste finale", tag: "r16",   detail: "Groepsfase overleefd achter Frankrijk. In de achtste finale 0-1 verlies tegen Argentinië na verlenging – Di María scoorde in blessuretijd van de reguliere speeltijd... nee, Messi's assist en Angel Di María's goal in de verlenging besliste." },
      { year: 2018, host: "Rusland",         result: "Achtste finale", tag: "r16",   detail: "Ongeslagen in de groepsfase: 1-1 tegen Brazilië, 2-1 zege op Servië (omstreden Shaqiri-viering), 2-2 tegen Costa Rica. In achtste finale 0-1 verlies tegen Zweden." },
      { year: 2022, host: "Qatar",           result: "Achtste finale", tag: "r16",   detail: "Groep gewonnen voor Brazilië! 1-0 zege op Kameroen (Embolo), 3-2 zege op Servië, 0-1 verlies tegen Brazilië. Maar in achtste finale een vernederende 1-6 afstraffing door Portugal." }
    ],

    // ── Head-to-Head Groep B ──
    groupOpponents: [
      {
        name: "Canada",
        code: "ca",
        fifaRanking: 43,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Geen WK-precedenten. Zwitserland is op papier de duidelijke favoriet met meer WK-ervaring en een sterkere selectie. Maar Canada's thuisvoordeel als mede-gastheer maakt dit een lastigere wedstrijd dan de ranking doet vermoeden. De Nati moeten oppassen voor het enthousiasme van het Canadese publiek."
      },
      {
        name: "Bosnië-Herzegovina",
        code: "ba",
        fifaRanking: 58,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Geen WK-historie. Zwitserland is met FIFA-ranking 19 de duidelijke favoriet. Bosnië-Herzegovina kan met fysieke kracht en Džeko's ervaring voor problemen zorgen, maar de Nati zouden dit moeten winnen."
      },
      {
        name: "Qatar",
        code: "qa",
        fifaRanking: 45,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Geen WK-precedenten. Zwitserland is veruit favoriet. Qatar verloor alle drie de wedstrijden op het eigen WK 2022 – zonder thuisvoordeel is het verschil in kwaliteit enorm. Dit moet een zekere overwinning zijn voor de Nati."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Granit Xhaka", role: "Aanvoerder & leider op middenveld", detail: "Sunderland-middenvelder en de onbetwiste leider van de Nati. Meer dan 120 interlands, enorme ervaring en passie. Dictator van het tempo en de organisator van het Zwitserse spel." },
      { name: "Manuel Akanji", role: "Centrale verdediger", detail: "Inter Milan-verdediger en een van de beste centrumverdedigers in de Europese topcompetities. Sterk in de opbouw, snel en dominant in de lucht. De rots in de Zwitserse defensie." },
      { name: "Breel Embolo", role: "Spits & doelpuntenmaker", detail: "Rennes-aanvaller die op het WK 2022 de winnende treffer scoorde tegen Kameroen – zijn geboorteland, wat leidde tot een emotioneel non-celebration. Fysiek sterke spits met snelheid." },
      { name: "Gregor Kobel", role: "Doelman", detail: "Borussia Dortmund-keeper en een van de beste doelmannen van de Bundesliga. Jong (28) en atletisch, de toekomst onder de Zwitserse lat." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Enorme WK-ervaring: dertiende deelname, vier opeenvolgende achtste finales (2014-2022)",
      "Stabiele kern met spelers bij Europese topclubs",
      "Tactisch flexibel onder bondscoach Yakin",
      "Solide defensie met Akanji en Kobel als ruggengraat",
      "Bewezen vermogen om topteams te verrassen (Spanje verslagen in 2010, Brazilië gelijkgespeeld in 2018)"
    ],
    weaknesses: [
      "Plafond bij de achtste finale: nooit verder gekomen sinds 1954",
      "Pijnlijke knock-outnederlagen: 0-3 pen vs Oekraïne (2006), 1-6 vs Portugal (2022)",
      "Vergrijzing: Xhaka (33) en Embolo (29) naderen hun eindfase",
      "Beperkte topspits: geen echte wereldklasse-doelpuntenmaker",
      "Wisselvallig in grote toernooien – moeite om door te stoten"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 90,
      roundOf32: 65,
      roundOf16: 32,
      quarterFinal: 12,
      semiFinal: 4,
      champion: 1.2,
      mostLikelyResult: "Achtste finale / Kwartfinale",
      summary: "Zwitserland is de duidelijke favoriet van Groep B en moet probleemloos de groepsfase overleven. Met vier opeenvolgende achtste finales (2014-2022) is de Nati een vaste waarde in de knock-outfase. De grote vraag is of Zwitserland eindelijk het glazen plafond van de achtste finale kan doorbreken – iets wat sinds 1954 niet is gelukt. De selectie heeft de kwaliteit voor een kwartfinale, maar de mentale barrière bij beslissende wedstrijden blijft een zorg."
    }
  },

  // ═══════════════════════════════════════════════════════
  // BRAZILIË (teamId: 9) – Groep C
  // ═══════════════════════════════════════════════════════
  9: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 114,
      wins: 76,
      draws: 18,
      losses: 20,
      goalsFor: 237,
      goalsAgainst: 108
    },

    titles: [1958, 1962, 1970, 1994, 2002],

    // ── WK-deelnames ──
    history: [
      { year: 1930, host: "Uruguay",       result: "Groepsfase",   tag: "group",  detail: "Eerste WK-deelname ooit; uitgeschakeld in de groepsfase." },
      { year: 1934, host: "Italië",        result: "Eerste ronde", tag: "group",  detail: "Direct uitgeschakeld: 1-3 tegen Spanje." },
      { year: 1938, host: "Frankrijk",     result: "Halve finale", tag: "sf",     detail: "Derde plaats na verlies tegen Italië in de halve finale." },
      { year: 1950, host: "Brazilië 🏠",   result: "Finale",       tag: "final",  detail: "Het 'Maracanazo': verlies 1-2 tegen Uruguay in de beslissende wedstrijd voor 200.000 toeschouwers." },
      { year: 1954, host: "Zwitserland",   result: "Kwartfinale",  tag: "qf",     detail: "Verlies 2-4 tegen Hongarije in de beruchte 'Slag van Bern'." },
      { year: 1958, host: "Zweden",        result: "🏆 Winnaar",   tag: "final",  detail: "Eerste wereldtitel! De 17-jarige Pelé scoorde zes doelpunten. Brazilië versloeg Zweden met 5-2 in de finale." },
      { year: 1962, host: "Chili",         result: "🏆 Winnaar",   tag: "final",  detail: "Tweede titel op rij. Garrincha nam de rol van de geblesseerde Pelé over en leidde Brazilië naar de titel." },
      { year: 1966, host: "Engeland",      result: "Groepsfase",   tag: "group",  detail: "Schokkende groepsfase-exit. Pelé werd hardhandig aangepakt en Brazilië verloor van Hongarije en Portugal." },
      { year: 1970, host: "Mexico",        result: "🏆 Winnaar",   tag: "final",  detail: "Het beste elftal aller tijden: Pelé, Jairzinho, Rivelino, Tostão. 4-1 zege op Italië in de finale. Mocht de Jules Rimet-trofee definitief houden." },
      { year: 1974, host: "West-Duitsland", result: "Vierde plaats", tag: "sf",   detail: "Halve finale bereikt maar verslagen door Nederland (0-2). Werd vierde." },
      { year: 1978, host: "Argentinië",    result: "Derde plaats", tag: "sf",     detail: "Derde plaats na verlies in de halve finale tegen gastland Argentinië." },
      { year: 1982, host: "Spanje",        result: "Tweede ronde", tag: "group",  detail: "Ondanks fantastisch voetbal (Zico, Sócrates, Falcão) uitgeschakeld door Italië (2-3) – Paolo Rossi's hattrick." },
      { year: 1986, host: "Mexico",        result: "Kwartfinale",  tag: "qf",     detail: "Verlies na strafschoppen tegen Frankrijk in de kwartfinale." },
      { year: 1990, host: "Italië",        result: "Achtste finale", tag: "r16",  detail: "Teleurstellend toernooi; 0-1 verlies tegen Argentinië (Maradona) in de achtste finale." },
      { year: 1994, host: "VS",            result: "🏆 Winnaar",   tag: "final",  detail: "Vierde titel na strafschoppenreeks (3-2) tegen Italië in de finale. Romário werd topscorer en beste speler." },
      { year: 1998, host: "Frankrijk",     result: "Finale",       tag: "final",  detail: "Verlies 0-3 in de finale tegen gastland Frankrijk. Ronaldo's mysterieuze toeval vlak voor de wedstrijd blijft een raadsel." },
      { year: 2002, host: "Japan/Z-Korea", result: "🏆 Winnaar",   tag: "final",  detail: "Vijfde titel! Ronaldo scoorde twee keer in de finale tegen Duitsland (2-0). Het magische trio Ronaldo-Rivaldo-Ronaldinho was onstuitbaar." },
      { year: 2006, host: "Duitsland",     result: "Kwartfinale",  tag: "qf",     detail: "Verlies 0-1 tegen Frankrijk. Het 'magische kwartet' (Ronaldo, Ronaldinho, Kaká, Adriano) faalde." },
      { year: 2010, host: "Zuid-Afrika",    result: "Kwartfinale",  tag: "qf",     detail: "Verlies 1-2 tegen Nederland na vroege rode kaart voor Felipe Melo." },
      { year: 2014, host: "Brazilië 🏠",   result: "Halve finale", tag: "sf",     detail: "Het 'Mineiraço': vernederende 1-7 nederlaag tegen Duitsland in de halve finale. Grootste trauma in de Braziliaanse voetbalgeschiedenis." },
      { year: 2018, host: "Rusland",       result: "Kwartfinale",  tag: "qf",     detail: "Verlies 1-2 tegen België. Kompany en De Bruyne waren te sterk." },
      { year: 2022, host: "Qatar",         result: "Kwartfinale",  tag: "qf",     detail: "Na strafschoppen uitgeschakeld door Kroatië (2-4 pen) na 1-1 in verlenging. Neymar scoorde, maar Kroatië maakte in de 117e minuut gelijk." }
    ],

    // ── Head-to-Head Groep C ──
    groupOpponents: [
      {
        name: "Marokko",
        code: "ma",
        fifaRanking: 13,
        h2hSummary: "2 WK-duels: 1 winst Brazilië, 1 gelijkspel",
        verdict: "fav",
        matches: [
          { tournament: "WK 1998 Groepsfase", score: "3-0", detail: "Rivaldo, Ronaldo en Bebeto scoorden in een overtuigende zege. Brazilië domineerde volledig." },
          { tournament: "WK 2022 Halve finale (niet direct)", score: "n.v.t.", detail: "Beide teams speelden op het WK 2022 maar troffen elkaar niet. Marokko bereikte historisch de halve finale." }
        ],
        analysis: "Brazilië won het enige directe WK-duel ruim (3-0 in 1998), maar Marokko is sindsdien enorm gegroeid. De Atlas Leeuwen schreven in 2022 geschiedenis als eerste Afrikaans land in een WK-halve finale. Met spelers als Achraf Hakimi en Brahim Díaz bij Real Madrid en PSG is Marokko een serieuze tegenstander. Dit wordt de zwaarste groepswedstrijd voor Brazilië."
      },
      {
        name: "Haïti",
        code: "ht",
        fifaRanking: 88,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Brazilië en Haïti hebben elkaar nooit op een WK ontmoet. Haïti nam alleen in 1974 deel en verloor al hun wedstrijden. Het niveauverschil is enorm: Brazilië is vijfvoudig wereldkampioen met spelers bij topclubs, terwijl Haïti voor het eerst in 52 jaar op een WK staat. Een ruime Braziliaanse zege wordt verwacht."
      },
      {
        name: "Schotland",
        code: "gb-sct",
        fifaRanking: 45,
        h2hSummary: "3 WK-duels: 2 winst Brazilië, 1 gelijkspel",
        verdict: "fav",
        matches: [
          { tournament: "WK 1974 Groepsfase", score: "0-0", detail: "Verrassend gelijkspel. Schotland hield stand tegen het Brazilië van Rivelino en Jairzinho." },
          { tournament: "WK 1982 Groepsfase", score: "4-1", detail: "Brazilië was oppermachtig. Zico, Sócrates en Éder scoorden in een klassiek duel." },
          { tournament: "WK 1998 Openingswedstrijd", score: "2-1", detail: "De openingswedstrijd van het WK 1998 in Parijs. Tom Boyd (eigen doelpunt) en een briljante solo van Collins gaven spanning, maar Brazilië won door goals van César Sampaio en Boyd's eigen doelpunt." }
        ],
        analysis: "Brazilië heeft twee van de drie WK-duels met Schotland gewonnen en het enige gelijkspel was in 1974. Schotland heeft in acht WK-deelnames nooit de groepsfase overleefd – een uniek negatief record. Andy Robertson en Scott McTominay zijn sterke spelers, maar het collectieve niveau van Schotland is niet genoeg om Brazilië serieus te bedreigen."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Vinícius Júnior", role: "Sterspeler & aanvaller", detail: "Ballon d'Or-winnaar en het gezicht van het nieuwe Brazilië. Onhoudbaar in één-tegen-één situaties, beslissend in grote wedstrijden bij Real Madrid. Draagt de hoop van 210 miljoen Brazilianen." },
      { name: "Raphinha", role: "Aanvallende motor", detail: "Barcelona-ster die uitgroeide tot een van de beste vleugelspelers ter wereld. Combineert snelheid, techniek en scorend vermogen. Onmisbaar in de voorhoede." },
      { name: "Bruno Guimarães", role: "Controleur & regisseur", detail: "De middenvelder van Newcastle United is het kloppend hart van de Seleção. Combineert elegantie aan de bal met enorme werkijver. De opvolger van Casemiro als onmisbare schakel." },
      { name: "Endrick", role: "Wonderkind & superspits", detail: "Pas 19 jaar maar al international. De Lyon-aanvaller wordt gezien als de toekomst van het Braziliaans voetbal. Fysiek sterk, dodelijk in de afwerking." },
      { name: "Marquinhos", role: "Aanvoerder & rots in de verdediging", detail: "De PSG-verdediger is al jarenlang de leider achterin. Brengt ervaring, rust en organisatie. Speelt zijn derde WK." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Recordhouder met 5 wereldtitels – het meeste WK-ervaring ter wereld",
      "Individuele klasse: Vinícius Júnior, Raphinha en Endrick bij Europese topclubs",
      "Aanvallende rijkdom: diepste selectie ter wereld qua aanvallers",
      "Historisch het meest succesvolle WK-team: 76 overwinningen in 114 wedstrijden",
      "Nieuwe generatie hongerig naar revanche na teleurstellingen in 2014, 2018 en 2022"
    ],
    weaknesses: [
      "Sinds 2002 geen wereldtitel – langste droogte ooit voor Brazilië (24 jaar)",
      "Kwartfinale-vloek: vier opeenvolgende uitschakelingen in de kwartfinale (2006-2022)",
      "Verdediging kwetsbaar: soms te open en individuele fouten in cruciale duels",
      "Tactische flexibiliteit soms beperkt – afhankelijk van individuele briljantie",
      "Druk en verwachtingen: het gewicht van vijf sterren op het shirt kan verlammend werken"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 98,
      roundOf32: 90,
      roundOf16: 70,
      quarterFinal: 45,
      semiFinal: 28,
      champion: 12,
      mostLikelyResult: "Kwartfinale / Halve finale",
      summary: "Brazilië is een van de grootste favorieten voor de wereldtitel en moet Groep C probleemloos overleven. Met Vinícius Júnior als absolute sterspeler en een <strong>enorm aanvallend potentieel</strong> is de Seleção gevaarlijk voor ieder team. De grote vraag is of deze generatie de kwartfinale-vloek kan doorbreken. <em>Een halve finale of verder is realistisch – de zesde ster is het ultieme doel.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // MAROKKO (teamId: 10) – Groep C
  // ═══════════════════════════════════════════════════════
  10: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 23,
      wins: 7,
      draws: 6,
      losses: 10,
      goalsFor: 27,
      goalsAgainst: 30
    },

    // ── WK-deelnames ──
    history: [
      { year: 1970, host: "Mexico",        result: "Groepsfase",    tag: "group",  detail: "Eerste WK-deelname. Verloor van West-Duitsland (1-2) en Peru (0-3), gelijkspel tegen Bulgarije (1-1)." },
      { year: 1986, host: "Mexico",        result: "Achtste finale", tag: "r16",   detail: "Eerste Afrikaans land dat een WK-groep won! 0-0 vs Engeland, 0-0 vs Polen, 3-1 winst op Portugal. In de achtste finale 0-1 verlies tegen West-Duitsland door een laat doelpunt van Matthäus." },
      { year: 1994, host: "VS",            result: "Groepsfase",    tag: "group",  detail: "Twee nederlagen en één gelijkspel. Uitgeschakeld in de groepsfase." },
      { year: 1998, host: "Frankrijk",     result: "Groepsfase",    tag: "group",  detail: "Memorabele 3-0 zege op Schotland, maar verlies tegen Brazilië (0-3) en Noorwegen (2-2) kostte kwalificatie." },
      { year: 2018, host: "Rusland",       result: "Groepsfase",    tag: "group",  detail: "Verlies tegen Iran (0-1) en Portugal (0-1), winst tegen Spanje (2-2 werd 1-2). Net niet genoeg." },
      { year: 2022, host: "Qatar",         result: "Halve finale",  tag: "sf",     detail: "Historisch! Eerste Afrikaans en Arabisch land in een WK-halve finale. Groep gewonnen (0-0 vs Kroatië, 2-0 vs België, 2-1 vs Canada). Achtste finale: 3-0 vs Spanje (pen). Kwartfinale: 1-0 vs Portugal. Halve finale: 0-2 vs Frankrijk. Vierde plaats na 1-2 verlies in troostfinale vs Kroatië." }
    ],

    // ── Head-to-Head Groep C ──
    groupOpponents: [
      {
        name: "Brazilië",
        code: "br",
        fifaRanking: 5,
        h2hSummary: "1 WK-duel: 1 verlies",
        verdict: "unfav",
        matches: [
          { tournament: "WK 1998 Groepsfase", score: "0-3", detail: "Brazilië was veel te sterk. Rivaldo, Ronaldo en Bebeto scoorden." }
        ],
        analysis: "Marokko verloor het enige WK-duel tegen Brazilië ruim (0-3 in 1998), maar is sindsdien een totaal ander team geworden. De historische vierde plaats op het WK 2022 bewijst dat de Atlas Leeuwen op het hoogste niveau kunnen presteren. Toch blijft Brazilië met vijf wereldtitels de grote favoriet in dit duel."
      },
      {
        name: "Haïti",
        code: "ht",
        fifaRanking: 88,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Marokko en Haïti troffen elkaar nooit op een WK. Het kwaliteitsverschil is groot: Marokko heeft spelers bij Europese topclubs en was halve finalist in 2022, terwijl Haïti na 52 jaar afwezigheid terugkeert. Een overtuigende Marokkaanse overwinning is de verwachting."
      },
      {
        name: "Schotland",
        code: "gb-sct",
        fifaRanking: 45,
        h2hSummary: "1 WK-duel: 1 winst Marokko",
        verdict: "fav",
        matches: [
          { tournament: "WK 1998 Groepsfase", score: "3-0", detail: "Marokko's meest overtuigende WK-overwinning ooit. Hadda, Hadji en eigen doelpunt van Boyd bezegelden het lot van Schotland in de openingswedstrijd van Groep A." }
        ],
        analysis: "Marokko won het enige WK-duel met Schotland overtuigend (3-0 in 1998). Schotland heeft nooit de groepsfase van een WK overleefd. Marokko is op basis van de FIFA-ranking, recente prestaties en individuele kwaliteit de duidelijke favoriet in dit duel."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Achraf Hakimi", role: "Aanvoerder & vleugelback", detail: "De PSG-verdediger is een van de beste backs ter wereld. Zijn snelheid, techniek en aanvallende bijdragen maken hem onmisbaar. Held van het WK 2022 met de beslissende strafschop tegen Spanje." },
      { name: "Brahim Díaz", role: "Creatieve spelmaker", detail: "Real Madrid-aanvaller die koos voor Marokko. Technisch briljant en beslissend in de laatste pass. De creatieve motor van de Atlas Leeuwen." },
      { name: "Yassine Bounou", role: "Keeper & muur", detail: "De Al-Hilal-doelman was uitblinker op het WK 2022. Zijn reddingen tegen Spanje en Portugal waren cruciaal voor de historische halve finale." },
      { name: "Sofyan Amrabat", role: "Verdedigende middenvelder", detail: "De motor op het middenveld. Onvermoeibaar, sterk in de duels en tactisch intelligent. Was een van de beste middenvelders van het WK 2022." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "WK 2022-erfenis: bewezen op het hoogste niveau met historische vierde plaats",
      "Verdedigende organisatie: slechts twee tegendoelpunten in de reguliere speeltijd op het WK 2022",
      "Europese topspelers: Hakimi (PSG), Brahim Díaz (Real Madrid), Mazraoui (Man United)",
      "Teamgeest en mentaliteit: de hechte groep is de grote kracht van Marokko",
      "Ervaring: veel spelers speelden al samen op het WK 2022"
    ],
    weaknesses: [
      "Scorend vermogen: soms moeite met doelpunten maken tegen gesloten verdedigingen",
      "Druk van verwachtingen: na 2022 zijn de verwachtingen enorm gestegen",
      "Diepte selectie: buiten de basiself is het kwaliteitsverschil merkbaar",
      "Fysieke belasting: veel spelers combineren zware clubseizoenen met interlands",
      "Afhankelijkheid van WK 2022-kern: vergrijzing dreigt bij enkele sterkhouders"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 85,
      roundOf32: 60,
      roundOf16: 40,
      quarterFinal: 22,
      semiFinal: 10,
      champion: 3,
      mostLikelyResult: "Achtste finale / Kwartfinale",
      summary: "Marokko is na de historische vierde plaats op het WK 2022 geen verrassing meer, maar een <strong>gevestigde kracht</strong>. De Atlas Leeuwen hebben een zware groep met Brazilië, maar moeten als tweede doorkomen. Met Achraf Hakimi en Brahim Díaz hebben ze spelers van wereldklasse. <em>Een herhaling van de halve finale is ambitieus maar niet onrealistisch – de kwartfinale is het minimum.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // HAÏTI (teamId: 11) – Groep C
  // ═══════════════════════════════════════════════════════
  11: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 3,
      wins: 0,
      draws: 0,
      losses: 3,
      goalsFor: 2,
      goalsAgainst: 14
    },

    // ── WK-deelnames ──
    history: [
      { year: 1974, host: "West-Duitsland", result: "Groepsfase", tag: "group", detail: "Enige eerdere WK-deelname. Verloor alle drie wedstrijden: 0-3 vs Italië, 1-7 vs Polen (Lato scoorde een hattrick), 1-4 vs Argentinië. Emmanuel Sanon scoorde de historische goal tegen Italië die Dino Zoff's ongeslagen reeks van 1.142 minuten doorbrak." }
    ],

    // ── Head-to-Head Groep C ──
    groupOpponents: [
      {
        name: "Brazilië",
        code: "br",
        fifaRanking: 5,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Haïti heeft Brazilië nooit ontmoet op een WK. Het verschil in klasse is immens: Brazilië is vijfvoudig wereldkampioen met een selectie vol spelers bij de absolute wereldtop. Voor Haïti zou een doelpunt al een historische prestatie zijn."
      },
      {
        name: "Marokko",
        code: "ma",
        fifaRanking: 13,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Geen WK-geschiedenis tussen beide landen. Marokko is na de halve finale van 2022 een gevestigde waarde op het wereldtoneel. Haïti zal alles uit de kast moeten halen om iets te bereiken tegen de Atlas Leeuwen."
      },
      {
        name: "Schotland",
        code: "gb-sct",
        fifaRanking: 45,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Haïti en Schotland troffen elkaar nooit op een WK. Schotland is op papier de sterkere ploeg, maar heeft zelf ook een moeilijk WK-verleden – ze overleefden nooit de groepsfase. Dit is wellicht Haïti's beste kans op een resultaat in de groep."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Jean-Ricner Bellegarde", role: "Creatieve middenvelder", detail: "De Wolverhampton-middenvelder is de meest ervaren speler in Europese topcompetities. Technisch sterk en de motor van het Haïtiaanse spel." },
      { name: "Wilson Isidor", role: "Aanvaller & goaltjesdief", detail: "De Sunderland-spits heeft snelheid en scorend vermogen. Een van de weinige spelers met ervaring in een Europese topcompetitie." },
      { name: "Frantzdy Pierrot", role: "Spits & fysieke kracht", detail: "Ervaren spits die met zijn fysiek en kopkracht een aanspeelpunt is in de voorhoede." },
      { name: "Lenny Joseph", role: "Jonge aanvaller", detail: "De Ferencváros-aanvaller is een van de talenten van deze selectie. Snel en direct in zijn acties." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Underdog-mentaliteit: niets te verliezen, alles te winnen",
      "Historisch moment: de terugkeer na 52 jaar geeft enorme motivatie",
      "Snelle aanvallers: spelers als Wilson Isidor en Lenny Joseph hebben snelheid",
      "Passie: het hele land staat achter het team – enorme emotionele steun",
      "Verrassing: tegenstanders weten weinig over het Haïtiaanse speelsysteem"
    ],
    weaknesses: [
      "Kwaliteitsverschil: de meeste spelers spelen bij clubs ver onder het WK-niveau",
      "Geen WK-ervaring: geen enkele speler heeft ooit op een WK gespeeld",
      "Verdediging kwetsbaar: in 1974 kregen ze 14 tegendoelpunten in 3 wedstrijden",
      "Beperkte diepte: de selectie mist breedte en alternatieven",
      "Fysieke en tactische achterstand ten opzichte van alle groepstegenstanders"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 3,
      roundOf32: 1,
      roundOf16: 0.3,
      quarterFinal: 0.1,
      semiFinal: 0,
      champion: 0,
      mostLikelyResult: "Groepsfase (laatste plaats)",
      summary: "Haïti keert na <strong>52 jaar</strong> terug op het wereldtoneel en dat is op zich al een historische prestatie. In een groep met Brazilië, Marokko en Schotland is doorkomst vrijwel uitgesloten. Het realistische doel is een goed resultaat tegen Schotland en wellicht een historisch doelpunt. <em>De deelname zelf is de overwinning – elk punt is een bonus.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // SCHOTLAND (teamId: 12) – Groep C
  // ═══════════════════════════════════════════════════════
  12: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 23,
      wins: 4,
      draws: 7,
      losses: 12,
      goalsFor: 25,
      goalsAgainst: 41
    },

    // ── WK-deelnames ──
    history: [
      { year: 1954, host: "Zwitserland",    result: "Groepsfase",  tag: "group",  detail: "Eerste WK-deelname. Verloor 0-1 van Oostenrijk en 0-7 van Uruguay. Scoorde geen enkel doelpunt." },
      { year: 1958, host: "Zweden",          result: "Groepsfase",  tag: "group",  detail: "Drie wedstrijden, één gelijkspel (1-1 vs Joegoslavië), twee nederlagen. Weer uitgeschakeld." },
      { year: 1974, host: "West-Duitsland",  result: "Groepsfase",  tag: "group",  detail: "Ongeslagen maar toch uit! 2-0 vs Zaïre, 0-0 vs Brazilië, 1-1 vs Joegoslavië. Uitgeschakeld op doelsaldo – het enige ongeslagen team dat in de groepsfase sneuvelde." },
      { year: 1978, host: "Argentinië",      result: "Groepsfase",  tag: "group",  detail: "Archie Gemmill scoorde een van de mooiste WK-goals ooit (3-1 vs Nederland), maar Peru-nederlaag (1-3) werd fataal. Weer uit op doelsaldo." },
      { year: 1982, host: "Spanje",          result: "Groepsfase",  tag: "group",  detail: "Opnieuw uitgeschakeld op doelsaldo na gelijkspelen tegen de USSR en Nieuw-Zeeland. De vloek van het doelsaldo zette door." },
      { year: 1986, host: "Mexico",          result: "Groepsfase",  tag: "group",  detail: "Verlies tegen Denemarken (0-1) en West-Duitsland (1-2), gelijkspel tegen Uruguay (0-0). Weer laatste in de groep." },
      { year: 1990, host: "Italië",          result: "Groepsfase",  tag: "group",  detail: "Verlies tegen Costa Rica (0-1, sensatie), gelijkspel vs Zweden (2-1 verlies), winst op Brazilië werd net niet genoeg." },
      { year: 1998, host: "Frankrijk",       result: "Groepsfase",  tag: "group",  detail: "Openingswedstrijd: 1-2 verlies tegen Brazilië. 1-1 vs Noorwegen, 0-3 verlies van Marokko. Achtste opeenvolgende uitschakeling in de groepsfase." }
    ],

    // ── Head-to-Head Groep C ──
    groupOpponents: [
      {
        name: "Brazilië",
        code: "br",
        fifaRanking: 5,
        h2hSummary: "3 WK-duels: 2 verlies, 1 gelijkspel",
        verdict: "unfav",
        matches: [
          { tournament: "WK 1974 Groepsfase", score: "0-0", detail: "Heroïsch gelijkspel. Schotland hield de Braziliaanse wereldkampioen op 0-0." },
          { tournament: "WK 1982 Groepsfase", score: "1-4", detail: "Brazilië was oppermachtig. Zico en Éder waren ongrijpbaar." },
          { tournament: "WK 1998 Openingswedstrijd", score: "1-2", detail: "Opening van het WK in Parijs. Collins scoorde voor Schotland, maar Boyd's eigen doelpunt werd fataal." }
        ],
        analysis: "Schotland verloor twee van de drie WK-duels tegen Brazilië. Het gelijkspel van 1974 blijft een gouden herinnering, maar het krachtsverschil is onverminderd groot. Brazilië is vijfvoudig wereldkampioen en Schotland moet vooral hopen op de andere wedstrijden."
      },
      {
        name: "Marokko",
        code: "ma",
        fifaRanking: 13,
        h2hSummary: "1 WK-duel: 1 verlies",
        verdict: "unfav",
        matches: [
          { tournament: "WK 1998 Groepsfase", score: "0-3", detail: "Pijnlijke nederlaag. Marokko scoorde drie keer en Schotland was kansloos." }
        ],
        analysis: "Het enige WK-duel eindigde in een vernederende 0-3 nederlaag voor Schotland. Marokko is sindsdien alleen maar sterker geworden met de historische halve finale in 2022. Schotland is op basis van recente prestaties en individuele kwaliteit de underdog in dit duel."
      },
      {
        name: "Haïti",
        code: "ht",
        fifaRanking: 88,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Geen eerdere WK-ontmoetingen. Dit is de meest haalbare wedstrijd voor Schotland in de groep. Haïti keerde na 52 jaar terug op het WK en mist ervaring op het hoogste niveau. Een overwinning is essentieel als Schotland eindelijk de groepsfase wil overleven."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Andy Robertson", role: "Aanvoerder & vleugelback", detail: "De Liverpool-verdediger is de onbetwiste leider van Schotland. Zijn aanvallende loopvermogen, voorzetten en leiderschap zijn cruciaal." },
      { name: "Scott McTominay", role: "Box-to-box middenvelder", detail: "De Napoli-middenvelder is de motor en doelpuntenmachine van Schotland. Scoort regelmatig en brengt fysieke kracht op het middenveld." },
      { name: "John McGinn", role: "Aanvallende middenvelder", detail: "De Aston Villa-speler brengt energie, techniek en ervaring. Een van de weinige Schotse spelers met ervaring in de Champions League." },
      { name: "Ché Adams", role: "Spits & aanspeelpunt", detail: "De Torino-spits is de meest complete aanvaller van Schotland. Sterk in de combinatie en gevaarlijk voor het doel." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Strijdlust en teamgeest: de Tartan Army-mentaliteit – nooit opgeven",
      "Ervaren kern: Robertson, McTominay en McGinn spelen bij Europese topclubs",
      "Verdedigende discipline onder Steve Clarke: moeilijk te verslaan",
      "Fanatieke aanhang: de Tartan Army is een van de beste supportersgroepen ter wereld",
      "Motivatie: na 8 groepsfase-exits in 8 WK's is de honger om eindelijk door te breken enorm"
    ],
    weaknesses: [
      "Negatief WK-record: 8 deelnames, 0 keer voorbij de groepsfase – uniek in het voetbal",
      "Beperkt aanvallend vermogen: slechts 25 goals in 23 WK-wedstrijden",
      "Gebrek aan individuele klasse in vergelijking met topteams",
      "Mentale belasting: de druk van de historische groepsfase-vloek",
      "Diepte selectie: buiten de basis-11 valt de kwaliteit snel weg"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 25,
      roundOf32: 12,
      roundOf16: 5,
      quarterFinal: 2,
      semiFinal: 0.5,
      champion: 0.1,
      mostLikelyResult: "Groepsfase (3e of 4e plaats)",
      summary: "Schotland staat voor een <strong>loodzware groep</strong> met Brazilië en Marokko. Het historische record – acht WK-deelnames zonder ooit de groepsfase te overleven – spreekt boekdelen. De wedstrijd tegen Haïti is cruciaal en een overwinning daar kan net genoeg zijn voor een derde plaats. <em>Als één van de beste nummers drie zou Schotland voor het eerst ooit een WK-knockoutwedstrijd spelen – dat zou al historisch zijn.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // VERENIGDE STATEN (teamId: 13) – Groep D (Gastland)
  // ═══════════════════════════════════════════════════════
  13: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 37,
      wins: 10,
      draws: 7,
      losses: 20,
      goalsFor: 40,
      goalsAgainst: 64
    },

    // ── WK-deelnames ──
    history: [
      { year: 1930, host: "Uruguay",       result: "Halve finale",  tag: "sf",    detail: "Verrassende halve finale op het eerste WK ooit. Verloor 1-6 van Argentinië. Bert Patenaude scoorde de eerste hattrick in WK-geschiedenis." },
      { year: 1934, host: "Italië",        result: "Eerste ronde",  tag: "group", detail: "Direct uitgeschakeld: 1-7 verlies tegen Italië." },
      { year: 1950, host: "Brazilië",      result: "Groepsfase",    tag: "group", detail: "Historische 1-0 zege op Engeland – een van de grootste sensaties in WK-geschiedenis. Joe Gaetjens scoorde het enige doelpunt." },
      { year: 1990, host: "Italië",        result: "Groepsfase",    tag: "group", detail: "Terugkeer na 40 jaar afwezigheid. Drie nederlagen, maar de VS waren weer terug op het wereldtoneel." },
      { year: 1994, host: "VS 🏠",         result: "Achtste finale", tag: "r16",  detail: "Als gastland de achtste finale bereikt. 1-1 vs Zwitserland, 2-1 vs Colombia, 0-1 vs Roemenië. In achtste finale 0-1 verlies tegen Brazilië." },
      { year: 1998, host: "Frankrijk",     result: "Groepsfase",    tag: "group", detail: "Drie nederlagen, nul punten. Donkere bladzijde." },
      { year: 2002, host: "Japan/Z-Korea", result: "Kwartfinale",   tag: "qf",    detail: "Beste prestatie in de moderne era! 3-2 vs Portugal, 1-1 vs Zuid-Korea, 0-3 vs Polen. Achtste finale: 2-0 vs aartsrivaal Mexico. Kwartfinale: 0-1 vs Duitsland." },
      { year: 2006, host: "Duitsland",     result: "Groepsfase",    tag: "group", detail: "Teleurstellend: 0-3 vs Tsjechië, 1-1 vs Italië, 1-2 vs Ghana. In de groepsfase gestrand." },
      { year: 2010, host: "Zuid-Afrika",    result: "Achtste finale", tag: "r16",  detail: "Donovan's legendarische goal in de 91e minuut vs Algerije (1-0) bezorgde groepswinst. Achtste finale: 1-2 n.v. verlies tegen Ghana." },
      { year: 2014, host: "Brazilië",      result: "Achtste finale", tag: "r16",  detail: "2-1 winst op Ghana, 2-2 vs Portugal (Varela's gelijkmaker in de 95e minuut), 0-1 vs Duitsland. Achtste finale: 1-2 n.v. tegen België – Tim Howard brak het record met 16 reddingen." },
      { year: 2022, host: "Qatar",         result: "Achtste finale", tag: "r16",  detail: "Pulisic scoorde tegen Iran (1-0) voor kwalificatie. 1-1 vs Wales, 0-0 vs Engeland. Achtste finale: 1-3 verlies tegen Nederland." }
    ],

    // ── Thuisvoordeel als gastland ──
    hostRecord: {
      intro: "De Verenigde Staten zijn mede-gastheer van het WK 2026 (samen met Mexico en Canada). Het merendeel van de wedstrijden wordt gespeeld op Amerikaans grondgebied. In 1994 organiseerden de VS het WK al eerder.",
      tournaments: [
        {
          year: 1994,
          matches: 4, wins: 1, draws: 1, losses: 2,
          detail: "De VS bereikten als gastland de achtste finale. 1-1 vs Zwitserland, 2-1 vs Colombia (de wedstrijd waarin Andrés Escobar een eigen doelpunt maakte), 0-1 vs Roemenië. In de achtste finale 0-1 tegen Brazilië. De toernooibezoekers-records staan nog steeds."
        }
      ],
      combined: { matches: 4, wins: 1, draws: 1, losses: 2, goalsFor: 3, goalsAgainst: 4 },
      conclusion: "In 1994 profiteerde de VS van het thuisvoordeel met een plek in de achtste finale. In 2026 is het team <strong>veel sterker</strong> dan in 1994, met spelers bij Europese topclubs. Het thuisvoordeel in stadions als MetLife Stadium (82.500) en AT&T Stadium (80.000) wordt enorm. De verwachtingen zijn navenant: het Amerikaanse publiek verwacht minstens een kwartfinale."
    },

    // ── Head-to-Head Groep D ──
    groupOpponents: [
      {
        name: "Paraguay",
        code: "py",
        fifaRanking: 52,
        h2hSummary: "1 WK-duel: 1 gelijkspel",
        verdict: "fav",
        matches: [
          { tournament: "WK 2002 Groepsfase (niet direct, maar naaste rivaal)", score: "n.v.t.", detail: "Beide teams speelden op het WK 2002 maar in verschillende groepen. Op WK-niveau hebben ze geen directe ontmoetingen gehad." }
        ],
        analysis: "Er zijn geen directe WK-ontmoetingen tussen de VS en Paraguay. De VS zijn als gastland en met hun huidige selectie de duidelijke favoriet. Paraguay mist de topspelers van weleer, maar is altijd een taaie Zuid-Amerikaanse tegenstander die moeilijk te verslaan is."
      },
      {
        name: "Australië",
        code: "au",
        fifaRanking: 24,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "De VS en Australië hebben elkaar nooit op een WK ontmoet. Beide teams zijn in vergelijkbare ontwikkeling: groeiende voetbalculturen met spelers in Europese competities. De VS hebben als gastland het voordeel van het publiek en de bekendere namen, maar Australië is een lastige tegenstander."
      },
      {
        name: "Turkije",
        code: "tr",
        fifaRanking: 42,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "Geen eerdere WK-ontmoetingen. Turkije bereikte in 2002 verrassend de halve finale en heeft met Arda Güler, Hakan Çalhanoğlu en Kenan Yıldız spelers van grote klasse. Dit wordt wellicht de spannendste wedstrijd in Groep D. Het thuisvoordeel kan het verschil maken voor de VS."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Christian Pulisic", role: "Aanvoerder & sterspeler", detail: "De AC Milan-aanvaller is het gezicht van het Amerikaanse voetbal. Technisch, snel en beslissend in grote wedstrijden. Scoorde cruciale goals op het WK 2022 tegen Iran." },
      { name: "Weston McKennie", role: "Box-to-box middenvelder", detail: "De Juventus-middenvelder combineert fysieke kracht met technische kwaliteit. Onvermoeibaar en altijd aanwezig in beide zestienmetergebieden." },
      { name: "Tyler Adams", role: "Aanvoerder & controleur", detail: "De Bournemouth-middenvelder is de tactische leider op het veld. Zijn positioneel spel en balverovering zijn van hoog niveau." },
      { name: "Giovanni Reyna", role: "Creatief talent", detail: "De zoon van Claudio Reyna is een uitzonderlijk talent. Bij Borussia Mönchengladbach toont hij zijn creatieve kwaliteiten. Kan het verschil maken met individuele acties." },
      { name: "Timothy Weah", role: "Snelle vleugelspeler", detail: "De Marseille-aanvaller en zoon van George Weah brengt snelheid en directheid. Gevaarlijk vanaf de flanken." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Enorm thuisvoordeel: het merendeel van de WK-wedstrijden op Amerikaans grondgebied",
      "Gouden generatie: Pulisic, McKennie, Adams, Reyna – allen bij Europese topclubs",
      "Atletische kracht: fysiek een van de sterkste teams ter wereld",
      "Groeiend voetbal: MLS trekt steeds meer talent en de jeugdopleiding verbetert snel",
      "Motivatie: als gastland voor eigen publiek spelen geeft extra energie"
    ],
    weaknesses: [
      "Wisselvalligheid: grote prestaties worden afgewisseld met teleurstellende resultaten",
      "Ervaring op het hoogste niveau: ondanks groei nog geen echte WK-traditie",
      "Verdediging: de achterhoede is het minst sterke onderdeel van het team",
      "Druk van verwachtingen: als gastland is alles minder dan de kwartfinale een teleurstelling",
      "Blessureg gevoeligheid: meerdere sterkhouders (Reyna, Adams) hebben blessureleed gekend"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 93,
      roundOf32: 72,
      roundOf16: 40,
      quarterFinal: 18,
      semiFinal: 7,
      champion: 2.5,
      mostLikelyResult: "Achtste finale / Kwartfinale",
      summary: "De VS zijn als gastland met een relatief gunstige groep een van de teams om in de gaten te houden. Met <strong>Christian Pulisic</strong> als sterspeler en een gouden generatie bij Europese topclubs is de achtste finale het minimum. Het thuisvoordeel in stadions als MetLife en AT&T Stadium wordt gigantisch. <em>Een kwartfinale – zoals in 2002 – is het realistische doel; de halve finale zou historisch zijn.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // PARAGUAY (teamId: 14) – Groep D
  // ═══════════════════════════════════════════════════════
  14: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 27,
      wins: 7,
      draws: 10,
      losses: 10,
      goalsFor: 30,
      goalsAgainst: 38
    },

    // ── WK-deelnames ──
    history: [
      { year: 1930, host: "Uruguay",       result: "Groepsfase",    tag: "group",  detail: "Deelname aan het allereerste WK. Verloor van de VS (0-3) en Argentinië (0-1)." },
      { year: 1950, host: "Brazilië",      result: "Groepsfase",    tag: "group",  detail: "Gelijkspel tegen Zweden (2-2), maar verlies tegen gastland Brazilië." },
      { year: 1958, host: "Zweden",        result: "Groepsfase",    tag: "group",  detail: "3-2 winst op Schotland in een memorabele wedstrijd, maar verder uitgeschakeld." },
      { year: 1986, host: "Mexico",        result: "Achtste finale", tag: "r16",   detail: "Eerste keer voorbij de groepsfase. 1-0 vs Irak, 1-1 vs Mexico, 0-2 vs België. Achtste finale: 0-3 verlies tegen Engeland (Lineker hattrick)." },
      { year: 1998, host: "Frankrijk",     result: "Achtste finale", tag: "r16",   detail: "Taaie verdediging met Chilavert in het doel. 0-0 vs Bulgarije, 0-0 vs Spanje, 3-1 vs Nigeria. Achtste finale: 0-1 verlies tegen gastland Frankrijk (Blanc golden goal)." },
      { year: 2002, host: "Japan/Z-Korea", result: "Achtste finale", tag: "r16",   detail: "Groep met Spanje, Zuid-Afrika en Slovenië. 2-2 vs Zuid-Afrika, 3-1 vs Slovenië, 1-3 vs Spanje. Achtste finale: 0-1 vs Duitsland (Neuville golden goal)." },
      { year: 2006, host: "Duitsland",     result: "Achtste finale", tag: "r16",   detail: "Solide groepsfase: 1-0 vs Trinidad & Tobago, 0-1 vs Engeland, 2-0 vs Zimbabwe. Achtste finale: verlies na strafschoppen (0-0, 1-3 pen) tegen Zweden." },
      { year: 2010, host: "Zuid-Afrika",    result: "Kwartfinale",   tag: "qf",    detail: "Beste WK-prestatie ooit! 1-1 vs Italië, 2-0 vs Slowakije, 0-0 vs Nieuw-Zeeland. Achtste finale: 0-0 (5-3 pen) vs Japan. Kwartfinale: 0-1 vs Spanje (Villa in de 83e minuut)." }
    ],

    // ── Head-to-Head Groep D ──
    groupOpponents: [
      {
        name: "Verenigde Staten",
        code: "us",
        fifaRanking: 11,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Paraguay en de VS hebben elkaar nooit op een WK ontmoet. De VS zijn als gastland en met hun huidige generatie Europese topspelers de favoriet. Paraguay zal zich moeten vastklampen aan hun beproefde verdedigende stijl om een resultaat af te dwingen."
      },
      {
        name: "Australië",
        code: "au",
        fifaRanking: 24,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "Geen eerdere WK-ontmoetingen. Australië en Paraguay zijn op papier vergelijkbaar qua niveau. Beide teams zijn taaie tegenstanders die lastig te verslaan zijn. Dit wordt een cruciale wedstrijd voor de tweede plaats in de groep."
      },
      {
        name: "Turkije",
        code: "tr",
        fifaRanking: 42,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "Geen WK-geschiedenis tussen beide landen. Turkije heeft meer individuele klasse met spelers als Arda Güler en Hakan Çalhanoğlu, maar Paraguay is een bekende WK-veteraan met ervaring in knockoutwedstrijden. Een evenwichtig duel."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Miguel Almirón", role: "Creatieve aanvaller", detail: "De Atlanta United-veteraan is de ervaren kracht in de selectie. Zijn snelheid en dribbels zijn nog steeds gevaarlijk, ondanks zijn leeftijd." },
      { name: "Julio Enciso", role: "Jong talent & aanvaller", detail: "De Strasbourg-aanvaller is een van de grootste talenten van het Paraguayaanse voetbal. Snel, technisch en onvoorspelbaar." },
      { name: "Gustavo Gómez", role: "Aanvoerder & verdediger", detail: "De Palmeiras-verdediger is de rots in de verdediging en aanvoerder. Brengt leiderschap en ervaring op het hoogste Zuid-Amerikaanse niveau." },
      { name: "Diego Gómez", role: "Dynamische middenvelder", detail: "De Brighton-middenvelder is de toekomst van het Paraguayaanse middenveld. Energiek, technisch en met een goed schot." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Verdedigende kracht: Paraguay is traditioneel een van de moeilijkst te verslaan teams",
      "WK-ervaring: 9 deelnames met meerdere achtste finales en een kwartfinale",
      "Strijdlust: de Guaraní-mentaliteit – nooit opgeven, altijd vechten",
      "Counteraanvallen: effectief in de omschakeling met snelle aanvallers",
      "Taaie groepsfase-spelers: historisch goed in het overleven van groepen"
    ],
    weaknesses: [
      "Kwaliteitsverlies: de gouden generatie (Chilavert, Santa Cruz, Valdez) is verdwenen",
      "Beperkte individuele klasse bij Europese topclubs",
      "Scorend vermogen: moeite met doelpunten maken – gemiddeld 1,1 per WK-wedstrijd",
      "Lange afwezigheid: niet op een WK sinds 2010 – 16 jaar zonder WK-ervaring",
      "Vergrijzing: enkele sterkhouders naderen het einde van hun internationale carrière"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 30,
      roundOf32: 15,
      roundOf16: 7,
      quarterFinal: 3,
      semiFinal: 1,
      champion: 0.2,
      mostLikelyResult: "Groepsfase (3e of 4e plaats)",
      summary: "Paraguay keert na <strong>16 jaar afwezigheid</strong> terug op het WK en staat voor een lastige groep met gastland VS, Australië en Turkije. De Albirroja missen de gouden generatie van 2010, maar brengen de traditionele Paraguayaanse vechtlust mee. <em>Doorkomst is mogelijk als derde, maar de kwaliteit in de groep maakt het moeilijk – de groepsfase is het meest waarschijnlijke eindstation.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // AUSTRALIË (teamId: 15) – Groep D
  // ═══════════════════════════════════════════════════════
  15: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 20,
      wins: 5,
      draws: 5,
      losses: 10,
      goalsFor: 22,
      goalsAgainst: 36
    },

    // ── WK-deelnames ──
    history: [
      { year: 1974, host: "West-Duitsland", result: "Groepsfase",    tag: "group",  detail: "Eerste WK-deelname. Drie nederlagen: 0-2 vs Oost-Duitsland, 0-3 vs West-Duitsland, 0-1 vs Chili. Geen doelpunten gescoord." },
      { year: 2006, host: "Duitsland",      result: "Achtste finale", tag: "r16",   detail: "Historisch! Na 32 jaar afwezigheid terug op het WK. 3-1 vs Japan (drie goals in 8 minuten), 0-2 vs Brazilië, 2-2 vs Kroatië. Achtste finale: 0-1 vs Italië (controversiële strafschop in de 95e minuut door Grosso)." },
      { year: 2010, host: "Zuid-Afrika",     result: "Groepsfase",    tag: "group",  detail: "1-4 vs Duitsland, 1-1 vs Ghana, 2-1 vs Servië. Net niet genoeg voor kwalificatie." },
      { year: 2014, host: "Brazilië",       result: "Groepsfase",    tag: "group",  detail: "Zware groep: 1-3 vs Chili, 2-3 vs Nederland (Cahill's spectaculaire volley), 0-3 vs Spanje." },
      { year: 2018, host: "Rusland",        result: "Groepsfase",    tag: "group",  detail: "1-2 vs Frankrijk, 0-1 vs Peru, 0-2 vs Denemarken. Drie nederlagen zonder overwinning." },
      { year: 2022, host: "Qatar",          result: "Achtste finale", tag: "r16",   detail: "Verrassend sterk! 1-4 vs Frankrijk, maar 1-0 vs Tunesië en 1-0 vs Denemarken bezorgden kwalificatie. Achtste finale: 1-2 vs Argentinië (Messi scoorde)." }
    ],

    // ── Head-to-Head Groep D ──
    groupOpponents: [
      {
        name: "Verenigde Staten",
        code: "us",
        fifaRanking: 11,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "De VS en Australië troffen elkaar nooit op een WK. De VS zijn als gastland de favoriet met een sterkere selectie. Australië moet hopen op een stunt om iets te bereiken in deze wedstrijd, maar de Socceroos hebben laten zien dat ze in staat zijn tot verrassingen – zoals de achtste finale in 2022."
      },
      {
        name: "Paraguay",
        code: "py",
        fifaRanking: 52,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "Geen WK-geschiedenis tussen beide teams. Australië en Paraguay zijn op papier vergelijkbaar. De Socceroos hebben recentere WK-ervaring (2022 achtste finale) en een iets sterkere selectie. Dit wordt een cruciaal duel voor beide teams."
      },
      {
        name: "Turkije",
        code: "tr",
        fifaRanking: 42,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "Geen WK-geschiedenis. Turkije heeft meer individuele klasse (Güler, Çalhanoğlu, Yıldız), maar Australië brengt teamgeest en discipline. Beide teams strijden om de tweede of derde plek in de groep."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Mathew Ryan", role: "Ervaren doelman", detail: "De Levante-doelman is al jarenlang de nummer één van Australië. Brengt ervaring en stabiliteit onder de lat. Speelt zijn vierde WK." },
      { name: "Jackson Irvine", role: "Aanvoerder & middenvelder", detail: "De FC St. Pauli-middenvelder is de leider en motor van het team. Sterk in de lucht en onvermoeibaar in de duels." },
      { name: "Harry Souttar", role: "Centrale verdediger", detail: "De Leicester City-verdediger is met zijn 198cm een imposante verschijning. Dominant in de lucht en sterk aan de bal." },
      { name: "Nestory Irankunda", role: "Jong talent & vleugelspeler", detail: "De Watford-aanvaller is een van de grootste Australische talenten. Snel, technisch en onvoorspelbaar op de flanken." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Teamgeest: de Socceroos compenseren individueel gebrek met collectieve kracht",
      "WK-ervaring: twee achtste finales (2006, 2022) tonen dat Australië kan presteren",
      "Fysieke kracht: atletisch sterke spelers die moeilijk te verslaan zijn",
      "Nooit opgeven-mentaliteit: bekendstaan om late comebacks",
      "Stabiele keeperspositie met Mathew Ryan als betrouwbare laatste lijn"
    ],
    weaknesses: [
      "Beperkte individuele klasse: weinig spelers bij Europese topclubs",
      "Scorend vermogen: moeite met doelpunten maken – afhankelijk van dode spelmomenten",
      "Defensieve kwetsbaarheid tegen topteams: 1-4 vs Frankrijk (2022), 1-4 vs Duitsland (2010)",
      "Diepte selectie: de bank is aanzienlijk minder sterk dan de basiself",
      "Lange reisafstanden: het tijdsverschil en de reizen vanuit Australië zijn belastend"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 40,
      roundOf32: 22,
      roundOf16: 10,
      quarterFinal: 4,
      semiFinal: 1.5,
      champion: 0.3,
      mostLikelyResult: "Groepsfase (2e of 3e plaats)",
      summary: "Australië heeft recentelijk bewezen dat ze kunnen verrassen op het WK, met achtste finales in 2006 en 2022. In Groep D met gastland VS, Turkije en Paraguay is <strong>doorkomst haalbaar maar niet vanzelfsprekend</strong>. De Socceroos zullen hun typische vechtlust nodig hebben. <em>De wedstrijden tegen Paraguay en Turkije worden beslissend – een derde plek als een van de beste nummers drie is het realistische doel.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // TURKIJE (teamId: 16) – Groep D
  // ═══════════════════════════════════════════════════════
  16: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 16,
      wins: 7,
      draws: 1,
      losses: 8,
      goalsFor: 25,
      goalsAgainst: 28
    },

    // ── WK-deelnames ──
    history: [
      { year: 1954, host: "Zwitserland",    result: "Groepsfase",    tag: "group",  detail: "Eerste WK-deelname. 7-0 winst op Zuid-Korea, maar 1-4 verlies tegen West-Duitsland en 2-7 in de herkansing. Spectaculaire maar wisselvallige prestatie." },
      { year: 2002, host: "Japan/Z-Korea",  result: "Halve finale",  tag: "sf",     detail: "Historisch! Turkije's grootste sportprestatie ooit. Groep: 1-2 vs Brazilië, 3-0 vs China, 3-0 vs Costa Rica. Achtste finale: 1-0 vs Japan. Kwartfinale: 1-0 vs Senegal (golden goal Şükür). Halve finale: 0-1 vs Brazilië. Troostfinale: 3-2 vs Zuid-Korea – Hakan Şükür scoorde na 11 seconden (snelste WK-goal ooit). Derde plaats!" }
    ],

    // ── Head-to-Head Groep D ──
    groupOpponents: [
      {
        name: "Verenigde Staten",
        code: "us",
        fifaRanking: 11,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "Turkije en de VS hebben elkaar nooit op een WK ontmoet. De VS zijn als gastland de favoriet, maar Turkije heeft met Arda Güler, Çalhanoğlu en Yıldız individueel misschien wel meer klasse. Het thuisvoordeel van de VS kan beslissend zijn in wat een gelijkwaardige wedstrijd belooft te worden."
      },
      {
        name: "Paraguay",
        code: "py",
        fifaRanking: 52,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Geen WK-geschiedenis. Turkije is op basis van de huidige selectie en FIFA-ranking sterker dan Paraguay. De Turken hebben meer individuele klasse en spelers bij Europese topclubs. Paraguay's verdedigende aanpak kan het lastig maken, maar Turkije zou deze wedstrijd moeten winnen."
      },
      {
        name: "Australië",
        code: "au",
        fifaRanking: 24,
        h2hSummary: "0 WK-duels: geen eerdere ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "Geen WK-geschiedenis. Australië heeft recentere WK-ervaring (2022 achtste finale) maar Turkije brengt meer individuele klasse mee. De Socceroos compenseren met collectieve kracht, terwijl Turkije vertrouwt op de magie van spelers als Arda Güler. Een gelijkwaardige strijd."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Hakan Çalhanoğlu", role: "Aanvoerder & spelmaker", detail: "De Inter Milan-middenvelder is de absolute leider van Turkije. Zijn vrije trappen, passing en schot van afstand zijn van wereldklasse. De ervaren kracht in het elftal." },
      { name: "Arda Güler", role: "Sterspeler & wonderkind", detail: "Het 21-jarige Real Madrid-talent wordt gezien als de grootste Turkse speler ooit. Vergelijking met Hagi zijn niet overdreven – zijn linkervoet is magisch. Het WK is zijn podium." },
      { name: "Kenan Yıldız", role: "Aanvaller & dribbelaar", detail: "De Juventus-aanvaller combineert techniek met snelheid. Op zijn 21e al basisspeler bij een Europese topclub. Vormt samen met Güler de toekomst van het Turkse voetbal." },
      { name: "Ferdi Kadıoğlu", role: "Dynamische back", detail: "De Brighton-verdediger is een van de beste backs in de Premier League. Zijn aanvallende runs en verdedigende discipline maken hem compleet." },
      { name: "Barış Alper Yılmaz", role: "Snelle vleugelspeler", detail: "De Galatasaray-aanvaller is razendsnel en directe gevaarlijk. Zijn snelheid en dribbels maken hem een geduchte tegenstander op de flanken." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Gouden generatie: Güler, Yıldız en Çalhanoğlu vormen een uitzonderlijk aanvallend trio",
      "2002-erfenis: de historische derde plaats bewijst dat Turkije op het hoogste niveau kan presteren",
      "Individuele klasse: meerdere spelers bij Europese topclubs (Real Madrid, Inter, Juventus, Brighton)",
      "Passie en publiek: Turkse fans zijn legendarisch luid en intimiderend",
      "Jonge, hongerige selectie: de meeste spelers zijn onder de 25 en willen zich bewijzen"
    ],
    weaknesses: [
      "Beperkte WK-ervaring: slechts twee eerdere deelnames (1954 en 2002)",
      "Wisselvalligheid: briljante prestaties worden afgewisseld met teleurstellende optredens",
      "Verdediging kwetsbaar: de aanvallende instelling kan achterin ruimtes laten",
      "Druk van verwachtingen: na de generatie van 2002 wacht Turkije al 24 jaar op een nieuw WK",
      "Gebrek aan toernooiervaring: de meeste spelers hebben nog nooit een WK gespeeld"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 55,
      roundOf32: 32,
      roundOf16: 18,
      quarterFinal: 8,
      semiFinal: 3,
      champion: 1,
      mostLikelyResult: "Achtste finale / Kwartfinale",
      summary: "Turkije keert na <strong>24 jaar afwezigheid</strong> terug op het WK met misschien wel de sterkste generatie ooit. Arda Güler (Real Madrid), Kenan Yıldız (Juventus) en Hakan Çalhanoğlu (Inter) vormen een driehoek van wereldklasse. In een groep met gastland VS, Australië en Paraguay is doorkomst zeker haalbaar. <em>Als de jonge sterren hun potentie waarmaken, kan Turkije net als in 2002 voor een verrassing zorgen – de kwartfinale is het ambitieuze maar realistische doel.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // DUITSLAND (teamId: 17) – UEFA, Groep E
  // ═══════════════════════════════════════════════════════
  17: {
    lastUpdated: "2026-06-09",
    overall: { matches: 112, wins: 68, draws: 20, losses: 24, goalsFor: 232, goalsAgainst: 130 },
    titles: [1954, 1974, 1990, 2014],
    history: [
      { year: 1934, host: "Italië", result: "Halve finale", tag: "sf", detail: "Derde plaats op het tweede WK ooit" },
      { year: 1938, host: "Frankrijk", result: "Eerste ronde", tag: "group", detail: "Vroege uitschakeling in het vooroorlogse toernooi" },
      { year: 1954, host: "Zwitserland", result: "Winnaar", tag: "final", detail: "Het 'Wunder von Bern' – 3-2 comeback tegen het oppermachtige Hongarije in de finale" },
      { year: 1958, host: "Zweden", result: "Halve finale", tag: "sf", detail: "Vierde plaats, verlies in halve finale" },
      { year: 1962, host: "Chili", result: "Kwartfinale", tag: "qf", detail: "Uitgeschakeld in de kwartfinale" },
      { year: 1966, host: "Engeland", result: "Finale", tag: "final", detail: "2-4 verlies tegen Engeland in de finale – het beruchte Wembley-doelpunt dat de grens mogelijk niet passeerde" },
      { year: 1970, host: "Mexico", result: "Halve finale", tag: "sf", detail: "Spectaculaire 3-4 nederlaag tegen Italië in de 'Wedstrijd van de Eeuw'" },
      { year: 1974, host: "West-Duitsland", result: "Winnaar", tag: "final", detail: "Op eigen bodem 2-1 zege op Nederland in de finale – Beckenbauer leidde de 'Mannschaft'" },
      { year: 1978, host: "Argentinië", result: "Tweede ronde", tag: "group", detail: "Uitgeschakeld in de tweede groepsfase" },
      { year: 1982, host: "Spanje", result: "Finale", tag: "final", detail: "1-3 verlies tegen Italië in de finale in Madrid" },
      { year: 1986, host: "Mexico", result: "Finale", tag: "final", detail: "2-3 verlies tegen Argentinië – Maradona was onstopbaar op dit toernooi" },
      { year: 1990, host: "Italië", result: "Winnaar", tag: "final", detail: "1-0 zege op Argentinië in de finale dankzij een penalty van Andreas Brehme" },
      { year: 1994, host: "VS", result: "Kwartfinale", tag: "qf", detail: "1-2 verlies tegen Bulgarije in de kwartfinale" },
      { year: 1998, host: "Frankrijk", result: "Kwartfinale", tag: "qf", detail: "0-3 verlies tegen Kroatië in de kwartfinale" },
      { year: 2002, host: "Japan/Zuid-Korea", result: "Finale", tag: "final", detail: "0-2 verlies tegen Brazilië in de finale – Ronaldo scoorde tweemaal" },
      { year: 2006, host: "Duitsland", result: "Halve finale", tag: "sf", detail: "Het 'Zomersprookje' als gastland – derde plaats na verlies in halve finale tegen Italië" },
      { year: 2010, host: "Zuid-Afrika", result: "Halve finale", tag: "sf", detail: "Indrukwekkende 4-0 zege op Argentinië in kwartfinale, maar verlies tegen Spanje in halve finale" },
      { year: 2014, host: "Brazilië", result: "Winnaar", tag: "final", detail: "Historische 7-1 vernedering van Brazilië in halve finale, 1-0 zege op Argentinië in finale door goal Götze in verlenging" },
      { year: 2018, host: "Rusland", result: "Groepsfase", tag: "group", detail: "Titelverdediger sensationeel uitgeschakeld in de groepsfase – 0-2 verlies tegen Zuid-Korea was het dieptepunt" },
      { year: 2022, host: "Qatar", result: "Groepsfase", tag: "group", detail: "Opnieuw een vroege exit in de groepsfase, ondanks een 4-2 zege op Costa Rica was het niet genoeg" },
    ],
    groupOpponents: [
      {
        name: "Curaçao",
        code: "cw",
        fifaRanking: 110,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Geen WK-ontmoetingen tussen deze twee landen. Duitsland is de absolute topfavoriet in dit duel en zal naar verwachting met ruime cijfers winnen. Curaçao maakt zijn WK-debuut en zal vooral defensief moeten overleven tegen de viervoudig wereldkampioen."
      },
      {
        name: "Ivoorkust",
        code: "ci",
        fifaRanking: 39,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Ondanks het ontbreken van directe WK-confrontaties is Duitsland duidelijk favoriet. Ivoorkust won de Afrika Cup 2024, maar heeft op WK-niveau nog nooit de groepsfase overleefd. Duitsland zal met hun kwaliteit en ervaring het verschil moeten maken tegen het atletische Ivoorkust."
      },
      {
        name: "Ecuador",
        code: "ec",
        fifaRanking: 28,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Ook tegen Ecuador zijn er geen eerdere WK-duels. Ecuador beschikt met Moisés Caicedo over een speler van wereldklasse en kan verrassend uit de hoek komen. Desondanks is Duitsland met hun superieure ervaring en bredere selectie de favoriet in deze ontmoeting."
      }
    ],
    keyPlayers: [
      { name: "Jamal Musiala", role: "Creatief genie", detail: "De 23-jarige Bayern-ster is uitgegroeid tot het creatieve middelpunt van de Mannschaft. Zijn dribbelvaardigheid en spelinzicht maken hem tot een van de beste spelers ter wereld." },
      { name: "Florian Wirtz", role: "Spelmaker", detail: "Samen met Musiala vormt Wirtz het gouden duo van het Duitse voetbal. Zijn technische klasse en oog voor de pass maken Duitsland onvoorspelbaar gevaarlijk." },
      { name: "Antonio Rüdiger", role: "Verdedigingsleider", detail: "De Real Madrid-verdediger is de onbetwiste leider van de Duitse achterhoede. Zijn fysieke kracht en ervaring op het hoogste niveau zijn onmisbaar." },
      { name: "Manuel Neuer", role: "Keeper-legende", detail: "Ondanks zijn leeftijd blijft Neuer een van de beste keepers ooit. Zijn ervaring en uitstraling geven de hele defensie vertrouwen op het grootste podium." },
      { name: "Joshua Kimmich", role: "Alleskunner", detail: "Kimmich kan zowel als rechtsback als op het middenveld uit de voeten en brengt intensiteit, leiderschap en technische kwaliteit in elke positie die hij bekleedt." }
    ],
    strengths: [
      "Enorme WK-ervaring met vier wereldtitels en acht finales",
      "Topspelers in alle linies met Musiala, Wirtz, Rüdiger en Kimmich",
      "Winnaarmentaliteit en bewezen vermogen om onder druk te presteren",
      "Tactische flexibiliteit onder coach Nagelsmann",
      "Diepte in de selectie met kwaliteitsalternatieven op elke positie"
    ],
    weaknesses: [
      "Twee opeenvolgende groepsfase-exits op het WK (2018 en 2022)",
      "Vergrijzende legende Neuer – keeperspositie is een risicofactor",
      "Enorme druk en verwachtingen na recente teleurstellingen",
      "Moeite om een consistente spitspositie in te vullen",
      "Mentale kwetsbaarheid wanneer het tegenzit, zoals gebleken in 2018 en 2022"
    ],
    prediction: {
      groupStage: 97,
      roundOf32: 88,
      roundOf16: 72,
      quarterFinal: 52,
      semiFinal: 32,
      champion: 14,
      mostLikelyResult: "Kwartfinale / Halve finale",
      summary: "Duitsland beschikt over een <strong>uitzonderlijk talentvolle selectie</strong> met het gouden duo <em>Musiala-Wirtz</em> als blikvangers. Na twee pijnlijke groepsfase-exits in 2018 en 2022 is de motivatie om te herstellen enorm. Met Nagelsmann aan het roer en een <strong>gunstige groep</strong> is de verwachting dat Duitsland comfortabel doorkomt, maar de vraag blijft of ze de <em>mentale demonen</em> van de recente toernooien kunnen overwinnen in de knock-outfase."
    }
  },

  // ═══════════════════════════════════════════════════════
  // CURAÇAO (teamId: 18) – CONCACAF, Groep E
  // ═══════════════════════════════════════════════════════
  18: {
    lastUpdated: "2026-06-09",
    overall: { matches: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
    history: [
      { year: 2026, host: "VS/Canada/Mexico", result: "Debuut", tag: "group", detail: "Eerste WK-deelname in de geschiedenis van Curaçao" }
    ],
    groupOpponents: [
      {
        name: "Duitsland",
        code: "de",
        fifaRanking: 3,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Curaçao staat voor een historische maar ontzettend zware opgave tegen de viervoudig wereldkampioen. Duitsland beschikt over een enorme kwaliteitsvoorsprong in alle linies. Voor Curaçao draait dit duel om het beperken van de schade en het genieten van het moment op het grootste voetbalpodium ter wereld."
      },
      {
        name: "Ivoorkust",
        code: "ci",
        fifaRanking: 39,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Ook tegen de regerende Afrika Cup-kampioen is Curaçao de underdog. Ivoorkust is fysiek sterk en beschikt over spelers die actief zijn in Europese topcompetities. Curaçao zal alles uit de kast moeten halen om een resultaat af te dwingen, maar een verrassing is nooit helemaal uitgesloten."
      },
      {
        name: "Ecuador",
        code: "ec",
        fifaRanking: 28,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Ecuador is een ervaren WK-ganger met spelers als Moisés Caicedo op het allerhoogste niveau. Curaçao zal in dit duel opnieuw als underdog beginnen. De snelheid en techniek van de Ecuadorianen vormen een grote uitdaging voor de Curaçaose verdediging."
      }
    ],
    keyPlayers: [
      { name: "Juninho Bacuna", role: "Aanvoerder en motor", detail: "De onbetwiste leider van Curaçao op het middenveld. Bacuna brengt ervaring uit het Europese clubvoetbal en is de drijvende kracht achter het team met zijn energie en passing." },
      { name: "Tahith Chong", role: "Creatief talent", detail: "De voormalige Manchester United-speler is met zijn dribbels en creativiteit de gevaarlijkste aanvallende speler van Curaçao. Kan het verschil maken in individuele acties." },
      { name: "Riechedly Bazoer", role: "Ervaren verdediger", detail: "Met zijn ervaring in de Nederlandse Eredivisie en daarbuiten brengt Bazoer rust en kwaliteit aan de bal in de verdediging. Zijn leiderschapskwaliteiten zijn onmisbaar." },
      { name: "Sontje Hansen", role: "Aanvallend talent", detail: "De snelle en technisch begaafde aanvaller kan met zijn snelheid en directe spel tegenstanders verrassen. Een potentiële matchwinner op zijn dag." },
      { name: "Eloy Room", role: "Ervaren doelman", detail: "Room brengt ervaring en stabiliteit onder de lat. Als laatste linie zal zijn rol cruciaal zijn in een toernooi waar Curaçao veel druk op de verdediging kan verwachten." }
    ],
    strengths: [
      "Historische motivatie – eerste WK ooit geeft extra energie en vastberadenheid",
      "Nederlandstalige kern met spelers opgeleid in het Nederlandse jeugdsysteem",
      "Ervaren coach Dick Advocaat die weet hoe je een underdog moet organiseren",
      "Niets te verliezen – kunnen zonder druk spelen en genieten",
      "Teamspirit en saamhorigheid van een klein eiland met een groot hart"
    ],
    weaknesses: [
      "Geen enkele WK-ervaring – alles is nieuw op dit podium",
      "Laagste FIFA-ranking in de groep met beperkte individuele kwaliteit",
      "Weinig spelers actief op het allerhoogste clubniveau",
      "Kleine talentenpool vergeleken met alle andere WK-deelnemers",
      "Fysiek en tactisch risico tegen sterkere tegenstanders"
    ],
    prediction: {
      groupStage: 5,
      roundOf32: 2,
      roundOf16: 0.5,
      quarterFinal: 0.1,
      semiFinal: 0.01,
      champion: 0.01,
      mostLikelyResult: "Groepsfase",
      summary: "Curaçao schrijft <strong>geschiedenis</strong> door zich voor het eerst voor een WK te plaatsen. Onder de ervaren leiding van <em>Dick Advocaat</em> zal het team alles geven, maar de realiteit is dat de groep met Duitsland, Ivoorkust en Ecuador <strong>extreem zwaar</strong> is. Het doel is om te <em>genieten van het moment</em>, competitief te zijn en misschien een historisch punt of zelfs een stunt te pakken. Doorgang naar de volgende ronde zou een <strong>absoluut wonder</strong> zijn."
    }
  },

  // ═══════════════════════════════════════════════════════
  // IVOORKUST (teamId: 19) – CAF, Groep E
  // ═══════════════════════════════════════════════════════
  19: {
    lastUpdated: "2026-06-09",
    overall: { matches: 9, wins: 1, draws: 2, losses: 6, goalsFor: 6, goalsAgainst: 15 },
    history: [
      { year: 2006, host: "Duitsland", result: "Groepsfase", tag: "group", detail: "WK-debuut in een zware groep met Argentinië en Nederland. Drogba leidde het team maar kon uitschakeling niet voorkomen" },
      { year: 2010, host: "Zuid-Afrika", result: "Groepsfase", tag: "group", detail: "Opnieuw een loodzware groep met Brazilië en Portugal. Geen enkele overwinning ondanks de gouden generatie" },
      { year: 2014, host: "Brazilië", result: "Groepsfase", tag: "group", detail: "Groep met Colombia, Griekenland en Japan. Verloor cruciaal van Colombia en Griekenland, weer geen doorgang" },
    ],
    groupOpponents: [
      {
        name: "Duitsland",
        code: "de",
        fifaRanking: 3,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Ivoorkust heeft nog nooit op een WK tegen Duitsland gespeeld. De viervoudig wereldkampioen is op papier veel sterker, maar Ivoorkust kan met hun atletische vermogen en snelheid gevaarlijk zijn op de counter. Een verrassing is mogelijk, maar Duitsland blijft de duidelijke favoriet."
      },
      {
        name: "Curaçao",
        code: "cw",
        fifaRanking: 110,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Tegen WK-debutant Curaçao is Ivoorkust de duidelijke favoriet. De Ivorianen beschikken over meer individuele kwaliteit en ervaring op het internationale podium. Dit is een wedstrijd die Ivoorkust moet winnen om kans te maken op doorgang naar de volgende ronde."
      },
      {
        name: "Ecuador",
        code: "ec",
        fifaRanking: 28,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "Een gelijkwaardige confrontatie tussen twee landen die strijden om de tweede of derde plaats in de groep. Ecuador heeft meer WK-ervaring en met Caicedo een wereldtopper, maar Ivoorkust is als Afrika Cup-houder vol vertrouwen. Dit wordt een sleutelduel voor beide teams."
      }
    ],
    keyPlayers: [
      { name: "Franck Kessié", role: "Ervaren middenvelder", detail: "De voormalige AC Milan-ster brengt enorme ervaring en fysieke kracht op het middenveld. Kessié is de motor van het team en onmisbaar in zowel aanvallend als verdedigend opzicht." },
      { name: "Simon Adingra", role: "Snelle vleugelaanvaller", detail: "Adingra is met zijn explosieve snelheid en dribbelvaardigheid een constante dreiging op de flanken. Was een van de uitblinkers tijdens de Afrika Cup 2024-triomf." },
      { name: "Amad Diallo", role: "Creatief talent", detail: "De Manchester United-aanvaller heeft zich ontwikkeld tot een van de gevaarlijkste aanvallers van het Afrikaanse continent. Zijn creativiteit en scorend vermogen maken hem een sleutelspeler." },
      { name: "Nicolas Pépé", role: "Ervaren aanvaller", detail: "De voormalige Arsenal-speler brengt ervaring op het hoogste niveau en kan met zijn individuele klasse op elk moment het verschil maken." },
      { name: "Odilon Kossounou", role: "Verdedigingsanker", detail: "De sterke en snelle centrumverdediger is het fundament van de Ivoriaanse achterhoede. Zijn fysieke dominantie en positioneel spel zijn van groot belang." }
    ],
    strengths: [
      "Afrika Cup 2024 winnaar – vol vertrouwen en winnaarservaring",
      "Atletisch en fysiek sterk team dat moeilijk te bespelen is",
      "Meerdere spelers actief in Europese topcompetities",
      "Snelle omschakeling en gevaarlijke counteraanvallen",
      "Teamgeest en collectieve vechtlust bewezen op de Afrika Cup"
    ],
    weaknesses: [
      "Nooit door de WK-groepsfase gekomen in drie eerdere deelnames",
      "Mist de supersterren van weleer zoals Drogba en Yaya Touré",
      "Relatief weinig WK-ervaring in de huidige selectie",
      "Verdediging kan kwetsbaar zijn tegen topteams",
      "Wisselvalligheid – kan op het hoogste niveau zowel schitteren als teleurstellen"
    ],
    prediction: {
      groupStage: 35,
      roundOf32: 18,
      roundOf16: 8,
      quarterFinal: 3,
      semiFinal: 1,
      champion: 0.3,
      mostLikelyResult: "Groepsfase / Ronde van 32",
      summary: "Als <strong>regerende Afrika Cup-kampioen</strong> komt Ivoorkust met vertrouwen naar het WK, maar de geschiedenis speelt niet in hun voordeel – ze kwamen <em>nog nooit door de groepsfase</em>. Met spelers als <strong>Kessié</strong>, <em>Adingra</em> en <strong>Amad Diallo</strong> is er voldoende kwaliteit om te verrassen. Het duel met Ecuador wordt cruciaal voor de tweede groepspositie, maar de vraag blijft of deze generatie de <em>WK-vloek</em> kan doorbreken."
    }
  },

  // ═══════════════════════════════════════════════════════
  // ECUADOR (teamId: 20) – CONMEBOL, Groep E
  // ═══════════════════════════════════════════════════════
  20: {
    lastUpdated: "2026-06-09",
    overall: { matches: 13, wins: 4, draws: 1, losses: 8, goalsFor: 13, goalsAgainst: 20 },
    history: [
      { year: 2002, host: "Japan/Zuid-Korea", result: "Groepsfase", tag: "group", detail: "Eerste WK ooit voor Ecuador. Won verrassend van Kroatië maar werd uitgeschakeld in de groepsfase" },
      { year: 2006, host: "Duitsland", result: "Achtste finale", tag: "r16", detail: "Beste WK-prestatie ooit. Tweede in de groep achter Duitsland, maar verloor in de achtste finale met 0-1 van Engeland" },
      { year: 2014, host: "Brazilië", result: "Groepsfase", tag: "group", detail: "Enner Valencia was topscorer met 3 doelpunten maar het was niet genoeg voor de volgende ronde" },
      { year: 2022, host: "Qatar", result: "Groepsfase", tag: "group", detail: "Sterke start met 2-0 zege op gastheer Qatar in de openingswedstrijd, maar uitgeschakeld na verlies tegen Senegal" },
    ],
    groupOpponents: [
      {
        name: "Duitsland",
        code: "de",
        fifaRanking: 3,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Hoewel er geen directe WK-confrontaties zijn, is Duitsland op basis van ranking en palmares de overduidelijke favoriet. Ecuador kan met de snelheid van hun team en de kwaliteit van Caicedo gevaarlijk zijn, maar een punt zou al een uitstekend resultaat zijn."
      },
      {
        name: "Curaçao",
        code: "cw",
        fifaRanking: 110,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Ecuador is de duidelijke favoriet tegen WK-debutant Curaçao. Met hun ervaring op WK-niveau en superieure individuele kwaliteit moet Ecuador in staat zijn om deze wedstrijd te winnen. Een overwinning hier is essentieel voor hun doorkomst-ambities."
      },
      {
        name: "Ivoorkust",
        code: "ci",
        fifaRanking: 39,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "Een gelijkwaardige confrontatie die waarschijnlijk beslissend zal zijn voor de tweede plek in de groep. Ecuador heeft iets meer WK-ervaring, maar Ivoorkust is als Afrika Cup-houder in topvorm. Het wordt een intense strijd waarin individuele klasse het verschil kan maken."
      }
    ],
    keyPlayers: [
      { name: "Moisés Caicedo", role: "Middenvelder Chelsea", detail: "De absolute sterspeler van Ecuador en een van de beste middenvelders ter wereld. Caicedo domineert het middenveld met zijn balverovering, passing en vermogen om het spel te dicteren." },
      { name: "Piero Hincapié", role: "Verdediger", detail: "De jonge verdediger heeft zich bij Arsenal ontwikkeld tot een van de beste linksbenige centrumverdedigers. Zijn opbouwend vermogen en leesvermogen maken hem onmisbaar." },
      { name: "Enner Valencia", role: "Veteraan-aanvoerder", detail: "De 35-jarige aanvoerder en all-time topscorer van Ecuador brengt onschatbare ervaring. Als dit zijn laatste WK wordt, zal hij alles geven voor een historische prestatie." },
      { name: "Kendry Páez", role: "Jong talent", detail: "Het 17-jarige supertalent wordt gezien als de toekomst van het Ecuadoriaanse voetbal. Zijn techniek en flair maken hem een opwindende speler om in de gaten te houden." },
      { name: "Willian Pacho", role: "Verdediger", detail: "De sterke centrumverdediger biedt stabiliteit achterin en is met zijn snelheid en fysieke kracht een betrouwbare kracht in de Ecuadoriaanse defensie." }
    ],
    strengths: [
      "Jong en atletisch team met enorme energie en loopvermogen",
      "Moisés Caicedo is een middenvelder van wereldklasse",
      "Gehard in de zware Zuid-Amerikaanse WK-kwalificatie",
      "Snelle omschakeling en gevaarlijke counteraanvallen",
      "Ervaring op WK-niveau met vier eerdere deelnames"
    ],
    weaknesses: [
      "Wisselvallig op grote toernooien – slechts één keer voorbij de groepsfase",
      "Weinig ervaring voorbij de achtste finale op WK-niveau",
      "Verdediging kan wankel zijn onder hoge druk van topteams",
      "Afhankelijk van Caicedo – als hij uitvalt, mist het team een aanjager",
      "Aanvallende productiviteit is soms inconsistent"
    ],
    prediction: {
      groupStage: 55,
      roundOf32: 30,
      roundOf16: 15,
      quarterFinal: 6,
      semiFinal: 2,
      champion: 0.5,
      mostLikelyResult: "Groepsfase / Ronde van 32",
      summary: "Ecuador beschikt met <strong>Moisés Caicedo</strong> over een middenvelder van absolute <em>wereldklasse</em> en heeft een jong, hongerig team samengesteld. De <strong>Zuid-Amerikaanse WK-kwalificatie</strong> heeft het team gehard, maar op het WK zelf bleef Ecuador vaak steken in de groepsfase. Het duel met <em>Ivoorkust</em> wordt waarschijnlijk beslissend voor doorgang. Met de ervaring van aanvoerder <strong>Enner Valencia</strong> en het talent van de jonge generatie heeft Ecuador de kwaliteit om te verrassen."
    }
  },

  // ═══════════════════════════════════════════════════════
  // NEDERLAND (teamId: 21) – UEFA, Groep F
  // ═══════════════════════════════════════════════════════
  21: {
    lastUpdated: "2026-06-09",
    overall: { matches: 54, wins: 29, draws: 11, losses: 14, goalsFor: 90, goalsAgainst: 56 },
    history: [
      { year: 1934, host: "Italië", result: "Eerste ronde", tag: "group", detail: "Vroege uitschakeling in de eerste ronde van het toernooi" },
      { year: 1938, host: "Frankrijk", result: "Eerste ronde", tag: "group", detail: "Opnieuw een vroege exit, verlies tegen Tsjecho-Slowakije" },
      { year: 1974, host: "West-Duitsland", result: "Finale", tag: "final", detail: "1-2 verlies tegen West-Duitsland in de finale. Het Totaalvoetbal van Cruijff betoverde de wereld maar de titel bleef uit" },
      { year: 1978, host: "Argentinië", result: "Finale", tag: "final", detail: "1-3 verlies na verlenging tegen Argentinië. Weer net niet – zonder Cruijff dit keer" },
      { year: 1990, host: "Italië", result: "Achtste finale", tag: "r16", detail: "1-2 verlies tegen West-Duitsland in de achtste finale. Rijkaard-Völler incident werd iconisch" },
      { year: 1994, host: "VS", result: "Kwartfinale", tag: "qf", detail: "2-3 verlies tegen Brazilië in een spectaculaire kwartfinale" },
      { year: 1998, host: "Frankrijk", result: "Halve finale", tag: "sf", detail: "1-2 verlies tegen Brazilië in de halve finale na een prachtig toernooi met Bergkamp's legendarische goal tegen Argentinië" },
      { year: 2006, host: "Duitsland", result: "Achtste finale", tag: "r16", detail: "0-1 verlies tegen Portugal in de beruchte 'Battle of Nuremberg' – 16 gele en 4 rode kaarten" },
      { year: 2010, host: "Zuid-Afrika", result: "Finale", tag: "final", detail: "0-1 verlies tegen Spanje in de finale na verlenging. Goal van Iniesta in de 116e minuut brak Nederlandse harten" },
      { year: 2014, host: "Brazilië", result: "Halve finale", tag: "sf", detail: "0-0 (2-4 na penalty's) verlies tegen Argentinië in halve finale, uiteindelijk derde plaats" },
      { year: 2022, host: "Qatar", result: "Kwartfinale", tag: "qf", detail: "2-3 verlies na penalty's tegen Argentinië in een dramatische kwartfinale na een 2-2 gelijkspel" },
    ],
    drieFinales: {
      intro: "Nederland is de meest succesvolle WK-ploeg die nooit de titel won. Drie keer stond Oranje in de WK-finale, drie keer ging de beker naar de tegenstander. De 'eeuwige nummer twee' is een bijnaam die het Nederlandse voetbal maar niet kan afschudden.",
      finals: [
        { year: 1974, opponent: "West-Duitsland", score: "1-2", detail: "Cruijff en het Totaalvoetbal betoverden de wereld. Nederland nam binnen een minuut de leiding via een penalty, maar de Duitsers kwamen terug en wonnen verdiend. De mooiste verliezer ooit." },
        { year: 1978, opponent: "Argentinië", score: "1-3 n.v.", detail: "Zonder Cruijff reisde Nederland af naar Argentinië. In een geladen sfeer in Buenos Aires verloor Oranje na verlenging. De controversiële omstandigheden en het thuisvoordeel van de Argentijnen voeden tot op de dag van vandaag discussies." },
        { year: 2010, opponent: "Spanje", score: "0-1 n.v.", detail: "De meest recente en misschien wel pijnlijkste finale. Robben miste een enorme kans en Iniesta scoorde in de 116e minuut voor Spanje. Nederland speelde hard en soms te agressief, maar kwam een handbreedte tekort." }
      ],
      conclusion: "Drie finales, nul titels – het is het tragische lot van het Nederlandse voetbal. Elke generatie draagt de last van de vorige, en de hoop dat Oranje ooit die eerste wereldtitel zal pakken, leeft onverminderd voort bij miljoenen fans."
    },
    groupOpponents: [
      {
        name: "Japan",
        code: "jp",
        fifaRanking: 14,
        h2hSummary: "1 WK-duel: WK 2022 R16, 3-1 winst voor Nederland",
        verdict: "fav",
        matches: [
          { tournament: "WK 2022 Achtste finale", score: "3-1", detail: "Nederland was te sterk voor Japan in de achtste finale. Gakpo opende de score en Oranje controleerde de wedstrijd overtuigend" }
        ],
        analysis: "In het enige WK-duel tussen beide landen won Nederland overtuigend met 3-1 in de achtste finale van het WK 2022. Japan is sindsdien verder gegroeid en beschikt over steeds meer spelers in Europese topcompetities. Desondanks is Nederland op basis van ervaring en individuele kwaliteit de favoriet in deze confrontatie."
      },
      {
        name: "Zweden",
        code: "se",
        fifaRanking: 18,
        h2hSummary: "Meerdere WK-duels: wisselende resultaten in een historische rivaliteit",
        verdict: "even",
        matches: [
          { tournament: "WK 1934 Eerste ronde", score: "2-3", detail: "Nederland verloor in de eerste ronde van het WK 1934 van Zweden" },
          { tournament: "WK 1974 Groepsfase", score: "0-0", detail: "Gelijkspel in de groepsfase van het legendarische WK 1974" }
        ],
        analysis: "Nederland en Zweden hebben een lange voetbalhistorie met wisselende resultaten op WK-niveau. Zweden beschikt met Isak en Gyökeres over een angstaanjagend spitsenduo dat elke verdediging pijn kan doen. Dit wordt een open en spannend duel tussen twee Europese ploegen met WK-ambitie."
      },
      {
        name: "Tunesië",
        code: "tn",
        fifaRanking: 40,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Er zijn geen eerdere WK-ontmoetingen tussen Nederland en Tunesië. Oranje is de duidelijke favoriet op basis van ranking en kwaliteit. Tunesië is echter een taaie tegenstander die verdedigend sterk georganiseerd is en al eerder voor verrassingen zorgde, zoals de 1-0 zege op Frankrijk op het WK 2022."
      }
    ],
    keyPlayers: [
      { name: "Virgil van Dijk", role: "Aanvoerder en rots in de verdediging", detail: "De onbetwiste leider van Oranje en een van de beste verdedigers ter wereld. Van Dijk brengt kalmte, kracht en leiderschap. Zonder hem is Nederland een ander team." },
      { name: "Frenkie de Jong", role: "Middenmeester", detail: "De Barcelona-middenvelder is het creatieve brein van het Nederlandse elftal. Zijn balcontrole, dribbels vanuit het middenveld en spelversnelling zijn uniek op het hoogste niveau." },
      { name: "Cody Gakpo", role: "Aanvallende dreiging", detail: "Gakpo was een van de beste spelers op het WK 2022 en is uitgegroeid tot de belangrijkste aanvallende kracht van Oranje. Zijn veelzijdigheid en scorend vermogen maken hem onmisbaar." },
      { name: "Memphis Depay", role: "Ervaren spits", detail: "De all-time topscorer van het Nederlands elftal brengt ervaring, scorend vermogen en persoonlijkheid. In grote wedstrijden stijgt Memphis vaak boven zichzelf uit." },
      { name: "Tijjani Reijnders", role: "Dynamisch middenveld", detail: "De AC Milan-middenvelder is uitgegroeid tot een vaste waarde bij Oranje. Zijn loopvermogen, techniek en vermogen om vanuit het middenveld op te duiken bij de aanval maken hem tot een moderne box-to-box speler." }
    ],
    strengths: [
      "Rijke WK-historie met drie finales en consistent hoog niveau",
      "Sterke verdediging gebouwd rond de wereldklasse van Virgil van Dijk",
      "Topkwaliteit in alle linies met spelers bij Europese topclubs",
      "Totaalvoetbal-DNA – aanvallend en technisch hoogstaand voetbal zit in de genen",
      "Ervaring op grote toernooien met een team dat weet wat het is om onder druk te presteren"
    ],
    weaknesses: [
      "Nul WK-titels ondanks drie finales – de mentale barricade in beslissende momenten",
      "Historische zwakte in finales en penaltyseries op het WK",
      "Soms te behoudend en pragmatisch onder coach Koeman",
      "Afhankelijk van Virgil van Dijk – zonder hem wankelt de defensie",
      "Gebrek aan een consistente doelpuntenmaker naast Gakpo en Memphis"
    ],
    prediction: {
      groupStage: 95,
      roundOf32: 82,
      roundOf16: 58,
      quarterFinal: 35,
      semiFinal: 18,
      champion: 7,
      mostLikelyResult: "Kwartfinale / Halve finale",
      summary: "Nederland gaat als een van de <strong>traditionele favorieten</strong> naar het WK met een selectie vol <em>kwaliteit en ervaring</em>. Onder leiding van aanvoerder <strong>Virgil van Dijk</strong> en met creatieve krachten als <em>Frenkie de Jong</em> en <strong>Cody Gakpo</strong> heeft Oranje de tools om ver te komen. De grote vraag blijft: kan deze generatie de <em>eeuwige nummer twee-vloek</em> doorbreken? De groep is haalbaar, maar in de knock-outfase wacht de ultieme test voor de <strong>drie keer verliezend finalist</strong>."
    }
  },

  // ═══════════════════════════════════════════════════════
  // JAPAN (teamId: 22) – AFC, Groep F
  // ═══════════════════════════════════════════════════════
  22: {
    lastUpdated: "2026-06-09",
    overall: { matches: 24, wins: 6, draws: 4, losses: 14, goalsFor: 24, goalsAgainst: 38 },
    history: [
      { year: 1998, host: "Frankrijk", result: "Groepsfase", tag: "group", detail: "WK-debuut voor Japan met drie nederlagen. Het begin van een lange WK-reis" },
      { year: 2002, host: "Japan/Zuid-Korea", result: "Achtste finale", tag: "r16", detail: "Als gastland historische groepszege en doorgang naar de achtste finale, verlies tegen Turkije" },
      { year: 2006, host: "Duitsland", result: "Groepsfase", tag: "group", detail: "Vroege uitschakeling zonder overwinning in een teleurstellend toernooi" },
      { year: 2010, host: "Zuid-Afrika", result: "Achtste finale", tag: "r16", detail: "Verloor na penalty's tegen Paraguay in de achtste finale – dichtbij de kwartfinale" },
      { year: 2014, host: "Brazilië", result: "Groepsfase", tag: "group", detail: "Geen overwinning in de groepsfase, een teleurstelling na de hoge verwachtingen" },
      { year: 2018, host: "Rusland", result: "Achtste finale", tag: "r16", detail: "Dramatisch 2-3 verlies tegen België na een 2-0 voorsprong – de pijnlijkste nederlaag in Japanse WK-geschiedenis" },
      { year: 2022, host: "Qatar", result: "Achtste finale", tag: "r16", detail: "Versloeg sensationeel zowel Duitsland (2-1) als Spanje (2-1) in de groepsfase! Verloor na penalty's tegen Kroatië in de achtste finale" },
    ],
    groupOpponents: [
      {
        name: "Nederland",
        code: "nl",
        fifaRanking: 7,
        h2hSummary: "1 WK-duel: WK 2022 R16, 1-3 verlies voor Japan",
        verdict: "unfav",
        matches: [
          { tournament: "WK 2022 Achtste finale", score: "1-3", detail: "Japan verloor duidelijk van Nederland in de achtste finale. Oranje was te sterk en controleerde de wedstrijd" }
        ],
        analysis: "Het enige WK-duel eindigde in een duidelijke 1-3 nederlaag voor Japan op het WK 2022. Nederland bleek toen een maat te groot met hun ervaring en individuele kwaliteit. Japan is sindsdien verder gegroeid, maar Van Dijk en co. blijven een zware opgave voor de Samurai Blue."
      },
      {
        name: "Zweden",
        code: "se",
        fifaRanking: 18,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "Er zijn geen eerdere WK-ontmoetingen tussen Japan en Zweden. Beide teams zijn in vergelijkbare vorm en hebben de ambitie om door te gaan uit een zware groep. Japan heeft het voordeel van snelheid en techniek, terwijl Zweden fysiek sterker is en over dodelijke spitsen beschikt."
      },
      {
        name: "Tunesië",
        code: "tn",
        fifaRanking: 40,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "Geen eerdere WK-ontmoetingen, maar dit wordt een cruciaal duel voor beide teams. Japan beschikt over meer individuele kwaliteit met spelers in Europese topcompetities, maar Tunesië is tactisch gedisciplineerd en moeilijk te breken. Japan is licht favoriet op basis van hun recente WK-prestaties."
      }
    ],
    keyPlayers: [
      { name: "Takefusa Kubo", role: "Creatief meesterbrein", detail: "De Real Sociedad-ster is het creatieve hart van Japan. Zijn dribbelvaardigheid, techniek en vermogen om beslissende passes te geven maken hem tot de gevaarlijkste speler van de Samurai Blue." },
      { name: "Wataru Endo", role: "Ervaren middenvelder", detail: "De Liverpool-middenvelder brengt enorme ervaring en leiderschap. Endo is het anker op het middenveld en dicteert het tempo van het Japanse spel." },
      { name: "Ritsu Dōan", role: "Gevaarlijke aanvaller", detail: "Dōan scoorde op het WK 2022 tegen zowel Duitsland als Spanje en is met zijn directe spel en schot een constante dreiging voor elke verdediging." },
      { name: "Takehiro Tomiyasu", role: "Veelzijdige verdediger", detail: "De Arsenal-verdediger kan zowel centraal als op de flank uit de voeten. Zijn veelzijdigheid en ervaring in de Premier League maken hem tot een sleutelfiguur in de Japanse defensie." },
      { name: "Ao Tanaka", role: "Dynamisch middenveld", detail: "Tanaka scoorde het cruciale doelpunt tegen Spanje op het WK 2022 en brengt energie, loopvermogen en scorend vermogen vanuit het middenveld." }
    ],
    strengths: [
      "Enorm verbeterd niveau met steeds meer spelers in Europese topcompetities",
      "Bewezen vermogen om topteams te verslaan (Duitsland en Spanje in 2022)",
      "Uitzonderlijke teamdiscipline en tactische organisatie",
      "Snelle omschakeling en explosieve counteraanvallen",
      "Jonge en hongerige selectie met grote ambitie"
    ],
    weaknesses: [
      "Nog nooit een WK-kwartfinale bereikt – moeite met knockout-wedstrijden",
      "Fysiek nadeel tegen grotere Europese tegenstanders",
      "Wisselvallig – kan in dezelfde groep zowel Duitsland verslaan als van een underdog verliezen",
      "Afhankelijk van penalty's in knock-outfase, waar ze een slecht record hebben",
      "Ervaring op het allerhoogste WK-niveau blijft beperkt vergeleken met traditionele topteams"
    ],
    prediction: {
      groupStage: 68,
      roundOf32: 45,
      roundOf16: 25,
      quarterFinal: 12,
      semiFinal: 4,
      champion: 1.5,
      mostLikelyResult: "Ronde van 32 / Achtste finale",
      summary: "Japan is de <strong>gevaarlijkste outsider</strong> van dit WK na hun sensationele groepsfase in 2022 waar ze <em>Duitsland én Spanje</em> versloegen. Met <strong>Kubo</strong> als creatief brein en spelers als <em>Endo</em> en <strong>Dōan</strong> beschikt Japan over serieuze kwaliteit. De grote uitdaging blijft het doorbreken van de <em>kwartfinale-barrière</em> – Japan verloor vier keer in de achtste finale. Deze generatie heeft het talent om geschiedenis te schrijven, maar moet eerst <strong>Nederland</strong> en <em>Zweden</em> zien te overleven in een zware groep."
    }
  },

  // ═══════════════════════════════════════════════════════
  // ZWEDEN (teamId: 23) – UEFA, Groep F
  // ═══════════════════════════════════════════════════════
  23: {
    lastUpdated: "2026-06-09",
    overall: { matches: 49, wins: 19, draws: 10, losses: 20, goalsFor: 78, goalsAgainst: 72 },
    history: [
      { year: 1934, host: "Italië", result: "Kwartfinale", tag: "qf", detail: "Kwartfinale bereikt op het WK in Italië" },
      { year: 1938, host: "Frankrijk", result: "Halve finale", tag: "sf", detail: "Vierde plaats – een indrukwekkend resultaat voor het Zweedse voetbal" },
      { year: 1950, host: "Brazilië", result: "Halve finale", tag: "sf", detail: "Derde plaats in Brazilië – een van de beste Zweedse WK-prestaties" },
      { year: 1958, host: "Zweden", result: "Finale", tag: "final", detail: "2-5 verlies tegen Brazilië in de finale op eigen bodem. Pelé maakte zijn grote doorbraak met twee goals in de finale" },
      { year: 1970, host: "Mexico", result: "Groepsfase", tag: "group", detail: "Uitgeschakeld in de groepsfase in Mexico" },
      { year: 1974, host: "West-Duitsland", result: "Tweede ronde", tag: "group", detail: "Doorgang naar de tweede ronde maar niet verder" },
      { year: 1978, host: "Argentinië", result: "Eerste ronde", tag: "group", detail: "Vroege uitschakeling in de eerste ronde" },
      { year: 1990, host: "Italië", result: "Groepsfase", tag: "group", detail: "Uitgeschakeld in de groepsfase" },
      { year: 1994, host: "VS", result: "Halve finale", tag: "sf", detail: "Derde plaats – beste resultaat sinds 1958. Brolin, Dahlin en Ravelli schitterden" },
      { year: 2002, host: "Japan/Zuid-Korea", result: "Achtste finale", tag: "r16", detail: "Verloor in de achtste finale verrassend van Senegal na een golden goal" },
      { year: 2006, host: "Duitsland", result: "Achtste finale", tag: "r16", detail: "Uitgeschakeld in de achtste finale door gastland Duitsland" },
      { year: 2018, host: "Rusland", result: "Kwartfinale", tag: "qf", detail: "Kwartfinale bereikt na groepswinst, verloor 0-2 van Engeland" },
    ],
    groupOpponents: [
      {
        name: "Nederland",
        code: "nl",
        fifaRanking: 7,
        h2hSummary: "Meerdere WK-duels: historische ontmoetingen met wisselende resultaten",
        verdict: "unfav",
        matches: [
          { tournament: "WK 1934 Eerste ronde", score: "3-2", detail: "Zweden versloeg Nederland in de eerste ronde van het WK 1934" },
          { tournament: "WK 1974 Groepsfase", score: "0-0", detail: "Gelijkspel in de groepsfase van het WK 1974 in West-Duitsland" }
        ],
        analysis: "Een historische rivaliteit tussen twee Scandinavisch-Europese voetbalnaties. Nederland is op basis van recente prestaties en selectiekwaliteit de favoriet, maar Zweden heeft laten zien dat ze op WK-niveau voor verrassingen kunnen zorgen. Met Isak en Gyökeres in topvorm is Zweden gevaarlijk voor elke tegenstander."
      },
      {
        name: "Japan",
        code: "jp",
        fifaRanking: 14,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Er zijn geen eerdere WK-ontmoetingen tussen Zweden en Japan. Zweden is op basis van fysieke kracht en het dodelijke spitsenduo Isak-Gyökeres licht favoriet. Japan is echter tactisch sterk en kan met hun snelheid gevaarlijk zijn. Een spannend duel dat beide kanten op kan vallen."
      },
      {
        name: "Tunesië",
        code: "tn",
        fifaRanking: 40,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Geen eerdere WK-ontmoetingen. Zweden is favoriet op basis van individuele kwaliteit, met name in de aanval. Tunesië zal verdedigend sterk staan en proberen de Zweedse aanval te neutraliseren. Zweden moet deze wedstrijd winnen om doorgang veilig te stellen."
      }
    ],
    keyPlayers: [
      { name: "Alexander Isak", role: "Topspits", detail: "De Liverpool-spits is uitgegroeid tot een van de beste aanvallers van Europa. Zijn snelheid, techniek en afwerking maken hem dodelijk voor elke verdediging." },
      { name: "Viktor Gyökeres", role: "Doelpuntenmachine", detail: "De Arsenal-spits was de topscorer van de Europese kwalificatie en vormt samen met Isak het meest gevreesde spitsenduo van het toernooi. Zijn instinct voor doelpunten is fenomenaal." },
      { name: "Lucas Bergvall", role: "Jong talent", detail: "Het Tottenham-talent is de toekomst van het Zweedse middenveld. Ondanks zijn jonge leeftijd brengt hij technische klasse en durf aan de bal." },
      { name: "Victor Lindelöf", role: "Ervaren verdediger", detail: "De voormalige Manchester United-verdediger brengt rust en ervaring in de Zweedse achterhoede. Zijn leesvermogen en opbouwend spel zijn van groot belang." },
      { name: "Anthony Elanga", role: "Snelle vleugelaanvaller", detail: "Elanga brengt snelheid en directheid op de flanken en kan met zijn acceleratie verdedigingen openbreken. Een ideale aanvulling op het spitsenduo." }
    ],
    strengths: [
      "IJzersterke spitsen met Isak en Gyökeres als dodelijk duo",
      "Sterke fysiek en goede organisatie – moeilijk te verslaan",
      "Tactisch goed georganiseerd met een duidelijke speelwijze",
      "Rijke WK-ervaring met twaalf eerdere deelnames",
      "Jong talent als Bergvall gecombineerd met ervaren krachten"
    ],
    weaknesses: [
      "Mist de middenvelddominantie van absolute topnaties",
      "Wisselvallige resultaten in aanloop naar het toernooi",
      "Coach Potter moet het team nog volledig naar zijn hand zetten",
      "Verdediging kan kwetsbaar zijn tegen snelle, technische tegenstanders",
      "Geen WK-titel en slechts één finale (1958) – mist winnaarservaring op het hoogste niveau"
    ],
    prediction: {
      groupStage: 72,
      roundOf32: 50,
      roundOf16: 28,
      quarterFinal: 14,
      semiFinal: 5,
      champion: 2,
      mostLikelyResult: "Ronde van 32 / Achtste finale",
      summary: "Zweden beschikt met <strong>Alexander Isak</strong> en <strong>Viktor Gyökeres</strong> over misschien wel het <em>beste spitsenduo</em> van het hele toernooi. Onder de tactische leiding van <em>Graham Potter</em> heeft Zweden een duidelijk plan: de bal bij hun dodelijke aanvallers krijgen. De groep met <strong>Nederland</strong>, <em>Japan</em> en Tunesië is zwaar maar haalbaar. Als het middenveld met talenten als <strong>Bergvall</strong> de service kan leveren, kan Zweden voor een <em>grote verrassing</em> zorgen op dit WK."
    }
  },

  // ═══════════════════════════════════════════════════════
  // TUNESIË (teamId: 24) – CAF, Groep F
  // ═══════════════════════════════════════════════════════
  24: {
    lastUpdated: "2026-06-09",
    overall: { matches: 18, wins: 4, draws: 4, losses: 10, goalsFor: 14, goalsAgainst: 25 },
    history: [
      { year: 1978, host: "Argentinië", result: "Groepsfase", tag: "group", detail: "Historisch moment: eerste Afrikaanse land dat een WK-wedstrijd won met een 3-1 zege op Mexico" },
      { year: 1998, host: "Frankrijk", result: "Groepsfase", tag: "group", detail: "Slechts één punt behaald in een moeilijke groep" },
      { year: 2002, host: "Japan/Zuid-Korea", result: "Groepsfase", tag: "group", detail: "Eén zege, één gelijkspel en één verlies – net niet genoeg voor doorgang" },
      { year: 2006, host: "Duitsland", result: "Groepsfase", tag: "group", detail: "Drie nederlagen in een teleurstellend toernooi" },
      { year: 2018, host: "Rusland", result: "Groepsfase", tag: "group", detail: "Waardige 2-1 zege op Panama, maar net uitgeschakeld in de groepsfase" },
      { year: 2022, host: "Qatar", result: "Groepsfase", tag: "group", detail: "Historische 1-0 overwinning op titelhouder Frankrijk (met B-team), maar toch uitgeschakeld na verlies tegen Australië" },
    ],
    groupOpponents: [
      {
        name: "Nederland",
        code: "nl",
        fifaRanking: 7,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Er zijn geen eerdere WK-ontmoetingen tussen Tunesië en Nederland. Oranje is op basis van kwaliteit en ervaring de grote favoriet. Tunesië zal verdedigend sterk moeten staan en hopen op een counter of standaardsituatie. Een punt zou al een groot succes zijn voor de Tunesiërs."
      },
      {
        name: "Japan",
        code: "jp",
        fifaRanking: 14,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "Geen eerdere WK-ontmoetingen. Dit wordt een cruciaal duel voor beide teams in de strijd om doorgang. Japan beschikt over meer individuele kwaliteit met spelers in topcompetities, maar Tunesië is tactisch sterk en kan met hun ervaring en discipline gevaarlijk zijn. Een gelijkopgaand duel wordt verwacht."
      },
      {
        name: "Zweden",
        code: "se",
        fifaRanking: 18,
        h2hSummary: "0 WK-duels: Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Geen WK-precedenten tussen deze twee landen. Zweden is favoriet dankzij het dodelijke spitsenduo Isak en Gyökeres. Tunesië moet verdedigend compact spelen en de Zweedse aanvallers zo min mogelijk ruimte geven. De fysieke strijd op het middenveld wordt een sleutelfactor."
      }
    ],
    keyPlayers: [
      { name: "Hannibal Mejbri", role: "Creatief middenveld", detail: "De Burnley-middenvelder is het creatieve hart van Tunesië. Mejbri's technische klasse en passeeractie maken hem tot de gevaarlijkste speler van de Tunesiërs, ondanks zijn jonge leeftijd." },
      { name: "Ellyes Skhiri", role: "Ervaren middenvelder", detail: "De Eintracht Frankfurt-middenvelder brengt ervaring op het hoogste Europese niveau. Skhiri is het anker op het middenveld en combineert fysieke kracht met tactisch inzicht." },
      { name: "Anis Ben Slimane", role: "Veelzijdige middenvelder", detail: "Ben Slimane kan meerdere posities op het middenveld bekleden en brengt energie en technische kwaliteit. Zijn veelzijdigheid maakt hem waardevol in het tactische plan van coach Lamouchi." },
      { name: "Montassar Talbi", role: "Sterke verdediger", detail: "De ervaren centrumverdediger is de leider van de Tunesische achterhoede. Zijn kopkracht, positioneel spel en ervaring in de Serie A maken hem tot het fundament van de defensie." },
      { name: "Elias Achouri", role: "Snelle aanvaller", detail: "Achouri brengt snelheid en directheid in de Tunesische aanval. Zijn vermogen om verdedigers voorbij te gaan en kansen te creëren is belangrijk voor een team dat vaak weinig balbezit heeft." }
    ],
    strengths: [
      "WK-routine met zes eerdere deelnames – weten wat het is om op het grootste podium te staan",
      "Sterk verdedigend blok dat moeilijk te breken is voor tegenstanders",
      "Tactische discipline en wedstrijdmentaliteit onder druk",
      "Bewezen vermogen om topteams te verrassen (1-0 vs Frankrijk in 2022)",
      "Saamhorigheid en trots – het hele land staat achter het team"
    ],
    weaknesses: [
      "Nooit voorbij de WK-groepsfase gekomen in zes pogingen",
      "Beperkte aanvallende kwaliteit en doelpuntenproductie",
      "Mist spelers op het allerhoogste clubniveau vergeleken met groepsgenoten",
      "Fysiek soms overklast door grotere en sterkere tegenstanders",
      "Wisselvallig – kan zowel Frankrijk verslaan als van Australië verliezen"
    ],
    prediction: {
      groupStage: 22,
      roundOf32: 10,
      roundOf16: 4,
      quarterFinal: 1.5,
      semiFinal: 0.5,
      champion: 0.1,
      mostLikelyResult: "Groepsfase",
      summary: "Tunesië gaat het WK in als de <strong>underdog van Groep F</strong>, maar heeft bewezen verrassingen in zich te hebben – zoals de <em>historische 1-0 zege op Frankrijk</em> in 2022. Met <strong>Hannibal Mejbri</strong> als creatief middelpunt en de ervaren <em>Skhiri</em> op het middenveld heeft Tunesië voldoende kwaliteit om wedstrijden spannend te maken. De realiteit is echter dat de groep met <strong>Nederland</strong>, <em>Japan</em> en <strong>Zweden</strong> bijzonder zwaar is. Het doorbreken van de <em>eeuwige groepsfase-barrière</em> zou een historische prestatie zijn."
    }
  },
  // ═══════════════════════════════════════════════════════
  // BELGIË (teamId: 25) – Groep G
  // ═══════════════════════════════════════════════════════
  25: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 48,
      wins: 19,
      draws: 10,
      losses: 19,
      goalsFor: 68,
      goalsAgainst: 74
    },

    // ── WK-deelnames ──
    history: [
      { year: 1930, host: "Uruguay",       result: "Groepsfase",    tag: "group",  detail: "Eerste WK ooit – België verloor beide groepsduels (0-3 vs VS, 0-1 vs Paraguay)." },
      { year: 1934, host: "Italië",        result: "Eerste ronde",  tag: "group",  detail: "Direct uitgeschakeld in het knockoutsysteem: 2-5 verlies tegen Duitsland." },
      { year: 1938, host: "Frankrijk",     result: "Eerste ronde",  tag: "group",  detail: "1-3 verlies tegen Frankrijk in de eerste ronde." },
      { year: 1954, host: "Zwitserland",   result: "Groepsfase",    tag: "group",  detail: "4-4 gelijkspel tegen Engeland, maar uitgeschakeld na verlies tegen Italië." },
      { year: 1970, host: "Mexico",        result: "Groepsfase",    tag: "group",  detail: "3-0 verlies tegen gastland Mexico; 1-0 winst op El Salvador; uitgeschakeld in de groep." },
      { year: 1982, host: "Spanje",        result: "Tweede ronde",  tag: "group",  detail: "Sensationele 1-0 zege op Argentinië (Vandenbergh). In de tweede groepsfase uitgeschakeld door Polen (0-3) en USSR (0-1)." },
      { year: 1986, host: "Mexico",        result: "Halve finale",  tag: "sf",     detail: "Beste WK ooit! 4-3 n.v. winst op USSR (achtste finale), 1-1 (5-4 pen) vs Spanje (kwartfinale). In de halve finale 0-2 verlies tegen Argentinië – twee doelpunten van Maradona." },
      { year: 1990, host: "Italië",        result: "Achtste finale", tag: "r16",   detail: "Solide groepsfase, maar in de achtste finale 0-1 uitgeschakeld door Engeland (doelpunt David Platt in 119e minuut)." },
      { year: 1994, host: "VS",            result: "Achtste finale", tag: "r16",   detail: "2-3 verlies tegen Duitsland in de achtste finale na een heroïsch gevecht." },
      { year: 1998, host: "Frankrijk",     result: "Groepsfase",    tag: "group",  detail: "Tegenvallend toernooi – uitgeschakeld in de groepsfase." },
      { year: 2002, host: "Japan/Z-Korea", result: "Achtste finale", tag: "r16",   detail: "Controversieel 0-2 verlies tegen Brazilië – twee afgekeurde Belgische doelpunten door dubieuze scheidsrechterlijke beslissingen. Marc Wilmots kopbal onterecht afgekeurd." },
      { year: 2014, host: "Brazilië",      result: "Kwartfinale",   tag: "qf",     detail: "Start van de 'gouden generatie'. Alle groepswedstrijden gewonnen, in de kwartfinale 0-1 verlies tegen Argentinië (Higuaín)." },
      { year: 2018, host: "Rusland",       result: "Halve finale",  tag: "sf",     detail: "Historisch derde plaats! 2-1 zege op Brazilië in kwartfinale (De Bruyne, Lukaku). 0-1 verlies tegen Frankrijk in halve finale. 2-0 winst op Engeland in troostfinale." },
      { year: 2022, host: "Qatar",         result: "Groepsfase",    tag: "group",  detail: "Schokkerige exit: 1-0 winst tegen Canada, 0-2 verlies tegen Marokko, 0-0 tegen Kroatië. De gouden generatie implodeerde in de woestijn." }
    ],

    // ── Head-to-Head Groep G ──
    groupOpponents: [
      {
        name: "Egypte",
        code: "eg",
        fifaRanking: 33,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "België en Egypte troffen elkaar nog nooit op een WK. Op papier is België met FIFA-ranking 6 de grote favoriet. Egypte heeft echter met Mohamed Salah en Omar Marmoush twee gevaarlijke aanvallers die op elk moment het verschil kunnen maken. België moet waakzaam zijn voor de Egyptische counter."
      },
      {
        name: "Iran",
        code: "ir",
        fifaRanking: 20,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Geen directe WK-ontmoetingen in het verleden. Iran is een compact en verdedigend ingesteld team dat moeilijk te breken is. België beschikt echter over de individuele klasse om door de Iraanse muur te komen. De Bruyne en Doku moeten de creatieve sleutels leveren tegen het blok van Team Melli."
      },
      {
        name: "Nieuw-Zeeland",
        code: "nz",
        fifaRanking: 105,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Het eerste WK-duel ooit tussen deze landen. Nieuw-Zeeland is de zwakste tegenstander in de groep en België moet deze wedstrijd overtuigend winnen. De All Whites zijn echter taai – ze gingen in 2010 ongeslagen door de groepsfase met drie gelijke spelen. Een Belgische zege lijkt onvermijdelijk, maar onderschatting is gevaarlijk."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Kevin De Bruyne", role: "Creatief brein", detail: "De geniale spelmaker van Napoli en aanvoerder van de Rode Duivels. Met zijn passes, traptechniek en overzicht is hij de motor van het Belgische spel. Mogelijk zijn laatste WK." },
      { name: "Romelu Lukaku", role: "Topscorer", detail: "Belgisch recordinternational qua doelpunten. De Napoli-spits is ondanks zijn 33 jaar nog altijd dodelijk in de zestien. Zijn WK-verleden kent ups (2018) en downs (2022)." },
      { name: "Jérémy Doku", role: "Snelheidswapen", detail: "De razendsnelle vleugelflitser van Manchester City is de meest onvoorspelbare aanvaller van België. Zijn dribbels en snelheid terroriseren verdedigingen." },
      { name: "Thibaut Courtois", role: "Wereldkeeper", detail: "De Real Madrid-doelman is een van de beste keepers ter wereld. Zijn ervaring en reflexen zijn cruciaal voor Belgische WK-ambities." },
      { name: "Amadou Onana", role: "Middenvelder", detail: "De fysiek imponerende Aston Villa-middenvelder brengt energie, duels en dynamiek op het middenveld. Sleutelfiguur in de nieuwe generatie." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Individuele klasse: De Bruyne, Lukaku, Doku en Courtois behoren tot de wereldtop",
      "WK-ervaring: derde plaats in 2018, kwartfinale in 2014",
      "Tactische veelzijdigheid: kan zowel 3-4-3 als 4-3-3 spelen",
      "Sterke keeper: Courtois is een van de beste ter wereld",
      "Gunstige groep: als groepshoofd duidelijk favoriet"
    ],
    weaknesses: [
      "Vergrijzing: gouden generatie nadert het einde (De Bruyne 35, Lukaku 33, Courtois 34)",
      "Groepsdynamiek: interne spanningen kwamen in 2022 pijnlijk aan het licht",
      "2022-trauma: verrassende groepsfase-exit zit diep in het collectieve geheugen",
      "Verdediging: zonder Kompany en Alderweireld minder solide centraal achterin",
      "Nieuwe bondscoach: Rudi Garcia moet snel een team smeden"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 90,
      roundOf32: 70,
      roundOf16: 42,
      quarterFinal: 22,
      semiFinal: 10,
      champion: 3.5,
      mostLikelyResult: "Achtste finale / Kwartfinale",
      summary: "België is favoriet in Groep G en moet zonder problemen de groepsfase overleven. De <strong>gouden generatie</strong> speelt echter mogelijk haar laatste WK en de vraag is of deze groep nog de honger en het vertrouwen heeft na de deceptie van 2022. De individuele klasse is er nog steeds, maar het collectief moet bewijzen dat het niet aan het einde van een cyclus zit. <em>Een kwartfinale is het realistische doel, een halve finale zou de perfecte afscheidstournee zijn.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // EGYPTE (teamId: 26) – Groep G
  // ═══════════════════════════════════════════════════════
  26: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 7,
      wins: 0,
      draws: 2,
      losses: 5,
      goalsFor: 5,
      goalsAgainst: 12
    },

    // ── WK-deelnames ──
    history: [
      { year: 1934, host: "Italië",   result: "Eerste ronde",  tag: "group",  detail: "WK-debuut in het knockoutsysteem: 2-4 verlies tegen Hongarije. Egypte was het eerste Afrikaanse land ooit op een WK." },
      { year: 1990, host: "Italië",   result: "Groepsfase",    tag: "group",  detail: "Twee gelijke spelen (0-0 vs Ierland, 1-1 vs Nederland) en een 0-1 verlies tegen Engeland. Uitgeschakeld, maar met opgeheven hoofd." },
      { year: 2018, host: "Rusland",  result: "Groepsfase",    tag: "group",  detail: "Teleurstellend toernooi ondanks de aanwezigheid van Mohamed Salah. 0-1 verlies tegen Uruguay (late goal), 1-3 tegen Rusland, 1-2 tegen Saoedi-Arabië." }
    ],

    // ── Head-to-Head Groep G ──
    groupOpponents: [
      {
        name: "België",
        code: "be",
        fifaRanking: 6,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Geen WK-historie tussen beide landen. België is met zijn gouden generatie op papier veruit de sterkste tegenstander. Egypte zal verdedigend moeten spelen en hopen op de individuele genialiteit van Salah en Marmoush in de omschakeling."
      },
      {
        name: "Iran",
        code: "ir",
        fifaRanking: 20,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "even",
        matches: [],
        analysis: "Een sleutelwedstrijd voor beide teams in de strijd om de tweede groepsplaats. Iran is verdedigend sterk en fysiek; Egypte heeft de individuele klasse van Salah en Marmoush. Dit wordt waarschijnlijk een tactische strijd om de restjes achter België."
      },
      {
        name: "Nieuw-Zeeland",
        code: "nz",
        fifaRanking: 105,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Geen eerdere WK-ontmoeting. Egypte is de duidelijke favoriet tegen de All Whites. Dit is waarschijnlijk de belangrijkste wedstrijd voor Egypte om punten te pakken. Met Salah in de selectie moet het verschil in kwaliteit zichtbaar zijn."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Mohamed Salah", role: "Superster & aanvoerder", detail: "De Liverpool-legende is een van de beste spelers ter wereld. Zijn snelheid, afwerking en ervaring op het hoogste niveau maken hem de onbetwiste leider van de Farao's." },
      { name: "Omar Marmoush", role: "Aanvaller", detail: "De Manchester City-spits beleefde een doorbraak bij Eintracht Frankfurt en is nu de tweede aanvallende troef van Egypte. Snel, technisch en doelgevaarlijk." },
      { name: "Mohamed Abdelmonem", role: "Verdediger", detail: "De Nice-verdediger is de leider van de Egyptische defensie. Sterk in de lucht en goed in de passing." },
      { name: "Mohamed El Shenawy", role: "Keeper", detail: "De ervaren Al Ahly-doelman is een rots in de branding. Was uitstekend op het WK 2018 en brengt cruciale ervaring mee." },
      { name: "Hamza Abdelkarim", role: "Jong talent", detail: "De Barcelona-aanvaller is het grote talent van het Egyptische voetbal. Snel en technisch begaafd, kan voor verrassingen zorgen." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Mohamed Salah: een van de beste spelers ter wereld als individueel wapen",
      "Omar Marmoush: tweede wereldsterren bij Manchester City, extra aanvallende dreiging",
      "Afrika Cup-ervaring: zevenvoudig continentaal kampioen, gewend aan grote toernooien",
      "Verdedigende organisatie: Egypte staat bekend om compact verdedigen",
      "Passie en trots: Egyptisch voetbal leeft enorm bij het publiek"
    ],
    weaknesses: [
      "Beperkte WK-ervaring: slechts 3 eerdere WK-deelnames, nooit gewonnen",
      "Breedte selectie: buiten Salah en Marmoush weinig spelers op Europees topniveau",
      "Historisch record: 0 zeges in 7 WK-wedstrijden",
      "Afhankelijkheid van Salah: als hij geblesseerd is, valt het aanvalsspel stil",
      "Gebrek aan WK-winnaarservaring: het team mist de mentaliteit van grote WK-successen"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 35,
      roundOf32: 18,
      roundOf16: 8,
      quarterFinal: 3,
      semiFinal: 1,
      champion: 0.2,
      mostLikelyResult: "Groepsfase / Ronde van 32",
      summary: "Egypte is de underdog in Groep G maar heeft met <strong>Mohamed Salah</strong> en <strong>Omar Marmoush</strong> twee spelers die op elk moment het verschil kunnen maken. De sleutelwedstrijd wordt die tegen Iran – de winnaar maakt kans op de tweede groepsplaats. Een historische eerste WK-overwinning zou al een enorm succes zijn. <em>Doorkomen uit de groep zou een sensatie zijn, maar Salah's magie maakt alles mogelijk.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // IRAN (teamId: 27) – Groep G
  // ═══════════════════════════════════════════════════════
  27: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 18,
      wins: 3,
      draws: 4,
      losses: 11,
      goalsFor: 14,
      goalsAgainst: 30
    },

    // ── WK-deelnames ──
    history: [
      { year: 1978, host: "Argentinië",    result: "Groepsfase",  tag: "group",  detail: "WK-debuut: 1-1 gelijkspel tegen Schotland, maar kansloos tegen Nederland (0-3) en Peru (1-4)." },
      { year: 1998, host: "Frankrijk",     result: "Groepsfase",  tag: "group",  detail: "Historische 2-1 zege op de VS – geladen door politieke spanning. Verder verlies tegen Joegoslavië (0-1) en Duitsland (0-2)." },
      { year: 2006, host: "Duitsland",     result: "Groepsfase",  tag: "group",  detail: "1-1 tegen Angola, 0-1 tegen Mexico, 1-2 tegen Portugal. Nipt uitgeschakeld met slechts één punt." },
      { year: 2014, host: "Brazilië",      result: "Groepsfase",  tag: "group",  detail: "Hield Argentinië op 1-0 (Messi scoorde in 91e minuut). 0-0 tegen Nigeria. Bijna door naar de achtste finale." },
      { year: 2018, host: "Rusland",       result: "Groepsfase",  tag: "group",  detail: "Beste prestatie ooit: 1-0 tegen Marokko, 0-1 tegen Spanje (nipt!), 1-1 tegen Portugal. Op doelsaldo uitgeschakeld – slechts 1 punt van de achtste finale." },
      { year: 2022, host: "Qatar",         result: "Groepsfase",  tag: "group",  detail: "2-6 nederlaag tegen Engeland, maar daarna 2-0 winst op Wales. 0-1 verlies tegen VS in de beslissende wedstrijd." }
    ],

    // ── Head-to-Head Groep G ──
    groupOpponents: [
      {
        name: "België",
        code: "be",
        fifaRanking: 6,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Iran en België hebben elkaar nooit ontmoet op een WK. België is de duidelijke favoriet met zijn sterren bij Europese topclubs. Iran zal een ultra-verdedigend blok vormen en hopen op een counter of standaardsituatie. Een gelijkspel zou al een uitstekend resultaat zijn voor Team Melli."
      },
      {
        name: "Egypte",
        code: "eg",
        fifaRanking: 33,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "even",
        matches: [],
        analysis: "De beslissende wedstrijd in Groep G voor beide teams. Iran en Egypte strijden om de tweede plaats achter België. Iran is verdedigend sterker, maar Egypte heeft de individuele klasse van Salah. Een tactisch schaakspel wordt verwacht met veel spanning en weinig doelpunten."
      },
      {
        name: "Nieuw-Zeeland",
        code: "nz",
        fifaRanking: 105,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Iran is favoriet tegen Nieuw-Zeeland, maar moet oppassen voor onderschatting. De All Whites zijn taai en werden in 2010 niet verslagen op het WK. Iran moet deze wedstrijd winnen om kans te maken op de volgende ronde."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Mehdi Taremi", role: "Spits & aanvoerder", detail: "De ervaren spits van Olympiacos is de grote leider van Team Melli. Sterk in de lucht, technisch vaardig en altijd gevaarlijk in de zestien." },
      { name: "Alireza Jahanbakhsh", role: "Creatieveling", detail: "De ervaren middenvelder brengt creativiteit en ervaring op het middenveld. Kan vanuit het niets beslissende momenten creëren." },
      { name: "Alireza Beiranvand", role: "Keeper", detail: "De imposante keeper staat bekend om zijn afstandsworpen en penalty-reddingen. Was uitstekend op het WK 2018." },
      { name: "Saeid Ezatolahi", role: "Verdedigende middenvelder", detail: "Het schild voor de verdediging. Ezatolahi breekt aanvallen af en houdt het middenveld compact." },
      { name: "Mehdi Ghayedi", role: "Vleugelaanvaller", detail: "De technisch begaafde flankaanvaller is het snelheidswapen van Iran. Kan verdedigers in één-op-één passeren." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Verdedigende organisatie: Iran is een van de moeilijkst te verslane teams op WK's",
      "WK-ervaring: zesde deelname, team weet wat het grote podium vraagt",
      "Vechtlust en discipline: Team Melli geeft nooit op en is tactisch gedisciplineerd",
      "Sterke keeper: Beiranvand is een muur in het doel",
      "Gevaarlijk op standaardsituaties: Taremi en verdedigers zijn sterk in de lucht"
    ],
    weaknesses: [
      "Nooit voorbij de groepsfase gekomen in zes WK-deelnames",
      "Beperkt aanvallend vermogen: gemiddeld minder dan 1 doelpunt per WK-wedstrijd",
      "Weinig spelers bij Europese topclubs in vergelijking met groepsgenoten",
      "Fysiek: kan in de tweede helft terugvallen als de verdedigende blok energie kost",
      "Afhankelijkheid van Taremi: weinig alternatieven als hij uitvalt"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 40,
      roundOf32: 20,
      roundOf16: 8,
      quarterFinal: 3,
      semiFinal: 1,
      champion: 0.2,
      mostLikelyResult: "Groepsfase / Ronde van 32",
      summary: "Iran is een taaie tegenstander die iedereen het leven zuur kan maken. <strong>Team Melli</strong> is meester in het compact verdedigen en dreigt via counters en standaardsituaties. De groep is haalbaar – België is de favoriet, maar Iran kan strijden met Egypte om de tweede plaats. <em>Als Iran voor het eerst ooit de groepsfase overleeft, zou dat een historische prestatie zijn.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // NIEUW-ZEELAND (teamId: 28) – Groep G
  // ═══════════════════════════════════════════════════════
  28: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 6,
      wins: 0,
      draws: 3,
      losses: 3,
      goalsFor: 4,
      goalsAgainst: 14
    },

    // ── WK-deelnames ──
    history: [
      { year: 1982, host: "Spanje",       result: "Groepsfase",  tag: "group",  detail: "WK-debuut: drie nederlagen – 0-5 tegen Schotland, 0-3 tegen USSR, 2-4 tegen Brazilië (Zico scoorde). Maar het debuut op zich was al historisch voor Oceaans voetbal." },
      { year: 2010, host: "Zuid-Afrika",   result: "Groepsfase",  tag: "group",  detail: "Onverslaanbaar op het WK! Drie gelijke spelen: 1-1 vs Slowakije, 1-1 vs regerend wereldkampioen Italië (sensatie!), 0-0 vs Paraguay. Enige ongeslagen team van het toernooi naast Spanje." }
    ],

    // ── Head-to-Head Groep G ──
    groupOpponents: [
      {
        name: "België",
        code: "be",
        fifaRanking: 6,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Een enorm kwaliteitsverschil op papier. België beschikt over spelers bij de absolute Europese top, terwijl Nieuw-Zeeland voornamelijk spelers heeft uit de lagere Engelse divisies en de A-League. De All Whites moeten hopen op een stunt à la 2010 tegen Italië."
      },
      {
        name: "Egypte",
        code: "eg",
        fifaRanking: 33,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Egypte is op papier sterker, met Salah en Marmoush als grote dreigingen. Nieuw-Zeeland zal verdedigend moeten spelen en hopen op een compact blok. Een gelijkspel zou een uitstekend resultaat zijn."
      },
      {
        name: "Iran",
        code: "ir",
        fifaRanking: 20,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Iran is ervaren op het WK en verdedigend sterker. Dit wordt waarschijnlijk de meest gesloten wedstrijd voor Nieuw-Zeeland, met beide teams die compact willen staan. Een gelijkspel is niet ondenkbaar gezien het Nieuw-Zeelandse talent voor draws."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Chris Wood", role: "Spits & sterspeler", detail: "De Nottingham Forest-spits is veruit de beste speler van Nieuw-Zeeland. Met zijn kopkracht, ervaring in de Premier League en doelpunten is hij het grootste wapen van de All Whites." },
      { name: "Liberato Cacace", role: "Linksback", detail: "De Wrexham-verdediger brengt Europese ervaring en aanvallende impulsen vanaf de flank." },
      { name: "Joe Bell", role: "Middenvelder", detail: "De Viking FK-middenvelder is de motor op het middenveld. Hardwerkend en tactisch intelligent." },
      { name: "Marko Stamenic", role: "Middenvelder", detail: "De Swansea City-middenvelder brengt techniek en creativiteit op het middenveld." },
      { name: "Max Crocombe", role: "Keeper", detail: "De Millwall-doelman moet de held worden van de All Whites. Een uitstekende keeper kan het verschil maken voor een underdog." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Ongeslagen in 2010: mentale veerkracht en vermogen om gelijke spelen af te dwingen",
      "Chris Wood: Premier League-spits die het verschil kan maken",
      "Underdog-mentaliteit: niets te verliezen, alles te winnen",
      "Compact verdedigen: als team goed georganiseerd",
      "Trots en passie: het hele land staat achter de All Whites"
    ],
    weaknesses: [
      "Laagste FIFA-ranking in de groep (105): duidelijke kwaliteitsachterstand",
      "Nooit een WK-wedstrijd gewonnen in de geschiedenis",
      "Beperkte selectiebreedte: de meeste spelers spelen in lagere competities",
      "Weinig Europese topervaring buiten Chris Wood",
      "OFC-kwalificatie biedt weinig competitieve voorbereiding op WK-niveau"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 8,
      roundOf32: 3,
      roundOf16: 1,
      quarterFinal: 0.3,
      semiFinal: 0.1,
      champion: 0.02,
      mostLikelyResult: "Groepsfase",
      summary: "Nieuw-Zeeland is de grote underdog van Groep G, maar de All Whites hebben bewezen dat ze op een WK voor verrassingen kunnen zorgen. In 2010 bleven ze <strong>ongeslagen</strong> met drie gelijke spelen – waaronder tegen wereldkampioen Italië. Met <strong>Chris Wood</strong> als Premier League-spits hebben ze een aanspeelpunt. <em>Eén punt pakken zou al een succes zijn; de groepsfase overleven zou een voetbalwonder zijn.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // SPANJE (teamId: 29) – Groep H
  // ═══════════════════════════════════════════════════════
  29: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 67,
      wins: 31,
      draws: 15,
      losses: 21,
      goalsFor: 106,
      goalsAgainst: 82
    },

    titles: [2010],

    // ── WK-deelnames ──
    history: [
      { year: 1934, host: "Italië",        result: "Kwartfinale",   tag: "qf",     detail: "WK-debuut: 3-1 zege op Brazilië in de eerste ronde. In de kwartfinale 1-1 tegen gastland Italië, maar 0-1 verlies in de replay." },
      { year: 1950, host: "Brazilië",      result: "Vierde plaats", tag: "sf",     detail: "Uitstekend toernooi: groepswinnaar en door naar de finale-ronde (top 4). Verloor van Uruguay en Brazilië, maar versloeg Engeland 1-0." },
      { year: 1962, host: "Chili",         result: "Groepsfase",    tag: "group",  detail: "Teleurstellend: 0-1 verlies tegen Tsjechoslowakije, 1-0 winst op Mexico, 1-0 verlies tegen Brazilië." },
      { year: 1966, host: "Engeland",      result: "Groepsfase",    tag: "group",  detail: "Uitgeschakeld in een zware groep met Argentinië en West-Duitsland." },
      { year: 1978, host: "Argentinië",    result: "Groepsfase",    tag: "group",  detail: "Geen overwinning in de groepsfase." },
      { year: 1982, host: "Spanje 🏠",     result: "Tweede ronde",  tag: "group",  detail: "Als gastland teleurstellend: uitgeschakeld in de tweede groepsfase ondanks fanatieke steun. Verloor van West-Duitsland en speelde gelijk tegen Engeland." },
      { year: 1986, host: "Mexico",        result: "Kwartfinale",   tag: "qf",     detail: "In de kwartfinale uitgeschakeld door België na strafschoppen (1-1, 4-5 pen)." },
      { year: 1990, host: "Italië",        result: "Achtste finale", tag: "r16",   detail: "In de achtste finale 1-2 verlies tegen Joegoslavië na verlenging." },
      { year: 1994, host: "VS",            result: "Kwartfinale",   tag: "qf",     detail: "Goede prestatie: in de kwartfinale 1-2 verlies tegen Italië (Roberto Baggio)." },
      { year: 1998, host: "Frankrijk",     result: "Groepsfase",    tag: "group",  detail: "Verrassende uitschakeling in de groepsfase." },
      { year: 2002, host: "Japan/Z-Korea", result: "Kwartfinale",   tag: "qf",     detail: "Controversiële uitschakeling: twee afgekeurde doelpunten tegen gastland Zuid-Korea in de kwartfinale (0-0, 3-5 pen). Zwarte bladzijde in WK-historie." },
      { year: 2006, host: "Duitsland",     result: "Achtste finale", tag: "r16",   detail: "1-3 verlies tegen Frankrijk in de achtste finale. Zidane domineerde." },
      { year: 2010, host: "Zuid-Afrika",    result: "Wereldkampioen", tag: "final", detail: "🏆 WINNAAR! Het hoogtepunt van het Spaanse voetbal. Tikitaka op zijn best: 1-0 winst in de finale tegen Nederland (Iniesta, 116e minuut). Villa topscorer met 5 goals. Xavi en Iniesta domineerden het middenveld." },
      { year: 2014, host: "Brazilië",      result: "Groepsfase",    tag: "group",  detail: "Titelhouder vernederd: 1-5 verlies tegen Nederland in de openingswedstrijd. 0-2 verlies tegen Chili. De snelste titelverdedigersuitschakeling ooit." },
      { year: 2018, host: "Rusland",       result: "Achtste finale", tag: "r16",   detail: "Na een 3-3 spektakelstuk tegen Portugal (Ronaldo hattrick) uitgeschakeld door gastland Rusland op strafschoppen (1-1, 3-4 pen)." },
      { year: 2022, host: "Qatar",         result: "Achtste finale", tag: "r16",   detail: "7-0 recordzege tegen Costa Rica, maar verrassend 1-2 verlies tegen Japan. In de achtste finale uitgeschakeld door Marokko (0-3) – pijnlijke exit." }
    ],

    // ── Head-to-Head Groep H ──
    groupOpponents: [
      {
        name: "Kaapverdië",
        code: "cv",
        fifaRanking: 72,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Kaapverdië maakt zijn WK-debuut en is de grote underdog. Spanje zou zonder problemen moeten winnen met zijn enorme kwaliteitsoverschot. De eilandstaat heeft echter een strijdlustig team dat voor een verrassing kan zorgen als Spanje niet gefocust is."
      },
      {
        name: "Saoedi-Arabië",
        code: "sa",
        fifaRanking: 56,
        h2hSummary: "1 WK-duel: 1× winst Spanje",
        verdict: "fav",
        matches: [
          { tournament: "WK 2006 Groepsfase", score: "1-0", detail: "Spanje won in de laatste groepswedstrijd in Kaiserslautern. Een professionele overwinning zonder risico's." }
        ],
        analysis: "Spanje heeft het enige WK-duel tegen Saoedi-Arabië gewonnen (1-0 in 2006). De Groene Valken zijn echter onvoorspelbaar – hun 2-1 zege op Argentinië in 2022 bewees dat ze tot sensaties in staat zijn. Spanje moet waakzaam zijn en niet dezelfde fout maken als de Argentijnen."
      },
      {
        name: "Uruguay",
        code: "uy",
        fifaRanking: 10,
        h2hSummary: "1 WK-duel: 1× gelijkspel",
        verdict: "even",
        matches: [
          { tournament: "WK 1950 Finale-ronde", score: "2-2", detail: "In de finale-ronde (round-robin) van het WK 1950 in Brazilië eindigde de wedstrijd in een 2-2 gelijkspel. Uruguay werd uiteindelijk wereldkampioen dat jaar." }
        ],
        analysis: "Twee voetbalgrootmachten met samen drie wereldtitels. Het enige WK-duel dateert uit 1950 (2-2 in de finale-ronde). Uruguay is fysiek en verdedigend sterk, Spanje technisch superieur. Dit wordt de topwedstrijd van Groep H en waarschijnlijk beslissend voor de groepswinst."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Pedri", role: "Spelmaker", detail: "De Barcelona-middenvelder is het creatieve brein van La Roja. Zijn balbehandeling, positionering en passing zijn van wereldklasse." },
      { name: "Lamine Yamal", role: "Wonderkind", detail: "Op pas 18-jarige leeftijd al Europees kampioen (2024). De Barcelona-vleugelaanvaller is het grootste talent ter wereld – snel, technisch en beslissend." },
      { name: "Rodri", role: "Middenvelder & Ballon d'Or", detail: "De Manchester City-middenvelder won de Ballon d'Or 2024. Rodri is het fundament van het Spaanse spel – onmisbaar in opbouw en verdediging." },
      { name: "Gavi", role: "Dynamisch middenveld", detail: "De Barcelona-middenvelder brengt energie, duels en techniek. Samen met Pedri vormt hij het beste jonge middenveldenduo ter wereld." },
      { name: "Dani Olmo", role: "Creatieve aanvaller", detail: "De Barcelona-aanvaller was de uitblinker van het EK 2024. Kan vanaf de flanken en centraal dodelijke passes en schoten leveren." },
      { name: "Nico Williams", role: "Vleugelaanvaller", detail: "De Athletic Bilbao-ster is razend snel en technisch begaafd. Samen met Yamal vormt hij de dodelijkste vleugeltandem van het toernooi." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Regerend Europees kampioen (2024): La Roja is in topvorm",
      "Jonge generatie: Yamal (18), Pedri (23), Gavi (21) – de toekomst is nu",
      "Tikitaka 2.0: balbezit en positioneel spel op het hoogste niveau",
      "Breedte selectie: op elke positie meerdere topspelers beschikbaar",
      "Winnaarsmentaliteit: EK 2024 bewees dat dit team grote finales kan winnen"
    ],
    weaknesses: [
      "WK-vloek na 2010: vier opeenvolgende WK's zonder de kwartfinale te bereiken",
      "Verdediging onder druk: kan kwetsbaar zijn bij snelle counters",
      "2022-schok: 0-3 verlies tegen Marokko in achtste finale zit nog vers in het geheugen",
      "Spitsenpositie: geen natuurlijke topspits van wereldformaat",
      "Overmoedigheid: als grootste favoriet in de groep kan onderschatting gevaarlijk zijn"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 96,
      roundOf32: 85,
      roundOf16: 62,
      quarterFinal: 38,
      semiFinal: 20,
      champion: 9,
      mostLikelyResult: "Kwartfinale / Halve finale",
      summary: "Spanje is de <strong>regerend Europees kampioen</strong> en een van de topfavorieten voor de wereldtitel. Met <strong>Lamine Yamal</strong>, <strong>Pedri</strong> en <strong>Rodri</strong> beschikt La Roja over een generatie die nu al op het hoogtepunt van zijn kunnen speelt. De groep is haalbaar, maar Uruguay wordt een serieuze test. De grote vraag is of Spanje de WK-vloek sinds 2010 kan doorbreken. <em>Alles minder dan een halve finale zou een teleurstelling zijn voor dit gouden elftal.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // KAAPVERDIË (teamId: 30) – Groep H
  // ═══════════════════════════════════════════════════════
  30: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0
    },

    // ── WK-deelnames ──
    history: [
      { year: 2026, host: "VS/Mexico/Canada", result: "Debuut", tag: "group", detail: "Eerste WK-deelname ooit! De eilandstaat voor de westkust van Afrika schrijft sporthistorie. Met amper 600.000 inwoners is Kaapverdië een van de kleinste landen ooit op een WK." }
    ],

    // ── Head-to-Head Groep H ──
    groupOpponents: [
      {
        name: "Spanje",
        code: "es",
        fifaRanking: 1,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Een droom voor Kaapverdië: spelen tegen de regerend Europees kampioen op het allerhoogste podium. Spanje is op elk vlak superieur en Kaapverdië kan alleen hopen op een historische stunt. Het draait voor de eilandstaat om de beleving, niet om het resultaat."
      },
      {
        name: "Saoedi-Arabië",
        code: "sa",
        fifaRanking: 56,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Saoedi-Arabië is ervaren op het WK-podium en beschikt over meer middelen en ervaring. Kaapverdië is de underdog, maar dit is misschien de meest haalbare wedstrijd voor de debutanten. Een gelijkspel zou historisch zijn."
      },
      {
        name: "Uruguay",
        code: "uy",
        fifaRanking: 10,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Tweevoudig wereldkampioen Uruguay is een loodzware tegenstander. Met spelers als Valverde en Núñez beschikken ze over enorme individuele klasse. Kaapverdië zal een verdedigingsslag moeten voeren en hopen dat Vozinha in het doel de held wordt."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Garry Rodrigues", role: "Aanvallende middenvelder", detail: "De ervaren creatieveling is de technisch sterkste speler van de selectie. Brengt Europese ervaring mee en kan vanuit het niets kansen creëren." },
      { name: "Logan Costa", role: "Verdediger", detail: "De Villarreal-verdediger is de sterkste verdediger van Kaapverdië en speelt op het hoogste Europese niveau." },
      { name: "Jamiro Monteiro", role: "Middenvelder", detail: "De PEC Zwolle-speler is de ervaren motor op het middenveld. Kent het Europese voetbal goed en is de leider van het team." },
      { name: "Vozinha", role: "Keeper & aanvoerder", detail: "De ervaren keeper is het boegbeeld van het Kaapverdische voetbal. Zijn reddingen tijdens de kwalificatie waren cruciaal." },
      { name: "Jovane Cabral", role: "Aanvaller", detail: "De technisch begaafde flankaanvaller is een van de gevaarlijkste spelers van Kaapverdië. Snelheid en dribbels zijn zijn wapens." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Niets te verliezen: als WK-debutant speelt Kaapverdië zonder druk",
      "Diaspora-talent: veel spelers zijn opgegroeid in Europa (Portugal, Nederland, Frankrijk)",
      "Strijdlust en teamgeest: de kwalificatie bewees de vechtmentaliteit",
      "Compact verdedigen: het team is goed georganiseerd achterin",
      "Historisch moment: het hele land en de diaspora staan als één man achter het team"
    ],
    weaknesses: [
      "Geen enkele WK-ervaring: alles is nieuw op dit niveau",
      "Enorm kwaliteitsverschil met alle groepsgenoten",
      "Selectiebreedte: weinig spelers bij topclubs in de grote competities",
      "Kleine voetbalinfrastructuur: amper 600.000 inwoners",
      "Fysiek: kan moeilijk 3 wedstrijden op WK-niveau volhouden"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 5,
      roundOf32: 2,
      roundOf16: 0.5,
      quarterFinal: 0.1,
      semiFinal: 0.03,
      champion: 0.01,
      mostLikelyResult: "Groepsfase",
      summary: "Kaapverdië schrijft geschiedenis door überhaupt op het WK te staan. Met <strong>Spanje</strong> en <strong>Uruguay</strong> in de groep is doorkomen vrijwel onmogelijk, maar het gaat voor dit eilandland om meer dan resultaten. Elk doelpunt, elke geslaagde tackle wordt een nationale feestdag. <em>De deelname alleen al is het grootste sportmoment in de geschiedenis van Kaapverdië.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // SAOEDI-ARABIË (teamId: 31) – Groep H
  // ═══════════════════════════════════════════════════════
  31: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 16,
      wins: 3,
      draws: 2,
      losses: 11,
      goalsFor: 13,
      goalsAgainst: 37
    },

    // ── WK-deelnames ──
    history: [
      { year: 1994, host: "VS",            result: "Achtste finale", tag: "r16",   detail: "Beste WK ooit! Saeed Al-Owairan scoorde een legendarisch solodoelpunt tegen België (1-0). In de achtste finale 1-3 verlies tegen Zweden." },
      { year: 1998, host: "Frankrijk",     result: "Groepsfase",     tag: "group",  detail: "Teleurstellend toernooi: 0-1 verlies tegen Denemarken, 0-4 verlies tegen Frankrijk, 2-2 tegen Zuid-Afrika." },
      { year: 2002, host: "Japan/Z-Korea", result: "Groepsfase",     tag: "group",  detail: "Zwartste bladzijde: 0-8 vernedering tegen Duitsland in de openingswedstrijd. Verder 0-1 tegen Kameroen en 0-3 tegen Ierland. Nul punten, nul doelpunten." },
      { year: 2006, host: "Duitsland",     result: "Groepsfase",     tag: "group",  detail: "2-2 tegen Tunesië, 0-4 tegen Oekraïne, 0-1 tegen Spanje. Opnieuw uitgeschakeld in de groepsfase." },
      { year: 2022, host: "Qatar",         result: "Groepsfase",     tag: "group",  detail: "Sensationele 2-1 zege op Argentinië! Salem Al-Dawsari scoorde een wereldgoal. Nationale feestdag uitgeroepen. Daarna 0-2 verlies tegen Polen en 1-2 tegen Mexico." }
    ],

    // ── Head-to-Head Groep H ──
    groupOpponents: [
      {
        name: "Spanje",
        code: "es",
        fifaRanking: 1,
        h2hSummary: "1 WK-duel: 1× verlies",
        verdict: "unfav",
        matches: [
          { tournament: "WK 2006 Groepsfase", score: "0-1", detail: "Spanje won in Kaiserslautern. Saoedi-Arabië bood weerstand maar kon geen doelpunt maken tegen de Spaanse defensie." }
        ],
        analysis: "Saoedi-Arabië verloor het enige WK-duel tegen Spanje (0-1 in 2006). La Roja is op elk vlak superieur, maar de Groene Valken bewezen in 2022 dat ze topteams kunnen verrassen. Spanje zal gewaarschuwd zijn na wat er met Argentinië gebeurde."
      },
      {
        name: "Kaapverdië",
        code: "cv",
        fifaRanking: 72,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "De meest haalbare wedstrijd voor Saoedi-Arabië. Kaapverdië maakt zijn WK-debuut en de Groene Valken hebben meer ervaring op dit niveau. Een overwinning is essentieel als Saoedi-Arabië kans wil maken op de volgende ronde."
      },
      {
        name: "Uruguay",
        code: "uy",
        fifaRanking: 10,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Geen eerdere WK-ontmoetingen. Uruguay is met twee wereldtitels en sterren als Valverde en Núñez een zware tegenstander. Saoedi-Arabië moet hopen op dezelfde strijdlust als tegen Argentinië in 2022 om een resultaat te boeken."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Salem Al-Dawsari", role: "Sterspeler & icoon", detail: "De Al-Hilal-aanvaller scoorde het legendarische winnende doelpunt tegen Argentinië op het WK 2022. Een snelle, technische vleugelspeler met flair." },
      { name: "Firas Al-Buraikan", role: "Spits", detail: "De Al-Ahli-spits is de topscorer van de huidige generatie. Sterk, snel en doelgericht." },
      { name: "Mohamed Kanno", role: "Middenvelder", detail: "De Al-Hilal-middenvelder is het fysieke aanspeelpunt op het middenveld. Lang, sterk en balvast." },
      { name: "Nasser Al-Dawsari", role: "Creatieve middenvelder", detail: "De motor van het Saoedische middenveld bij Al-Hilal. Technisch begaafd en veelzijdig inzetbaar." },
      { name: "Nawaf Al-Aqidi", role: "Keeper", detail: "De Al-Nassr-doelman is de toekomst van het Saoedische keepersgilde. Jong en talentvol." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "2022-sensatie: bewezen dat ze de allergrootsten kunnen verslaan (2-1 vs Argentinië)",
      "Ervaring: zesde WK-deelname, team kent het grote podium",
      "Saudi Pro League: topspelers trainen dagelijks met wereldsterren als Ronaldo en Neymar",
      "Teamgeest en nationale trots: enorme motivatie om het land te vertegenwoordigen",
      "Hoge intensiteit: kunnen in de eerste helft elk team onder druk zetten"
    ],
    weaknesses: [
      "Inconsistentie: na de sensatie tegen Argentinië volgden twee nederlagen in 2022",
      "Verdediging: 37 tegendoelpunten in 16 WK-wedstrijden (2,3 per wedstrijd)",
      "Alle spelers in binnenlandse competitie: minder ervaring in Europese topcompetities",
      "Fitnessniveau: hoge pressing kan niet 90 minuten volgehouden worden",
      "2002-trauma: de 0-8 tegen Duitsland toont de kwetsbaarheid bij grote achterstand"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 20,
      roundOf32: 10,
      roundOf16: 4,
      quarterFinal: 1.5,
      semiFinal: 0.5,
      champion: 0.1,
      mostLikelyResult: "Groepsfase",
      summary: "Saoedi-Arabië is de <strong>giantkiller</strong> van het WK – hun 2-1 zege op Argentinië in 2022 was een van de grootste verrassingen in de WK-geschiedenis. De Groene Valken kunnen op hun dag elk team verslaan, maar de consistentie ontbreekt. In een groep met Spanje en Uruguay is de marge klein. <em>De wedstrijd tegen Kaapverdië wordt cruciaal – winnen daar en dan hopen op een stunt tegen een van de grote jongens.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // URUGUAY (teamId: 32) – Groep H
  // ═══════════════════════════════════════════════════════
  32: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 56,
      wins: 24,
      draws: 12,
      losses: 20,
      goalsFor: 87,
      goalsAgainst: 74
    },

    titles: [1930, 1950],

    // ── WK-deelnames ──
    history: [
      { year: 1930, host: "Uruguay 🏠",    result: "Wereldkampioen", tag: "final",  detail: "🏆 WINNAAR van het allereerste WK! Als gastland versloeg Uruguay Argentinië met 4-2 in de finale in het Estadio Centenario in Montevideo." },
      { year: 1950, host: "Brazilië",      result: "Wereldkampioen", tag: "final",  detail: "🏆 WINNAAR! De 'Maracanazo': Uruguay versloeg Brazilië met 2-1 in de beslissende wedstrijd voor 200.000 toeschouwers in het Maracanã. De grootste verrassing in voetbalgeschiedenis." },
      { year: 1954, host: "Zwitserland",   result: "Halve finale",   tag: "sf",     detail: "4-2 winst op Engeland in de kwartfinale. In de halve finale 2-4 verlies tegen het legendarische Hongarije van Puskás." },
      { year: 1962, host: "Chili",         result: "Groepsfase",     tag: "group",  detail: "Teleurstellende groepsfase-exit." },
      { year: 1966, host: "Engeland",      result: "Kwartfinale",    tag: "qf",     detail: "In de kwartfinale 0-4 verlies tegen West-Duitsland." },
      { year: 1970, host: "Mexico",        result: "Halve finale",   tag: "sf",     detail: "In de halve finale 1-3 verlies tegen Brazilië. Vierde plaats." },
      { year: 1974, host: "West-Duitsland", result: "Groepsfase",    tag: "group",  detail: "Uitgeschakeld in de groepsfase na verlies tegen Nederland (0-2) en Zweden (0-3)." },
      { year: 1986, host: "Mexico",        result: "Achtste finale", tag: "r16",    detail: "In de achtste finale 0-1 verlies tegen Argentinië (Maradona)." },
      { year: 1990, host: "Italië",        result: "Achtste finale", tag: "r16",    detail: "In de achtste finale 0-2 verlies tegen gastland Italië. Controversieel toernooi." },
      { year: 2002, host: "Japan/Z-Korea", result: "Groepsfase",     tag: "group",  detail: "Verrassende uitschakeling in de groepsfase." },
      { year: 2010, host: "Zuid-Afrika",    result: "Halve finale",   tag: "sf",     detail: "Geweldig toernooi: 2-1 winst op Zuid-Korea (achtste finale), drama tegen Ghana (1-1, 4-2 pen – Suárez' handsbal op de lijn in de 120e minuut). In de halve finale 2-3 verlies tegen Nederland." },
      { year: 2014, host: "Brazilië",      result: "Achtste finale", tag: "r16",    detail: "Suárez beet Chiellini en werd geschorst. In de achtste finale 0-2 verlies tegen Colombia (James Rodríguez' iconische goal)." },
      { year: 2018, host: "Rusland",       result: "Kwartfinale",    tag: "qf",     detail: "Solide groepsfase met drie overwinningen. In de kwartfinale 0-2 verlies tegen Frankrijk (Varane, Griezmann)." },
      { year: 2022, host: "Qatar",         result: "Groepsfase",     tag: "group",  detail: "Teleurstellende exit: 0-2 verlies tegen Portugal, 0-0 tegen Zuid-Korea, 2-0 winst tegen Ghana maar toch uitgeschakeld op doelsaldo." }
    ],

    // ── Head-to-Head Groep H ──
    groupOpponents: [
      {
        name: "Spanje",
        code: "es",
        fifaRanking: 1,
        h2hSummary: "1 WK-duel: 1× gelijkspel",
        verdict: "even",
        matches: [
          { tournament: "WK 1950 Finale-ronde", score: "2-2", detail: "In de finale-ronde (round-robin) van het WK 1950 in Brazilië eindigde de wedstrijd in een spectaculair 2-2 gelijkspel. Uruguay werd uiteindelijk wereldkampioen dat jaar." }
        ],
        analysis: "Twee voetbalgrootmachten met samen drie wereldtitels. Het enige WK-duel dateert uit 1950 (2-2). Spanje is de regerend Europees kampioen met een jonge, talentvolle selectie. Uruguay brengt fysiek, ervaring en de garra charrúa. De topwedstrijd van Groep H."
      },
      {
        name: "Kaapverdië",
        code: "cv",
        fifaRanking: 72,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Kaapverdië maakt zijn WK-debuut en is de grote underdog. Uruguay moet deze wedstrijd overtuigend winnen. De tweevoudig wereldkampioen heeft een enorm kwaliteitsoverschot en zou geen problemen moeten ondervinden."
      },
      {
        name: "Saoedi-Arabië",
        code: "sa",
        fifaRanking: 56,
        h2hSummary: "Geen eerdere WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Geen eerdere WK-ontmoetingen. Uruguay is op papier favoriet, maar moet waakzaam zijn na de stunt van Saoedi-Arabië tegen Argentinië in 2022. De garra charrúa van Uruguay tegen de hoge pressing van de Groene Valken: een interessant tactisch duel."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Federico Valverde", role: "Motor & leider", detail: "De Real Madrid-middenvelder is de complete voetballer: loopvermogen, techniek, schot en leiderschap. De onbetwiste leider van de nieuwe Uruguayaanse generatie." },
      { name: "Darwin Núñez", role: "Spits", detail: "De explosieve Al-Hilal-spits is snel, fysiek sterk en altijd gevaarlijk in de zestien. Onvoorspelbaar maar dodelijk als hij in vorm is." },
      { name: "Ronald Araújo", role: "Verdediger", detail: "De Barcelona-verdediger is een rots in de branding achterin. Fysiek dominant, snel en sterk in de lucht." },
      { name: "José María Giménez", role: "Verdediger", detail: "De Atlético Madrid-verdediger brengt ervaring en strijdlust. Samen met Araújo vormt hij een van de sterkste verdedigingsduo's op het WK." },
      { name: "Manuel Ugarte", role: "Verdedigende middenvelder", detail: "De Manchester United-middenvelder is het schild voor de verdediging. Onvermoeibaar in de duels en tactisch intelligent." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Garra Charrúa: de legendarische Uruguayaanse vechtlust en winnaarsmentaliteit",
      "Tweevoudig wereldkampioen: historisch pedigree en WK-DNA",
      "Sterke verdediging: Araújo en Giménez vormen een topmuur centraal achterin",
      "Valverde: een van de meest complete middenvelders ter wereld",
      "Ervaring: spelers bij Europese topclubs (Real Madrid, Barcelona, Atlético, Man United)"
    ],
    weaknesses: [
      "Onvoorspelbaarheid voorin: Núñez kan briljant maar ook onzichtbaar zijn",
      "Vergrijzende kern: Giménez, Muslera en Cáceres worden ouder",
      "2022-deceptie: groepsfase-exit ondanks individuele kwaliteit",
      "Bondscoach Bielsa: geniale tacticus maar onvoorspelbare persoonlijkheid",
      "Beperkte aanvallende breedte: achter Núñez weinig topspitsen beschikbaar"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 92,
      roundOf32: 75,
      roundOf16: 48,
      quarterFinal: 25,
      semiFinal: 12,
      champion: 4.5,
      mostLikelyResult: "Kwartfinale",
      summary: "Uruguay is een <strong>tweevoudig wereldkampioen</strong> met een sterke nieuwe generatie. <strong>Federico Valverde</strong> is de leider van een team dat de legendarische <em>garra charrúa</em> combineert met moderne techniek. De groep is pittig met Spanje als grote concurrent, maar Uruguay zou als tweede of zelfs eerste moeten doorkomen. <em>Een kwartfinale is het minimum; een halve finale – zoals in 2010 – is haalbaar als de verdediging standhoudt.</em>"
    }
  },
  // ═══════════════════════════════════════════════════════
  // FRANKRIJK (teamId: 33) – Groep I
  // ═══════════════════════════════════════════════════════
  33: {
    lastUpdated: "2026-06-09",
    titles: [1998, 2018],

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 73,
      wins: 41,
      draws: 15,
      losses: 17,
      goalsFor: 137,
      goalsAgainst: 81
    },

    // ── WK-deelnames ──
    history: [
      { year: 1930, host: "Uruguay",       result: "Groepsfase",     tag: "group",  detail: "Eerste WK ooit – Lucien Laurent scoorde het allereerste WK-doelpunt in de geschiedenis (4-1 vs Mexico). Verloor van Argentinië (0-1) en Chili (0-1)." },
      { year: 1934, host: "Italië",        result: "Eerste ronde",   tag: "group",  detail: "Direct uitgeschakeld in het knockoutsysteem: 2-3 n.v. verlies tegen Oostenrijk." },
      { year: 1938, host: "Frankrijk 🏠",  result: "Kwartfinale",    tag: "qf",     detail: "Als gastland België verslagen in de eerste ronde (3-1), maar in de kwartfinale uitgeschakeld door titelhouder Italië (1-3)." },
      { year: 1954, host: "Zwitserland",   result: "Groepsfase",     tag: "group",  detail: "Één zege (3-2 vs Mexico) en één nederlaag. Vroeg naar huis." },
      { year: 1958, host: "Zweden",        result: "Halve finale",   tag: "sf",     detail: "Beste WK tot dan toe – Just Fontaine scoorde 13 doelpunten, nog altijd het absolute WK-record voor één toernooi. Verloor de halve finale van Brazilië (2-5) maar won brons na 6-3 tegen West-Duitsland." },
      { year: 1966, host: "Engeland",      result: "Groepsfase",     tag: "group",  detail: "Teleurstellend toernooi: twee nederlagen en een gelijkspel." },
      { year: 1978, host: "Argentinië",    result: "Groepsfase",     tag: "group",  detail: "Uitgeschakeld in de groepsfase van het Argentijnse WK." },
      { year: 1982, host: "Spanje",        result: "Halve finale",   tag: "sf",     detail: "Het drama van Sevilla: na een epische halve finale (3-3 n.v.) verloor Frankrijk op strafschoppen (4-5) van West-Duitsland. Battiston werd bewusteloos geslagen door Schumacher – geen rode kaart. Frankrijk won troostfinale (3-2 vs Polen) met Platini als sterspeler." },
      { year: 1986, host: "Mexico",        result: "Halve finale",   tag: "sf",     detail: "Derde keer halve finale op rij. In de kwartfinale Brazilië verslagen na strafschoppen (1-1, 4-3 pen). In de halve finale 0-2 verlies tegen West-Duitsland. Troostfinale gewonnen (4-2 n.v. vs België)." },
      { year: 1998, host: "Frankrijk 🏠",  result: "Wereldkampioen 🏆", tag: "final", detail: "Eerste wereldtitel op eigen bodem! Zidane kopte twee keer raak in de finale tegen Brazilië (3-0). Het hele toernooi ongeslagen: 6 zeges en 1 gelijkspel. Thuram's legendarische twee goals in de halve finale tegen Kroatië (2-1). Frankrijk was de eerste Europese ploeg die als gastland het WK won sinds 1974." },
      { year: 2002, host: "Japan/Z-Korea", result: "Groepsfase",     tag: "group",  detail: "De grootste schande uit de Franse WK-geschiedenis: als titelhouder uitgeschakeld zonder één doelpunt te scoren (0 goals in 3 wedstrijden). Verloor de opener tegen Senegal (0-1), speelde gelijk tegen Uruguay (0-0) en verloor van Denemarken (0-2). Zidane was geblesseerd." },
      { year: 2006, host: "Duitsland",     result: "Finale",         tag: "final",  detail: "Zidane's afscheidstournee eindigde dramatisch: na een briljant toernooi (o.a. 1-0 winst op Brazilië in de kwartfinale) kopte hij Materazzi in de finale en kreeg rood. Frankrijk verloor de strafschoppen (3-5) van Italië na 1-1." },
      { year: 2010, host: "Zuid-Afrika",    result: "Groepsfase",     tag: "group",  detail: "Totale implosie: spelers staakten de training na het wegsturen van Anelka. Resultaten waren desastreus: 0-0 vs Uruguay, 0-2 vs Mexico, 1-2 vs Zuid-Afrika. Een dieptepunt in de Franse voetbalgeschiedenis." },
      { year: 2014, host: "Brazilië",      result: "Kwartfinale",    tag: "qf",     detail: "Onder Deschamps hersteld vertrouwen. Sterke groepsfase (8 goals in 3 duels). In de kwartfinale net te licht bevonden tegen Duitsland (0-1), de latere kampioen." },
      { year: 2018, host: "Rusland",       result: "Wereldkampioen 🏆", tag: "final", detail: "Les Bleus' tweede wereldtitel! Mbappé (19 jaar) werd de jongste WK-doelpuntenmaker in een finale sinds Pelé. Griezmann, Pogba en Mbappé scoorden in de finale tegen Kroatië (4-2). Het toernooi begon met 2-1 vs Australië en eindigde met pure dominantie." },
      { year: 2022, host: "Qatar",         result: "Finale",         tag: "final",  detail: "Fenomenale finale tegen Argentinië! Mbappé scoorde een hattrick (incl. twee goals in 97 seconden om van 0-2 naar 2-2 te komen), maar Frankrijk verloor de strafschoppen (2-4). Mbappé werd topscorer van het toernooi (8 goals) en is nu Frankrijks WK-topscorer aller tijden." }
    ],

    // ── Head-to-Head Groep I ──
    groupOpponents: [
      {
        name: "Senegal",
        code: "sn",
        fifaRanking: 17,
        h2hSummary: "1 WK-duel: 1× verlies Frankrijk",
        verdict: "fav",
        matches: [
          { tournament: "WK 2002 Groepsfase", score: "0-1", detail: "De beroemdste WK-opening ooit: debutant Senegal versloeg titelhouder Frankrijk in Seoul. Papa Bouba Diop scoorde het enige doelpunt. Het was het begin van Frankrijks ramptoernooi (uitgeschakeld zonder één goal te scoren)." }
        ],
        analysis: "Senegal bezorgde Frankrijk de grootste schande uit hun WK-geschiedenis met die 1-0 in 2002. Nu treffen ze elkaar opnieuw – maar de rollen zijn anders. Frankrijk is nu tweevoudig kampioen met Mbappé; Senegal heeft met spelers als Sadio Mané en Nicolas Jackson een sterke selectie maar is op papier duidelijk de underdog. De herinnering aan 2002 geeft deze wedstrijd extra lading."
      },
      {
        name: "Irak",
        code: "iq",
        fifaRanking: 63,
        h2hSummary: "Geen WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Frankrijk en Irak hebben elkaar nooit ontmoet op een WK. Beide landen waren aanwezig in 1986 (Mexico) maar in verschillende groepen. Het kwaliteitsverschil is enorm: Frankrijk is nummer 2 van de wereld met een selectie vol topspelers uit de beste competities. Irak speelt zijn eerste WK in 40 jaar en heeft nauwelijks ervaring op dit niveau. Een klinkende Franse zege wordt verwacht."
      },
      {
        name: "Noorwegen",
        code: "no",
        fifaRanking: 30,
        h2hSummary: "Geen WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Ondanks dat beide landen meerdere keren op hetzelfde WK waren (1998), hebben ze elkaar nooit getroffen op het wereldtoneel. Noorwegen heeft met Erling Haaland en Martin Ødegaard twee absolute wereldsterren, maar als team is Frankrijk veel completer en ervaren. Een verrassende Noorse overwinning zou een sensatie zijn, vergelijkbaar met hun 2-1 zege op Brazilië in 1998."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Kylian Mbappé", role: "Aanvaller & sterspeler", detail: "Frankrijks WK-topscorer aller tijden. Scoorde een hattrick in de WK-finale 2022 en werd topscorer van dat toernooi (8 goals). Op zijn 27e al een WK-legende. Speelt bij Real Madrid." },
      { name: "Antoine Griezmann", role: "Aanvallende middenvelder", detail: "De slimste speler van Les Bleus. Scoorde in de WK-finale 2018 en is met zijn ervaring (3 WK's) onmisbaar als verbindingsspeler en leider." },
      { name: "Aurélien Tchouaméni", role: "Controlerende middenvelder", detail: "De motor op het middenveld van Real Madrid. Fysiek dominant, sterk in de passing en pas 26 jaar. Speelde al een WK-finale in 2022." },
      { name: "William Saliba", role: "Centraal verdediger", detail: "Arsenal-verdediger die met zijn snelheid, rust aan de bal en leesvermogen een van de beste centrumverdedigers ter wereld is geworden." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Diepste selectie ter wereld: op elke positie meerdere wereldklasse-opties",
      "WK-ervaring: 4 finales in de laatste 7 toernooien (1998, 2006, 2018, 2022)",
      "Mbappé-factor: de gevaarlijkste aanvaller ter wereld op het grootste podium",
      "Winnaarscultuur onder Deschamps: bondscoach sinds 2012, langste dienstverband ooit",
      "Defensieve organisatie: Saliba, Konaté en Upamecano vormen een muur"
    ],
    weaknesses: [
      "Groepsfase-exit als titelhouder in 2002 en 2010: mentale kwetsbaarheid bestaat",
      "Interne spanningen: de Franse selectie heeft een geschiedenis van kleedkamerdrama's",
      "Afhankelijkheid van Mbappé: als hij geblokkeerd wordt, mist het team Plan B in de aanval",
      "Deschamps' conservatieve aanpak: soms te defensief ingesteld waardoor kansen onbenut blijven",
      "Vermoeidheid: veel spelers komen uit zware seizoenen bij topclubs"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 97,
      roundOf32: 85,
      roundOf16: 65,
      quarterFinal: 45,
      semiFinal: 30,
      champion: 14,
      mostLikelyResult: "Halve finale / Finale",
      summary: "Frankrijk is een van de absolute topfavorieten voor de wereldtitel. Met Mbappé, een ervaren selectie en bondscoach Deschamps lijkt de groepsfase een formaliteit. De Fransen hebben bewezen op hun best te zijn op WK's – vier finales in zeven toernooien spreekt boekdelen. <strong>De grootste bedreiging is intern</strong>: als de groep harmonieus blijft, is Les Bleus een kandidaat voor de titel. <em>De halve finale is het minimum; een derde wereldtitel het realistische doel.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // SENEGAL (teamId: 34) – Groep I
  // ═══════════════════════════════════════════════════════
  34: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 12,
      wins: 5,
      draws: 3,
      losses: 4,
      goalsFor: 16,
      goalsAgainst: 17
    },

    // ── WK-deelnames ──
    history: [
      { year: 2002, host: "Japan/Z-Korea", result: "Kwartfinale",    tag: "qf",    detail: "Sensationeel WK-debuut! Versloeg titelhouder Frankrijk in de openingswedstrijd (1-0, goal Papa Bouba Diop). Bereikte als pas tweede Afrikaans land ooit de kwartfinale. Versloeg Zweden in de achtste finale (2-1 n.v., golden goal Camara). Verloor de kwartfinale van Turkije (0-1, golden goal)." },
      { year: 2018, host: "Rusland",       result: "Groepsfase",     tag: "group", detail: "Uitgeschakeld op de FIFA Fair Play-regel – het eerste team ooit dat op deze manier afviel. Senegal en Japan stonden gelijk op punten, doelsaldo én onderlinge uitslag (2-2). Senegal had twee gele kaarten meer en werd uitgeschakeld." },
      { year: 2022, host: "Qatar",         result: "Achtste finale",  tag: "r16",   detail: "Als Afrika Cup-houder (2022) sterk aan het toernooi begonnen. Versloeg Qatar (3-1) en Ecuador (2-1). In de achtste finale kansloos tegen Engeland (0-3)." }
    ],

    // ── Head-to-Head Groep I ──
    groupOpponents: [
      {
        name: "Frankrijk",
        code: "fr",
        fifaRanking: 2,
        h2hSummary: "1 WK-duel: 1× winst Senegal",
        verdict: "unfav",
        matches: [
          { tournament: "WK 2002 Groepsfase", score: "1-0", detail: "De wedstrijd die de voetbalwereld op zijn kop zette: debutant Senegal versloeg titelhouder Frankrijk in Seoul! Papa Bouba Diop scoorde in de 30e minuut. Frankrijk had sterren als Zidane (geblesseerd), Henry en Vieira maar kwam er niet doorheen." }
        ],
        analysis: "De herinnering aan 2002 brandt nog altijd bij Senegal – het was het moment dat Afrikaans voetbal de wereld verbaasde. Maar de context is nu anders: Frankrijk is tweevoudig kampioen en zwaar favoriet. Toch weet Senegal uit ervaring dat ze Les Bleus kunnen verslaan. De Leeuwen van Teranga zullen met extra motivatie spelen vanwege de historische parallel."
      },
      {
        name: "Irak",
        code: "iq",
        fifaRanking: 63,
        h2hSummary: "Geen WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Senegal en Irak hebben elkaar nog nooit getroffen op een WK. Senegal is op papier favoriet dankzij een sterkere selectie met spelers in Europese topcompetities. Als Senegal de groepsfase wil overleven, is een overwinning op Irak essentieel. De Leeuwen van Teranga hebben meer WK-ervaring en individuele kwaliteit."
      },
      {
        name: "Noorwegen",
        code: "no",
        fifaRanking: 30,
        h2hSummary: "Geen WK-duels",
        verdict: "even",
        matches: [],
        analysis: "Een fascinerende ontmoeting tussen twee teams met individuele wereldsterren. Noorwegen heeft Haaland en Ødegaard; Senegal heeft Mané en Jackson. Op papier is dit een gelijkopgaand duel. De uitkomst van deze wedstrijd kan bepalend zijn voor wie als tweede uit de groep gaat, achter Frankrijk."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Sadio Mané", role: "Aanvoerder & sterspeler", detail: "De ervaren aanvaller van Al-Nassr is het boegbeeld van Senegalees voetbal. Won de Afrika Cup 2022 en brengt onvervangbare ervaring en leiderschap op het grootste podium." },
      { name: "Nicolas Jackson", role: "Spits", detail: "De Bayern München-aanvaller is de toekomst van Senegalees voetbal. Snel, technisch en doelgericht – hij kan tegen elke verdediging scoren." },
      { name: "Kalidou Koulibaly", role: "Centraal verdediger", detail: "De ervaren verdediger van Al-Hilal is het anker van de Senegalese defensie. Fysiek dominant en een leider op het veld." },
      { name: "Pape Matar Sarr", role: "Middenvelder", detail: "De jonge Tottenham-middenvelder is de drijvende kracht op het middenveld. Dynamisch, balvast en met een geweldig bereik." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "WK-ervaring: kwartfinale in 2002, achtste finale in 2022 – Senegal weet hoe het moet",
      "Historische stunt tegen Frankrijk (1-0 in 2002) geeft psychologisch voordeel",
      "Fysieke kracht en snelheid: Senegalese spelers zijn atletisch uitzonderlijk",
      "Afrika Cup-winnaar (2022): winnaarscultuur in de selectie",
      "Brede selectie met spelers bij Europese topclubs (Bayern München, Crystal Palace, Monaco)"
    ],
    weaknesses: [
      "Onregelmatigheid: uitgeschakeld op Fair Play-regel in 2018 en kansloos verloren van Engeland in 2022",
      "Afhankelijkheid van Mané: als hij uitvalt, mist het team een leider",
      "Verdedigende kwetsbaarheid: te veel tegendoelpunten bij druk van topteams",
      "Weinig diepgang op de bank vergeleken met Europese topnaties",
      "Trainer Pape Thiaw: minder ervaring op het allerhoogste niveau"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 55,
      roundOf32: 35,
      roundOf16: 18,
      quarterFinal: 7,
      semiFinal: 2.5,
      champion: 0.8,
      mostLikelyResult: "Groepsfase / Achtste finale",
      summary: "Senegal is het sterkste Afrikaanse team in de groep en een realistisch kandidaat voor de tweede plaats achter Frankrijk. De wedstrijden tegen Noorwegen en Irak zijn cruciaal. <strong>De herinnering aan 2002 geeft extra motivatie</strong> tegen Frankrijk, maar een herhaling van die stunt is onwaarschijnlijk. <em>De achtste finale is haalbaar; de kwartfinale zou een geweldige prestatie zijn.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // IRAK (teamId: 35) – Groep I
  // ═══════════════════════════════════════════════════════
  35: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 3,
      wins: 0,
      draws: 0,
      losses: 3,
      goalsFor: 1,
      goalsAgainst: 4
    },

    // ── WK-deelnames ──
    history: [
      { year: 1986, host: "Mexico",        result: "Groepsfase",     tag: "group",  detail: "Enige WK-deelname tot nu toe. Verloor alle drie groepswedstrijden: 0-1 tegen Paraguay, 1-2 tegen België en 0-1 tegen gastland Mexico. Scoorde slechts één doelpunt. Het land was op dat moment verwikkeld in de Iran-Irakoorlog." }
    ],

    // ── Head-to-Head Groep I ──
    groupOpponents: [
      {
        name: "Frankrijk",
        code: "fr",
        fifaRanking: 2,
        h2hSummary: "Geen WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Het kwaliteitsverschil met Frankrijk is enorm. Les Bleus zijn tweevoudig wereldkampioen en beschikken over een selectie vol absolute wereldsterren. Voor Irak is het al een prestatie om niet kansloos te verliezen. De Irakezen zullen defensief moeten spelen en hopen op een wonder – zoals Costa Rica's 0-0 tegen Engeland op het WK 2006."
      },
      {
        name: "Senegal",
        code: "sn",
        fifaRanking: 17,
        h2hSummary: "Geen WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Senegal is een gevestigde WK-naam met kwartfinale-ervaring. Irak zal ook tegen Senegal de underdog zijn, maar het verschil is kleiner dan tegen Frankrijk. De fysieke kracht en snelheid van Senegal kunnen problematisch zijn voor de Irakese verdediging. Een gelijkspel zou al een grote prestatie zijn."
      },
      {
        name: "Noorwegen",
        code: "no",
        fifaRanking: 30,
        h2hSummary: "Geen WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Noorwegen met Haaland en Ødegaard is op papier veruit sterker. Maar van de drie groepstegenstanders biedt deze wedstrijd Irak misschien de meeste kans: Noorwegen is als team minder balans dan Frankrijk en Senegal. Als Irak Haaland kan neutraliseren, is een verrassing niet ondenkbaar."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Ali Al-Hamadi", role: "Spits", detail: "De Luton Town-aanvaller is de gevaarlijkste speler van Irak. Snelheid en afwerking zijn zijn wapens. Speelt in het Engelse profvoetbal en kent de fysieke strijd." },
      { name: "Zidane Iqbal", role: "Middenvelder", detail: "De Utrecht-middenvelder is de creatieve motor van Irak. In Nederland opgeleid en technisch begaafd – hij moet de lijnen uitzetten op het WK." },
      { name: "Ali Jasim", role: "Aanvaller", detail: "Het 19-jarige wonderkind dat Irak hoop geeft voor de toekomst. Uitzonderlijk technisch en moedig aan de bal. Werd door de Asian Cup-prestaties al vergeleken met Messi." },
      { name: "Aymen Hussein", role: "Spits", detail: "Ervaren doelpuntenmaker en het geweten van het Irakese aanvalsspel. Zijn kopkracht en positionering maken hem gevaarlijk bij standaardsituaties." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Passie en vechtlust: Irak voetbalt met enorme trots en emotie",
      "Aziatische beker-winnaar (2007): het land heeft bewezen te kunnen presteren onder druk",
      "Jong talent: Ali Jasim en andere jonge spelers brengen frisheid en onbevangenheid",
      "Underdog-mentaliteit: niets te verliezen, alles te winnen",
      "Terugkeer na 40 jaar: het hele land staat achter het team"
    ],
    weaknesses: [
      "Minieme WK-ervaring: slechts 3 wedstrijden in de geschiedenis, alle verloren",
      "Kwaliteitsverschil: het gros van de selectie speelt buiten de Europese topcompetities",
      "Verdediging: kwetsbaar tegen snelle, technisch begaafde tegenstanders",
      "Gebrek aan diepte in de selectie: weinig alternatieven op de bank",
      "Geen ervaring met de druk en intensiteit van een WK-eindtoernooi"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 8,
      roundOf32: 3,
      roundOf16: 1,
      quarterFinal: 0.3,
      semiFinal: 0.05,
      champion: 0.01,
      mostLikelyResult: "Groepsfase-uitschakeling",
      summary: "Irak keert na 40 jaar terug op het WK en zit in een zware groep met tweevoudig kampioen Frankrijk, kwartfinalist Senegal en het Haaland-Noorwegen. <strong>De kans op doorgang is minimaal</strong>, maar het doel is om te genieten en het Irakese voetbal op de kaart te zetten. <em>Eén punt of één doelpunt zou al als een overwinning voelen voor de miljoenen fans thuis.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // NOORWEGEN (teamId: 36) – Groep I
  // ═══════════════════════════════════════════════════════
  36: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 8,
      wins: 3,
      draws: 2,
      losses: 3,
      goalsFor: 8,
      goalsAgainst: 7
    },

    // ── WK-deelnames ──
    history: [
      { year: 1938, host: "Frankrijk",     result: "Eerste ronde",    tag: "group",  detail: "WK-debuut in het knockoutsysteem. Verloor na verlenging van het sterke Italië (1-2 n.v.), de latere kampioen. Arne Brustad scoorde Noorwegens eerste WK-goal." },
      { year: 1994, host: "VS",            result: "Groepsfase",      tag: "group",  detail: "Eerste WK-deelname in 56 jaar! Versloeg Mexico 1-0 maar speelde gelijk tegen Ierland (0-0) en verloor van Italië (0-1). Net niet genoeg voor de volgende ronde." },
      { year: 1998, host: "Frankrijk",     result: "Achtste finale",  tag: "r16",    detail: "Beste WK-resultaat ooit. Versloeg grootmacht Brazilië met 2-1 in de groepsfase – Tore André Flo en Kjetil Rekdal (strafschop) scoorden. Versloeg ook Schotland (2-1). In de achtste finale verloren van Italië (0-1, goal Vieri)." }
    ],

    // ── Head-to-Head Groep I ──
    groupOpponents: [
      {
        name: "Frankrijk",
        code: "fr",
        fifaRanking: 2,
        h2hSummary: "Geen WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Noorwegen en Frankrijk hebben elkaar nooit ontmoet op een WK, ondanks dat ze beide in 1998 in Frankrijk speelden. Het kwaliteitsverschil is groot, maar Noorwegen bewees in 1998 dat ze grote landen kunnen verslaan (2-1 vs Brazilië). Met Haaland en Ødegaard heeft Noorwegen individuele klasse om elke tegenstander pijn te doen."
      },
      {
        name: "Senegal",
        code: "sn",
        fifaRanking: 17,
        h2hSummary: "Geen WK-duels",
        verdict: "even",
        matches: [],
        analysis: "Een sleutelwedstrijd voor de tweede plek in de groep. Beide teams hebben vergelijkbare ambities en individuele kwaliteit. Noorwegen heeft met Haaland en Ødegaard twee absolute wereldsterren; Senegal heeft met Mané en Jackson ervaren WK-gangers. Deze wedstrijd kan de groep beslissen."
      },
      {
        name: "Irak",
        code: "iq",
        fifaRanking: 63,
        h2hSummary: "Geen WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Op papier is Noorwegen zwaar favoriet tegen Irak. Met Haaland in de spits en Ødegaard als spelmaker beschikt Noorwegen over meer individuele kwaliteit dan Irak kan dromen. Een overwinning op Irak is essentieel voor de Noorse WK-ambities – dit is de wedstrijd die ze moeten winnen."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Erling Haaland", role: "Spits & sterspeler", detail: "De Manchester City-machine is een van de dodelijkste spitsen aller tijden. Met zijn snelheid, kracht en afwerking is hij op zijn 25e al een voetballegende. Zijn eerste WK – hij wil de wereld laten zien wat hij kan." },
      { name: "Martin Ødegaard", role: "Aanvoerder & spelmaker", detail: "De Arsenal-kapitein is het brein van het Noorse elftal. Zijn passing, visie en leiderschap maken hem tot een van de beste middenvelders ter wereld. Op zijn 27e staat hij op de top van zijn kunnen." },
      { name: "Alexander Sørloth", role: "Aanvaller", detail: "De Atlético Madrid-spits biedt een fysiek alternatief naast Haaland. Sterk in de lucht, hardwerkend en met een neus voor doelpunten." },
      { name: "Sander Berge", role: "Middenvelder", detail: "De Fulham-middenvelder is de perfecte balans tussen verdedigen en aanvallen. Fysiek sterk en met een goed overzicht – hij beschermt de defensie en voedt de aanval." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Twee absolute wereldsterren: Haaland (Manchester City) en Ødegaard (Arsenal)",
      "Giant-killing vermogen: versloeg Brazilië (2-1) op het WK 1998",
      "Fysieke kracht: Noorse spelers zijn lang, sterk en atletisch",
      "Premier League-kern: veel spelers zijn gewend aan het hoogste niveau in Engeland",
      "Onbevangenheid: eerste WK in 28 jaar zorgt voor frisheid en motivatie"
    ],
    weaknesses: [
      "Beperkte WK-ervaring: slechts 8 WK-wedstrijden in de geschiedenis",
      "Afhankelijkheid van Haaland en Ødegaard: als zij geblokkeerd worden, mist het team alternatieven",
      "Teambalans: individueel sterk maar als collectief niet bewezen op eindtoernooien",
      "Verdediging: kwetsbaar bij snelle omschakelingen en tegen technische tegenstanders",
      "Geen ervaring met tropische hitte in de VS (wedstrijden in de zomer)"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 50,
      roundOf32: 30,
      roundOf16: 15,
      quarterFinal: 6,
      semiFinal: 2,
      champion: 0.5,
      mostLikelyResult: "Groepsfase / Achtste finale",
      summary: "Noorwegen is het spannendste team in Groep I: met Haaland en Ødegaard kan het iedereen verslaan, maar als team mist het de diepte om een heel toernooi te domineren. <strong>De strijd om de tweede plek met Senegal wordt beslissend.</strong> Als Haaland zijn clubvorm meeneemt naar het WK, is alles mogelijk. <em>De groepsfase overleven is het doel; de achtste finale het realistische maximum.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // ARGENTINIË (teamId: 37) – Groep J
  // ═══════════════════════════════════════════════════════
  37: {
    lastUpdated: "2026-06-09",
    titles: [1978, 1986, 2022],

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 88,
      wins: 47,
      draws: 18,
      losses: 23,
      goalsFor: 156,
      goalsAgainst: 103
    },

    // ── WK-deelnames ──
    history: [
      { year: 1930, host: "Uruguay",       result: "Finale",          tag: "final",  detail: "Bereikte de eerste WK-finale ooit! Versloeg de VS met 6-1 in de halve finale. Verloor de finale van gastland Uruguay (2-4) voor 68.000 toeschouwers in Montevideo." },
      { year: 1934, host: "Italië",        result: "Eerste ronde",    tag: "group",  detail: "Stuurde een zwakke selectie vanwege conflict met de Italiaanse bond. Verloor 2-3 van Zweden in de eerste ronde." },
      { year: 1958, host: "Zweden",        result: "Groepsfase",      tag: "group",  detail: "Pijnlijke groepsfase: 1-3 verlies tegen West-Duitsland en een verpletterende 1-6 nederlaag tegen Tsjechoslowakije." },
      { year: 1962, host: "Chili",         result: "Groepsfase",      tag: "group",  detail: "Opnieuw vroeg uitgeschakeld. Slechts één zege in drie wedstrijden." },
      { year: 1966, host: "Engeland",      result: "Kwartfinale",     tag: "qf",     detail: "Bereikte de kwartfinale maar verloor controversieel van gastland Engeland (0-1). Aanvoerder Antonio Rattín werd weggestuurd door de Duitse scheidsrechter – een incident dat voetbalgeschiedenis schreef." },
      { year: 1974, host: "West-Duitsland", result: "Tweede ronde",   tag: "group",  detail: "Bereikte de tweede groepsfase maar werd daar uitgeschakeld door Nederland, Brazilië en Oost-Duitsland." },
      { year: 1978, host: "Argentinië 🏠", result: "Wereldkampioen 🏆", tag: "final", detail: "Eerste wereldtitel op eigen bodem! Mario Kempes scoorde twee keer in de finale tegen Nederland (3-1 n.v.). Het toernooi werd overschaduwd door de militaire junta. De controversiële 6-0 zege op Peru in de tweede ronde blijft omstreden." },
      { year: 1982, host: "Spanje",        result: "Tweede ronde",    tag: "group",  detail: "Als titelhouder teleurstellend: versloeg Hongarije (4-1) maar verloor van Italië (1-2, Maradona's eerste WK) en Brazilië (1-3). Maradona kreeg rood tegen Brazilië." },
      { year: 1986, host: "Mexico",        result: "Wereldkampioen 🏆", tag: "final", detail: "Het WK van Diego Maradona – het beste individuele toernooi ooit. 'De Hand van God' en 'Het Doelpunt van de Eeuw' in de kwartfinale tegen Engeland (2-1). In de finale versloeg Argentinië West-Duitsland met 3-2, met Burruchaga als matchwinner." },
      { year: 1990, host: "Italië",        result: "Finale",          tag: "final",  detail: "Opnieuw de finale bereikt, maar veel minder overtuigend. Won via strafschoppen van Joegoslavië (QF) en Italië (SF, in Napels – Maradona's stad). Verloor de finale van West-Duitsland (0-1, strafschop Brehme) na twee rode kaarten." },
      { year: 1994, host: "VS",            result: "Achtste finale",  tag: "r16",    detail: "Het WK van Maradona's dopingschorsing. Na twee zeges in de groep werd Maradona positief getest op efedrine. Zonder hem verloor Argentinië de achtste finale van Roemenië (2-3)." },
      { year: 1998, host: "Frankrijk",     result: "Kwartfinale",     tag: "qf",     detail: "Episch achtste finale-duel met Engeland (2-2, gewonnen na strafschoppen). Beroemde rode kaart voor David Beckham. In de kwartfinale verloren van Nederland (1-2, goal Bergkamp in de 90e minuut)." },
      { year: 2002, host: "Japan/Z-Korea", result: "Groepsfase",      tag: "group",  detail: "Verrassende groepsfase-exit! Verloor van Engeland (0-1, Beckham's wraak) en slechts één zege. Een team met Batistuta, Verón en Ortega ging roemloos ten onder." },
      { year: 2006, host: "Duitsland",     result: "Kwartfinale",     tag: "qf",     detail: "Briljant in de groepsfase: 6-0 winst op Servië-Montenegro met aanvalsspel dat de wereld betoverde. In de kwartfinale verloren van gastland Duitsland na strafschoppen. Messi's eerste WK (18 jaar)." },
      { year: 2010, host: "Zuid-Afrika",    result: "Kwartfinale",     tag: "qf",     detail: "Maradona als bondscoach bracht chaos en spektakel. Versloeg Mexico (3-1) en Zuid-Korea in de groep, maar werd in de kwartfinale vernederd door Duitsland (0-4). Messi scoorde niet." },
      { year: 2014, host: "Brazilië",      result: "Finale",          tag: "final",  detail: "Messi droeg het team naar de finale op zijn schouders. Vier doelpunten in de groepsfase, briljante assists. In de finale verloren van Duitsland (0-1 n.v., goal Götze in de 113e minuut). Messi won de Gouden Bal maar leek gebroken na de finale." },
      { year: 2018, host: "Rusland",       result: "Achtste finale",  tag: "r16",    detail: "Chaotisch toernooi: 1-1 tegen IJsland, 0-3 vernederd door Kroatië, en een heroïsche 2-1 zege op Nigeria om net te overleven. In de achtste finale verloor Argentinië van Frankrijk (3-4) in een van de beste WK-wedstrijden ooit. Mbappé's doorbraak." },
      { year: 2022, host: "Qatar",         result: "Wereldkampioen 🏆", tag: "final", detail: "Het WK van Lionel Messi – zijn ultieme kroning! Na een schokkende 1-2 nederlaag tegen Saoedi-Arabië in de opener herstelde Argentinië zich briljant. Messi scoorde 7 doelpunten en leverde 3 assists. De finale tegen Frankrijk (3-3, gewonnen 4-2 na strafschoppen) wordt beschouwd als de beste WK-finale aller tijden. Emiliano Martínez was de held in de strafschoppenserie." }
    ],

    // ── Head-to-Head Groep J ──
    groupOpponents: [
      {
        name: "Algerije",
        code: "dz",
        fifaRanking: 34,
        h2hSummary: "Geen WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Argentinië en Algerije hebben elkaar nooit getroffen op een WK, ondanks dat beide landen op hetzelfde toernooi waren in 1982 en 1986. Het kwaliteitsverschil is aanzienlijk: Argentinië is de regerend wereldkampioen met Messi, terwijl Algerije nog nooit voorbij de achtste finale is gekomen. Toch moeten de Argentijnen oppassen – hun eigen groepsfase-nederlaag tegen Saoedi-Arabië in 2022 bewijst dat underdogs gevaarlijk kunnen zijn."
      },
      {
        name: "Oostenrijk",
        code: "at",
        fifaRanking: 19,
        h2hSummary: "Geen WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Verrassend genoeg hebben Argentinië en Oostenrijk elkaar nooit getroffen op een WK, ondanks dat beide landen bij hetzelfde toernooi waren in 1934, 1958, 1978 en 1982. Onder Ralf Rangnick speelt Oostenrijk aanvallend en georganiseerd voetbal. Ze worden de grootste uitdaging voor Argentinië in de groep, maar de Albiceleste heeft de individuele klasse om elk systeem te ontmantelen."
      },
      {
        name: "Jordanië",
        code: "jo",
        fifaRanking: 68,
        h2hSummary: "Geen WK-duels (WK-debuut Jordanië)",
        verdict: "fav",
        matches: [],
        analysis: "Jordanië maakt zijn WK-debuut en treft direct de regerend wereldkampioen – een scenario dat doet denken aan Saoedi-Arabië vs Argentinië in 2022 (1-2 voor de Saoedi's!). Argentinië zal gewaarschuwd zijn: onderschat nooit een debutant. Maar het kwaliteitsverschil is enorm en een Argentijnse zege lijkt onvermijdelijk."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Lionel Messi", role: "Aanvoerder & legende", detail: "Wellicht het laatste WK van de GOAT. Op zijn 38e nog steeds magiër met de bal. Won het WK 2022 met 7 goals en 3 assists. De hele voetbalwereld kijkt naar zijn afscheid op het grootste podium." },
      { name: "Julián Alvarez", role: "Spits", detail: "De Atlético Madrid-spits is de toekomst van het Argentijnse voetbal. Al 26 jaar en een bewezen WK-speler (scoorde in de halve finale 2022 tegen Kroatië). Snel, slim en dodelijk voor het doel." },
      { name: "Enzo Fernández", role: "Middenvelder", detail: "De Chelsea-middenvelder won de prijs voor Beste Jonge Speler op het WK 2022. Balvast, dynamisch en met een geweldige pass – hij is het kloppend hart van het Argentijnse middenveld." },
      { name: "Emiliano Martínez", role: "Doelman", detail: "De held van de strafschoppenseries! 'Dibu' Martínez van Aston Villa is een meester in het mentale spelletje met penaltynemers. Zijn psychologische oorlogsvoering is legendarisch." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Regerend wereldkampioen: winnaarscultuur en ervaring op het hoogste niveau",
      "Messi-factor: zelfs op zijn 38e kan hij elke wedstrijd beslissen",
      "Mentale weerbaarheid: herstelde van 1-2 verlies tegen Saoedi-Arabië in 2022 om kampioen te worden",
      "Tactische flexibiliteit onder Scaloni: kan zowel dominant als pragmatisch spelen",
      "Ongeslagen reeks: Argentinië heeft een recordreeks van 40+ wedstrijden zonder nederlaag bereikt"
    ],
    weaknesses: [
      "Leeftijd van Messi (38): fysiek niet meer op het niveau van weleer",
      "Verjonging: de kern van 2022 wordt ouder, nieuwe spelers moeten zich bewijzen",
      "Groepsfase-kwetsbaarheid: uitgeschakeld in 2002 en bijna in 2022 (verlies tegen Saoedi-Arabië)",
      "Emotionele ploeg: rode kaarten en verlies van discipline kunnen fataal zijn",
      "Druk: als titelhouder is elke wedstrijd een must-win – de verwachtingen zijn torenhoog"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 98,
      roundOf32: 90,
      roundOf16: 72,
      quarterFinal: 50,
      semiFinal: 35,
      champion: 18,
      mostLikelyResult: "Halve finale / Finale",
      summary: "Als regerend wereldkampioen en nummer 1 van de FIFA-ranking is Argentinië een van de absolute topfavorieten. De groep lijkt op papier comfortabel. <strong>Het grote verhaal is Messi's afscheid</strong> – kan de GOAT zijn carrière bekronen met een tweede WK-titel? De Albiceleste heeft de diepte, ervaring en winnaarscultuur om het hele toernooi te winnen. <em>Alles minder dan de halve finale zou een teleurstelling zijn.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // ALGERIJE (teamId: 38) – Groep J
  // ═══════════════════════════════════════════════════════
  38: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 13,
      wins: 3,
      draws: 3,
      losses: 7,
      goalsFor: 12,
      goalsAgainst: 18
    },

    // ── WK-deelnames ──
    history: [
      { year: 1982, host: "Spanje",        result: "Groepsfase",     tag: "group",  detail: "Legendarisch WK-debuut: versloeg West-Duitsland met 2-1 in de openingswedstrijd (goals Madjer en Belloumi). Versloeg ook Chili (3-2). Maar werd uitgeschakeld door het 'Schandaal van Gijón': West-Duitsland en Oostenrijk speelden een afgesproken wedstrijd (1-0) die beide ten koste van Algerije doorliet. Deze zaak leidde tot de FIFA-regel dat laatste groepswedstrijden gelijktijdig worden gespeeld." },
      { year: 1986, host: "Mexico",        result: "Groepsfase",     tag: "group",  detail: "Kon het succes van 1982 niet herhalen. Verloor van Brazilië (0-1) en Spanje (0-3) en speelde gelijk tegen Noord-Ierland (1-1). Het team miste de magie van vier jaar eerder." },
      { year: 2010, host: "Zuid-Afrika",    result: "Groepsfase",     tag: "group",  detail: "Na 24 jaar terug op het WK. Gelijkspel tegen Engeland (0-0) was een hoogtepunt, maar verlies tegen Slovenië (0-1) en de VS (0-1) betekende uitschakeling zonder te scoren vanuit open spel." },
      { year: 2014, host: "Brazilië",      result: "Achtste finale", tag: "r16",    detail: "Beste WK-resultaat ooit! Versloeg Zuid-Korea met 4-2 (Slimani, Halliche, Djabou, Brahimi) en speelde gelijk tegen Rusland (1-1). In de achtste finale gaf Algerije de latere kampioen Duitsland enorm veel weerwerk: 1-2 verlies na verlenging, met een heroïsche prestatie van keeper Rais M'Bolhi." }
    ],

    // ── Head-to-Head Groep J ──
    groupOpponents: [
      {
        name: "Argentinië",
        code: "ar",
        fifaRanking: 1,
        h2hSummary: "Geen WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Algerije treft de regerend wereldkampioen en moet denken aan de ironie: in 2022 verloor Argentinië van Saoedi-Arabië – ook een Arabisch land. Maar Algerije is een sterkere tegenstander dan Saoedi-Arabië. De Woestijnvossen kunnen fysiek en strijdlustig spelen, maar het kwaliteitsverschil met Messi's Argentinië is enorm. Een verrassing is onwaarschijnlijk maar niet onmogelijk."
      },
      {
        name: "Oostenrijk",
        code: "at",
        fifaRanking: 19,
        h2hSummary: "1 WK-duel: 1× verlies Algerije",
        verdict: "unfav",
        matches: [
          { tournament: "WK 1982 Groepsfase", score: "0-2", detail: "Algerije verloor van Oostenrijk in dezelfde groep als het 'Schandaal van Gijón'. Ondanks twee zeges in de groep (tegen West-Duitsland en Chili) werd Algerije uitgeschakeld – mede door deze nederlaag. De wedstrijd droeg bij aan de controversiële uitschakeling van de Woestijnvossen." }
        ],
        analysis: "De herinnering aan 1982 leeft nog altijd: Algerije werd ondanks twee overwinningen uitgeschakeld, mede door het verlies tegen Oostenrijk (0-2). Onder Rangnick is Oostenrijk nu een van de best georganiseerde teams in Europa. Voor Algerije is dit een cruciaal duel – een resultaat tegen Oostenrijk kan het verschil maken tussen groepsfase en achtste finale."
      },
      {
        name: "Jordanië",
        code: "jo",
        fifaRanking: 68,
        h2hSummary: "Geen WK-duels",
        verdict: "fav",
        matches: [],
        analysis: "Op papier is Algerije favoriet tegen de WK-debutant. Algerije heeft WK-ervaring (5 toernooien) en een sterkere selectie met spelers bij Europese clubs. Jordanië heeft recent indruk gemaakt op de Aziatische beker (finalist 2024), maar het WK is een ander niveau. Dit is de wedstrijd die Algerije moet winnen om kans te maken op de volgende ronde."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Riyad Mahrez", role: "Aanvoerder & sterspeler", detail: "De voormalige Manchester City-ster en Afrika Cup-winnaar (2019) is het boegbeeld van Algerije. Op zijn 35e brengt hij ervaring, techniek en leiderschap. Speelt momenteel bij Al-Ahli." },
      { name: "Anis Hadj Moussa", role: "Vleugelaanvaller", detail: "De Feyenoord-sensatie is de toekomst van het Algerijnse voetbal. Snel, technisch en onvoorspelbaar – hij kan elke verdediger passeren. Doorbraak seizoen in de Eredivisie." },
      { name: "Mohamed Amoura", role: "Spits", detail: "De VfL Wolfsburg-aanvaller is de topscorer van de selectie. Snel, sterk en met een uitstekende neus voor doelpunten. Een gevaar voor elke verdediging." },
      { name: "Rayan Aït-Nouri", role: "Linksback", detail: "De Manchester City-verdediger is een van de beste backs ter wereld. Zijn aanvallende impulsen en snelheid geven de Algerijnse vleugel extra dimensie." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Strijdlust en passie: Algerijnse spelers geven altijd 100% – zie de heroïsche prestatie tegen Duitsland in 2014",
      "Ervaring: vijfde WK-deelname, het team weet wat het podium vereist",
      "Snelle vleugels: Hadj Moussa en Amoura kunnen elke verdediging pijn doen",
      "Afrika Cup-winnaar (2019): winnaarservaring in de selectie",
      "Fanatieke supporters: de Algerijnse diaspora zal massaal aanwezig zijn in de VS"
    ],
    weaknesses: [
      "Nooit voorbij de achtste finale gekomen op een WK",
      "Inconsistentie: briljant op zijn best (2-1 vs Duitsland 1982), maar ook zwak (0-3 vs Spanje 1986)",
      "Vergrijzing: sleutelspelers als Mahrez (35) en Mandi naderen het einde",
      "Verdediging: kwetsbaar tegen snelle, technische aanvallers",
      "Moeite met topteams: slechts 3 zeges in 13 WK-wedstrijden"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 28,
      roundOf32: 15,
      roundOf16: 7,
      quarterFinal: 2.5,
      semiFinal: 0.8,
      champion: 0.2,
      mostLikelyResult: "Groepsfase-uitschakeling",
      summary: "Algerije zit in een zware groep met wereldkampioen Argentinië en het goed georganiseerde Oostenrijk. <strong>De strijd om de tweede of derde plek met Oostenrijk en Jordanië wordt cruciaal.</strong> Als de Woestijnvossen hun strijdlust van 2014 (bijna-stunt tegen Duitsland) kunnen herhalen, is de achtste finale mogelijk. <em>De sleutelwedstrijd is tegen Oostenrijk – net als in 1982.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // OOSTENRIJK (teamId: 39) – Groep J
  // ═══════════════════════════════════════════════════════
  39: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 25,
      wins: 12,
      draws: 3,
      losses: 10,
      goalsFor: 40,
      goalsAgainst: 39
    },

    // ── WK-deelnames ──
    history: [
      { year: 1934, host: "Italië",        result: "Halve finale",    tag: "sf",     detail: "Het legendarische 'Wunderteam' bereikte de halve finale. Versloeg Frankrijk (3-2 n.v.) en Hongarije (2-1) voor verlies tegen het latere kampioen Italië (0-1) in de halve finale. Werd vierde na verlies in de troostfinale tegen Duitsland (2-3)." },
      { year: 1954, host: "Zwitserland",   result: "Halve finale",    tag: "sf",     detail: "Beste WK ooit! De kwartfinale tegen Zwitserland (7-5) is nog altijd de meest doelpuntrijke WK-wedstrijd aller tijden. Verloor de halve finale van West-Duitsland (1-6) maar won brons na 3-1 tegen Uruguay in de troostfinale." },
      { year: 1958, host: "Zweden",        result: "Groepsfase",      tag: "group",  detail: "In een groep met Brazilië en de Sovjet-Unie was doorgang onmogelijk. Twee nederlagen en vroege uitschakeling." },
      { year: 1978, host: "Argentinië",    result: "Tweede ronde",    tag: "group",  detail: "Sensationeel: Oostenrijk versloeg Brazilië met 1-0 in de groepsfase en won alle drie groepswedstrijden! In de tweede ronde verloren van Nederland (1-5) en Italië (0-1), maar wonnen het legendarische 'Wonder van Córdoba' tegen West-Duitsland (3-2) – een historische zege." },
      { year: 1982, host: "Spanje",        result: "Tweede ronde",    tag: "group",  detail: "Berucht om het 'Schandaal van Gijón': de wedstrijd Oostenrijk-West-Duitsland (0-1) leek vooraf afgesproken om Algerije uit te schakelen. Bereikte de tweede ronde maar werd daar door Frankrijk (0-1) en een gelijkspel tegen Noord-Ierland (2-2) uitgeschakeld." },
      { year: 1998, host: "Frankrijk",     result: "Groepsfase",      tag: "group",  detail: "Twee gelijkspelen (1-1 vs Kameroen, 1-1 vs Chili) en een nederlaag tegen Italië (1-2). Het was Oostenrijks laatste WK-deelname in 28 jaar." }
    ],

    // ── Head-to-Head Groep J ──
    groupOpponents: [
      {
        name: "Argentinië",
        code: "ar",
        fifaRanking: 1,
        h2hSummary: "Geen WK-duels",
        verdict: "unfav",
        matches: [],
        analysis: "Hoewel Oostenrijk en Argentinië bij vier dezelfde WK's waren (1934, 1958, 1978, 1982), hebben ze elkaar nooit ontmoet op het toernooi. Argentinië is als drievoudig kampioen zwaar favoriet, maar Oostenrijk heeft onder Rangnick een systeem dat zelfs topteams pijn kan doen. De hoge pressing en intensiteit van het Alpenteam kunnen ook Messi & co. in de problemen brengen."
      },
      {
        name: "Algerije",
        code: "dz",
        fifaRanking: 34,
        h2hSummary: "1 WK-duel: 1× winst Oostenrijk",
        verdict: "fav",
        matches: [
          { tournament: "WK 1982 Groepsfase", score: "2-0", detail: "Oostenrijk versloeg Algerije in de groepsfase van het WK 1982. Deze wedstrijd is onlosmakelijk verbonden met het 'Schandaal van Gijón' – de latere wedstrijd West-Duitsland vs Oostenrijk (1-0) die Algerije ondanks twee groepszeges uitschakelde." }
        ],
        analysis: "De enige WK-ontmoeting eindigde in een 2-0 zege voor Oostenrijk in 1982. Het huidige Oostenrijk onder Rangnick is tactisch veel sterker dan destijds. Algerije heeft individuele kwaliteit met Mahrez en Hadj Moussa, maar Oostenrijks georganiseerde pressing is moeilijk te doorbreken. Dit wordt waarschijnlijk de beslissende wedstrijd voor de tweede plek in de groep."
      },
      {
        name: "Jordanië",
        code: "jo",
        fifaRanking: 68,
        h2hSummary: "Geen WK-duels (WK-debuut Jordanië)",
        verdict: "fav",
        matches: [],
        analysis: "Oostenrijk zou als duidelijke favoriet moeten winnen van de WK-debutant. De Rangnick-filosofie van hoge pressing en snelle omschakeling kan verwoestend zijn tegen een minder ervaren tegenstander. Jordanië zal verdedigend spelen en hopen op fouten – Oostenrijk moet geduldig zijn en de kansen afmaken."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "David Alaba", role: "Verdediger & leider", detail: "De Real Madrid-verdediger is de grootste naam in het Oostenrijkse voetbal. Als hij fit is, brengt hij ervaring op het allerhoogste niveau. Zijn veelzijdigheid (verdediger/middenvelder) maakt hem uniek." },
      { name: "Marko Arnautović", role: "Spits & veteraan", detail: "De 37-jarige aanvaller van Red Star Belgrade is een cult-held. Zijn fysieke aanwezigheid, ervaring en scorend vermogen maken hem nog altijd waardevol als impact-speler." },
      { name: "Konrad Laimer", role: "Middenvelder", detail: "De Bayern München-middenvelder belichaamt de Rangnick-filosofie: onvermoeibaar, agressief in de pressing en tactisch intelligent. De motor van het Oostenrijkse middenveld." },
      { name: "Christoph Baumgartner", role: "Aanvallende middenvelder", detail: "De RB Leipzig-spelmaker is de creatieve kracht van het team. Technisch begaafd, met oog voor de pass en een neus voor doelpunten in grote wedstrijden." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Rangnick-systeem: tactisch uitmuntend gepressend voetbal dat elke tegenstander onder druk zet",
      "Historische WK-prestaties: twee keer halve finale (1934, 1954) bewijst dat Oostenrijk op het grote podium kan presteren",
      "Sterke Bundesliga-kern: veel spelers bij topclubs als Bayern, Leipzig en Dortmund",
      "Teamdiscipline: onder Rangnick speelt iedereen voor het collectief",
      "EK 2024 ervaring: Oostenrijk maakte indruk op het EK en heeft momentum"
    ],
    weaknesses: [
      "Lange WK-afwezigheid: 28 jaar zonder WK-eindtoernooi (1998-2026)",
      "Fitheid van Alaba: als de aanvoerder niet fit is, mist het team leiderschap achterin",
      "Gebrek aan topklasse-spits: geen echte doelpuntenmaker van wereldniveau",
      "Kwetsbaar bij counters: de hoge pressing laat ruimte in de rug",
      "Verouderende voorhoede: Arnautović (37) en Gregoritsch zijn niet meer de snelste"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 68,
      roundOf32: 45,
      roundOf16: 25,
      quarterFinal: 10,
      semiFinal: 4,
      champion: 1.2,
      mostLikelyResult: "Achtste finale / Kwartfinale",
      summary: "Oostenrijk is een van de meest onderschatte teams op dit WK. Onder Rangnick speelt het team aanvallend, georganiseerd voetbal dat zelfs de topteams problemen kan bezorgen. <strong>De tweede plek achter Argentinië is het realistische doel</strong>, en de wedstrijden tegen Algerije en Jordanië moeten gewonnen worden. <em>Als het Rangnick-systeem volledig functioneert, is zelfs een kwartfinale haalbaar – net als het 'Wunderteam' van weleer.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // JORDANIË (teamId: 40) – Groep J
  // ═══════════════════════════════════════════════════════
  40: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0
    },

    // ── WK-deelnames ──
    history: [],

    // ── Head-to-Head Groep J ──
    groupOpponents: [
      {
        name: "Argentinië",
        code: "ar",
        fifaRanking: 1,
        h2hSummary: "Geen WK-duels (WK-debuut Jordanië)",
        verdict: "unfav",
        matches: [],
        analysis: "Jordanië's eerste WK-wedstrijd ooit zou tegen de regerend wereldkampioen kunnen zijn – een droom en nachtmerrie tegelijk. De vergelijking met Saoedi-Arabië's 2-1 zege op Argentinië in 2022 dringt zich op: als een ander Aziatisch land het kon, waarom Jordanië niet? Maar de realiteit is dat Argentinië sindsdien sterker is geworden. Toch zal het hele land meekijken en dromen van een wonder."
      },
      {
        name: "Algerije",
        code: "dz",
        fifaRanking: 34,
        h2hSummary: "Geen WK-duels (WK-debuut Jordanië)",
        verdict: "unfav",
        matches: [],
        analysis: "Algerije is een ervaren WK-ganger met vijf eerdere deelnames. Jordanië heeft weinig internationale ervaring op dit niveau. Toch is het verschil kleiner dan het lijkt: Jordanië bereikte de finale van de Aziatische beker 2024 en heeft bewezen tegen sterke tegenstanders te kunnen spelen. Een gelijkspel zou een enorm resultaat zijn."
      },
      {
        name: "Oostenrijk",
        code: "at",
        fifaRanking: 19,
        h2hSummary: "Geen WK-duels (WK-debuut Jordanië)",
        verdict: "unfav",
        matches: [],
        analysis: "Oostenrijk onder Rangnick is een tactisch sterk team dat met hoge intensiteit speelt. Jordanië zal moeite hebben met de pressing en het tempo. Maar voetbal gaat niet alleen over kwaliteit – de passie en vastberadenheid van een WK-debutant kunnen wonderen verrichten. Jordanië moet verdedigend spelen en hopen op kansen uit dood spel."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Musa Al-Taamari", role: "Aanvaller & sterspeler", detail: "De Stade Rennais-vleugelspeler is de gevaarlijkste speler van Jordanië. Snel, technisch en met oog voor het doel. Zijn ervaring in de Ligue 1 maakt hem de enige speler met serieuze Europese topcompetitie-ervaring." },
      { name: "Yazan Al-Arab", role: "Verdediger", detail: "De FC Seoul-verdediger is het anker van de Jordaanse defensie. Sterk in de lucht, positioneel goed en met leiderschapskwaliteiten. Zijn ervaring in de K League is waardevol." },
      { name: "Mohannad Abu Taha", role: "Middenvelder", detail: "De Irakese competitie-speler is de hardwerkende motor op het middenveld. Zijn energie en strijdlust zijn essentieel voor het Jordaanse spel." },
      { name: "Noor Al-Rawabdeh", role: "Middenvelder", detail: "De Selangor FC-speler brengt creativiteit en balvastheid op het middenveld. Een van de technisch beste spelers van de selectie." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "WK-debuut: niets te verliezen, alles te winnen – de ultieme underdog",
      "Aziatische beker-finalist 2024: bewezen dat ze op hoog niveau kunnen presteren",
      "Teamspirit: een hecht collectief dat voor elkaar vecht",
      "Passie: het hele land staat achter het team, voetbal verenigt Jordanië",
      "Verrassingsfactor: geen enkele tegenstander kent Jordanië goed – tactische onbekendheid is een wapen"
    ],
    weaknesses: [
      "Geen WK-ervaring: de druk en intensiteit van een WK zijn ongekend",
      "Individuele kwaliteit: op Al-Taamari na speelt niemand in een Europese topcompetitie",
      "Fysiek: het niveau en tempo van WK-wedstrijden is hoger dan de Aziatische competities",
      "Zwaarste mogelijke groep: Argentinië (nr. 1), Oostenrijk (nr. 19) en Algerije (nr. 34) als tegenstanders",
      "Gebrek aan scorend vermogen: weinig doelpuntenmakers van internationaal niveau"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 5,
      roundOf32: 2,
      roundOf16: 0.5,
      quarterFinal: 0.1,
      semiFinal: 0.02,
      champion: 0.01,
      mostLikelyResult: "Groepsfase-uitschakeling",
      summary: "Jordanië maakt zijn allereerste WK-deelname en zit direct in een loodzware groep met de regerend wereldkampioen Argentinië. <strong>De verwachtingen moeten realistisch zijn</strong>: het doel is om waardig te presteren en het Jordaanse voetbal op de wereldkaart te zetten. <em>Een doelpunt, een punt of een moedig verlies – alles is winst voor dit historische moment. De Aziatische beker-finale van 2024 bewijst dat dit team kan dromen.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // PORTUGAL (teamId: 41) – Groep K
  // ═══════════════════════════════════════════════════════
  41: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 37,
      wins: 18,
      draws: 7,
      losses: 12,
      goalsFor: 62,
      goalsAgainst: 42
    },

    // ── WK-deelnames ──
    history: [
      { year: 1966, host: "Engeland",       result: "Halve finale",   tag: "sf",    detail: "Het WK van Eusébio! Portugal bereikte bij hun debuut direct de halve finale. Eusébio scoorde 9 doelpunten, waaronder 4 in de legendarische comeback tegen Noord-Korea (5-3 na 0-3 achterstand). Verloor de halve finale van gastland Engeland (1-2). Werd uiteindelijk derde." },
      { year: 1986, host: "Mexico",          result: "Groepsfase",     tag: "group", detail: "Na 20 jaar afwezigheid terug op het WK. Uitgeschakeld in de groepsfase zonder overwinning." },
      { year: 2002, host: "Japan/Z-Korea",   result: "Groepsfase",     tag: "group", detail: "Een van de grootste teleurstellingen ooit. Met Figo, Rui Costa en een sterrenensemble al in de groepsfase uitgeschakeld. Verloor de openingswedstrijd van de VS (2-3)." },
      { year: 2006, host: "Duitsland",       result: "Halve finale",   tag: "sf",    detail: "Beste resultaat in 40 jaar. Onder leiding van Luiz Felipe Scolari naar de halve finale. Cristiano Ronaldo's doorbraak op het wereldtoneel. Verloor de halve finale van Frankrijk (0-1). Eindigde als vierde na verlies in de troostfinale tegen gastland Duitsland (1-3)." },
      { year: 2010, host: "Zuid-Afrika",      result: "Achtste finale", tag: "r16",   detail: "Indrukwekkende 7-0 zege op Noord-Korea in de groepsfase. In de achtste finale uitgeschakeld door Spanje (0-1), de latere wereldkampioen." },
      { year: 2014, host: "Brazilië",        result: "Groepsfase",     tag: "group", detail: "Dramatisch toernooi. Verloor de openingswedstrijd van Duitsland (0-4). Ondanks Cristiano Ronaldo's inspanningen uitgeschakeld in de groepsfase." },
      { year: 2018, host: "Rusland",         result: "Achtste finale", tag: "r16",   detail: "Ronaldo scoorde een hattrick tegen Spanje (3-3) in een van de beste groepswedstrijden ooit. In de achtste finale na strafschoppen verloren van Uruguay (1-2)." },
      { year: 2022, host: "Qatar",           result: "Kwartfinale",    tag: "qf",    detail: "Sterke groepsfase met 6-1 zege op Zwitserland in de achtste finale (Gonçalo Ramos hattrick). In de kwartfinale uitgeschakeld door Marokko (0-1) – het sprookje van de Atlas Leeuwen." }
    ],

    // ── Head-to-Head Groep K ──
    groupOpponents: [
      {
        name: "DR Congo",
        code: "cd",
        fifaRanking: 50,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Portugal en DR Congo hebben elkaar nog nooit op een WK ontmoet. Op papier is het verschil enorm: Portugal staat 46 plaatsen hoger op de FIFA-ranking en beschikt over wereldsterren bij topclubs. DR Congo heeft talent, maar de individuele klasse van Portugal zou het verschil moeten maken. <strong>Portugal is zwaar favoriet.</strong>"
      },
      {
        name: "Oezbekistan",
        code: "uz",
        fifaRanking: 65,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Oezbekistan maakt zijn WK-debuut en heeft geen ervaring op dit niveau. Portugal zal deze wedstrijd als een must-win beschouwen. Met de kwaliteit van spelers als Bernardo Silva, Bruno Fernandes en Rafael Leão moet Portugal zonder veel problemen kunnen winnen, maar onderschatting is altijd een gevaar bij debutanten."
      },
      {
        name: "Colombia",
        code: "co",
        fifaRanking: 9,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "De topaffiche van Groep K. Colombia bereikte de finale van de Copa América 2024 en is in topvorm. Met Luis Díaz, James Rodríguez en een ijzersterke defensie is Colombia een serieuze tegenstander. Dit wordt waarschijnlijk de beslissende wedstrijd voor de groepswinst. <strong>Een evenwichtig duel tussen twee topteams.</strong>"
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Cristiano Ronaldo", role: "Aanvaller – Icoon", detail: "Mogelijk zijn laatste WK op 41-jarige leeftijd. De all-time topscorer van het internationale voetbal (130+ goals). Speelt bij Al-Nassr maar blijft bepalend voor Portugal. Kan hij afscheid nemen met een laatste glorieuze campagne?" },
      { name: "Bruno Fernandes", role: "Middenvelder – Spelmaker", detail: "De creatieve motor van Portugal. Zijn passes, vrije trappen en scorend vermogen maken hem onmisbaar. Speelt bij Manchester United en heeft grote toernooiervaring." },
      { name: "Bernardo Silva", role: "Middenvelder – Technicus", detail: "Briljante techniek en voetbalintelligentie. Bij Manchester City een sleutelspeler onder Guardiola, brengt die klasse mee naar het nationale team." },
      { name: "Rafael Leão", role: "Aanvaller – Vleugelflitser", detail: "Razendsnel en onvoorspelbaar op de linkerflank. Zijn dribbels en snelheid kunnen elke verdediging openbreken. De toekomst van het Portugese aanvalsspel." },
      { name: "Vitinha", role: "Middenvelder – Controleur", detail: "Bij Paris Saint-Germain uitgegroeid tot een van de beste middenvelders van Europa. Combineert techniek met hardlopen en controleert het middenveld." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Enorme individuele kwaliteit: brede selectie met spelers bij Europese topclubs",
      "Ervaren bondscoach Roberto Martínez met tactische flexibiliteit",
      "Sterk op dode spelmomenten: koppen en vrije trappen zijn wapens",
      "Diepe selectie: kunnen op vrijwel elke positie twee topspelers opstellen",
      "WK-ervaring: 8 eerdere deelnames en meerdere halvefinaleplekken"
    ],
    weaknesses: [
      "Afhankelijkheid van Cristiano Ronaldo: emotioneel en tactisch een dilemma",
      "Mentale kwetsbaarheid in knockoutfase: grote toernooien eindigen vaak in teleurstelling",
      "Verouderende kern: Ronaldo (41), Pepe is gestopt – leiderschap moet van nieuwe generatie komen",
      "Verdediging onder druk: kwetsbaar tegen snelle tegenaanvallen",
      "Interne druk: verwachtingen van Portugese media en fans zijn torenhoog"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 95,
      roundOf32: 82,
      roundOf16: 55,
      quarterFinal: 30,
      semiFinal: 15,
      champion: 6,
      mostLikelyResult: "Kwartfinale / Halve finale",
      summary: "Portugal is een van de sterkste teams op het WK 2026 en zou zonder problemen door Groep K moeten komen. De groep is gunstig met DR Congo en Oezbekistan als haalbare tegenstanders, terwijl Colombia de enige serieuze concurrent is. De vraag is hoe ver Portugal kan komen in de knockoutfase. De gouden generatie met Bernardo Silva, Bruno Fernandes en Rafael Leão is op hun piek, maar de rol van <strong>Cristiano Ronaldo</strong> – mogelijk op zijn allerlaatste WK – is het grote vraagteken. <em>Een kwartfinale is het minimum, een halve finale het realistische doel.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // DR CONGO (teamId: 42) – Groep K
  // ═══════════════════════════════════════════════════════
  42: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 3,
      wins: 0,
      draws: 0,
      losses: 3,
      goalsFor: 0,
      goalsAgainst: 14
    },

    // ── WK-deelnames ──
    history: [
      { year: 1974, host: "West-Duitsland", result: "Groepsfase", tag: "group", detail: "Deelname als Zaïre. Een van de beruchtste WK-campagnes ooit. Verloor alle drie de groepswedstrijden: 0-2 tegen Schotland, de beruchte 0-9 tegen Joegoslavië (grootste nederlaag in WK-geschiedenis op dat moment), en 0-3 tegen Brazilië. Ondanks de resultaten was het een historisch moment voor Afrikaans voetbal." }
    ],

    // ── Head-to-Head Groep K ──
    groupOpponents: [
      {
        name: "Portugal",
        code: "pt",
        fifaRanking: 4,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Portugal is een van de favorieten voor de wereldtitel en beschikt over een selectie vol wereldsterren. Voor DR Congo wordt dit een enorme uitdaging. De Leoparden zullen compact moeten verdedigen en hopen op een counter of een standaardsituatie. <strong>Portugal is zwaar favoriet.</strong>"
      },
      {
        name: "Oezbekistan",
        code: "uz",
        fifaRanking: 65,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "De meest haalbare wedstrijd voor DR Congo in de groep. Oezbekistan is eveneens een WK-nieuwkomer (debuut) en heeft vergelijkbare kwaliteit. De Leoparden hebben meer individueel talent in Europese competities en zouden licht favoriet kunnen zijn. Een must-win voor beide teams als ze willen overleven."
      },
      {
        name: "Colombia",
        code: "co",
        fifaRanking: 9,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Colombia is een Zuid-Amerikaans topteam met spelers als Luis Díaz en James Rodríguez. DR Congo zal als underdog starten, maar de fysieke kracht en snelheid van de Congolese spelers kunnen voor problemen zorgen. Een verrassing is niet onmogelijk, maar Colombia is duidelijk favoriet."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Chancel Mbemba", role: "Verdediger – Leider", detail: "De ervaren verdediger van Lille is de aanvoerder en het hart van de defensie. Zijn ervaring in de Franse competitie en Champions League is van onschatbare waarde voor het team." },
      { name: "Cédric Bakambu", role: "Aanvaller – Goaltjesdief", detail: "De spits van Real Betis is de topscorer van DR Congo en brengt ervaring mee uit topcompetities in Spanje, Frankrijk en China. Zijn doelpunten zijn cruciaal voor elke kans op succes." },
      { name: "Yoane Wissa", role: "Aanvaller – Creatief", detail: "Bij Newcastle United uitgegroeid tot een gevaarlijke aanvaller. Snel, technisch en met een goed schot. De speler die het verschil kan maken in grote wedstrijden." },
      { name: "Aaron Wan-Bissaka", role: "Verdediger – Rechtsback", detail: "De voormalige Manchester United-verdediger, nu bij West Ham, brengt Premier League-ervaring mee. Sterk in één-op-één situaties en geeft de defensie extra kwaliteit." },
      { name: "Théo Bongonda", role: "Middenvelder – Dynamisch", detail: "Technisch begaafd en met een goed oog voor de pass. Speelt bij Spartak Moskou en is een van de creatieve krachten op het middenveld." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Fysieke kracht en atletisch vermogen: snelle en sterke spelers over het hele veld",
      "Europese ervaring: veel spelers actief bij clubs in topcompetities (Premier League, Ligue 1, La Liga)",
      "Motivatie: na 52 jaar terug op het WK – enorme honger om te presteren",
      "Onvoorspelbaarheid: tegenstanders weten niet goed wat ze kunnen verwachten",
      "Sterke teamgeest en Afrikaanse passie op het veld"
    ],
    weaknesses: [
      "Geen WK-ervaring: de laatste deelname (1974 als Zaïre) is meer dan 50 jaar geleden",
      "Traumatisch WK-verleden: 0-14 doelsaldo in 1974 hangt als een schaduw boven het team",
      "Beperkte toernooiervaring op het hoogste niveau als team",
      "Tactische onvoorspelbaarheid kan ook tegen hen werken",
      "Moeilijke groep met Portugal en Colombia als topfavorieten"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 28,
      roundOf32: 14,
      roundOf16: 4,
      quarterFinal: 1.5,
      semiFinal: 0.4,
      champion: 0.1,
      mostLikelyResult: "Groepsfase",
      summary: "DR Congo keert na <strong>52 jaar</strong> terug op het WK en zal vooral genieten van het feit dat ze er weer bij zijn. De groep is zwaar met Portugal en Colombia, maar de wedstrijd tegen Oezbekistan is de sleutel. Als de Leoparden die winnen en een goed resultaat halen tegen één van de topteams, is de ronde van 32 niet onmogelijk. <em>Realistisch gezien eindigt het avontuur in de groepsfase, maar de Congolese fans zullen hoe dan ook feest vieren.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // OEZBEKISTAN (teamId: 43) – Groep K
  // ═══════════════════════════════════════════════════════
  43: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0
    },

    // ── WK-deelnames ──
    history: [
      { year: 2026, host: "VS/Mexico/Canada", result: "Debuut", tag: "group", detail: "Het allereerste WK voor Oezbekistan! Het Centraal-Aziatische land kwalificeerde zich voor het eerst in de geschiedenis en schrijft daarmee een nieuw hoofdstuk in het Oezbeekse voetbal. Onder leiding van de Italiaanse wereldkampioen Fabio Cannavaro dromen ze van een sprookje." }
    ],

    // ── Head-to-Head Groep K ──
    groupOpponents: [
      {
        name: "Portugal",
        code: "pt",
        fifaRanking: 4,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Een droomaffiche voor Oezbekistan, maar een nachtmerrie op papier. Portugal is een topfavoriet voor het toernooi met spelers als Cristiano Ronaldo en Bruno Fernandes. Oezbekistan zal alles op alles moeten zetten om de schade te beperken. Een punt zou al een sensatie zijn."
      },
      {
        name: "DR Congo",
        code: "cd",
        fifaRanking: 50,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "De beslissende wedstrijd voor beide teams. DR Congo en Oezbekistan zijn de underdogs van Groep K en zullen waarschijnlijk tegen elkaar strijden om de derde plek. Een gelijkwaardig duel waarbij de winnaar de beste kans heeft om door te gaan als beste derde."
      },
      {
        name: "Colombia",
        code: "co",
        fifaRanking: 9,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Colombia is met Luis Díaz en James Rodríguez een klasse apart voor Oezbekistan. Los Cafeteros spelen aanvallend en zullen druk zetten. Oezbekistan moet hopen op een sterke verdedigende organisatie en misschien een doelpunt op de counter om het spannend te houden."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Abdukodir Khusanov", role: "Verdediger – Anker", detail: "De 20-jarige verdediger van Manchester City is het uithangbord van het Oezbeekse voetbal. Zijn transfer naar de Premier League maakte hem internationaal bekend. Sterk in de lucht en goed aan de bal voor een centrale verdediger." },
      { name: "Eldor Shomurodov", role: "Aanvaller – Spits", detail: "De ervaren spits heeft bij clubs in Italië en Turkije (İstanbul Başakşehir) bewezen doelpunten te kunnen maken. Zijn ervaring op het hoogste niveau is cruciaal voor de aanval." },
      { name: "Abbosbek Fayzullaev", role: "Aanvaller – Wonderkind", detail: "Het jonge talent speelt bij İstanbul Başakşehir en wordt gezien als de toekomst van het Oezbeekse voetbal. Snel, technisch en met oog voor het doel." },
      { name: "Jaloliddin Masharipov", role: "Aanvaller – Dribbelaar", detail: "De creatieve kracht van Oezbekistan bij Esteghlal. Bekend om zijn dribbels en vrije trappen. Kan in grote wedstrijden het verschil maken met een moment van individuele klasse." },
      { name: "Otabek Shukurov", role: "Middenvelder – Aanvoerder", detail: "De aanvoerder en motor op het middenveld. Speelt bij Baniyas in de UAE en brengt leiderschap en ervaring mee naar het team." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "WK-debuut: geen druk van verwachtingen, alles is winst",
      "Sterspeler bij topclub: Abdukodir Khusanov (Manchester City) brengt topervaring",
      "Ervaren Italiaanse bondscoach: Fabio Cannavaro (WK-winnaar 2006) kent het grote podium",
      "Sterk collectief: goed georganiseerd en disciplinair sterk",
      "Verrassing-factor: tegenstanders weten weinig over Oezbeeks voetbal"
    ],
    weaknesses: [
      "Nul WK-ervaring: eerste deelname ooit brengt onzekerheid",
      "Beperkte kwaliteit: meeste spelers actief in lagere competities (Oezbekistan, Iran, Turkije)",
      "Fysiek verschil: kunnen zij 90 minuten meekomen tegen topteams?",
      "Moeilijke groep: Portugal en Colombia zijn objectief te sterk",
      "Mentale barrière: de druk van een eerste WK kan verlammend werken"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 15,
      roundOf32: 7,
      roundOf16: 2,
      quarterFinal: 0.5,
      semiFinal: 0.1,
      champion: 0.02,
      mostLikelyResult: "Groepsfase",
      summary: "Oezbekistan schrijft geschiedenis door zich voor het <strong>allereerste WK</strong> te kwalificeren. Onder leiding van Fabio Cannavaro, zelf wereldkampioen in 2006, droomt het land van een sprookje. De realiteit is echter dat Groep K met Portugal en Colombia bijzonder zwaar is. De wedstrijd tegen DR Congo is de enige realistische kans op punten. <em>Het doel is eenvoudig: geniet ervan, scoor een WK-doelpunt en maak het land trots. Alles extra is bonus.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // COLOMBIA (teamId: 44) – Groep K
  // ═══════════════════════════════════════════════════════
  44: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 21,
      wins: 8,
      draws: 3,
      losses: 10,
      goalsFor: 28,
      goalsAgainst: 30
    },

    // ── WK-deelnames ──
    history: [
      { year: 1962, host: "Chili",          result: "Groepsfase",     tag: "group", detail: "WK-debuut voor Colombia. Verloor van Uruguay (1-2) en Joegoslavië (0-5), maar verraste met een 4-4 gelijkspel tegen de Sovjet-Unie – een klassieke WK-wedstrijd." },
      { year: 1990, host: "Italië",          result: "Achtste finale", tag: "r16",   detail: "Colombia kwalificeerde zich op spectaculaire wijze (5-0 vs Argentinië in de kwalificatie). Carlos Valderrama was de grote ster. In de achtste finale na verlenging uitgeschakeld door Kameroen (1-2)." },
      { year: 1994, host: "VS",             result: "Groepsfase",     tag: "group", detail: "Een van de donkerste hoofdstukken in WK-geschiedenis. Colombia, gezien als favoriet, werd al in de groepsfase uitgeschakeld. Verdediger Andrés Escobar maakte een eigen doelpunt tegen de VS (1-2) en werd na terugkeer in Colombia vermoord. Een tragedie die het voetbal overstijgt." },
      { year: 1998, host: "Frankrijk",      result: "Groepsfase",     tag: "group", detail: "Opnieuw een teleurstellend WK. Verloor van Roemenië (0-1) en Engeland (0-2). De generatie van Valderrama en Asprilla kon de verwachtingen niet waarmaken." },
      { year: 2014, host: "Brazilië",       result: "Kwartfinale",    tag: "qf",    detail: "Het beste WK ooit voor Colombia! James Rodríguez werd topscorer van het toernooi met 6 doelpunten, waaronder een wereldgoal tegen Uruguay. In de kwartfinale verloren van gastland Brazilië (1-2), waarbij Neymar geblesseerd raakte door een charge van Zúñiga." },
      { year: 2018, host: "Rusland",        result: "Achtste finale", tag: "r16",   detail: "James Rodríguez raakte geblesseerd. Colombia verloor de openingswedstrijd van Japan (1-2, rode kaart Sánchez in 3e minuut!) maar herstelde zich. In de achtste finale na strafschoppen uitgeschakeld door Engeland (3-4 pen)." },
      { year: 2022, host: "Qatar",          result: "Niet gekwalificeerd", tag: "group", detail: "Colombia miste het WK 2022 in Qatar – een enorme teleurstelling. In de Zuid-Amerikaanse kwalificatie net buiten de boot gevallen. Maar het team is terug en sterker dan ooit." }
    ],

    // ── Head-to-Head Groep K ──
    groupOpponents: [
      {
        name: "Portugal",
        code: "pt",
        fifaRanking: 4,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "even",
        matches: [],
        analysis: "De topaffiche van Groep K. Twee absolute topteams die voor het eerst op een WK tegenover elkaar staan. Colombia is in topvorm na de Copa América 2024-finale en heeft met Luis Díaz een speler die elke verdediging kan openbreken. Portugal heeft meer individuele klasse, maar Colombia is tactisch sterk. <strong>Een duel dat de groepswinst kan bepalen.</strong>"
      },
      {
        name: "DR Congo",
        code: "cd",
        fifaRanking: 50,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Colombia is favoriet tegen DR Congo maar mag de Leoparden niet onderschatten. De Congolese spelers zijn fysiek sterk en snel, en kunnen op de counter gevaarlijk zijn. Colombia moet deze wedstrijd professioneel afmaken om druk op Portugal te houden."
      },
      {
        name: "Oezbekistan",
        code: "uz",
        fifaRanking: 65,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Oezbekistan maakt zijn WK-debuut en Colombia zou met zijn ervaring en kwaliteit comfortabel moeten winnen. Maar de ervaring van 1994 leert dat onderschatting dodelijk kan zijn. Los Cafeteros moeten gefocust starten en de wedstrijd vroeg beslissen."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Luis Díaz", role: "Aanvaller – Superster", detail: "De vleugelaanvaller van Bayern Munich is de gevaarlijkste speler van Colombia. Zijn snelheid, dribbels en doelpunten maken hem een nachtmerrie voor verdedigers. In topvorm kan hij elke wedstrijd beslissen." },
      { name: "James Rodríguez", role: "Middenvelder – Maestro", detail: "De held van WK 2014 (topscorer) is terug. Ondanks zijn leeftijd en avonturen bij verschillende clubs (nu Minnesota United) blijft zijn linkerbeen magisch. Zijn ervaring en leiderschap zijn onvervangbaar op grote toernooien." },
      { name: "Jhon Arias", role: "Middenvelder – Dynamisch", detail: "De veelzijdige middenvelder van Palmeiras combineert hardlopen met techniek. Kan vanuit het middenveld doelpunten maken en assists geven. Een van de sleutelfiguren in het systeem van bondscoach Lorenzo." },
      { name: "Davinson Sánchez", role: "Verdediger – Rots", detail: "De centrale verdediger van Galatasaray brengt ervaring mee uit de Premier League (Tottenham). Sterk in de lucht, snel en een echte leider achterin. De basis van de Colombiaanse defensie." },
      { name: "Jhon Córdoba", role: "Aanvaller – Targetman", detail: "De sterke spits van Krasnodar biedt een fysiek alternatief in de aanval. Zijn kracht en kopkracht maken hem gevaarlijk bij standaardsituaties en als aanspeelpunt." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Topvorm: finaleplaats Copa América 2024, indrukwekkende recente resultaten",
      "Aanvallende kwaliteit: Luis Díaz, James Rodríguez en Jhon Arias vormen een dodelijk trio",
      "Zuid-Amerikaanse passie en mentaliteit: nooit opgeven",
      "Ervaren bondscoach Néstor Lorenzo met een duidelijke speelstijl",
      "Brede selectie met spelers bij Europese topclubs"
    ],
    weaknesses: [
      "WK 2022 gemist: het team moet bewijzen dat de huidige vorm standhoudt op het grootste podium",
      "Traumatisch verleden: 1994 (Escobar-tragedie) en drie vroege uitschakelingen hangen als een schaduw",
      "Afhankelijkheid van James Rodríguez: als hij niet fit is, mist het team creativiteit",
      "Verdediging onder druk: kwetsbaar tegen snelle tegenaanvallen van topteams",
      "Druk van verwachtingen: de Colombiaanse fans eisen meer na de Copa América-finale"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 90,
      roundOf32: 72,
      roundOf16: 40,
      quarterFinal: 20,
      semiFinal: 8,
      champion: 3,
      mostLikelyResult: "Achtste finale / Kwartfinale",
      summary: "Colombia is een van de gevaarlijkste outsiders van het WK 2026. Na de Copa América 2024-finale en het missen van het WK 2022 is de motivatie enorm. Groep K is zwaar met Portugal, maar Colombia heeft de kwaliteit om als eerste of tweede door te gaan. <strong>Luis Díaz</strong> is de speler die het verschil kan maken, terwijl <strong>James Rodríguez</strong> op zijn vierde WK nogmaals kan schitteren. <em>Een kwartfinale – zoals in 2014 – is haalbaar, een halve finale zou een sprookje zijn.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // ENGELAND (teamId: 45) – Groep L
  // ═══════════════════════════════════════════════════════
  45: {
    lastUpdated: "2026-06-09",
    titles: [1966],

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 74,
      wins: 32,
      draws: 21,
      losses: 21,
      goalsFor: 103,
      goalsAgainst: 68
    },

    // ── WK-deelnames ──
    history: [
      { year: 1950, host: "Brazilië",        result: "Groepsfase",     tag: "group", detail: "Vernederend WK-debuut. Verloor sensationeel van de VS (0-1) – een van de grootste upsets in WK-geschiedenis." },
      { year: 1954, host: "Zwitserland",      result: "Kwartfinale",    tag: "qf",    detail: "In de kwartfinale uitgeschakeld door Uruguay (2-4)." },
      { year: 1958, host: "Zweden",           result: "Groepsfase",     tag: "group", detail: "Alle drie de groepswedstrijden gelijkgespeeld. Play-off verloren van de Sovjet-Unie (0-1)." },
      { year: 1962, host: "Chili",            result: "Kwartfinale",    tag: "qf",    detail: "In de kwartfinale verloren van Brazilië (1-3), de latere wereldkampioen." },
      { year: 1966, host: "Engeland 🏠",      result: "Wereldkampioen", tag: "final", detail: "ENGELAND WINT HET WK! De legendarische finale tegen West-Duitsland (4-2 n.v.) op Wembley. Geoff Hurst scoorde een hattrick, waaronder het beroemde 'Wembley-doelpunt' dat van de lat terugkaatste. Alf Ramsey's 'wingless wonders' schreven geschiedenis. Bobby Moore hief de Jules Rimet-trofee." },
      { year: 1970, host: "Mexico",           result: "Kwartfinale",    tag: "qf",    detail: "Als titelhouder uitgeschakeld in de kwartfinale door West-Duitsland (2-3 n.v.) na een 2-0 voorsprong. Gordon Banks' legendarische redding tegen Pelé in de groepsfase." },
      { year: 1982, host: "Spanje",           result: "Tweede groepsfase", tag: "group", detail: "Ongeslagen maar uitgeschakeld in de tweede groepsronde. Twee gelijke spelen (0-0 tegen West-Duitsland en Spanje) waren niet genoeg." },
      { year: 1986, host: "Mexico",           result: "Kwartfinale",    tag: "qf",    detail: "In de kwartfinale uitgeschakeld door Argentinië (1-2). Maradona's 'Hand van God' en het 'Doelpunt van de Eeuw' in dezelfde wedstrijd – de meest controversiële WK-wedstrijd ooit." },
      { year: 1990, host: "Italië",           result: "Halve finale",   tag: "sf",    detail: "Gazza's tranen! Engeland bereikte de halve finale maar verloor na strafschoppen van West-Duitsland (3-4 pen). Gary Lineker scoorde cruciaal. In de troostfinale verloren van Italië (1-2)." },
      { year: 1998, host: "Frankrijk",        result: "Achtste finale", tag: "r16",   detail: "Michael Owen's wondergoal tegen Argentinië, maar na rode kaart Beckham en strafschoppen (3-4 pen) uitgeschakeld. Beckham werd de zondebok van heel Engeland." },
      { year: 2002, host: "Japan/Z-Korea",    result: "Kwartfinale",    tag: "qf",    detail: "Beckham's wraak: scoorde de beslissende strafschop tegen Argentinië. In de kwartfinale verloren van Brazilië (1-2), met Ronaldinho's briljante vrije trap." },
      { year: 2006, host: "Duitsland",        result: "Kwartfinale",    tag: "qf",    detail: "De 'Gouden Generatie' (Beckham, Gerrard, Lampard, Rooney) faalde opnieuw. Kwartfinale verloren van Portugal na strafschoppen (1-3 pen). Rooney rood." },
      { year: 2010, host: "Zuid-Afrika",       result: "Achtste finale", tag: "r16",   detail: "Frank Lampard's doelpunt dat duidelijk over de lijn was maar niet werd goedgekeurd tegen Duitsland (1-4). Een vernederende exit." },
      { year: 2014, host: "Brazilië",         result: "Groepsfase",     tag: "group", detail: "Het slechtste WK in decennia. Al na twee wedstrijden uitgeschakeld. Verloor van Italië (1-2) en Uruguay (1-2, Suárez-beten!)." },
      { year: 2018, host: "Rusland",          result: "Halve finale",   tag: "sf",    detail: "Gareth Southgate's jonge team bereikte de halve finale. Harry Kane werd topscorer (6 goals). Verloor de halve finale van Kroatië (1-2 n.v.) maar het enthousiasme was terug: 'It's Coming Home!'" },
      { year: 2022, host: "Qatar",            result: "Kwartfinale",    tag: "qf",    detail: "Sterke groepsfase (6-2 vs Iran). In de kwartfinale verloren van titelverdediger Frankrijk (1-2). Harry Kane miste een cruciale strafschop." }
    ],

    // ── Head-to-Head Groep L ──
    groupOpponents: [
      {
        name: "Kroatië",
        code: "hr",
        fifaRanking: 8,
        h2hSummary: "1 WK-duel: 1× verlies Engeland",
        verdict: "even",
        matches: [
          { tournament: "WK 2018 Halve finale", score: "1-2 n.v.", detail: "Engeland kwam op voorsprong via Kieran Trippier's vrije trap (5'), maar Kroatië vocht terug via Ivan Perišić (68') en Mario Mandžukić (109'). Een hartbrekende nederlaag voor de Three Lions." }
        ],
        analysis: "Kroatië is Engeland's grootste rivaal in Groep L en de halve finale van 2018 zit nog vers in het geheugen. De Kroaten zijn een toernooiteam bij uitstek, met Luka Modrić als tijdloos genie. Engeland zal wraak willen nemen, maar Kroatië is nooit een makkelijke tegenstander. <strong>Dit wordt de wedstrijd die de groep beslist.</strong>"
      },
      {
        name: "Ghana",
        code: "gh",
        fifaRanking: 44,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Ghana heeft sterspelers als Thomas Partey en Iñaki Williams, maar Engeland is op papier een klasse apart. De Three Lions moeten deze wedstrijd professioneel afhandelen. Ghana kan echter vervelend zijn met hun snelheid en fysieke kracht op de counter."
      },
      {
        name: "Panama",
        code: "pa",
        fifaRanking: 43,
        h2hSummary: "1 WK-duel: 1× winst Engeland",
        verdict: "fav",
        matches: [
          { tournament: "WK 2018 Groepsfase", score: "6-1", detail: "Harry Kane scoorde een hattrick (waarvan twee strafschoppen en een geluksbal via de hiel). John Stones kopte er twee in. Engeland's grootste WK-zege in 36 jaar. Panama scoorde hun allereerste WK-doelpunt via Felipe Baloy – het hele land vierde." }
        ],
        analysis: "Engeland won in 2018 al met 6-1 van Panama en is opnieuw zwaar favoriet. Panama heeft zich verbeterd maar het kwaliteitsverschil blijft enorm. Engeland moet deze wedstrijd gebruiken om het doelsaldo op te krikken."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Jude Bellingham", role: "Middenvelder – Superster", detail: "De 22-jarige middenvelder van Real Madrid is uitgegroeid tot een van de beste spelers ter wereld. Scoort, creëert en verdedigt – de complete voetballer. Kan Engeland naar de wereldtitel leiden." },
      { name: "Harry Kane", role: "Aanvaller – Topscorer", detail: "Engeland's all-time topscorer met 60+ interlands goals. Bij Bayern Munich blijft hij doelpunten maken als een machine. Op zijn derde WK wil hij eindelijk een prijs winnen met de Three Lions." },
      { name: "Bukayo Saka", role: "Aanvaller – Vleugelflitser", detail: "De Arsenal-ster is een van de gevaarlijkste vleugelspelers ter wereld. Zijn dribbels, schoten en assists zijn van wereldklasse. Na zijn gemiste strafschop in de EK-finale 2021 heeft hij alleen maar beter gepresteerd." },
      { name: "Declan Rice", role: "Middenvelder – Anker", detail: "De Arsenal-middenvelder is het schild voor de verdediging. Zijn onderscheppingen, tackles en passing maken hem onmisbaar. Geeft Bellingham de vrijheid om aan te vallen." },
      { name: "Phil Foden", role: "Middenvelder – Genie", detail: "Het technische genie van Manchester City. Kan overal in de voorhoede spelen en maakt het verschil met zijn dribbels en schoten. Op grote toernooien nog niet ontploft – dit kan zijn WK worden." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Uitzonderlijk talent: de meest waardevolle selectie ter wereld met spelers bij absolute topclubs",
      "Topscorer-garantie: Harry Kane scoort altijd op grote toernooien",
      "Ervaring: twee EK-finales (2021, 2024) en WK-halve finale (2018) als recente referenties",
      "Nieuwe bondscoach Thomas Tuchel: tactische vernieuwing en winnaarmentaliteit",
      "Breedte in de selectie: op elke positie twee of drie opties van wereldklasse"
    ],
    weaknesses: [
      "'Football's coming home' – maar slechts 1 titel in 60 jaar: de druk is immens",
      "Strafschoppenvloek: ondanks verbetering blijft het een trauma (2006, 2012, 2021)",
      "Grote-toernooisyndroom: regelmatig favoriet maar nooit de winnaar",
      "Gebrek aan linksback-opties en creatieve diepgang zonder Foden/Bellingham",
      "Mentale fragiliteit: Engeland lijkt in cruciale momenten te verkrampen"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 97,
      roundOf32: 88,
      roundOf16: 62,
      quarterFinal: 38,
      semiFinal: 20,
      champion: 9,
      mostLikelyResult: "Kwartfinale / Halve finale",
      summary: "Engeland is een van de absolute topfavorieten voor het WK 2026. Met <strong>Jude Bellingham</strong>, <strong>Harry Kane</strong> en <strong>Bukayo Saka</strong> beschikken de Three Lions over een aanval die elk team angst inboezemt. Onder Thomas Tuchel is er een nieuwe tactische impuls. De groep met Kroatië, Ghana en Panama is pittig maar haalbaar. De grote vraag blijft: kan Engeland de mentale barrière doorbreken en voor het eerst sinds <strong>1966</strong> een groot toernooi winnen? <em>'It's Coming Home' – maar wanneer?</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // KROATIË (teamId: 46) – Groep L
  // ═══════════════════════════════════════════════════════
  46: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 28,
      wins: 13,
      draws: 5,
      losses: 10,
      goalsFor: 42,
      goalsAgainst: 35
    },

    // ── WK-deelnames ──
    history: [
      { year: 1998, host: "Frankrijk",      result: "Halve finale",   tag: "sf",    detail: "Sensationeel WK-debuut! Bij de allereerste deelname direct naar de halve finale. Davor Šuker werd topscorer van het toernooi (6 goals). Versloeg Duitsland in de kwartfinale met 3-0! Verloor de halve finale van gastland Frankrijk (1-2). Eindigde als derde – een ongelooflijke prestatie voor een land van 4 miljoen inwoners." },
      { year: 2002, host: "Japan/Z-Korea",   result: "Groepsfase",     tag: "group", detail: "Tegenvallend toernooi na het sprookje van 1998. Uitgeschakeld in de groepsfase ondanks een overwinning op Italië (2-1)." },
      { year: 2006, host: "Duitsland",       result: "Groepsfase",     tag: "group", detail: "Opnieuw een vroege exit. Verloor van Brazilië (0-1) en Australië (2-2, gelijkmaker in blessuretijd). Het team was in een overgangsfase." },
      { year: 2014, host: "Brazilië",        result: "Groepsfase",     tag: "group", detail: "Verloor de openingswedstrijd van gastland Brazilië (1-3, controversiële strafschop). Uitgeschakeld na verlies tegen Mexico (1-3)." },
      { year: 2018, host: "Rusland",         result: "Finale",         tag: "final", detail: "Het grootste Kroatische sportmoment ooit! Luka Modrić leidde het team naar de WK-finale – een ongelooflijke prestatie voor een land van 4 miljoen. Won drie verlengingen op rij (Denemarken, Rusland, Engeland). Verloor de finale van Frankrijk (2-4), maar werd onthaald als helden in Zagreb. Modrić won de Gouden Bal." },
      { year: 2022, host: "Qatar",           result: "Halve finale",   tag: "sf",    detail: "Opnieuw halve finale! Versloeg Japan en Brazilië (na strafschoppen). Verloor de halve finale van Argentinië (0-3, Messi was onhoudbaar). Won de troostfinale van Marokko (2-1) en werd derde. Bewees dat 2018 geen toevalstreffer was." }
    ],

    // ── Head-to-Head Groep L ──
    groupOpponents: [
      {
        name: "Engeland",
        code: "gb-eng",
        fifaRanking: 4,
        h2hSummary: "1 WK-duel: 1× winst Kroatië",
        verdict: "even",
        matches: [
          { tournament: "WK 2018 Halve finale", score: "2-1 n.v.", detail: "Engeland kwam op voorsprong via Trippier (5'), maar Kroatië vocht terug. Perišić maakte gelijk (68') en Mandžukić scoorde de winnende in de verlenging (109'). Modrić was de grote uitblinker op het middenveld." }
        ],
        analysis: "Kroatië heeft goede herinneringen aan Engeland na de WK-halve finale van 2018. Sindsdien is Engeland echter flink verbeterd met Bellingham, Saka en Rice. Modrić is ouder maar wijzer. Dit wordt een tactisch schaakspel tussen twee teams die elkaar goed kennen. <strong>De wedstrijd van de groep.</strong>"
      },
      {
        name: "Ghana",
        code: "gh",
        fifaRanking: 44,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Kroatië is favoriet maar Ghana mag niet onderschat worden. De Ghanese spelers zijn fysiek sterk en technisch begaafd. Kroatië zal met hun superieure passing en controle de wedstrijd moeten dicteren. Puntverlies hier zou desastreus zijn voor de groepsklassering."
      },
      {
        name: "Panama",
        code: "pa",
        fifaRanking: 43,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "Panama is de zwakste tegenstander in de groep en Kroatië zou comfortabel moeten winnen. De Kroatische middenvelders (Modrić, Kovačić) zouden het spel moeten domineren. Een kans om het doelsaldo op te poetsen."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Luka Modrić", role: "Middenvelder – Legende", detail: "Mogelijk zijn laatste WK op 40-jarige leeftijd. De Gouden Bal-winnaar van 2018 is een van de grootste middenvelders aller tijden. Nu bij Milan, maar zijn klasse is tijdloos. Kan hij Kroatië nog één keer naar de top leiden?" },
      { name: "Mateo Kovačić", role: "Middenvelder – Motor", detail: "De Manchester City-middenvelder is het perfecte complement voor Modrić. Zijn box-to-box-spel, bal-zekerheid en durf om de bal te vragen onder druk maken hem onmisbaar." },
      { name: "Joško Gvardiol", role: "Verdediger – Toekomst", detail: "De 23-jarige verdediger van Manchester City is een van de beste centrale verdedigers ter wereld. Combineert fysieke kracht met technisch vermogen. De leider van de toekomst na het tijdperk-Modrić." },
      { name: "Ivan Perišić", role: "Aanvaller – Ervaring", detail: "De veelzijdige vleugelaanvaller van PSV Eindhoven brengt enorme toernooiervaring mee. Scoorde in de WK-finale 2018 en is altijd gevaarlijk op grote momenten." },
      { name: "Luka Sučić", role: "Middenvelder – Opvolger", detail: "De jonge middenvelder van Real Sociedad wordt gezien als de opvolger van Modrić. Technisch briljant met een geweldig schot. Klaar om de fakkel over te nemen." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Ongelooflijk WK-track record: finale (2018), derde (2022), derde (1998) – altijd op hun best bij WK's",
      "Middenvelddominantie: Modrić en Kovačić vormen een van de beste duo's ter wereld",
      "Toernooimentaliteit: presteren altijd boven hun niveau op grote toernooien",
      "Tactische discipline: bondscoach Dalić haalt het maximale uit zijn selectie",
      "Buitenproportioneel talent voor een land van slechts 4 miljoen inwoners"
    ],
    weaknesses: [
      "Vergrijzing: Modrić (40), Perišić (37) naderen het einde – kan de nieuwe generatie het overnemen?",
      "Gebrek aan een topspits: geen echte doelpuntenmachine in de selectie",
      "Afhankelijkheid van Modrić: als hij niet speelt of niet fit is, mist het team zijn hart",
      "Fysiek kwetsbaar: in verlengingen putten ze hun lichaam uit (drie verlengingen in 2018)",
      "Smalle selectie: blessures bij sleutelspelers zijn moeilijk op te vangen"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 90,
      roundOf32: 73,
      roundOf16: 45,
      quarterFinal: 22,
      semiFinal: 10,
      champion: 3.5,
      mostLikelyResult: "Kwartfinale",
      summary: "Kroatië is het ultieme toernooiteam. Met een WK-finale (2018), twee derde plaatsen (1998, 2022) en een ongelooflijk track record voor een land van slechts <strong>4 miljoen inwoners</strong>, mag je hen nooit afschrijven. <strong>Luka Modrić</strong> speelt mogelijk zijn laatste WK en zal alles geven. De groep met Engeland is zwaar, maar Kroatië heeft bewezen dat zij op hun best zijn wanneer het er echt om gaat. <em>De kwartfinale is het minimum, een halve finale zou niemand verbazen.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // GHANA (teamId: 47) – Groep L
  // ═══════════════════════════════════════════════════════
  47: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 15,
      wins: 5,
      draws: 3,
      losses: 7,
      goalsFor: 17,
      goalsAgainst: 22
    },

    // ── WK-deelnames ──
    history: [
      { year: 2006, host: "Duitsland",      result: "Achtste finale", tag: "r16",   detail: "Indrukwekkend WK-debuut. Versloeg Tsjechië (2-0) en de VS (2-1) in de groepsfase. In de achtste finale uitgeschakeld door Brazilië (0-3). De Black Stars werden de lievelingen van het toernooi." },
      { year: 2010, host: "Zuid-Afrika",     result: "Kwartfinale",    tag: "qf",    detail: "Het sprookje van Afrika! Ghana bereikte als derde Afrikaans land ooit de kwartfinale. In een dramatisch duel met Uruguay sloeg Luis Suárez de bal op de doellijn weg met zijn hand – rood, maar Asamoah Gyan miste de strafschop in de laatste minuut van de verlenging. Verloor daarna de strafschoppenserie. Een van de meest emotionele WK-momenten ooit." },
      { year: 2014, host: "Brazilië",       result: "Groepsfase",     tag: "group", detail: "Teleurstellend toernooi met interne problemen. De spelers eisten hun premies in cash – de Ghanese overheid vloog $3 miljoen in biljetten naar Brazilië. Uitgeschakeld zonder overwinning." },
      { year: 2022, host: "Qatar",           result: "Groepsfase",     tag: "group", detail: "Revanche tegen Uruguay (0-2 verlies) bracht geen genoegdoening. Uitgeschakeld in de groepsfase. Verloor van Portugal (2-3 in een spectaculaire wedstrijd, Ronaldo-hattrick) en won van Zuid-Korea (3-2)." }
    ],

    // ── Head-to-Head Groep L ──
    groupOpponents: [
      {
        name: "Engeland",
        code: "gb-eng",
        fifaRanking: 4,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Engeland is een van de topfavorieten voor het WK en Ghana zal als underdog starten. Maar de Black Stars hebben bewezen dat ze op grote toernooien kunnen verrassen. De snelheid van Antoine Semenyo en Kamaldeen Sulemana kan de Engelse verdediging problemen bezorgen. Een punt zou een enorm resultaat zijn."
      },
      {
        name: "Kroatië",
        code: "hr",
        fifaRanking: 8,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Kroatië is tactisch superieur maar Ghana heeft de fysieke kwaliteiten om het hen lastig te maken. Thomas Partey kan Modrić partij geven op het middenveld. Als Ghana compact verdedigt en op de counter speelt, is een verrassing niet uitgesloten."
      },
      {
        name: "Panama",
        code: "pa",
        fifaRanking: 43,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "fav",
        matches: [],
        analysis: "De must-win wedstrijd voor Ghana. Panama is de meest haalbare tegenstander in de groep en Ghana moet deze wedstrijd winnen om kans te maken op de ronde van 32. Met hun superieure individuele kwaliteit zou Ghana favoriet moeten zijn."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Thomas Partey", role: "Middenvelder – Anker", detail: "De ervaren middenvelder van Villarreal (voorheen Arsenal en Atlético Madrid) is het hart van het Ghanese middenveld. Zijn fysieke kracht, passing en leiderschap zijn onvervangbaar." },
      { name: "Iñaki Williams", role: "Aanvaller – Snelheid", detail: "De Athletic Bilbao-spits koos voor Ghana boven Spanje en brengt enorme snelheid en kracht mee. Zijn vermogen om verdedigingen te terroriseren met zijn runs is een groot wapen." },
      { name: "Mohammed Kudus", role: "Middenvelder – Ster", detail: "De creatieve motor van Ghana. Technisch briljant, doelgevaarlijk en onvoorspelbaar. Op zijn dag kan hij elke verdediging openbreken met zijn dribbels en schoten." },
      { name: "Antoine Semenyo", role: "Aanvaller – Dynamisch", detail: "De snelle aanvaller van Manchester City combineert power met techniek. Kan zowel op de vleugel als centraal spelen en is gevaarlijk in de counter." },
      { name: "Kamaldeen Sulemana", role: "Middenvelder – Dribbelaar", detail: "De Atalanta-vleugelspeler is een van de meest opwindende dribblaars van Afrika. Zijn snelheid en één-op-één vermogen kunnen in elke wedstrijd het verschil maken." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Atletisch en fysiek sterk: snelle en krachtige spelers over het hele veld",
      "WK-ervaring: kwartfinale 2010 bewijst dat Ghana op grote toernooien kan presteren",
      "Individueel talent: spelers bij topclubs als Manchester City, Atalanta, Athletic Bilbao",
      "Passie en trots: de Black Stars spelen met enorme energie en emotie",
      "Ervaren bondscoach Carlos Queiroz met internationale toernooiervaring"
    ],
    weaknesses: [
      "Inconsistentie: na de kwartfinale 2010 twee keer groepsfase-exit (2014, 2022)",
      "Interne problemen: premiedisputen en organisatorische chaos in het verleden",
      "Verdediging: kwetsbaar en onervaren tegen topteams",
      "Moeilijke groep: Engeland en Kroatië zijn objectief sterker",
      "Gebrek aan een betrouwbare doelman op het hoogste niveau"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 35,
      roundOf32: 18,
      roundOf16: 6,
      quarterFinal: 2.5,
      semiFinal: 0.8,
      champion: 0.2,
      mostLikelyResult: "Groepsfase / Ronde van 32",
      summary: "Ghana zit in een zware groep met Engeland en Kroatië, maar de Black Stars hebben bewezen dat ze op WK's kunnen verrassen. De kwartfinale van <strong>2010</strong> – met de beruchte handsbal van Suárez – is nog steeds het grootste moment uit het Ghanese voetbal. Met spelers als <strong>Thomas Partey</strong> en <strong>Iñaki Williams</strong> heeft Ghana genoeg kwaliteit om Panama te verslaan en mogelijk een puntje te pakken tegen Kroatië. <em>De derde plek en een plekje in de ronde van 32 als beste derde is het realistische doel.</em>"
    }
  },

  // ═══════════════════════════════════════════════════════
  // PANAMA (teamId: 48) – Groep L
  // ═══════════════════════════════════════════════════════
  48: {
    lastUpdated: "2026-06-09",

    // ── Algeheel WK-overzicht ──
    overall: {
      matches: 3,
      wins: 0,
      draws: 0,
      losses: 3,
      goalsFor: 2,
      goalsAgainst: 11
    },

    // ── WK-deelnames ──
    history: [
      { year: 2018, host: "Rusland",        result: "Groepsfase",     tag: "group", detail: "Het allereerste WK voor Panama! Het hele land vierde de kwalificatie als een nationale feestdag. Verloor alle drie de wedstrijden: 0-3 tegen België, 1-6 tegen Engeland en 1-2 tegen Tunesië. Maar Felipe Baloy's doelpunt tegen Engeland – het eerste WK-doelpunt ooit voor Panama – werd gevierd alsof ze de finale hadden gewonnen. Een historisch moment voor het Midden-Amerikaanse land." }
    ],

    // ── Head-to-Head Groep L ──
    groupOpponents: [
      {
        name: "Engeland",
        code: "gb-eng",
        fifaRanking: 4,
        h2hSummary: "1 WK-duel: 1× verlies Panama",
        verdict: "unfav",
        matches: [
          { tournament: "WK 2018 Groepsfase", score: "1-6", detail: "Een les in efficiëntie door Engeland. Harry Kane scoorde een hattrick, John Stones kopte er twee in. Maar Felipe Baloy's doelpunt in de 78e minuut gaf Panama hun eerste WK-goal ooit – het hele stadion applaudisseerde." }
        ],
        analysis: "Engeland versloeg Panama in 2018 met 6-1 en het kwaliteitsverschil is alleen maar groter geworden. Panama zal verdedigend moeten spelen en hopen op een wonder. Elk doelpunt zou opnieuw als een overwinning worden gevierd."
      },
      {
        name: "Kroatië",
        code: "hr",
        fifaRanking: 8,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "Kroatië is een WK-finalist (2018) en tweevoudig derde (1998, 2022). De technische superioriteit van Modrić, Kovačić en Gvardiol maakt het voor Panama bijna onmogelijk om een resultaat te behalen. Panama moet hopen op fouten en standaardsituaties."
      },
      {
        name: "Ghana",
        code: "gh",
        fifaRanking: 44,
        h2hSummary: "Geen eerdere WK-ontmoetingen",
        verdict: "unfav",
        matches: [],
        analysis: "De meest haalbare wedstrijd voor Panama, maar Ghana is individueel sterker. Panama zal met tactische discipline en teamspirit moeten compenseren voor het individuele kwaliteitsverschil. Een gelijkspel zou een uitstekend resultaat zijn."
      }
    ],

    // ── Sleutelspelers ──
    keyPlayers: [
      { name: "Michael Amir Murillo", role: "Verdediger – Ervaring", detail: "De rechtsback van Beşiktaş is een van de meest ervaren spelers van Panama. Brengt Europese topcompetitie-ervaring mee en is een leider in de verdediging." },
      { name: "Adalberto Carrasquilla", role: "Middenvelder – Spelmaker", detail: "De creatieve middenvelder van Pumas UNAM is het kloppend hart van het Panamese elftal. Zijn passing en overzicht zijn cruciaal voor het opbouwen van aanvallen." },
      { name: "José Fajardo", role: "Aanvaller – Spits", detail: "De aanvaller van Universidad Católica is de eerste keuze in de spits. Zijn doelpunten in de kwalificatie bewezen dat hij op het juiste moment kan scoren." },
      { name: "Eric Davis", role: "Verdediger – Aanvoerder", detail: "De routinier van Plaza Amador is de aanvoerder en het hart van de verdediging. Zijn ervaring en leiderschap zijn onmisbaar voor het jonge team." },
      { name: "César Yanis", role: "Middenvelder – Dynamisch", detail: "De middenvelder van Cobresal brengt energie en loopvermogen op het middenveld. Zijn werkethiek en inzet zijn essentieel voor het teamspel." }
    ],

    // ── Sterke en zwakke punten ──
    strengths: [
      "Teamspirit en passie: Panama speelt met enorm hart en trots",
      "WK-ervaring: het debuut in 2018 heeft het team volwassener gemaakt",
      "Ervaren bondscoach Thomas Christiansen met Europese tactische kennis",
      "Verdedigend georganiseerd: kan compact spelen en ruimtes klein houden",
      "Niets te verliezen: elk punt en elk doelpunt is een bonus"
    ],
    weaknesses: [
      "Individueel kwaliteitsverschil: geen spelers bij Europese topclubs",
      "WK-record: 0 zeges, 2 doelpunten en 11 tegendoelpunten in 3 wedstrijden",
      "Beperkte ervaring: meeste spelers actief in Midden-Amerika of lagere Europese competities",
      "Zwaarste groep mogelijke: Engeland, Kroatië en Ghana zijn allen sterker op papier",
      "Verdediging onder druk: in 2018 gemiddeld 3,7 tegendoelpunten per wedstrijd"
    ],

    // ── Kansen & Voorspelling ──
    prediction: {
      groupStage: 12,
      roundOf32: 5,
      roundOf16: 1.5,
      quarterFinal: 0.3,
      semiFinal: 0.05,
      champion: 0.01,
      mostLikelyResult: "Groepsfase",
      summary: "Panama keert terug op het WK na hun historische debuut in 2018 en zit in een zware groep met Engeland, Kroatië en Ghana. De kans op doorgaan is klein, maar dat was in 2018 ook het geval bij de kwalificatie. De Panamese fans zullen opnieuw het toernooi opfleuren met hun passie. <strong>Elk doelpunt is een feest</strong>, elk punt een mirakel. <em>Het doel is genieten, ervaring opdoen en het land trots maken – net als in 2018 toen Felipe Baloy's doelpunt tegen Engeland het hele land in vreugde uitbarstte.</em>"
    }
  }

};