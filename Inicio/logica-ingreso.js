let intentosFallidos = 0;
const limiteIntentos = 3;

const formulario = document.getElementById('formulario-login');
const mensajeContador = document.getElementById('contador');

formulario.addEventListener('submit', function(evento)){
    evento.preventDefault();

    const usuarioIngreso = document.getElementById('usuario').value;
    const claveIngresada = document.getElementById('clave').value;

    if(usuarioIngresado === "daniela06" && claveIngresada === "123"){
        alert("¡Bienvenido a Mi Plata!");

    } else{
        intentosFallidos++;
        mensajeContador.textContent = intentosFallidos;

        if(intentosFallidos >= limiteIntentos){
            alert("Cuenta bloqueada por seguiridad. Superaste los 3 intentos.");

            document.querySelector('.boton-entrar').disabled = true;
            
        } else{
            alert("Usuario o contraseña incorrectos. Intenta de nuevo");

        }
    }
}
