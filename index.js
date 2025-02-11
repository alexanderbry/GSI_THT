const textToNumber = require('./1');
const calculate = require('./2');
const numberToText = require('./3');
const textToTextWithCalculation = require('./4');
const finalConversion = require('./5');

// Ubah Value disini //
const text = process.argv[2]

// Function //
const NumberOne = textToNumber(text);

const NumberTwo = calculate(NumberOne);

const NumberThree = numberToText(NumberTwo);

const NumberFour = textToTextWithCalculation(NumberThree);

const NumberFive = finalConversion(NumberFour);

// Output //
console.log("Konversi Nomor 1:");
console.log("------------------");
console.log("Hasil : ", NumberOne);

console.log("\nKonversi Nomor 2:");
console.log("------------------");
console.log("Hasil : ", NumberTwo);

console.log("\nKonversi Nomor 3:");
console.log("------------------");
console.log("Hasil : ", NumberThree);

console.log("\nKonversi Nomor 4:");
console.log("------------------");
console.log("Hasil : ", NumberFour);

console.log("\nKonversi Nomor 5:");
console.log("------------------");
console.log("Hasil : ", NumberFive);