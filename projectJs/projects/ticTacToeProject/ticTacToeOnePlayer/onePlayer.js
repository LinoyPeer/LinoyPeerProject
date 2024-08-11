const selectbox = document.querySelector('.select-box'),
    selectBtnX = document.querySelector('.playerX'),
    selectBtnO = document.querySelector('.playerO'),
    playBoard = document.querySelector('.play-board'),
    players = document.querySelector('.players'),
    allbox = document.querySelectorAll('.cell'),
    result = document.querySelector(".result-box"),
    wonText = document.querySelector(".won-text"),
    playErea = document.querySelector(".play-erea");
let player = "X";
let startTime = new Date();

document.querySelector('.play-erea').style.display = "none";
playBoard.style.display = "none";
selectBtnX.addEventListener('click', () => {
    document.querySelector('.play-erea').style.display = "grid";
    selectbox.style.display = "none";
    playBoard.style.display = "flex";
    document.querySelector('.Xturn').style.display = 'block';
    document.querySelector('.Oturn').style.display = 'none';
    player = "X";
});
selectBtnO.addEventListener('click', () => {
    document.querySelector('.play-erea').style.display = "grid";
    selectbox.style.display = "none";
    playBoard.style.display = "flex";
    document.querySelector('.Xturn').style.display = 'none';
    document.querySelector('.Oturn').style.display = 'block';
    player = "O";
});
let board = ["", "", "", "", "", "", "", "", ""];

function makeMove(cell, index) {
    if (board[cell] === "") {
        board[cell] = player;
        index.innerText = player;
        let winner = checkAndHandleWinner(player);
        if (winner) return;
        player === "X" ? "O" : "X";
        if (player === "X") {
            document.querySelector('.Xturn').style.display = 'none';
            document.querySelector('.Oturn').style.display = 'block';
        } else {
            document.querySelector('.Xturn').style.display = 'block';
            document.querySelector('.Oturn').style.display = 'none';
        }
    }
    setTimeout(computerTurn, 2000);
}

window.onload = function () {
    allbox.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            makeMove(index, cell);
        });
    });
}

function computerTurn() {
    let computerPosition = checkIfComputerCanBlockTheRival();
    if (computerPosition === null) {
        do {
            computerPosition = Math.floor(Math.random() * 9);
        } while (board[computerPosition] !== "");
    }
    for (let i = 0; i < board.length; i++) {
        if (board[computerPosition] === "") {
            if (player === 'X') {
                board[computerPosition] = 'O';
                allbox[computerPosition].innerText = 'O';
                let winner = checkAndHandleWinner('O');
                if (winner) return;
                player = "X";
                document.querySelector('.Xturn').style.display = 'block';
                document.querySelector('.Oturn').style.display = 'none';
            } else if (player === "O") {
                board[computerPosition] = 'X';
                allbox[computerPosition].innerText = 'X';
                let winner = checkAndHandleWinner('X');
                if (winner) return;
                player = "O";
                document.querySelector('.Xturn').style.display = 'none';
                document.querySelector('.Oturn').style.display = 'block';
            }
            console.log(computerPosition);
            return;

        }
    }
}

function checkIfComputerCanBlockTheRival() {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            board[i] = player === 'X' ? 'O' : 'X';
            if (checkWinner() === 1) {
                board[i] = "";
                return i;
            }
            board[i] = "";
        }
    }
    return null;
}


function checkWinner() {
    if ((board[0] === board[1] && board[1] === board[2]) && board[0] != "" ||
        (board[3] === board[4] && board[4] === board[5]) && board[3] != "" ||
        (board[6] === board[7] && board[7] === board[8]) && board[6] != "" ||
        (board[0] === board[3] && board[3] === board[6]) && board[0] != "" ||
        (board[1] === board[4] && board[4] === board[7]) && board[1] != "" ||
        (board[2] === board[5] && board[5] === board[8]) && board[2] != "" ||
        (board[0] === board[4] && board[4] === board[8]) && board[0] != "" ||
        (board[2] === board[4] && board[4] === board[6]) && board[2] != "") {
        return 1;
    }
    if (!board.includes("")) {
        return -1;
    }
    return 0;
}

function checkAndHandleWinner(currentPlayer) {
    let result = checkWinner();
    if (result === 1) {
        alert("The winner is: " + currentPlayer);
        console.log("The winner is: " + currentPlayer);
        dataStorage(currentPlayer);
        return true;
    } else if (result == -1) {
        alert("It's a draw!");
        dataStorage("DRAW");
        return true;
    }
    return false;
}

function dataStorage(winner) {
    let endTime = new Date();
    let timeElapsedSeconds = Math.floor((endTime - startTime) / 1000);
    let minutes = Math.floor((timeElapsedSeconds) / 60);
    let seconds = timeElapsedSeconds % 60;
    let startTimeOnDate = startTime.toLocaleDateString()
    console.log("The Game's Date: " + startTimeOnDate);
    let startTimeOnTime = startTime.toLocaleTimeString();
    console.log("The Game's Hour: " + startTimeOnTime);
    console.log(`The game lasted ${minutes}:${seconds < 10 ? '0' : ''}${seconds} Minutes`);
    let fullTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    let typeOfGame = "1 Player";
    let objectData = {
        GameTime: fullTime,
        TheWinner: winner,
        DateTime: startTimeOnDate,
        Time: startTimeOnTime,
        type: typeOfGame,
    };

    let dataLocalOfOnePlayer = JSON.parse(localStorage.getItem('dataOfOnePlayer')) || [];
    dataLocalOfOnePlayer.push(objectData);
    localStorage.setItem('dataOfOnePlayer', JSON.stringify(dataLocalOfOnePlayer));

    window.location.href = '../ticTacToeScorePlay/scoreTable.html';
}
document.querySelector('.restart-button').addEventListener('click', () => {
    location.reload();
});


let returnButton = document.querySelector('returnMenuArrow');
function returnMenu() {
    window.open('../index.html');
}