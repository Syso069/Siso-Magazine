import { catalogo } from "./utilidades.js";

export function inicializarCarrinho() {
    const abrirCarrinho = document.getElementById("abrir-carrinho")
    const fecharCarrinho = document.getElementById("fechar-carrinho");
    const menuLateral = document.getElementById("container-conteudo");

    
    abrirCarrinho.onclick = function() {
        menuLateral.style.right = "0em";
    }

    fecharCarrinho.onclick = function() {
        menuLateral.style.right = "-26em";
    };
}

export function adicionarAoCarrinho(idProduto) {
    const produtos = catalogo.find((produto) => produto.id === idProduto);
    const containerCardProduto = document.getElementById("produtos-carrinho");
    const cardProdutoCarrinho = `
    <article class="card-produtos-carrinho">
            <button class="btn-card"><i class="fa-solid fa-circle-xmark"></i></button>
            <img src="./assets/img/${produtos.imagemDoProduto}" alt="Carrinho: ${produtos.nome}" class="img-card-produtos-carrinho">
        <div class="card-descricao">
            <p class="titulo-decricao">${produtos.nome}</p>
            <p class="tamanho-descricao">Tamanho: M</p>
            <p class="valor-descricao">$${produtos.preco}</p>
        </div>
    </article>
    `;

    containerCardProduto.innerHTML += cardProdutoCarrinho;   
}


