import { adicionarAoCarrinho } from "./menuCarrinho.js";
import { catalogo } from "./utilidades.js";

export function renderizarCatalogo() {
    for(const produtoCatalogo of catalogo) {
        const cardProduto = 
        `<div class="card-produto ${produtoCatalogo.feminino ? "feminino" : "masculino"}" id="card-produto-${produtoCatalogo.id}">
            <img src="./assets/img/${produtoCatalogo.imagemDoProduto}" alt="Primeiro produto do Siso Magazine" class="card-img">
            <p class="card-marca ">${produtoCatalogo.marca}</p>
            <p class="card-nome">${produtoCatalogo.nome}</p>
            <p class="card-preco">$${produtoCatalogo.preco}</p>
            <button id="adicionar-${produtoCatalogo.id}"class="btn-adicionar-ao-carrinho"><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;
    
    document.getElementById("container-produto").innerHTML += cardProduto;
    }

    for(const produtoCatalogo of catalogo) {
        document
        .getElementById(`adicionar-${produtoCatalogo.id}`)
        .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
    }
}