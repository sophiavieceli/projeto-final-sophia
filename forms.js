/*
Como todo o processo de login e cadastro está sendo feito na mesma página, clicar no botão de um formulário fazia a página ser atualizada, ao invés de levar à próxima etapa (por causa do comportamento padrão do evento de submit).O código a seguir evita esse comportamento:
*/

const forms = document.querySelectorAll("form");

forms.forEach((f) => {
    f.addEventListener("submit", (evt) => evt.preventDefault());
    // console.log(f);
});
