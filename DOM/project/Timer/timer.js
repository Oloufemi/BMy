
let button = document.querySelector('button');
button.style.background = 'linear-gradient(grey,yellow)';
button.style.padding = '5px';

let second = 10;
let interval;

function start () {
    interval = setInterval(CountDown, 1000);
}
function stop() {
    document.body.append('Stop !');
    clearInterval(interval);
}

function CountDown() {
    if(second > 0) {
        second--;
        let p = document.createElement('p');
        p.textContent = second;
        document.body.append(p);
    } else {
        stop();
    }    
}

button.addEventListener('mouseover', () => {
    button.style.cursor = 'pointer';
})
button.addEventListener('click',start);

/** SPOILER */
let btnSpoiler = document.querySelector('button.spoiler');
let hidden = true;
let p = document.createElement('p');

function showOrHide() {
    if (hidden) {
        btnSpoiler.textContent = 'Hide';
        p.textContent = 'The hidden message ! ';
        document.body.append(p);
    } else {
        btnSpoiler.textContent = 'Show';
        document.querySelector('p').remove();
    }
    hidden = !hidden;
}

btnSpoiler.addEventListener('click',showOrHide);