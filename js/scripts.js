//BAJADOS DE INTERNET

//https://codepen.io/JoseRosario/pen/BWqMwK
//** Menú hamburguesa animación abrir y cerrar **//

var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function () {
    wrapperMenu.classList.toggle('open');
})


//jQuery

$(function () {
    "use strict"; //Para que funcione JS en modo estricto

    //Menú mobile responsive
    $("#wrapper-menu").click(function () {
        var isHidden = $("#menu-nav").is(":hidden");
        if (isHidden) {
            $('#menu-nav').slideDown(500);
        } else {
            $('#menu-nav').slideUp(500);
        }
    });









});