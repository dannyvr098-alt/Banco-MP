let intentosFallidos = 0;
const limiteIntentos = 3;
const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioRegistrado'));

const formulario = document.getElementById('formulario-login');
const alertaCuadro = document.querySelector('.alerta-intentos');
const mensajeContador = document.getElementById('contador');

formulario.addEventListener('submit', function(evento)){
    evento.preventDefault();

    const usuarioGuardado = localStorage.getItem('usuarioRegistrado');
    const claveGuardada = localStorage.getItem('claveRegistada');

    if(usuarioGuardado && usuarioIngreso === usuarioGuardado.usuario && claveIngresada === usuarioGuardado.clave){
        alert("¡Bienvenido a Mi Plata!");
        window.location.href = "dashboard.html";

    } else{
        intentosFallidos++;

        alertaCuadro.style.display = 'block';

        document.querySelector('.alerta-intentos').style.display = 'block';
        mensajeContador.textContent = `Intentos de acceso: ${intentosFallidos} de 3`;

        if(intentosFallidos >= limiteIntentos){
            alert("Cuenta bloqueada por seguiridad. Superaste los 3 intentos.");

            document.querySelector('.boton-entrar').disabled = true;
            document.querySelector('.boton-entrar').style.backgroundColor = "#ccc";
            
        } else{
            alert("Usuario o contraseña incorrectos. Intenta de nuevo");

        }
    }
}
