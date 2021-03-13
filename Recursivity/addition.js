let result = 0;

function addition(value) {
    if(value <= 0) {
        console.log(value);
        return 0;
    }
    console.log(value);
    return value + addition(value - 1);
}

alert(addition(5));