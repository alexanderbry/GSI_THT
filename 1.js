const dictionary = require("./dictionary.js");

function textToNumber(text) {
  let result = "";

  for (let char of text) {
    for (const [characters, value] of dictionary) {
      if (characters.includes(char)) {
        result += value;
        found = true;
        break;
      }
    }
  }

  return result;
}

module.exports = textToNumber;
