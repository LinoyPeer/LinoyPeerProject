document.getElementById("loginButton").addEventListener("click", () => {
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;
    let users = JSON.parse(localStorage.getItem("socialMediaUsers")) || [];
    let userThatTryToLogin = users.find(
        (user) => user.username === username && user.password === password
    );
    if (userThatTryToLogin) {
        if (userThatTryToLogin.isAdmin) {
            location.href = "../admin.adminCrm.html";
        } else {
            location.href = "../index.html";
        }
    } else {
        alert("Password or username wrong");
    }

});

function logout() {
    window.open("../register/register.html");
}

const loading = document.querySelector('.loginWaiter');
setTimeout(function () {
    loading.style.display = 'none';
}, 1700);
const loginContainer = document.querySelector('.login-container');
loginContainer.style.display = 'none';
setTimeout(function () {
    loginContainer.style.display = 'block';
}, 2000);