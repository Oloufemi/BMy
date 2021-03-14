
function factorial(value) {
    if (value > 0 ) {
        console.log(value);
        return value * factorial(value - 1);
    } else {
        return 1;
    }
}

alert(factorial(5));