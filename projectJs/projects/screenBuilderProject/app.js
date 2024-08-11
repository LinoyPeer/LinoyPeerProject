// משיכת נתוני HTML
let colorInput = document.getElementById("colorInput");
let colorInput1 = document.getElementById("colorInput1");
let write = document.getElementById("write");
let heightMode = document.getElementById("heightMode");
let widthMode = document.getElementById("widthMode");
let selectBorder = document.querySelector(".selectBorder");
let borderColors = document.querySelector("#borderColors");
let borderOfWidth = document.querySelector("#borderOfWidth");
let newDiv;  // משתנה גלובלי לשמירת הדיב החדש

function addDiv() {
    // יצירת הדיב שהגדרנו בנתונים
    newDiv = document.createElement("div");
    // הגדרת צבע רקע של הדיב 
    newDiv.style.backgroundColor = colorInput.value;
    // הגדרת תוכן הדיב
    newDiv.innerText = write.value;
    // הגדרת צבע טקסט
    newDiv.style.color = colorInput1.value;
    // עיצוב מיקומים בדיב
    newDiv.style.display = "flex";
    newDiv.style.alignItems = "center";
    newDiv.style.justifyContent = "center";
    newDiv.style.textAlign = "center";
    newDiv.style.margin = "10px";

    // הוספת עיגול פינות
    let borderRaduischeck = document.getElementById('borderRaduis');
    borderRaduischeck.checked ? newDiv.style.borderRadius = "10px" : newDiv.style.borderRadius = "0px";

    // הגדרת border
    switch (selectBorder.value) {
        case 'solid':
            newDiv.style.borderStyle = "solid";
            break;
        case 'dotted':
            newDiv.style.borderStyle = "dotted";
            break;
        case 'dashed':
            newDiv.style.borderStyle = "dashed";
            break;
    }
    newDiv.style.borderColor = borderColors.value;

    // הוספת אורך ורוחב המסגרת
    borderOfWidth.value != "" ? newDiv.style.borderWidth = borderOfWidth.value + 'px' : newDiv.style.borderWidth = '3px';

    // הוספת אורך ורוחב
    heightMode.value == "" ? newDiv.style.height = '90px' : newDiv.style.height = heightMode.value + 'px';
    heightMode.value == "" ? newDiv.style.width = '90px' : newDiv.style.width = widthMode.value + 'px';
    // הוספת הדיב לחלק הלבן
    let destinationDiv = document.getElementById("emptySpace");
    destinationDiv.appendChild(newDiv);
    colorInput.value = "#000000";
    colorInput1.value = "#000000";
    write.value = "";
    heightMode.value = "";
    widthMode.value = "";
    borderColors.value = "#000000";
    selectBorder.value = "";
    borderOfWidth.value = "";
}

// הגדרת כפתור איפוס
document.getElementById("resetBtn").addEventListener("click", () => {
    // חזרה למצב הדיפולטיבי
    colorInput.value = "#000000";
    colorInput1.value = "#000000";
    write.value = "";
    heightMode.value = "";
    widthMode.value = "";
    let destinationDiv = document.getElementById("emptySpace");
    destinationDiv.innerHTML = "";
    borderOfWidth.value = "";
});

// הגדרת כפתור הוסף
let myButton = document.querySelector("#addBtn");
// בלחיצה עליו יווצר הדיב בחלק הריק
myButton.addEventListener("click", addDiv);

function uploadImage() {
    const fileInput = document.querySelector('#fileInput');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.display = 'block';
            img.style.width = "30px";
            img.style.height = "30px";
            newDiv.appendChild(img);
        };
        reader.readAsDataURL(file);
    } else {
        alert('אנא בחר תמונה קודם');
    }
}

document.querySelector('.pictureBtn').addEventListener('click', () => {
    uploadImage();
});
