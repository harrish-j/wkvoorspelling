const matchesData = {
  venues: {
    "azteca":     { name: "Estadio Azteca",       city: "Mexico-Stad",     country: "mx", capacity: 83000 },
    "bmo":        { name: "BMO Field",            city: "Toronto",         country: "ca", capacity: 45000 },
    "bcplace":    { name: "BC Place",             city: "Vancouver",       country: "ca", capacity: 54000 },
    "sofi":       { name: "SoFi Stadium",         city: "Los Angeles",     country: "us", capacity: 70000 },
    "lumen":      { name: "Lumen Field",          city: "Seattle",         country: "us", capacity: 69000 },
    "levis":      { name: "Levi's Stadium",       city: "San Francisco",   country: "us", capacity: 71000 },
    "lincoln":    { name: "Lincoln Financial Field", city: "Philadelphia", country: "us", capacity: 69000 },
    "gillette":   { name: "Gillette Stadium",     city: "Boston",          country: "us", capacity: 65000 },
    "hardrock":   { name: "Hard Rock Stadium",    city: "Miami",           country: "us", capacity: 65000 },
    "nrg":        { name: "NRG Stadium",          city: "Houston",         country: "us", capacity: 72000 },
    "att":        { name: "AT&T Stadium",         city: "Dallas",          country: "us", capacity: 80000 },
    "arrowhead":  { name: "GEHA Field",           city: "Kansas City",     country: "us", capacity: 76000 },
    "mercedesbenz":{ name: "Mercedes-Benz Stadium", city: "Atlanta",       country: "us", capacity: 71000 },
    "metlife":    { name: "MetLife Stadium",       city: "New York/NJ",    country: "us", capacity: 82000 },
    "bbva":       { name: "Estadio BBVA",          city: "Monterrey",      country: "mx", capacity: 53500 },
    "akron":      { name: "Estadio Akron",         city: "Guadalajara",    country: "mx", capacity: 48000 }
  },

  // Group stage matches (72 total)
  // Positions per group: 1=Pot1 seed, 2-4 assigned by draw
  // Matchday 1: 1v2, 3v4 | Matchday 2: 1v3, 4v2 | Matchday 3: 4v1, 2v3
  matches: [
    // ═══════════════════ SPEELDAG 1 ═══════════════════
    // Groep A – 11 juni
    { id:  1, group: "A", matchday: 1, date: "2026-06-11", time: "12:00", home:  1, away:  2, venue: "azteca",    stage: "Groepsfase" },
    { id:  2, group: "A", matchday: 1, date: "2026-06-11", time: "18:00", home:  3, away:  4, venue: "att",       stage: "Groepsfase" },
    // Groep B – 12 juni
    { id:  3, group: "B", matchday: 1, date: "2026-06-12", time: "13:00", home:  5, away:  6, venue: "bmo",       stage: "Groepsfase" },
    // Groep D – 12 juni
    { id:  4, group: "D", matchday: 1, date: "2026-06-12", time: "19:00", home: 13, away: 14, venue: "sofi",      stage: "Groepsfase" },
    // Groep C – 13 juni
    { id:  5, group: "C", matchday: 1, date: "2026-06-13", time: "12:00", home: 11, away: 12, venue: "metlife",   stage: "Groepsfase" },
    { id:  6, group: "D", matchday: 1, date: "2026-06-13", time: "15:00", home: 15, away: 16, venue: "gillette",  stage: "Groepsfase" },
    { id:  7, group: "C", matchday: 1, date: "2026-06-13", time: "18:00", home:  9, away: 10, venue: "att",       stage: "Groepsfase" },
    { id:  8, group: "B", matchday: 1, date: "2026-06-13", time: "21:00", home:  7, away:  8, venue: "hardrock",  stage: "Groepsfase" },
    // Groep E – 14 juni
    { id:  9, group: "E", matchday: 1, date: "2026-06-14", time: "12:00", home: 19, away: 20, venue: "mercedesbenz", stage: "Groepsfase" },
    { id: 10, group: "E", matchday: 1, date: "2026-06-14", time: "15:00", home: 17, away: 18, venue: "lincoln",   stage: "Groepsfase" },
    // Groep F – 14 juni
    { id: 11, group: "F", matchday: 1, date: "2026-06-14", time: "18:00", home: 21, away: 22, venue: "nrg",       stage: "Groepsfase" },
    { id: 12, group: "F", matchday: 1, date: "2026-06-14", time: "21:00", home: 23, away: 24, venue: "arrowhead", stage: "Groepsfase" },
    // Groep G – 15 juni
    { id: 13, group: "H", matchday: 1, date: "2026-06-15", time: "12:00", home: 31, away: 32, venue: "bbva",      stage: "Groepsfase" },
    { id: 14, group: "H", matchday: 1, date: "2026-06-15", time: "15:00", home: 29, away: 30, venue: "lumen",     stage: "Groepsfase" },
    { id: 15, group: "G", matchday: 1, date: "2026-06-15", time: "18:00", home: 27, away: 28, venue: "levis",     stage: "Groepsfase" },
    { id: 16, group: "G", matchday: 1, date: "2026-06-15", time: "21:00", home: 25, away: 26, venue: "metlife",   stage: "Groepsfase" },
    // Groep I – 16 juni
    { id: 17, group: "I", matchday: 1, date: "2026-06-16", time: "12:00", home: 33, away: 34, venue: "hardrock",  stage: "Groepsfase" },
    { id: 18, group: "I", matchday: 1, date: "2026-06-16", time: "15:00", home: 35, away: 36, venue: "nrg",       stage: "Groepsfase" },
    // Groep J – 16 juni
    { id: 19, group: "J", matchday: 1, date: "2026-06-16", time: "18:00", home: 37, away: 38, venue: "arrowhead", stage: "Groepsfase" },
    { id: 20, group: "J", matchday: 1, date: "2026-06-16", time: "21:00", home: 39, away: 40, venue: "sofi",      stage: "Groepsfase" },
    // Groep K – 17 juni
    { id: 21, group: "L", matchday: 1, date: "2026-06-17", time: "12:00", home: 47, away: 48, venue: "mercedesbenz", stage: "Groepsfase" },
    { id: 22, group: "L", matchday: 1, date: "2026-06-17", time: "15:00", home: 45, away: 46, venue: "lincoln",   stage: "Groepsfase" },
    { id: 23, group: "K", matchday: 1, date: "2026-06-17", time: "18:00", home: 41, away: 42, venue: "gillette",  stage: "Groepsfase" },
    { id: 24, group: "K", matchday: 1, date: "2026-06-17", time: "21:00", home: 43, away: 44, venue: "att",       stage: "Groepsfase" },

    // ═══════════════════ SPEELDAG 2 ═══════════════════
    // Groep A & B – 18 juni
    { id: 25, group: "A", matchday: 2, date: "2026-06-18", time: "12:00", home:  4, away:  2, venue: "nrg",       stage: "Groepsfase" },
    { id: 26, group: "B", matchday: 2, date: "2026-06-18", time: "15:00", home:  8, away:  6, venue: "bcplace",   stage: "Groepsfase" },
    { id: 27, group: "B", matchday: 2, date: "2026-06-18", time: "18:00", home:  5, away:  7, venue: "bmo",       stage: "Groepsfase" },
    { id: 28, group: "A", matchday: 2, date: "2026-06-18", time: "21:00", home:  1, away:  3, venue: "azteca",    stage: "Groepsfase" },
    // Groep C & D – 19 juni
    { id: 29, group: "C", matchday: 2, date: "2026-06-19", time: "12:00", home:  9, away: 11, venue: "att",       stage: "Groepsfase" },
    { id: 30, group: "C", matchday: 2, date: "2026-06-19", time: "15:00", home: 12, away: 10, venue: "lumen",     stage: "Groepsfase" },
    { id: 31, group: "D", matchday: 2, date: "2026-06-19", time: "18:00", home: 16, away: 14, venue: "metlife",   stage: "Groepsfase" },
    { id: 32, group: "D", matchday: 2, date: "2026-06-19", time: "21:00", home: 13, away: 15, venue: "sofi",      stage: "Groepsfase" },
    // Groep E & F – 20 juni
    { id: 33, group: "E", matchday: 2, date: "2026-06-20", time: "12:00", home: 17, away: 19, venue: "lincoln",   stage: "Groepsfase" },
    { id: 34, group: "E", matchday: 2, date: "2026-06-20", time: "15:00", home: 20, away: 18, venue: "hardrock",  stage: "Groepsfase" },
    { id: 35, group: "F", matchday: 2, date: "2026-06-20", time: "18:00", home: 21, away: 23, venue: "nrg",       stage: "Groepsfase" },
    { id: 36, group: "F", matchday: 2, date: "2026-06-20", time: "21:00", home: 24, away: 22, venue: "arrowhead", stage: "Groepsfase" },
    // Groep G & H – 21 juni
    { id: 37, group: "H", matchday: 2, date: "2026-06-21", time: "12:00", home: 32, away: 30, venue: "akron",     stage: "Groepsfase" },
    { id: 38, group: "H", matchday: 2, date: "2026-06-21", time: "15:00", home: 29, away: 31, venue: "levis",     stage: "Groepsfase" },
    { id: 39, group: "G", matchday: 2, date: "2026-06-21", time: "18:00", home: 25, away: 27, venue: "gillette",  stage: "Groepsfase" },
    { id: 40, group: "G", matchday: 2, date: "2026-06-21", time: "21:00", home: 28, away: 26, venue: "mercedesbenz", stage: "Groepsfase" },
    // Groep I & J – 22 juni
    { id: 41, group: "I", matchday: 2, date: "2026-06-22", time: "12:00", home: 36, away: 34, venue: "att",       stage: "Groepsfase" },
    { id: 42, group: "I", matchday: 2, date: "2026-06-22", time: "15:00", home: 33, away: 35, venue: "sofi",      stage: "Groepsfase" },
    { id: 43, group: "J", matchday: 2, date: "2026-06-22", time: "18:00", home: 37, away: 39, venue: "hardrock",  stage: "Groepsfase" },
    { id: 44, group: "J", matchday: 2, date: "2026-06-22", time: "21:00", home: 40, away: 38, venue: "bbva",      stage: "Groepsfase" },
    // Groep K & L – 23 juni
    { id: 45, group: "L", matchday: 2, date: "2026-06-23", time: "12:00", home: 45, away: 47, venue: "metlife",   stage: "Groepsfase" },
    { id: 46, group: "L", matchday: 2, date: "2026-06-23", time: "15:00", home: 48, away: 46, venue: "lumen",     stage: "Groepsfase" },
    { id: 47, group: "K", matchday: 2, date: "2026-06-23", time: "18:00", home: 41, away: 43, venue: "lincoln",   stage: "Groepsfase" },
    { id: 48, group: "K", matchday: 2, date: "2026-06-23", time: "21:00", home: 44, away: 42, venue: "nrg",       stage: "Groepsfase" },

    // ═══════════════════ SPEELDAG 3 ═══════════════════
    // Groep A, B, C – 24 juni
    { id: 49, group: "C", matchday: 3, date: "2026-06-24", time: "12:00", home: 12, away:  9, venue: "gillette",  stage: "Groepsfase" },
    { id: 50, group: "C", matchday: 3, date: "2026-06-24", time: "12:00", home: 10, away: 11, venue: "arrowhead", stage: "Groepsfase" },
    { id: 51, group: "B", matchday: 3, date: "2026-06-24", time: "16:00", home:  8, away:  5, venue: "bcplace",   stage: "Groepsfase" },
    { id: 52, group: "B", matchday: 3, date: "2026-06-24", time: "16:00", home:  6, away:  7, venue: "mercedesbenz", stage: "Groepsfase" },
    { id: 53, group: "A", matchday: 3, date: "2026-06-24", time: "20:00", home:  4, away:  1, venue: "bbva",      stage: "Groepsfase" },
    { id: 54, group: "A", matchday: 3, date: "2026-06-24", time: "20:00", home:  2, away:  3, venue: "azteca",    stage: "Groepsfase" },
    // Groep D, E, F – 25 juni
    { id: 55, group: "E", matchday: 3, date: "2026-06-25", time: "12:00", home: 18, away: 19, venue: "hardrock",  stage: "Groepsfase" },
    { id: 56, group: "E", matchday: 3, date: "2026-06-25", time: "12:00", home: 20, away: 17, venue: "metlife",   stage: "Groepsfase" },
    { id: 57, group: "F", matchday: 3, date: "2026-06-25", time: "16:00", home: 22, away: 23, venue: "lumen",     stage: "Groepsfase" },
    { id: 58, group: "F", matchday: 3, date: "2026-06-25", time: "16:00", home: 24, away: 21, venue: "att",       stage: "Groepsfase" },
    { id: 59, group: "D", matchday: 3, date: "2026-06-25", time: "20:00", home: 16, away: 13, venue: "levis",     stage: "Groepsfase" },
    { id: 60, group: "D", matchday: 3, date: "2026-06-25", time: "20:00", home: 14, away: 15, venue: "sofi",      stage: "Groepsfase" },
    // Groep G, H, I – 26 juni
    { id: 61, group: "I", matchday: 3, date: "2026-06-26", time: "12:00", home: 36, away: 33, venue: "nrg",       stage: "Groepsfase" },
    { id: 62, group: "I", matchday: 3, date: "2026-06-26", time: "12:00", home: 34, away: 35, venue: "lincoln",   stage: "Groepsfase" },
    { id: 63, group: "G", matchday: 3, date: "2026-06-26", time: "16:00", home: 26, away: 27, venue: "arrowhead", stage: "Groepsfase" },
    { id: 64, group: "G", matchday: 3, date: "2026-06-26", time: "16:00", home: 28, away: 25, venue: "gillette",  stage: "Groepsfase" },
    { id: 65, group: "H", matchday: 3, date: "2026-06-26", time: "20:00", home: 30, away: 31, venue: "akron",     stage: "Groepsfase" },
    { id: 66, group: "H", matchday: 3, date: "2026-06-26", time: "20:00", home: 32, away: 29, venue: "bbva",      stage: "Groepsfase" },
    // Groep J, K, L – 27 juni
    { id: 67, group: "L", matchday: 3, date: "2026-06-27", time: "12:00", home: 48, away: 45, venue: "sofi",      stage: "Groepsfase" },
    { id: 68, group: "L", matchday: 3, date: "2026-06-27", time: "12:00", home: 46, away: 47, venue: "hardrock",  stage: "Groepsfase" },
    { id: 69, group: "J", matchday: 3, date: "2026-06-27", time: "16:00", home: 38, away: 39, venue: "mercedesbenz", stage: "Groepsfase" },
    { id: 70, group: "J", matchday: 3, date: "2026-06-27", time: "16:00", home: 40, away: 37, venue: "att",       stage: "Groepsfase" },
    { id: 71, group: "K", matchday: 3, date: "2026-06-27", time: "20:00", home: 44, away: 41, venue: "metlife",   stage: "Groepsfase" },
    { id: 72, group: "K", matchday: 3, date: "2026-06-27", time: "20:00", home: 42, away: 43, venue: "lumen",     stage: "Groepsfase" }
  ],

  // Knockout stage structure (matches 73-104)
  knockoutRounds: [
    { round: "Ronde van 32", dates: "28 jun - 3 jul", matchCount: 16 },
    { round: "Achtste finales", dates: "4 - 7 jul",   matchCount: 8 },
    { round: "Kwartfinales",   dates: "9 - 11 jul",   matchCount: 4 },
    { round: "Halve finales",  dates: "14 - 15 jul",  matchCount: 2 },
    { round: "Troostfinale",   dates: "18 jul",        matchCount: 1 },
    { round: "Finale",         dates: "19 jul",        matchCount: 1, venue: "metlife" }
  ]
};
