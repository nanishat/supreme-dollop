/**
 * DM Area to District mapping
 * Mapping: DM Area -> Districts
 */

const zonalAreaDmAreas = {
  // ISD Areas
  "BISD Uttara": ["Uttara", "Dhaka"],
  Chakaria: ["Chakaria", "Cox's Bazar"],
  Chattogram: ["Chattogram", "Cumilla", "Chandpur"],
  "Cox's Bazar Sadar": ["Cox's Bazar Sadar", "Cox's Bazar"],
  Cumilla: ["Cumilla", "Brahmanbaria"],
  Dhaka: ["Dhaka", "Gazipur", "Narayanganj"],
  Khulna: ["Khulna", "Satkhira", "Jashore"],
  Mymensingh: ["Mymensingh", "Kishoreganj", "Jamalpur"],
  Rajshahi: ["Rajshahi", "Nawabganj", "Naogaon"],
  Rangpur: ["Rangpur", "Dinajpur", "Kurigram"],
  Potiya: ["Potiya", "Chattogram"],
  Sylhet: ["Sylhet", "Maulvibazar", "Sunamganj"],
  Ukhiya: ["Ukhiya", "Cox's Bazar"],

  // STAR Areas
  Patuakhali: ["Patuakhali", "Barguna"],
  Barisal: ["Barisal", "Jhalokathi", "Pirejpur"],
  "Barisal sadar": ["Barisal", "Barisal Sadar"],
  Bagerhat: ["Bagerhat", "Khulna"],
  Jessore: ["Jessore", "Satkhira"],
  Noakhali: ["Noakhali", "Chandpur", "Laxmipur"],
  Khagrachari: ["Khagrachari", "Rangamati", "Chattogram"],
  Jamalpur: ["Jamalpur", "Mymensingh", "Netrokona"],
  Moulvibazar: ["Moulvibazar", "Sylhet"],

  // STAR Rangpur Areas
  Ullapara: ["Ullapara", "Gaibandha", "Sirajganj"],
  Joypurhat: ["Joypurhat", "Naogaon"],
  Lalmonirhat: ["Lalmonirhat", "Rangpur"],
  Thakurgaon: ["Thakurgaon", "Panchagarh"],
  "Joypurhat Sadar": ["Joypurhat", "Natore"],

  // IDP STAR Dinajpur Areas
  "Dinajpur sadar": ["Dinajpur", "Dinajpur Sadar"],
  Birol: ["Birol", "Dinajpur"],
  Bochagonj: ["Bochaganj", "Dinajpur"],
  Kharol: ["Kaharol", "Dinajpur"],
  Birgonj: ["Birganj", "Dinajpur"],
  Khansama: ["Khansama", "Dinajpur"],
  Chirirbandar: ["Chirirbandar", "Dinajpur"],
  Fulbari: ["Fulbari", "Dinajpur"],
  Birampur: ["Birampur", "Dinajpur"],
  Nawabganj: ["Nawabganj", "Dinajpur"],
  Ghoraghat: ["Ghoraghat", "Dinajpur"],
  Hakimpur: ["Hakimpur", "Dinajpur"],

  // IDP STAR Rajshahi Areas
  Tanore: ["Tanore", "Rajshahi"],
  Niamothpur: ["Niamatpur", "Rajshahi"],

  // IDP STAR Naogaon Areas
  Mohadevpur: ["Mohadevpur", "Naogaon"],
  Patnitala: ["Patnitala", "Naogaon"],

  // IDP STAR Khulna Areas
  Paikgacha: ["Paikgacha", "Khulna"],
  Koyra: ["Koyra", "Khulna"],
  Dumuria: ["Dumuria", "Khulna"],
  Dakop: ["Dakop", "Khulna"],
  Rupsha: ["Rupsha", "Khulna"],
  Digholia: ["Digholia", "Khulna"],

  // IDP STAR Satkhira Areas
  Kolaroa: ["Kalaroa", "Satkhira"],
  Debhata: ["Debhata", "Satkhira"],
  Shyamnagar: ["Shyamnagar", "Satkhira"],
  Assasuni: ["Assasuni", "Satkhira"],
  Tala: ["Tala", "Satkhira"],

  // PROSPER Areas
  Kishoreganj: ["Kishoreganj", "Mymensingh"],
  Gaibandha: ["Gaibandha", "Rangpur"],

  // STAR PNGO Areas
  Barguna: ["Barguna", "Barisal"],
  Chapainawabganj: ["Chapainawabganj", "Rajshahi"],
  Polashbari: ["Palashbari", "Bogura"],
  Sherpur: ["Sherpur", "Mymensingh"],
  Sreemangal: ["Sreemangal", "Maulvibazar"],
  Ramgamati: ["Ramgamati", "Rangamati"],
  Patkelgatha: ["Patkelgatha", "Barisal"],
  Bagerha: ["Bagerhat", "Khulna"],
  Mithapukur: ["Mithapukur", "Rangpur"],
  Lalpur: ["Lalpur", "Natore"],

  // SILATECH Areas
  "Sylhet Sadar": ["Sylhet", "Sylhet Sadar"],
  Golapgonj: ["Golapganj", "Sylhet"],
  "Sunamgonj Sadar": ["Sunamganj", "Sylhet"],

  // STAR UPG Areas
  Azampur: ["Azampur", "Gazipur"],
  Pallabi: ["Pallabi", "Dhaka"],
  Panchlaish: ["Panchlaish", "Chattogram"],
  Bogura: ["Bogura", "Rajshahi"],

  // Additional Areas
  Halishahar: ["Halishahar", "Chattogram"],
  Jaldhaka: ["Jaldapara", "Dinajpur"],
  Manikganj: ["Manikganj", "Dhaka"],
  Mirsharai: ["Mirsharai", "Chattogram"],
  Nilphamari: ["Nilphamari", "Rangpur"],
  Kanchan: ["Kanchan", "Rajshahi"],
  Indurkani: ["Indurkani", "Bogura"],
  Haluaghat: ["Haluaghat", "Mymensingh"],
  Daulatpur: ["Daulatpur", "Khulna"],
  Amraborkhana: ["Amraborkhana", "Rajshahi"],
  Abdullahpur: ["Abdullahpur", "Dhaka"],
};

export { zonalAreaDmAreas };
