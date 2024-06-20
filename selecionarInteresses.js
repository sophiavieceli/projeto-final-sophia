const listaInteresses = document.querySelectorAll(".opcao-interesse");

let selecionado = false;

function mudarCor(elemento, cor) {
    elemento.style.backgroundColor = cor;
}

listaInteresses.forEach((i) => {
    i.addEventListener("click", () => {
        if (selecionado) {
            mudarCor(i, "#fff");
            selecionado = false;
            return;
        }
        mudarCor(i, "#ebebeb");
        selecionado = true;
    });
});
