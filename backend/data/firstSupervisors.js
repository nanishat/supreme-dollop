/**
 * First Supervisors Data
 * Mapping: Project -> First Supervisors
 */

const firstSupervisors = {
  "BISD IT": {
    "Dhaka": [{ name: "Nazrul Islam/INST" }],
    "Joldhaka": [{ name: "Hasanur Rahman" }],
    "Chattogram": [{ name: "Lokman Hossan/INST" }],
    "Cumilla": [{ name: "Mehedi Hasan/INST/CL" }],
    "Halishahar": [{ name: "Mohammad Omar Sharif/Instructor" }],
    "Sylhet": [{ name: "Mostofa Sazid/INST" }],
    "Rangpur": [{ name: "Sohel Miah/AM" }]
  },
  "BISD TVET": {
    "Dhaka": [{ name: "Nazrul Islam/INST" }],
    "Manikganj": [{ name: "Masum Billah/CL" }],
    "Mirsharai": [{ name: "Yousuf/CL" }],
    "Nilphamari": [{ name: "Tumpa Wadud/CL" }],
    "Narayanganj": [{ name: "Shopan Ali/AL" }]
  },
  "Care Giver for Japan": {
    "Dhaka": [{ name: "Nazrul Islam/INST" }],
    "Haluaghat": [{ name: "Jafar Ahmed/HO" }],
    "Narayanganj": [{ name: "Shopan Ali/AL" }],
    "Mirsharai": [{ name: "Yousuf/CL" }]
  },
  "PISD": {
    "Dhaka": [{ name: "Sharif Ahamed Nayem/HO" }]
  },
  "Govt": {
    "Dhaka": [{ name: "Nazrul Islam/INST" }],
    "Nilphamari": {
      "BISD Nilphamari 1": [{ name: "Tumpa Wadud/CL" }],
      "BISD Nilphamari 2": [{ name: "Rayhan Kabir/CL" }],
    },
    "Narayanganj": [{ name: "Shopan Ali/AL" }]
  },
  // For projects with 'N/A' zonal area, supervisors are listed directly under the project
  "SILATECH/ED": [
    { name: "Aslam Hakim/DM" },
    { name: "Lokman Hossan/INST" },
    { name: "Mehedi Hasan/INST/CL" },
    { name: "Mohammad Omar Sharif/Instructor"},
    { name: "Mostofa Sazid/INST" },
    { name: "Hasanur Rahman" }
  ],
  "SILATECH/ED": [
    { name: "Aslam Hakim/DM" },
    { name: "Shishir Ranjan/DM" },
  ],
  "SILATECH/PROMISE": [
    { name: "Rupash Biswas/DM" },
    { name: "Golam Rasul/DM" },
    { name: "Mizanur Rahman/DM" },
    { name: "Mominul Islam/DM" },
    { name: "Hafejur Rahman/DM" },
    { name: "Firoz Ahmed/DM" },
    { name: "Mazharul Haque/DM" },
    { name: "AsmaUl Hosna/DM" }
  ],
  "PROSPER": [
    { name: "Belayet Hossain/DM" },
    { name: "Subhadra Paul/DM" },
    { name: "Mosarof Hossain/DM" },
    { name: "Mahera Begum/DM" },
    { name: "Suzit Dhar/DM" },
    { name: "Bahauddin /DM" },
    { name: "Morshed Alam/DM" },
    { name: "Sazder Hosen/DM" },
  ],
  "STAR BRAC": [
    { name: "Abdul Khalek/DM" },
    { name: "Touhidul Islam/DM" },
    { name: "Abdul Momin/DM " }
  ],
  "STAR IDP": [
    { name: "Samira Khatun/AM" },
    { name: "Nazma Khatun/AM" },
    { name: "AKM Azad/AM" },
    { name: "Azadur Rahman/AM" },
    { name: "Titumir Alam/AM" },
    { name: "Khalilur Rahman/AM" },
    { name: "Samidul Islam/AM" },
    { name: "Alam Sorowar/AM" },
    { name: "Rezaul Islam/AM" },
    { name: "Harun Rashid/AM" },
    { name: "Etiara Begum/AM" },
    { name: "Sekender Ali/AM" },
    { name: "Imdadul Haque/AM" },
    { name: "Rothin Toppo/AM" },
    { name: "Sayeduzzaman Shohel/AM" },
    { name: "Afjal Hossain/AM" },
    { name: "Sanjit Kumar/AM" },
    { name: "Yousuf Ali/AM" },
    { name: "Belal Hossain/AM" },
    { name: "Ahlad Das/AM" },
    { name: "Ismot Bari/AM" },
    { name: "Murad Hassain/AM" },
    { name: "Gopal Kundu/AM" },
    { name: "Md Hasanuzzaman/AM" },
    { name: "Asadul Islam/AM" },
    { name: "MD Mohsin/AM" }
  ],
  "STAR PNGO": [
    { name: "Kanika Barai/DM" },
    { name: "Rojina Khatun/DM" },
    { name: "Hazrat ali/DM" },
    { name: "Mostafizur Rahman/DM" },
    { name: "Chinmoy /DM" },
    { name: "Shuball Barua/DM" },
    { name: "Bidushi Dewan/DM" }
  ],
  "STAR SDF": [
    { name: "Krishna Roy/DM" },
    { name: "Sujon Shahin/DM" },
    { name: "Nayan Kumar/DM" }
  ],
  "STAR SPA": [
    { name: "Abdul Momin/DM " },
    { name: "Tanuj Halder/DM" },
    { name: "Mustafizur Rahman/DM" },
    { name: "Krishna Koli/DM" },
    { name: "Ismail Hossen/DM" },
    { name: "Sobhan Shaikh/DM" },
    { name: "Rosy Begum/DM" },
    { name: "Reshma Khatun/DM" },
    { name: "Abdur Razzaque/DM" },
    { name: "Mehedi Hasan/DM" },
  ],
  "STAR UPG": [
    { name: "Efat Zahan/DM" },
    { name: "Saidul Islam/DM" },
    { name: "Sudipta Kumar/DM" },
    { name: "Tanjila Sheikh/DM" }
  ],
  "RETAIL SALES": [
    { name: "Biswajit Roy/DM" },
    { name: "Abdul Momin/DM" },
    { name: "Shayed Amad/DM" },
    { name: "Ayesha Siddika/DM" },
    { name: "Rownak Jahan/DM" }
  ]
};

export default firstSupervisors;