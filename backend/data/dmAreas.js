/**
 * Zonal Area to DM Area mapping
 * Reshaped structure: Project -> Zonal Area -> DM Areas
 *
 * Values preserved from the original flat mapping; only structure changed.
 */

const dmAreas = {
  // STAR projects
  "STAR BRAC": {
    Noakhali: ["Noakhali", "Khagrachari", "Jamalpur"],
  },
  
  "STAR IDP": {
  "Dinajpur North": ["Dinajpur Sadar", "Birol", "Bochagonj", "Kaharol", "Birganj", "Khansama"],
  "Dinajpur South": ["Cirirbandar","Fulbari", "Birampur","Nawabganj", "Ghoraghat", "Hakimpur"],
  Rajshahi: ["Tanore", "Niamothpur"],
  Naogaon: ["Mohadevpur", "Patnitala"],
  Khulna: ["Paikgacha", "Koyra", "Dumuria", "Dakop", "Rupsha", "Digholia"],
  Satkhira: ["Kolaroa", "Debhata", "Shyamnagar", "Assasuni", "Tala"],
  },

  "STAR PNGO": {
    Rajshahi: ["Barguna", "Chapainawabganj", "Polashbari"],
    Sreemangal: ["Mymensingh", "Sherpur", "Sreemangal", "Rangamati"],
  },

  "STAR SPA": {
    Noakhali: ["Jamalpur", "Moulvibazar"],
    Barishal: ["Patuakhali", "Barishal Sadar", "Bagerhat", "Jessore"],
    Rangpur: ["Ullapara", "Joypurhat", "Lalmonirhat", "Thakurgaon"],
  },
  
  // PROSPER project
  "PROSPER": {
    Cumilla: ["Cumilla", "Feni", "Pashlish", "Dhaka"],
    Mymensingh: ["Mymensingh", "Sreemangal", "Gaibandha", "Bogra"],
  },
};

export default dmAreas;
