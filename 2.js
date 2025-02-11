function calculate(input) {
    let result = parseInt(input[0]);
    
    for (let i = 1; i < input.length; i++) {
        const num = parseInt(input[i]);
        
        if (i % 2 === 1) {
            result += num;
        } else {
            result -= num;
        }
    }
    
    return result;
}

module.exports = calculate;