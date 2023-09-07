//Question Write a code to find diameter, circumference and area of a circle.
let finger = 7;

//mencari diameter
const diameter = 2 * finger;
console.log("diameter lingkaran yaitu >> ", diameter);

//mencari keliling lingkaran
const kelilingLingkaran = Math.PI * diameter;
console.log("keliling lingkaran yaitu >> ", kelilingLingkaran);

//mencari luas lingkaran
const luasLingkaran = Math.PI * Math.pow(finger, 2);
console.log("luas lingkaran yaitu >> ",luasLingkaran);

// Question Write a code to find angles of triangle if two angles are given.
angeltriangle = 60 * 2

console.log(angeltriangle)

// Question Write a code to get difference between dates in days.
date = new Date();
date1 = new Date ("2023-09-18");
date2 = new Date ("2023-09-06");

const selisih = date1.getTime(24) - date2.getTime(24);
const selisihhari = Math.floor(selisih / (1000 * 3600 * 24));
console.log(selisihhari);

// Question Write a code to convert days to years, months and days.
let jumlahHari = 230

const tahun = Math.floor(jumlahHari / 365)
jumlahHari %= 365
jumlahHari
console.log(jumlahHari)

const bulan = Math.floor(jumlahHari / 30)
jumlahHari %= 30
const hari = Math.floor(jumlahHari / 1)
console.log(tahun,bulan,hari)