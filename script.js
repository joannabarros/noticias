const botaoAbrir = document.querySelector(".header-mobile > button")
const botaoFechar = document.querySelector(".header-mobile nav button")

const boddy = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")
 
botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fecharMenu)

function abrirMenu() {
   boddy.classList.add("escurecer")
   nav.classList.add("abrir")
}

function fecharMenu () {
    boddy.classList.remove("escurecer")
    nav.classList.remove("abrir")
}