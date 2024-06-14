// clicáveis:
const botaoLogin = document.getElementById("botao-login");
const botaoCadastro = document.getElementById("botao-cadastro");
const voltarLogin = document.getElementById("botao-voltar-login");
const naoTemConta = document.getElementById("nao-tem-conta");
const voltarCadastro = document.getElementById("botao-voltar-cadastro");
const jaTemConta = document.getElementById("ja-tem-conta");
const cadastroAvancar = document.getElementById("cadastro-avancar");
// não existem no html ainda:
const voltarPerfil = document.getElementById("botao-voltar-perfil");
const perfilContinuar = document.getElementById("perfil-continuar");
const voltarIdioma = document.getElementById("botao-voltar-idioma");
const idiomaContinuar = document.getElementById("idioma-continuar");
const voltarInteresses = document.getElementById("botao-voltar-interesses");
const interessesContinuar = document.getElementById("interesses-continuar");
const cadastroPronto = document.getElementById("cadastro-pronto");
const comecarUsar = document.getElementById("comecar-a-usar");

// containers:
const mainContainer = document.getElementById("main-container");
const containerCarrossel = document.getElementById("container-carrossel");
const mainInicio = document.getElementById("main-inicio");
const containerLogin = document.getElementById("container-login");
const containerCadastro = document.getElementById("container-cadastro");
const containerConfPerfil = document.getElementById("container-conf-perfil");
// não existem no html ainda:
const containerConfIdioma = document.getElementById("container-conf-idioma");
const containerConfInteresses = document.getElementById(
    "container-conf-interesses"
);
const containerContaCriada = document.getElementById("container-conta-criada");

// function slideLogin() {
//     // adicionar classe "escondido" no main-texto
//     mainInicio.classList.add("escondido");
//     // console.log(mainInicio.classList);
//     containerLogin.classList.add("aparecendo");
// }

// botaoLogin.addEventListener("click", slideLogin);

// botaoLogin.addEventListener("click", () => {
//     // containerCarrossel.scrollLeft += mainContainer.clientWidth;
//     containerCarrossel.style.transform = `translateX(-${containerCarrossel.clientWidth}px)`;
//     mainInicio.style.display = "none";
// });

// botaoCadastro.addEventListener("click", () => {
//     containerCarrossel.scrollLeft += 2 * mainContainer.clientWidth;
// });

// voltarLogin.addEventListener("click", () => {
//     containerCarrossel.scrollLeft -= mainContainer.clientWidth;
// });

function esconderElemento(elemento) {
    return (elemento.style.display = "none");
}

function mostrarElemento(elemento) {
    return (elemento.style.display = "flex");
}

// a partir de inicio
botaoLogin.addEventListener("click", () => {
    esconderElemento(mainInicio);
    mostrarElemento(containerLogin);
});
botaoCadastro.addEventListener("click", () => {
    esconderElemento(mainInicio);
    mostrarElemento(containerCadastro);
});

// a partir de entrar
voltarLogin.addEventListener("click", () => {
    esconderElemento(containerLogin);
    mostrarElemento(mainInicio);
});

naoTemConta.addEventListener("click", () => {
    esconderElemento(containerLogin);
    mostrarElemento(containerCadastro);
});

// a partir de cadastro
voltarCadastro.addEventListener("click", () => {
    esconderElemento(containerCadastro);
    mostrarElemento(mainInicio);
});

cadastroAvancar.addEventListener("click", () => {
    esconderElemento(containerCadastro);
    mostrarElemento(containerConfPerfil);
});

// a partir de configurações do perfil

// a partir de configurações de idioma

// a partir de configurações de interesses

// botaoLogin.addEventListener("click", () => {
//     // containerLogin.style.transform("translateX(-400rem");
//     // containerCarrossel.style.transform("translateX(-400rem");
//     // mostrarElemento(containerLogin);
//     // mainInicio.style.zIndex("-2");
//     // return esconderElemento(mainInicio);
//     containerLogin.style.position("absolute");
//     containerCarrossel.style.position("relative");
//     containerLogin.style.top("0");
//     containerLogin.style.left("0");
// });
