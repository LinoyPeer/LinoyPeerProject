
const fileUpload = document.querySelector('#file-upload');
function uploadImage() {
    const file = fileUpload.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const displayImg = document.getElementById('display-image');
            displayImg.src = e.target.result;

            localStorage.setItem('savedImage', e.target.result);
        };
        reader.readAsDataURL(file);
    }
}
fileUpload.addEventListener('change', () => {
    uploadImage();
})

function logout() {
    window.open("../login/login.html");
}

function containsLetter(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 'A' && input[i] <= 'Z' || input[i] >= 'a' && input[i] <= 'z') {
            return true;
        }
    }
    return false;
}

function containsSymbol(input) {
    const symbolCharacters = "!@#$%^&*()_+=-[]{};':\"\\|,.<>/?";

    for (let i = 0; i < input.length; i++) {
        if (symbolCharacters.includes(input[i])) {
            return true;
        }
    }
    return false;

}

function validateFields(fullName, username, password) {
    if (fullName.length < 2) {
        alert("The user must be minimum 2 charactres");
        return false;
    }
    if (username.length < 2) {
        alert("The user must be minimum 2 charactres");
        return false;
    }

    let usersLocal = JSON.parse(localStorage.getItem('socialMediaUsers')) || [];
    let userWithSameUsername = usersLocal.find((user) => user.username == username);
    if (userWithSameUsername) {
        alert("This user name is already token");
        return false;
    }


    if (!containsSymbol(password) || !containsLetter(password) || (password.length < 8 && password.length > 20)) {
        alert("The password must be 8 to 20 chars and must have one letter and one symbol");
        return false;
    }
    return true;
}
function registerUser(fullName, username, password, email) {
    let newUser = {
        fullName: fullName,
        username: username,
        password: password,
        email: email,
        isAdmin: false,
        lastLogged: new Date(),
    };
    let usersLocal = JSON.parse(localStorage.getItem('socialMediaUsers'));
    if (usersLocal == null) {
        usersLocal = [];
    }
    usersLocal.push(newUser);
    localStorage.setItem('socialMediaUsers', JSON.stringify(usersLocal));
    window.location.href = '../login/login.html';
}

document.querySelector('#registerButton').addEventListener('click', () => {
    let fullName = document.getElementById("nameInput").value;
    let username = document.getElementById("userNameInput").value;
    let password = document.getElementById("passwordInput").value;
    let email = document.getElementById("emailInput").value;

    if (validateFields(fullName, username, password, email)) {
        registerUser(fullName, username, password, email);
    }
})