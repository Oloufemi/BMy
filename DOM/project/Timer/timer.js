
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