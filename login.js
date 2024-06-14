import data from "./data";

// pra ser chamada no clique do botão de entrar:
function validacaoLogin(evt) {
    // recuperar valores dos inputs usando evt.target.value
    // procurar o valor de email/usuário no obj de dados
    // se não existir, adicionar classe de erro ao campo de email/usuário
    // adicionar também elemento p abaixo do input
    // ver se a senha digitada corresponde à senha nos dados
    // se corresponde, redirecionar pra timeline
    // se não corresponde, adicionar classe de erro ao campo de senha
    // adicionar também elemento p abaixo do input

    const valorEmailUser = inputEmailUser.value;
    console.log(valorEmailUser);
    const valorSenha = inputSenha.value;
    console.log(valorSenha);

    if ("@" && ".com" in valorEmailUser) {
        data.find((v) => {
            v === v.email;
        });
    } else {
        data.find((v) => {
            v === v.user;
        });
    }

    if (!valorEmailUser) {
        inputEmailUser.classList.add("erro");
        console.log("foi");
        // adicionar elemento p na div pai do input (a ser criada)
    }
}

const inputEmailUser = document.getElementById("input-email-user");
const inputSenha = document.getElementById("input-senha");
const botaoEntrar = document.getElementById("botao-entrar");

botaoEntrar.addEventListener("click", () => {
    console.log("foi");
    // validacaoLogin(evt);
});
