// Uitgebreide team-analyses op basis van historische WK-statistieken
// Gegevens per teamId

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
      { year: 1930, host: "Uruguay",       result: "Groepsfase",   tag: "group",  detail: "Eerste WK ooit – drie nederlagen" },
      { year: 1950, host: "Brazilië",      result: "Groepsfase",   tag: "group",  detail: "Geen overwinning in drie duels" },
      { year: 1954, host: "Zwitserland",   result: "Groepsfase",   tag: "group",  detail: "Twee wedstrijden, twee nederlagen" },
      { year: 1958, host: "Zweden",        result: "Groepsfase",   tag: "group",  detail: "Eerste punt: 1-1 tegen Wales" },
      { year: 1962, host: "Chili",         result: "Groepsfase",   tag: "group",  detail: "Eerste WK-zege: 3-1 vs Tsjechoslowakije" },
      { year: 1966, host: "Engeland",      result: "Groepsfase",   tag: "group",  detail: "Twee gelijke spelen, één nederlaag" },
      { year: 1970, host: "Mexico 🏠",     result: "Kwartfinale",  tag: "qf",     detail: "Als gastland naar de kwartfinale – verlies 1-4 tegen Italië" },
      { year: 1978, host: "Argentinië",    result: "Groepsfase",   tag: "group",  detail: "Drie nederlagen, nul punten" },
      { year: 1986, host: "Mexico 🏠",     result: "Kwartfinale",  tag: "qf",     detail: "Beste WK ooit – verlies na strafschoppen tegen West-Duitsland" },
      { year: 1994, host: "VS",            result: "Achtste finale", tag: "r16",  detail: "1-3 verlies tegen Bulgarije" },
      { year: 1998, host: "Frankrijk",     result: "Achtste finale", tag: "r16",  detail: "1-2 verlies tegen Duitsland" },
      { year: 2002, host: "Japan/Z-Korea", result: "Achtste finale", tag: "r16",  detail: "Pijnlijk 0-2 verlies tegen aartsrivaal VS" },
      { year: 2006, host: "Duitsland",     result: "Achtste finale", tag: "r16",  detail: "1-2 n.v. tegen Argentinië – Maxi Rodríguez' wereldgoal" },
      { year: 2010, host: "Zuid-Afrika",    result: "Achtste finale", tag: "r16",  detail: "1-3 tegen Argentinië – controversieel buitenspeldoel Tévez" },
      { year: 2014, host: "Brazilië",      result: "Achtste finale", tag: "r16",  detail: "1-2 tegen Nederland – 'No era penal!' Robbens schwalbe in 88'" },
      { year: 2018, host: "Rusland",       result: "Achtste finale", tag: "r16",  detail: "0-2 kansloos tegen Brazilië" },
      { year: 2022, host: "Qatar",         result: "Groepsfase",   tag: "group",  detail: "Uitgeschakeld op doelsaldo – einde van 28 jaar achtste finales" }
    ],

    // ── El Quinto Partido: de vloek ──
    quintoPartido: {
      intro: "Tussen 1994 en 2018 bereikte Mexico zeven opeenvolgende keren de achtste finale van het WK – maar kwam er nooit doorheen. Deze pijnlijke traditie staat in Mexico bekend als <strong>'El Quinto Partido'</strong> (de vijfde wedstrijd).",
      matches: [
        { year: 1994, opponent: "Bulgarije",   score: "1-3", detail: "Rode kaart Bernal in de 57e minuut brak Mexico" },
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
          matches: 4, wins: 2, draws: 0, losses: 2,
          detail: "Groepsfase gewonnen met overtuiging (4-0 vs El Salvador). In de kwartfinale kansloos 1-4 tegen een legendarisch Italië."
        },
        {
          year: 1986,
          matches: 5, wins: 3, draws: 1, losses: 1,
          detail: "Het beste Mexicaanse WK ooit. Hugo Sánchez en co. verloren pas in de kwartfinale na strafschoppen tegen West-Duitsland (0-0, 1-4 pen)."
        }
      ],
      combined: { matches: 9, wins: 5, draws: 1, losses: 3, goalsFor: 16, goalsAgainst: 13 },
      conclusion: "Met een winpercentage van <strong>56%</strong> als gastland (vs 28% totaal) is het thuisvoordeel voor Mexico enorm. In 2026 speelt El Tri hun groepswedstrijden in het Estadio Azteca en Estadio BBVA – beide in Mexico."
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
          { tournament: "WK 2010 Groepsfase", score: "1-1", detail: "Opening van het toernooi in Johannesburg. Márquez scoorde voor Mexico; Tshabalala voor de Bafana Bafana met een prachtig schot." }
        ],
        analysis: "Zuid-Afrika heeft sinds het WK 2010 geen WK meer gespeeld en keert terug na 16 jaar afwezigheid. Mexico is op papier favoriet, maar het WK 2010-precedent toont dat Zuid-Afrika niet onderschat mag worden."
      },
      {
        name: "Zuid-Korea",
        code: "kr",
        fifaRanking: 23,
        h2hSummary: "2 WK-duels: 2× winst Mexico",
        verdict: "fav",
        matches: [
          { tournament: "WK 1998 Groepsfase", score: "3-1", detail: "Overtuigende zege met goals van Peláez, Hernández en García Aspe." },
          { tournament: "WK 2018 Groepsfase", score: "2-1", detail: "Vela en Hernández scoorden. Ironisch: Zuid-Korea versloeg later Duitsland 2-0 en hielp Mexico naar de achtste finale." }
        ],
        analysis: "Zuid-Korea is een stuk sterker geworden met spelers als Son Heung-min (Tottenham) en Lee Kang-in (PSG). De Taegeuk Warriors bereikten de halve finale in 2002 als gastland en zijn altijd gevaarlijk op WK's."
      },
      {
        name: "Tsjechië",
        code: "cz",
        fifaRanking: 47,
        h2hSummary: "1 WK-duel: 1× winst Mexico",
        verdict: "fav",
        matches: [
          { tournament: "WK 1962 Groepsfase", score: "3-1", detail: "Mexico versloeg Tsjechoslowakije voor hun eerste WK-overwinning ooit. Historisch moment voor het Mexicaanse voetbal." }
        ],
        analysis: "Tsjechië kwalificeert zich voor het eerst sinds 2006 voor een WK. Het team mist de supersterren van weleer (Nedvěd, Rosický, Čech), maar heeft een solide Europese kern. Als laagst geplaatste team in Groep A zullen ze de underdog zijn."
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
  }

};
