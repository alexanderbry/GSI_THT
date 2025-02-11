const textToNumber = require('./1');
const calculate = require('./2');
const numberToText = require('./3');
const textToTextWithCalculation = require('./4');

const text = "Titanic";
const text2 = "Avenger Endgame";

const NumberOne = textToNumber(text);
const NumberOne2 = textToNumber(text2);

const NumberTwo = calculate(NumberOne);
const NumberTwo2 = calculate(NumberOne2);

const NumberThree = numberToText(NumberTwo);
const NumberThree2 = numberToText(NumberTwo2);

const NumberFour = textToTextWithCalculation(text);
const NumberFour2 = textToTextWithCalculation(text2);

console.log("Konversi Nomor 1:");
console.log("------------------");
console.log("Hasil 1 : ", NumberOne);
console.log("Hasil 2 : ", NumberOne2);

console.log("\nKonversi Nomor 2:");
console.log("------------------");
console.log("Hasil 1 : ", NumberTwo);
console.log("Hasil 2 : ", NumberTwo2);

console.log("\nKonversi Nomor 3:");
console.log("------------------");
console.log("Hasil 1 : ", NumberThree);
console.log("Hasil 2 : ", NumberThree2);

console.log("\nKonversi Nomor 4:");
console.log("------------------");
console.log("Hasil 1 : ", NumberFour);
console.log("Hasil 2 : ", NumberFour2);