const iconeEsquerda = document.getElementById("chevron-esquerda");
const iconeDireita = document.getElementById("chevron-direita");
const escolherIdioma = document.getElementById("escolher-idioma");

function esconderElemento(elemento) {
    elemento.style.display = "none";
}

function mostrarElemento(elemento) {
    elemento.style.display = "flex";
}

iconeEsquerda.addEventListener("click", () => {
    mostrarElemento(escolherIdioma);
    esconderElemento(iconeEsquerda);
    mostrarElemento(iconeDireita);
});

iconeDireita.addEventListener("click", () => {
    esconderElemento(escolherIdioma);
    mostrarElemento(iconeEsquerda);
    esconderElemento(iconeDireita);
});
