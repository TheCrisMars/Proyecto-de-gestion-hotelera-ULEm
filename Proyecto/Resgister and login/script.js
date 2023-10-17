const btnSignin = document.getElementById("sign-in");
const btnSignup = document.getElementById("sign-up");
const btnSigninBack = document.getElementById("btn-signin-back");
const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");

btnSignin.addEventListener("click", (e) => {
  formRegister.classList.add("hide");
  formLogin.classList.remove("hide");
});

btnSignup.addEventListener("click", (e) => {
  formLogin.classList.add("hide");
  formRegister.classList.remove("hide");
});

btnSigninBack.addEventListener("click", (e) => {
  formLogin.classList.remove("hide");
  formRegister.classList.add("hide");
});

function redirectToDashboard() {
  window.location.href = "dashboard.html";
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que la página se recargue
    // Obtener los valores del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Aquí puedes agregar la lógica para el inicio de sesión
    console.log('Iniciar sesión con: ', email, password);
  });