// Loop for ... of
// let players = ['Kobe', 'Lebron','Jordan',4];

// for (const player of players) {
//     console.log(player);
// }

// function to show associatif table 
function showAssociatifTable(myTable) {
    let result = '';
    for (const prop in myTable) {
        result += prop + ': ' + myTable[prop] + '\n';
    }
    console.log(result);
}

let table = {
    'firstname': 'Rui',
    'lastname': 'Hachimura',
    'position': 'Small forward',
}
showAssociatifTable(table);