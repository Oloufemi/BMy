let sum = 0;
function arraySum(input) {
    if (input.length > 0) {
        sum += input[input.length - 1];
        input.pop();
        arraySum(input);
    } else {
        return;
    }
}

arraySum([5,10,5]);
console.log(sum);