// import feather from "feather-icons";

const main = document.getElementById("main");

function adicionarPost(imagem, nome, user, tempo, conteudo) {
    // extensão es6-string-html:
    const post = document.createElement(/*html*/ `
    <div class="post">
                    <div class="linha-1-post">
                        <div class="img-nome-usuario-hora">
                            <a href=""
                                ><img src="${imagem}" alt=""
                            /></a>
                            <div class="nome-usuario-hora">
                                <div class="nome-usuario">
                                    <p class="nome">${nome}</p>
                                    <p>@${user}</p>
                                </div>
                                <p>${tempo}</p>
                            </div>
                        </div>
                        <i
                            data-feather="more-horizontal"
                            class="icone-post"
                        ></i>
                    </div>
                    <div class="linha-2-post">
                        <p>${conteudo}</p>
                        <img src="" alt="" />
                    </div>
                    <div class="linha-3-post">
                        <div class="icones">
                            <i
                                data-feather="heart"
                                class="icone-post"
                                id="botao-like"
                            ></i>
                            <i
                                data-feather="bookmark"
                                class="icone-post"
                                id="botao-salvar"
                            ></i>
                            <i
                                data-feather="send"
                                class="icone-post"
                                id="botao-enviar"
                            ></i>
                            <i
                                data-feather="list"
                                class="icone-post"
                                id="botao-lista"
                            ></i>
                        </div>
                        <div class="comentar">
                            <p>Comentar</p>
                            <div class="caixa-icone-comentar">
                                <i
                                    data-feather="message-circle"
                                    class="icone-post"
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>`);

    main.appendChild(post);
}

function adicionar(imagem, nome, user, tempo, conteudo) {
    const post = document.createElement("div");
    post.textContent = /*html*/ `<div class="linha-1-post">
                        <div class="img-nome-usuario-hora">
                            <a href=""
                                ><img src="${imagem}" alt=""
                            /></a>
                            <div class="nome-usuario-hora">
                                <div class="nome-usuario">
                                    <p class="nome">${nome}</p>
                                    <p>@${user}</p>
                                </div>
                                <p>${tempo}</p>
                            </div>
                        </div>
                        <i
                            data-feather="more-horizontal"
                            class="icone-post"
                        ></i>
                    </div>
                    <div class="linha-2-post">
                        <p>${conteudo}</p>
                        <img src="" alt="" />
                    </div>
                    <div class="linha-3-post">
                        <div class="icones">
                            <i
                                data-feather="heart"
                                class="icone-post"
                                id="botao-like"
                            ></i>
                            <i
                                data-feather="bookmark"
                                class="icone-post"
                                id="botao-salvar"
                            ></i>
                            <i
                                data-feather="send"
                                class="icone-post"
                                id="botao-enviar"
                            ></i>
                            <i
                                data-feather="list"
                                class="icone-post"
                                id="botao-lista"
                            ></i>
                        </div>
                        <div class="comentar">
                            <p>Comentar</p>
                            <div class="caixa-icone-comentar">
                                <i
                                    data-feather="message-circle"
                                    class="icone-post"
                                ></i>
                            </div>
                        </div>
                    </div>`;

    main.insertBefore(post);
}

// adicionar(
//     "./imagens/img-perfil.jpeg",
//     "Taeri",
//     "taerikim",
//     "1min",
//     "blablabla"
// );

// ----------------------------------------------------
// const moreHorizontal = feather.getIcon("more-horizontal").toSvg();
// const heart = feather.getIcon("heart").toSvg();
// const bookmark = feather.getIcon("bookmark").toSvg();
// const send = feather.getIcon("send").toSvg();
// const list = feather.getIcon("list").toSvg();
// const messageCircle = feather.getIcon("message-circle").toSvg();

const post = document.createElement("div");
post.innerHTML += /*html*/ `<div class="linha-1-post">
                        <div class="img-nome-usuario-hora">
                            <a href=""
                                ><img src="./imagens/img-perfil.jpeg" alt=""
                            /></a>
                            <div class="nome-usuario-hora">
                                <div class="nome-usuario">
                                    <p class="nome">Sophia</p>
                                    <p>@sophia</p>
                                </div>
                                <p>5min</p>
                            </div>
                        </div>
                        <i
                            data-feather="more-horizontal"
                            class="icone-post"
                        ></i>
                    </div>
                    <div class="linha-2-post">
                        <p>AAAAAAAAAAAAAA</p>
                        <img src="" alt="" />
                    </div>
                    <div class="linha-3-post">
                        <div class="icones">
                            <i
                                data-feather="heart"
                                class="icone-post"
                                id="botao-like"
                            ></i>
                            <i
                                data-feather="bookmark"
                                class="icone-post"
                                id="botao-salvar"
                            ></i>
                            <i
                                data-feather="send"
                                class="icone-post"
                                id="botao-enviar"
                            ></i>
                            <i
                                data-feather="list"
                                class="icone-post"
                                id="botao-lista"
                            ></i>
                        </div>
                        <div class="comentar">
                            <p>Comentar</p>
                            <div class="caixa-icone-comentar">
                                <i
                                    data-feather="message-circle"
                                    class="icone-post"
                                ></i>
                            </div>
                        </div>
                    </div>`;

post.classList.add("post");

// post.innerHTML +=
//     "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

main.appendChild(post);

// const thead = document.createElement("thead");
// tableReference.appendChild(thead);

// const headerRow = document.createElement("tr");
// ["bg-blue-900", "text-slate-200", "sticky", "top-0"].forEach((cssClass) =>
//     headerRow.classList.add(cssClass)
// );
// for (const tableColumnObject of columnsArray) {
//     const headerElement =
//         /*html*/
//         `<th class="text-center">
//                     ${tableColumnObject.columnLabel}
//                 </th>`;
//     /* o html aqui como string não fica formatado, a não ser que use a extensão es6-string-html e coloque o comentário html antes */
//     headerRow.innerHTML += headerElement;

//     tableHeaderReference.appendChild(headerRow);
// }
