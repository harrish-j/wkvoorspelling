const teamsData = {
  tournament: "FIFA Wereldkampioenschap 2026",
  year: 2026,
  hosts: ["us", "mx", "ca"],
  groups: [
    { id: "A", startDate: "11 jun" },
    { id: "B", startDate: "12 jun" },
    { id: "C", startDate: "13 jun" },
    { id: "D", startDate: "12 jun" },
    { id: "E", startDate: "14 jun" },
    { id: "F", startDate: "14 jun" },
    { id: "G", startDate: "15 jun" },
    { id: "H", startDate: "15 jun" },
    { id: "I", startDate: "16 jun" },
    { id: "J", startDate: "16 jun" },
    { id: "K", startDate: "17 jun" },
    { id: "L", startDate: "17 jun" }
  ],
  teams: [
    // Groep A
    { id:  1, name: "Mexico",             code: "mx",     confederation: "CONCACAF", group: "A", host: true  },
    { id:  2, name: "Zuid-Afrika",        code: "za",     confederation: "CAF",      group: "A" },
    { id:  3, name: "Zuid-Korea",         code: "kr",     confederation: "AFC",      group: "A" },
    { id:  4, name: "Tsjechië",           code: "cz",     confederation: "UEFA",     group: "A" },
    // Groep B
    { id:  5, name: "Canada",             code: "ca",     confederation: "CONCACAF", group: "B", host: true  },
    { id:  6, name: "Bosnië-Herzegovina", code: "ba",     confederation: "UEFA",     group: "B" },
    { id:  7, name: "Qatar",              code: "qa",     confederation: "AFC",      group: "B" },
    { id:  8, name: "Zwitserland",        code: "ch",     confederation: "UEFA",     group: "B" },
    // Groep C
    { id:  9, name: "Brazilië",           code: "br",     confederation: "CONMEBOL", group: "C" },
    { id: 10, name: "Marokko",            code: "ma",     confederation: "CAF",      group: "C" },
    { id: 11, name: "Haïti",              code: "ht",     confederation: "CONCACAF", group: "C" },
    { id: 12, name: "Schotland",          code: "gb-sct", confederation: "UEFA",     group: "C" },
    // Groep D
    { id: 13, name: "Verenigde Staten",   code: "us",     confederation: "CONCACAF", group: "D", host: true  },
    { id: 14, name: "Paraguay",           code: "py",     confederation: "CONMEBOL", group: "D" },
    { id: 15, name: "Australië",          code: "au",     confederation: "AFC",      group: "D" },
    { id: 16, name: "Turkije",            code: "tr",     confederation: "UEFA",     group: "D" },
    // Groep E
    { id: 17, name: "Duitsland",          code: "de",     confederation: "UEFA",     group: "E" },
    { id: 18, name: "Curaçao",            code: "cw",     confederation: "CONCACAF", group: "E" },
    { id: 19, name: "Ivoorkust",          code: "ci",     confederation: "CAF",      group: "E" },
    { id: 20, name: "Ecuador",            code: "ec",     confederation: "CONMEBOL", group: "E" },
    // Groep F
    { id: 21, name: "Nederland",          code: "nl",     confederation: "UEFA",     group: "F" },
    { id: 22, name: "Japan",              code: "jp",     confederation: "AFC",      group: "F" },
    { id: 23, name: "Zweden",             code: "se",     confederation: "UEFA",     group: "F" },
    { id: 24, name: "Tunesië",            code: "tn",     confederation: "CAF",      group: "F" },
    // Groep G
    { id: 25, name: "België",             code: "be",     confederation: "UEFA",     group: "G" },
    { id: 26, name: "Egypte",             code: "eg",     confederation: "CAF",      group: "G" },
    { id: 27, name: "Iran",               code: "ir",     confederation: "AFC",      group: "G" },
    { id: 28, name: "Nieuw-Zeeland",      code: "nz",     confederation: "OFC",      group: "G" },
    // Groep H
    { id: 29, name: "Spanje",             code: "es",     confederation: "UEFA",     group: "H" },
    { id: 30, name: "Kaapverdië",         code: "cv",     confederation: "CAF",      group: "H" },
    { id: 31, name: "Saoedi-Arabië",      code: "sa",     confederation: "AFC",      group: "H" },
    { id: 32, name: "Uruguay",            code: "uy",     confederation: "CONMEBOL", group: "H" },
    // Groep I
    { id: 33, name: "Frankrijk",          code: "fr",     confederation: "UEFA",     group: "I" },
    { id: 34, name: "Senegal",            code: "sn",     confederation: "CAF",      group: "I" },
    { id: 35, name: "Irak",               code: "iq",     confederation: "AFC",      group: "I" },
    { id: 36, name: "Noorwegen",          code: "no",     confederation: "UEFA",     group: "I" },
    // Groep J
    { id: 37, name: "Argentinië",         code: "ar",     confederation: "CONMEBOL", group: "J" },
    { id: 38, name: "Algerije",           code: "dz",     confederation: "CAF",      group: "J" },
    { id: 39, name: "Oostenrijk",         code: "at",     confederation: "UEFA",     group: "J" },
    { id: 40, name: "Jordanië",           code: "jo",     confederation: "AFC",      group: "J" },
    // Groep K
    { id: 41, name: "Portugal",           code: "pt",     confederation: "UEFA",     group: "K" },
    { id: 42, name: "DR Congo",           code: "cd",     confederation: "CAF",      group: "K" },
    { id: 43, name: "Oezbekistan",        code: "uz",     confederation: "AFC",      group: "K" },
    { id: 44, name: "Colombia",           code: "co",     confederation: "CONMEBOL", group: "K" },
    // Groep L
    { id: 45, name: "Engeland",           code: "gb-eng", confederation: "UEFA",     group: "L" },
    { id: 46, name: "Kroatië",            code: "hr",     confederation: "UEFA",     group: "L" },
    { id: 47, name: "Ghana",              code: "gh",     confederation: "CAF",      group: "L" },
    { id: 48, name: "Panama",             code: "pa",     confederation: "CONCACAF", group: "L" }
  ]
};
