const emojis = ['😍', '😍', '😁', '😁', '😊', '😊', '😂', '😂', '😎', '😎', '😉', '😉', '😆', '😆', '😅', '😅'];
let sortTheEmojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = sortTheEmojis[i];
    box.onclick = function () {
        this.classList.add('boxOpen');

        setTimeout(function () {
            const openBoxes = document.querySelectorAll('.boxOpen');
            if (openBoxes.length > 1) {
                if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
                    openBoxes[0].classList.add('boxMatch');
                    openBoxes[1].classList.add('boxMatch');
                }
                openBoxes[0].classList.remove('boxOpen');
                openBoxes[1].classList.remove('boxOpen');

                if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                    alert('Great Job!');
                }
            }
        }, 1000);
    }
    document.querySelector('.game').appendChild(box);
}
