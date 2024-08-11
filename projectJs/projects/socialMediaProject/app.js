const closeBtn = document.querySelector('.closeBtn');
let nameOfUser = document.getElementById('nameOfUser');
nameOfUser.style.display = 'none'
closeBtn.style.display = 'none';
const publishedBtn = document.getElementById('publishedBtn');
publishedBtn.style.display = 'none';
const fileInputStatus = document.getElementById('fileInput1');
const fileInputImg = document.getElementById('fileInput2');
fileInputStatus.style.display = 'none';
fileInputImg.style.display = 'none';

const statusIcon = document.getElementById('uploudStatusIcon');
let statusApllied = document.getElementById('statusApllied');
let statusAplliedChild = document.createElement('p');
statusApllied.appendChild(statusAplliedChild);

fileInputStatus.addEventListener('change', (e) => {
    publishedBtn.addEventListener('click', () => {
        if (e.target.value != "") {
            closeBtn.style.display = 'none';
            fileInputStatus.style.display = 'none';
            publishedBtn.style.display = 'none';

            statusAplliedChild.textContent = fileInputStatus.value;
            localStorage.setItem('statusSaver', statusAplliedChild.textContent);
            fileInputStatus.value = "";
        }

    })
})

document.addEventListener('DOMContentLoaded', () => {
    const savedStatus = localStorage.getItem('statusSaver');
    if (savedStatus) {
        statusAplliedChild.textContent = savedStatus;
    }
});




const imgIcon = document.getElementById('uploudImgIcon');
statusIcon.addEventListener('click', () => {
    fileInputStatus.style.display = 'block';
    fileInputStatus.style.marginTop = '5rem'
    fileInputStatus.style.marginLeft = '5rem'
    closeBtn.style.display = 'block';
    publishedBtn.style.display = 'block';

});
closeBtn.addEventListener('click', () => {
    closeBtn.style.display = 'none';
    fileInputStatus.style.display = 'none';
    publishedBtn.style.display = 'none';

})
imgIcon.addEventListener('click', () => {
    fileInput2.click();
});
const displayImg = document.getElementById('displayImage');
function uploadImage() {
    displayImg.style.display = 'none';

    const file = fileInputImg.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            displayImg.style.display = 'block';
            displayImg.src = e.target.result;
            localStorage.setItem('imageUplouded', e.target.result);
        };
        reader.readAsDataURL(file);
    }
}
fileInputImg.addEventListener('change', () => {
    uploadImage();
})

document.addEventListener('DOMContentLoaded', function () {
    let imageUplouded = localStorage.getItem('imageUplouded') || [];
    if (imageUplouded) {
        const displayImg = document.getElementById('displayImage');
        displayImg.src = imageUplouded;
        displayImg.style.height = "25vh"
        displayImg.style.marginTop = "25vh"
    }
});



//יציאה לדף ההתחברות
function logout() {
    window.open("./login/login.html");
}

// גישה לAdmin CRM
function crmPageClicker() {
    window.open("adminCrm.html");
}
const imgOfUser = document.getElementById('imgOfUser');
document.addEventListener('DOMContentLoaded', function () {
    let savedImage = localStorage.getItem('savedImage') || [];
    if (savedImage) {
        imgOfUser.src = savedImage;
        imgOfUser.style.height = "25vh"
        imgOfUser.style.marginTop = "-10vvh"
    }
});

const mainContainer = document.querySelector('.mainContainer');

mainContainer.style.display = 'none';


const logoutButton = document.getElementById('logoutButton');
const loading = document.querySelector('.loginWaiter');

setTimeout(function () {
    loading.style.display = 'none';
    logoutButton.style.display = 'none';
}, 1800);

setTimeout(function () {
    imgOfUser.style.display = 'block';
    logoutButton.style.display = 'none';

}, 2000);

setTimeout(function () {
    nameOfUser.style.display = 'block';
    logoutButton.style.display = 'none';

}, 2200);

setTimeout(function () {
    mainContainer.style.display = 'block';
    logoutButton.style.display = 'block';

    logoutButton.style.marginRight = '14rem';

}, 2400);

// טעינת הדף מיד לאחר כניסה
window.onload = function () {
    loading.style.display = 'block';
    imgOfUser.style.display = 'none';
    nameOfUser.style.display = 'none';
    mainContainer.style.display = 'none';
};



let usersForIndex = JSON.parse(localStorage.getItem('socialMediaUsers')) || [];


function toCapitalTheFirstName(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
function toCapitalTheFullName(fullName) {
    return fullName.split(' ').map(word => toCapitalTheFirstName(word)).join(' ');
}



if (nameOfUser) {
    nameOfUser.innerHTML += toCapitalTheFullName(usersForIndex[0].fullName);
} else {
    nameOfUser.innerHTML += "User";
}