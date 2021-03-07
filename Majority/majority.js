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

function manageUserResponse(text) {
    
    let result = prompt(text);
    while(!result) {
        alert('Veuillez s\'il vous plaît saisir votre age ');
        result = prompt(text);
    }
    return result;
}

let age = parseFloat(manageUserResponse('Quel est votre age ?'));

alert('' + majority(age));