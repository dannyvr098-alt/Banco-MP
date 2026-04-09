document.getElementById('form-registro').addEventListener('submit', function(event)){
  const pass = document.getElementById('pass').value;
  const confirmPass = document.getElementById('confirm-pass').value;
  const celular = document.getElementById('celular').value;
  const documento = document.getElementById('documento').value;

  if (pass !== confirmPass){
    alert("La contraseña debe tener al menos 6 caracteres.");
    Event.preventDefault();
    return;
  }
 const regexCelular = /^3\d{9}$/;
 if (! regexCelular.test(celular)){
    alert("Por favor ingresa un número de celular válido");
    event.preventDefault();
    return;
 }

 if ( isNaN(documento) || documento.length < 5 ){
    alert(" El número de documento no es válido. ");
    event.preventDefault
    return;
 }

 alert("Registro exitoso. ¡Bienvenido a Mi Plata!");
 localStorage.setItem('usuario', usuario.value);
 localStorage.setItem('clave', pass.value);
 window.location.href="ingreso.html";

}