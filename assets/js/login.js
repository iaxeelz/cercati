const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    if(email === "" || password === ""){

        alert("Complete todos los campos");
        return;
    }

    alert("Inicio de sesión exitoso");

    // futura redirección
    // window.location.href = "dashboard.html";
});