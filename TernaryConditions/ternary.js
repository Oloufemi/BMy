function manageUserResponse(text) {
    
    let result = prompt(text);
    while(!result) {
        alert('Veuillez s\'il vous plaît saisir un nombre ');
        result = prompt(text);
    }
    return result;
}

let value = parseFloat(manageUserResponse('Donnez un nombre'));

let display = value > 1 || value < 0 ? 'ceci n\'est pas un nombre binaire' : 'ceci est un nombre binaire';

alert(display);