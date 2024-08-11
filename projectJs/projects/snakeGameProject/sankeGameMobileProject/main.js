import { Game } from "./classes/game.js";

const canvas = document.getElementById("app");
const directionsDiv = document.querySelector('.containerForArrowDirections');
const countdown = document.getElementById('countdown');
const counter = document.createElement('div');

canvas.style.opacity = '0.4';
directionsDiv.style.opacity = '0.4';

let counterValue = 3;
counter.style.fontSize = '40vw';
counter.innerText = counterValue;
countdown.appendChild(counter);

const timer = setInterval(() => {
    counterValue--;
    if (counterValue > 0) {
        counter.innerText = counterValue;
    } else {
        clearInterval(timer);
        counter.innerText = 'GO!';
        setTimeout(() => {
            countdown.style.display = 'none';
            directionsDiv.style.opacity = '1';
            canvas.style.opacity = '1';
            startGame();
        }, 1000);
    }
}, 1000);

function startGame() {
    canvas.width = 300;
    canvas.height = 300;
    canvas.style.opacity = '1';

    const game = new Game(canvas, 20);
    game.start();

    let up = document.querySelector('.up');
    let down = document.querySelector('.down');
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');

    up.addEventListener('click', () => {
        game.handleInput("ArrowUp");
    });
    down.addEventListener('click', () => {
        game.handleInput("ArrowDown");
    });
    left.addEventListener('click', () => {
        game.handleInput("ArrowLeft");
    });
    right.addEventListener('click', () => {
        game.handleInput("ArrowRight");
    });
}
