const textToNumber = require('./1');
const calculate = require('./2');
const numberToText = require('./3');

const text = "Titanic";
const text2 = "Avenger Endgame";

const NumberOne = textToNumber(text);
const NumberOne2 = textToNumber(text2);

const NumberTwo = calculate(NumberOne);
const NumberTwo2 = calculate(NumberOne2);

const NumberThree = numberToText(NumberTwo);
const NumberThree2 = numberToText(NumberTwo2);


console.log(NumberOne);
console.log(NumberOne2);

console.log(NumberTwo);
console.log(NumberTwo2);

console.log(NumberThree);
console.log(NumberThree2);