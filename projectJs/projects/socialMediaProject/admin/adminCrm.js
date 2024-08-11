let DatasocialMediaUsers = JSON.parse(localStorage.getItem("socialMediaUsers")) || [];
let dataForTable = "";
DatasocialMediaUsers.forEach((user, index) => {
    dataForTable += `
        <tr>
        <td>${user.fullName}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.lastLogged}</td>
        <td>${user.isAdmin}</td>
        <td>
            <button id="btnClear" onclick="deleteUser(${index})">DELETE</button>
        </td>
        </tr> `;
});
let tableBody = document.getElementById("tableDataBody");
tableBody.innerHTML = dataForTable;
function deleteUser(index) {
    if (confirm("Are you sure you want to delete this user?")) {
        DatasocialMediaUsers.splice(index, 1);
        localStorage.setItem("socialMediaUsers", JSON.stringify(DatasocialMediaUsers));
        location.reload();
    }
}