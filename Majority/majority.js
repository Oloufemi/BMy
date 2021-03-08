function majority(age) {
    if (age < 18) {
        return 'Vous êtes mineur !';
    }
    else if (age <= 20 && age >= 18) {
        return 'Vous êtes majeur en France !';
    }
    else {
        return 'Vous êtes majeur partout, a vous les casinos !';
    }
}

// For this kind of exercise, switch is not interesting. This is just for testing
function majorityWithSwitch(age) {
    let message; 
    switch (age) {
        case 17:
            message = 'Vous êtes mineur !';
            break;
        case 18:
        case 19:
        case 20:
            message = 'Vous êtes majeur en France !';
            break;
        
        default:
                message = 'Vous êtes majeur partout, a vous les casinos !';
    }
    return message;
}
function manageUserResponse(text) {
    
    let result = prompt(text);
    while(!result) {
        alert('Veuillez s\'il vous plaît saisir votre age ');
        result = prompt(text);
    }
    return result;
}

let age = parseFloat(manageUserResponse('Quel est votre age ?'));

alert('' + majorityWithSwitch(age));