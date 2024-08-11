import { Game } from "./classes/game.js";

let counterValue = 3;
const countdown = document.getElementById('countdown');
const counter = document.createElement('div');
counter.style.fontSize = '40vw';
counter.innerText = counterValue;
countdown.appendChild(counter);
const canvas = document.getElementById("app");
canvas.style.display = 'none';

const timer = setInterval(() => {
    counterValue--;
    if (counterValue > 0) {
        counter.innerText = counterValue;
    } else {
        clearInterval(timer);
        counter.innerText = 'GO!';
        setTimeout(() => {
            countdown.remove();
        }, 1000);
    }
}, 1000);

setTimeout(() => {
    const canvas = document.getElementById("app");
    canvas.style.display = 'block';
    canvas.width = 400;
    canvas.height = 400;

    const game = new Game(canvas, 20);

    document.addEventListener("keydown", (event) => {
        game.handleInput(event.key);
    });

    game.start();

}, 4000);