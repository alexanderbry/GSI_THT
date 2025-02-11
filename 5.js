const textToNumber = require("./1");

function finalConversion(input) {
    const convertedText = textToNumber(input);

    const arr = convertedText.split("").map(Number);

    const calculate = arr.map(num => Math.floor(num / 2) + 1);
    const resultNumbers = calculate.join("");

    return resultNumbers;
}

module.exports = finalConversion;