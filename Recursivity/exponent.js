/**
 * Compute the exponent of a number 
 * @param {number} value : the number which has the exponent
 * @param {number} exponentValue : the exponent value
 */
function exponent(value, exponentValue) {
    
    if( exponentValue > 0) {
        return value * exponent(value, exponentValue - 1);
    }
    return 1;
}

console.log(exponent(2,4));