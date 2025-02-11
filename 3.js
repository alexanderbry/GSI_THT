const dictionary = require("./dictionary.js");

function numberToText(number) {
  number = Math.abs(number);
  
  let sum = 0;
  let sequence = [];
  let i = 0;

  while (sum < number) {
    let digit = i % 10;
    sequence.push(digit);
    sum += digit;
    i++;
  }

  let result = sequence.map(i => dictionary[i][0][0]).join("");

  return result
}

module.exports = numberToText;
