
let player = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let startTime = new Date();


function makeMove(cellIndex, cell) {
    if (board[cellIndex] === "") {
        board[cellIndex] = player;
        cell.innerText = player;
        checkAndHandleWinner();
        player = player === "X" ? "O" : "X";
    }
}

function checkWinner() {

    //winner
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
    //draw
    if (!board.includes("")) {
        return -1;
    }
    //no winner yet
    return 0;
}

function checkAndHandleWinner() {
    let result = checkWinner();
    if (result === 1) {
        alert("The winner is: " + player);
        console.log("The winner is: " + player);
        dataStorage(player);
        return true;
    }
    else if (result == -1) {
        alert("It's a draw!")
        console.log("DRAW");
        return true;
    }
    return false;
}

let endTime = new Date();
let timeElapsedSeconds = Math.floor((endTime - startTime) / 1000);
let minutes = Math.floor((timeElapsedSeconds) / 60);
let seconds = timeElapsedSeconds % 60;
console.log("The Game's Date: " + startTime.toLocaleDateString());
console.log("The Game's Hour: " + startTime.toLocaleTimeString());
console.log(`The game lasted ${minutes}:${seconds < 10 ? '0' : ''}${seconds} Minutes`);
let fullTime = `${minutes}:${seconds < 10 ? '0' : ''
    }${seconds}`;
let objectData = { GameTime: fullTime };

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
    let typeOfGame = "2 Player";
    let objectData = {
        GameTime: fullTime,
        TheWinner: winner,
        DateTime: startTimeOnDate,
        Time: startTimeOnTime,
        type: typeOfGame,
    };

    let dataLocalOfTwoPlayers = JSON.parse(localStorage.getItem('dataOfTwoPlayers')) || [];
    dataLocalOfTwoPlayers.push(objectData);
    localStorage.setItem('dataOfTwoPlayers', JSON.stringify(dataLocalOfTwoPlayers));

    window.location.href = '../ticTacToeScorePlay/scoreTable.html';
}



// הוספת המאזינים לפונקציות בתוך המטען
window.onload = function () {
    document.querySelectorAll(".cell").forEach((cell, index) => {
        cell.addEventListener("click", () => {
            makeMove(index, cell);
        });
    });

    document.querySelector('.restart-button').addEventListener('click', () => {
        location.reload();
    });
};

let returnButton = document.querySelector('returnMenuArrow');
function returnMenu() {
    window.open('../index.html');
}
