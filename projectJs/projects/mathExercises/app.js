const startGame = document.querySelector('.continerStartOfExercise');
const endGame = document.querySelector('.continerEndOfExercise');
const forme = document.querySelector('.forme');

endGame.style.display = 'none';

document.addEventListener("DOMContentLoaded", () => {
    forme.style.display = 'none';
    startGame.style.display = 'block';
});

const countdown = document.getElementById('countdown');
const counter = document.createElement('div');
let counterValue = 60;
counter.innerText = counterValue;
countdown.appendChild(counter);
countdown.style.display = 'block';

let check = false;
let scorePlayer = 0;

const num1 = document.querySelector('#num1');
num1.value = Math.floor((Math.random() * 100) + 1);
const num2 = document.querySelector('#num2');
num2.value = Math.floor((Math.random() * 100) + 1);
let result = document.getElementById('result');

const btn1 = document.getElementById('btn1').addEventListener('click', () => {
    let sum;
    sum = Number(num1.value) + Number(num2.value);
    let block = document.querySelector('#block');
    if (Number(result.value) === sum) {
        check = true;
        let answer = document.getElementById('answer');
        answer.innerText = 'Good! You can continue to the next one :)';
        scorePlayer++;
        block.disabled = false;

    } else {
        check = false;
        answer.innerText = 'Wrong Answer :( You cannot skip the next question until you will succeed!';
        block.disabled = true;
    }
});

function btn2() {
    num1.value = Math.floor((Math.random() * 100) + 1);
    num2.value = Math.floor((Math.random() * 100) + 1);
    result.value = "";
    answer.innerText = "";
}
btn2();

const startGameBtn = document.querySelector('.startGameBtn');

startGameBtn.addEventListener('click', () => {
    let playerName = document.getElementById('playerName').value;

    if (playerName === "") {
        alert("Please Enter Name");
        return;
    } else {
        forme.style.display = 'block';
        startGame.style.display = 'none';
    }

    let startTime = new Date();
    let timeGame = startTime.toLocaleString();

    let dataPlayer = JSON.parse(localStorage.getItem('dataOfPlayer')) || [];

    const obj = {
        name: playerName,
        timeOfGame: timeGame,
        score: scorePlayer,
    };

    const timer = setInterval(() => {
        counterValue--;
        if (counterValue < 11) {
            counter.classList.add('blink-red');
        }
        if (counterValue > 0) {
            counter.innerText = counterValue;
        } else {
            clearInterval(timer);
            endGame.style.display = 'block';
            forme.style.display = 'none';

            obj.score = scorePlayer;
            dataPlayer.push(obj);
            localStorage.setItem('dataOfPlayer', JSON.stringify(dataPlayer));
        }
    }, 1000);
});

