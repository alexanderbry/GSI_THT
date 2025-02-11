const textToNumber = require("./1");
const calculate = require("./2");
const numberToText = require("./3");

function textToTextWithCalculation(text) {
  const convertedText = textToNumber(text);
  let totalSum = 0;

  for (const i of convertedText) {
    const num = parseInt(i);
    totalSum += num;
  }

  const convertedNumber = numberToText(totalSum);

  return convertedNumber;
}

module.exports = textToTextWithCalculation;
