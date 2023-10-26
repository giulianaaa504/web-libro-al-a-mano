document.addEventListener("DOMContentLoaded", function () {
    const registroBtn = document.getElementById("registroBtn");
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    registroBtn.addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const contrasena = document.getElementById("contrasena").value;
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("correo", correo);
        localStorage.setItem("contrasena", contrasena);
        window.location.href = "login.html";
    });

    loginBtn.addEventListener("click", function () {
        const correo = document.getElementById("correo").value;
        const contrasena = document.getElementById("contrasena").value;
        const storedCorreo = localStorage.getItem("correo");
        const storedContrasena = localStorage.getItem("contrasena");

        if (correo === storedCorreo && contrasena === storedContrasena) {
            const nombre = localStorage.getItem("nombre");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", nombre);
            window.location.href = "home.html";
        } else {
            alert("Credenciales incorrectas.");
        }
    });

    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        window.location.href = "login.html";
    });

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("username");

    if (isLoggedIn === "true" && username) {
        document.getElementById("username").textContent = username;
    }
});