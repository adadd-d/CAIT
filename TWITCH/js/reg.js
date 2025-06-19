document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "coldex" && password === "123456") {
        window.location.href = "3.html"; 
    } else {
        alert("Неправильное имя пользователя или пароль");
    }
});