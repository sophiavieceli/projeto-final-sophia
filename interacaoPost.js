const botaoLike = document.getElementById("botao-like");
const botaoSalvar = document.getElementById("botao-salvar");
const botaoEnviar = document.getElementById("botao-enviar");
const botaoLista = document.getElementById("botao-lista");

let like = false;
let salvo = false;

botaoLike.addEventListener("click", () => {
    if (like === true) {
        botaoLike.style.fill = "transparent";
        like = false;
        return;
    }
    like = true;
    botaoLike.style.fill = "pink";
});

botaoSalvar.addEventListener("click", () => {
    if (salvo === true) {
        botaoSalvar.style.fill = "transparent";
        salvo = false;
        return;
    }
    salvo = true;
    botaoSalvar.style.fill = "yellow";
});

botaoEnviar.addEventListener("click", () => {});

botaoLista.addEventListener("click", () => {});
