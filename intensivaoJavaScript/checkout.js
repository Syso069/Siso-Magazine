import {desenharProdutoNoCarrinhoSimples, lertLocalStorage, apagarDoLocalStorage, salvarLocalStorage} from "./src/utilidades.js"

function desenharProdutosCheckout() {
    const idsProdutoCarrinhoComQuantidade = lertLocalStorage("carrinho") ?? {};

    for(const idProduto in idsProdutoCarrinhoComQuantidade ) {
        desenharProdutoNoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto]);
    }
}

function finalizarCompra(evento) {
    evento.preventDefault();
    const idsProdutoCarrinhoComQuantidade = lertLocalStorage("carrinho") ?? {};
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        return;
    }
    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrinhoComQuantidade
    }
    const historicoDePedidos = lertLocalStorage("historico") ?? []; 
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];

    salvarLocalStorage("historico", historicoDePedidosAtualizado);
    apagarDoLocalStorage("carrinho");

    window.location.href = window.location.origin + "/pedidos.html";
}

desenharProdutosCheckout();

document.addEventListener("submit", (evt) => finalizarCompra(evt));