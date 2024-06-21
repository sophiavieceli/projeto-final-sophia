const botaoLike = document.querySelectorAll(".botao-like");
const botaoSalvar = document.querySelectorAll(".botao-salvar");

let like = false;
let salvo = false;

botaoLike.forEach((b) => {
    b.addEventListener("click", () => {
        if (like === true) {
            b.style.fill = "transparent";
            b.style.stroke = "#404040";
            like = false;
            return;
        }
        like = true;
        b.style.fill = "#fd7d97";
        b.style.stroke = "#fd7d97";
    });
});

botaoSalvar.forEach((b) => {
    b.addEventListener("click", () => {
        if (salvo === true) {
            b.style.fill = "transparent";
            b.style.stroke = "#404040";
            salvo = false;
            return;
        }
        salvo = true;
        b.style.fill = "#ffa7b8";
        b.style.stroke = "#ffa7b8";
    });
});
