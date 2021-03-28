
let img = document.querySelector('img');
// img.onmouseover = () => {
//     document.body.style.background = 'linear-gradient(to right, #f1d6ab, #e3b04b)';
// }

// img.onmouseout = () => {
    //     document.body.style.background = 'white';
    // }


/** Using EventListener */
    
img.addEventListener('mouseover', () => {
    document.body.style.background = 'linear-gradient(to right, #f1d6ab, #e3b04b)';
});
img.addEventListener('mouseout', () => {
    document.body.style.background = 'white';
});
