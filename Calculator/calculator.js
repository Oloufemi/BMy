

function chooseRightMode() {
    let modeChoiceText = 'What operation do you want to accomplish ? \n\n 1 - Addition\n 2 - Soustraction\n 3 - Multiplication\n' 
                        + ' 4 - Division';
    let mode;
    do {
        mode = Number(prompt(modeChoiceText));
        
    } while (isNaN(mode) || mode < 1 || mode > 4);
    return mode;
}

const choice = chooseRightMode();
alert(' Mode ' + choice);