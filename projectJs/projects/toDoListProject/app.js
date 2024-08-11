const btn = document.getElementById('btn');
const clearBtn = document.getElementById('clearBtn');
let result = document.getElementById('result');

// פונקציה להכנסת נתונים חדשים
function inputResult() {
    let textInput = document.getElementById('textInput');
    const myObject = {
        text: textInput.value,
        isDone: false,
    };
    if (textInput.value.trim() !== "") {
        let getData = JSON.parse(localStorage.getItem('listData')) || [];
        getData.push(myObject);
        localStorage.setItem('listData', JSON.stringify(getData));
        loadResult();
    }
    textInput.value = "";
}


// פונקציה לטעינה ושחזור נתונים לאחר רענון
function loadResult() {
    let getData = JSON.parse(localStorage.getItem('listData')) || [];
    result.innerHTML = '';
    getData.forEach((item, index) => {
        const flexElement = document.createElement('div');
        flexElement.id = `item-${index}`;
        const checkIf = document.createElement('input');
        checkIf.type = 'checkbox';
        const textAside = document.createElement('span');

        flexElement.appendChild(checkIf);
        flexElement.appendChild(textAside);
        result.appendChild(flexElement);
        textAside.innerText = item.text;
        checkIf.checked = item.isDone;
        textAside.style.textDecoration = item.isDone ? 'line-through' : 'none';

        const trashIcon = document.createElement('i');
        trashIcon.className = "fa";
        trashIcon.innerHTML = "&#xf014";
        flexElement.appendChild(trashIcon);

        trashIcon.addEventListener('click', () => {
            const indexToDelete = getData.findIndex(deletedItem => deletedItem.text === item.text);
            if (indexToDelete !== -1) {
                getData.splice(indexToDelete, 1);
                // עדכון Local Storage
                localStorage.setItem('listData', JSON.stringify(getData));
                result.removeChild(document.getElementById(`item-${index}`));
            }
        });


        checkIf.addEventListener('change', () => {
            item.isDone = checkIf.checked;
            textAside.style.textDecoration = item.isDone ? 'line-through' : 'none';

            let updatedData = JSON.parse(localStorage.getItem('listData')) || [];
            updatedData = updatedData.map(newItems => newItems.text === item.text ? item : newItems);
            localStorage.setItem('listData', JSON.stringify(updatedData));
        });
    });
}

// פונקציה למחיקת נתונים
function earseBtn() {
    localStorage.removeItem('listData');
    result.innerHTML = '';
}

// קריאות לפונקציות
btn.addEventListener('click', inputResult);
clearBtn.addEventListener('click', earseBtn);
loadResult();
