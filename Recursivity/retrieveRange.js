let result = [];

function range(firstValue, secondValue) {
    console.log(result)
    if (firstValue >= secondValue) {
        return result;
    } else {
        result.push(firstValue++);
        range(firstValue++, secondValue);
    }
}

console.log(range(3,6).join('/'));