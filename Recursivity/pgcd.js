
/**
 * Determinate the greatest common divisor of two numbers
 * @param {*} firstValue : the first value. It must be superior to the second one
 * @param {*} secondValue : the second value
 */
let result;
function calculateGCD(firstValue, secondValue) {

    if( firstValue % secondValue !== 0) {
        result = firstValue % secondValue;
        calculateGCD(secondValue, result);
    }    
    return result;
}

console.log(calculateGCD(60, 36));