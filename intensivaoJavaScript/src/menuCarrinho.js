import { catalogo } from "./utilidades.js";

const idsProdutoCarrinhoComQuantidade = {};

export function inicializarCarrinho() {
    const abrirCarrinho = document.getElementById("abrir-carrinho");
    const fecharCarrinho = document.getElementById("fechar-carrinho");
    const menuLateral = document.getElementById("container-conteudo");

    
    abrirCarrinho.onclick = function() {
        menuLateral.style.right = "0em";
    }

    fecharCarrinho.onclick = function() {
        menuLateral.style.right = "-26em";
    };
}

function removerDoCarrinho(idProduto) {
    delete idsProdutoCarrinhoComQuantidade[idProduto];
    renderizarProdutosCarrinho();
}

function incrementarQuantidadeProduto(idProduto) {
    idsProdutoCarrinhoComQuantidade[idProduto]++;
    atualizaInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto) {
    if(idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
        removerDoCarrinho(idProduto);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto]--;
    atualizaInformacaoQuantidade(idProduto);
}

function atualizaInformacaoQuantidade(idProduto) {
    document.getElementById(`quantidade-${idProduto}`).innerText = 
    idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoNoCarrinho(idProduto) {
    const produtos = catalogo.find((produto) => produto.id === idProduto);

    const containerCardProduto = document.getElementById("produtos-carrinho");

    // const elementoArticle = document.createElement("article");
    // elementoArticle.classList("card-produtos-carrinho");

    const cardProdutoCarrinho = `
    <article class="card-produtos-carrinho">
            <button class="btn-card" id="btn-remove-item-${produtos.id}"><i class="fa-solid fa-circle-xmark"></i></button>
            <img src="./assets/img/${produtos.imagemDoProduto}" alt="Carrinho: ${produtos.nome}" class="img-card-produtos-carrinho">
        <div class="card-descricao">
            <p class="titulo-decricao">${produtos.nome}</p>
            <p class="tamanho-descricao">Tamanho: M</p>
            <p class="valor-descricao">$${produtos.preco}</p>
        </div>
        <div class="contador-produtos">
            <button class="remove-produtos" id="decrementa-produto-${produtos.id}">-</button>
            <p class="numero-produtos id="quantidade-${produtos.id}">
                ${idsProdutoCarrinhoComQuantidade[produtos.id]}
            </p>
            <button class="adiciona-produtos" id="incrementa-produto-${produtos.id}">+</button>
        </div>
    </article>
    `;

    containerCardProduto.innerHTML += cardProdutoCarrinho;   

    document.getElementById(`decrementa-produto-${produtos.id}`).addEventListener("click", () => decrementarQuantidadeProduto(produtos.id));

    document.getElementById(`incrementa-produto-${produtos.id}`).addEventListener("click", () => incrementarQuantidadeProduto(produtos.id));

    document.getElementById(`btn-remove-item-${produtos.id}`).addEventListener("click", () => removerDoCarrinho(produtos.id));
}

function renderizarProdutosCarrinho() {
    const containerCardProduto = document.getElementById("produtos-carrinho");
    containerCardProduto.innerHTML = "";
    for(const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoNoCarrinho(idProduto);
    }
}

export function adicionarAoCarrinho(idProduto) {
    if(idProduto in idsProdutoCarrinhoComQuantidade) {
        incrementarQuantidadeProduto(idProduto);
        return;
    }

    idsProdutoCarrinhoComQuantidade[idProduto] = 1;
    desenharProdutoNoCarrinho(idProduto);
}
