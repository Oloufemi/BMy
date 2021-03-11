
function manageUserResponse(text='') {
    let modeChoiceText = 'What operation do you want to accomplish ? \n\n 1 - Addition\n 2 - Soustraction\n 3 - Multiplication\n' 
                        + ' 4 - Division';
    let result;
    
    if (text) {
    result = Number(prompt(text));
    while(isNaN(result)) {
        alert('Veuillez s\'il vous plaît saisir un nombre ');
        result = Number(prompt(text));
        }
    } else {
        do {
            result = Number(prompt(modeChoiceText));
            
        } while (isNaN(result) || result < 1 || result > 4);
    }
    
    return result;
}

function calculator(mode, firstNumber, secondNumber) {
    let result;
    try {
        switch (mode) {
            case 1:
                result = firstNumber + secondNumber;
                break;
            case 2:
                result = firstNumber * secondNumber;                
                break;
            case 3:
                result = firstNumber - secondNumber;                
                break;
            case 4:
                if(secondNumber === 0) {
                    throw new Error('Vous ne pouvez pas diviser par 0');
                } 
                result = firstNumber / secondNumber;                
                break;
            default:
                result = 0;
                break;
        }
    }
    catch(e) {
        alert(e.message);
        result = e.message;
    }
    return result;
}

// Entering in this function you are in a calculator mode which let you do multiple operations

function calculatorMode() {
const choice = manageUserResponse();
const firstNumber = manageUserResponse('Veuillez s\'il vous plaît saisir le premier nombre');
const secondNumber = manageUserResponse('Veuillez s\'il vous plaît saisir le deuxième nombre');
let result = calculator(choice, firstNumber, secondNumber);
if(!isNaN(result)) {
    alert('Le résultat de votre opération: ' + result);
}else {
    alert(result);
}

}
