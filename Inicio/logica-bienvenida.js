document.addEventListener("DOMContentLoaded", () =>{
    const encabezado = document.querySelector('.seccion-intro');
    const tarjetas = document.querySelectorAll('.tarjeta-beneficio');
    const footer = document.querySelector('.pie-bienvenida');

    setTimeout(() => {
        encabezado.classList.add('mostrar-elemento');
},300);

tarjetas.forEach((tarjeta, index)=>{
    setTimeout(() => {
        tarjeta.classList.add('mostrar-elemento');
    }, 600 + (index * 200));
});

    setTimeout(()=> {
        footer.classList.add('mostrar-elemento');
    }, 1400);

});
