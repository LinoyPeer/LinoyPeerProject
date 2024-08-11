
// כפתור ניווט למשחק עם שחקן אחד
onePlayerButton = document.querySelector('#onePlayerButton').addEventListener('click', () => {
    window.open('./ticTacToeOnePlayer/onePlayer.html');
})

// כפתור ניווט למשחק עם שני שחקנים
twoPlayersButton = document.getElementById('twoPlayersButton').addEventListener('click', () => {
    window.open('./ticTacToeTwoPlayers/twoPlayers.html');
});

// כפתור ניווט לנתוני המחשקים
scoreTableButton = document.getElementById('scoreTableButton').addEventListener('click', () => {
    window.open('./ticTacToeScorePlay/scoreTable.html');
});






