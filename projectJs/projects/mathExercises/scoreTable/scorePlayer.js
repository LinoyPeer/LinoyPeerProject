
document.addEventListener('DOMContentLoaded', () => {
    let dataLocalOfPlayer = JSON.parse(localStorage.getItem('dataOfPlayer')) || [];
    let tableBody = document.getElementById('scoreTableBody');

    if (dataLocalOfPlayer.length > 10) {
        dataLocalOfPlayer = dataLocalOfPlayer.slice(0, 10);
    }

    dataLocalOfPlayer.forEach(player => {
        let row = document.createElement('tr');

        let nameCell = document.createElement('td');
        nameCell.textContent = player.name;
        row.appendChild(nameCell);

        let dateCell = document.createElement('td');
        dateCell.textContent = player.timeOfGame;
        row.appendChild(dateCell);

        let scoreCell = document.createElement('td');
        scoreCell.textContent = player.score;
        row.appendChild(scoreCell);


        tableBody.appendChild(row);
    });

});
