
document.querySelector('#a-supprimer').remove();

let header = document.createElement('header');
// header.style.backgroundColor = '#e3b04b';
header.style.background = 'linear-gradient(to right, #f1d6ab, #e3b04b)';
header.style.padding = '30px';
header.style.textAlign = 'center';
let h1 = document.createElement('h1');
h1.textContent = 'Welcome';

let litleHeader = document.createElement('div');
litleHeader.style.background = 'linear-gradient(to left, #f1d6ab, #e3b04b)';
litleHeader.textContent = ' Acceuil / Une autre page';
litleHeader.style.color = 'blue';
litleHeader.style.padding = '10px';

let p = document.createElement('p');
p.textContent = 'This is a paragraph create using Javascript ';

/** Adding elements to the dom */
header.append(h1);

document.body.append(header,litleHeader,p);



