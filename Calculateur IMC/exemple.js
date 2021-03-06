function calculateIMC(weight, height) {
    return weight / (Math.pow(height,2));
}

function manageUserResponse(text, measureUnit) {
    
    let result = prompt(text);
    while(!result) {
        alert('Veuillez s\'il vous plaît saisir une valeur en ' + measureUnit);
        result = prompt(text);
    }
    return result;
}

function convertHeight(height) {
    if(height.search(/[.]/g) === -1) {
        console.log('yes !!');
        height = Number(height) / 100 ;
        return height;
     }
     return Number(height);
}

function interpretIMC(imc) {
    if(imc < 18.5) {
        return 'Vous êtes en insuffisance pondérale (maigreur).';  
    }
    if(imc >= 18.5 && imc < 25) {
        return 'Vous avez une corpulence normale.';
    }
    if(imc >= 25 && imc < 30) {
        return 'Vous êtes en surpoids.';
    }
    if(imc >= 30 && imc < 35) {
        return 'Vous êtes en obésité modérée.';
    }
    if(imc >= 35 && imc < 40) {
        return 'Vous êtes en obésité sévère.';
    }
    return 'Vous êtes en obésité massive';
}
let weight = Number(manageUserResponse('Quel est votre poids ?', 'Kg'));
let height = convertHeight(manageUserResponse('Quel est votre taille ?', 'mètre ou centimètre'));

let displayText = calculateIMC(weight, height).toFixed(2); // toFixed est une méthode de Number qui permet de limiter le nombre de chiffre après la virgule
let category = interpretIMC(displayText);

alert('Votre IMC est de ' + displayText + '; ' + category);
