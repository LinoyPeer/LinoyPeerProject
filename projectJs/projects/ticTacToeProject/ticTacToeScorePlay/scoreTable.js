
document.addEventListener('DOMContentLoaded', () => {
    let dataLocal1 = JSON.parse(localStorage.getItem('dataOfOnePlayer')) || [];
    let dataLocal2 = JSON.parse(localStorage.getItem('dataOfTwoPlayers')) || [];
    let tableBody = document.getElementById('scoreTableBody');

    if (dataLocal1.length + dataLocal2.length > 10) {
        dataLocal1 = dataLocal1.slice(0, 5);
        dataLocal2 = dataLocal2.slice(0, 5);
    }

    dataLocal1.forEach(game => {
        let row = document.createElement('tr');

        let dateCell = document.createElement('td');
        dateCell.textContent = game.DateTime;
        row.appendChild(dateCell);

        let timeCell = document.createElement('td');
        timeCell.textContent = game.Time;
        row.appendChild(timeCell);

        let gameTimeCell = document.createElement('td');
        gameTimeCell.textContent = game.GameTime;
        row.appendChild(gameTimeCell);

        let winnerCell = document.createElement('td');
        winnerCell.textContent = game.TheWinner;
        row.appendChild(winnerCell);

        let typeCell = document.createElement('td');
        typeCell.textContent = game.type;
        row.appendChild(typeCell);

        tableBody.appendChild(row);
    });
    dataLocal2.forEach(game => {
        let row = document.createElement('tr');

        let dateCell = document.createElement('td');
        dateCell.textContent = game.DateTime;
        row.appendChild(dateCell);

        let timeCell = document.createElement('td');
        timeCell.textContent = game.Time;
        row.appendChild(timeCell);

        let gameTimeCell = document.createElement('td');
        gameTimeCell.textContent = game.GameTime;
        row.appendChild(gameTimeCell);

        let winnerCell = document.createElement('td');
        winnerCell.textContent = game.TheWinner;
        row.appendChild(winnerCell);

        let typeCell = document.createElement('td');
        typeCell.textContent = game.type;
        row.appendChild(typeCell);


        tableBody.appendChild(row);
    });

});
