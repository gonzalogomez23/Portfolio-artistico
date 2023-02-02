/* DESLIZAR MENU FORMATO MOVIL */
let botonMenu = document.getElementById("boton-menu")
let contenedorMenu = document.getElementById("menu-navegacion")
let apartados = document.getElementsByClassName("header__li")

botonMenu.addEventListener("click", deslizarMenu)

function deslizarMenu(){
    contenedorMenu.classList.toggle("aparecer")
}

for(let i=0; i < apartados.length; i++){
    apartados[i].addEventListener("click", deslizarMenu)
}

/* COLOR NAVBAR AL SCROLLEAR */
let header = document.querySelector(".header--scroll")

window.addEventListener("scroll", calcular)

function calcular (){
    if (window.pageYOffset > 0){
        header.classList.add("scroll_web")
    }else{
        header.classList.remove("scroll_web")
    }
}

/* GALERÍA PROYECTOS */

let imagenes = document.getElementsByClassName("proyecto__img")
let capaModal = document.getElementById("capaModal")
let imgModal = document.getElementById("imgModal")
let btnCerrar = document.getElementById("btnCerrar")
let full = document.getElementById("containerproyecto")

for (let i=0; i < imagenes.length; i++){
        
    imagenes[i].addEventListener("click", modal)
    
    function modal (e) {
        let src = e.target.src;
        imgModal.setAttribute("src", src)
        capaModal.classList.toggle("mostrar");
        full.classList.add("ocultarcontainer")
        }

}

btnCerrar.addEventListener("click", cerrar)
    function cerrar() {
        capaModal.classList.remove("mostrar");
        full.classList.remove("ocultarcontainer")
    }



        
    
