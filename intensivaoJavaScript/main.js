const catalogo = [
    {
        id: 1,
        nome: "Camisa Larga com Bolsos",
        marca: "Zara",
        preco: 299,
        imagemDoProduto: "product-1.jpg",
        feminino: false,
    },
    { 
        id: 2, 
        marca: "Zara", 
        nome: "Casaco Reto com Lã", 
        preco: 385, 
        imagemDoProduto: "product-2.jpg", 
        feminino: true, 
    }, 
    { 
        id: 3, 
        marca: "Zara", 
        nome: "Jaqueta com Efeito Camurça", 
        preco: 260, 
        imagemDoProduto: "product-3.jpg",
        feminino: false, 
    }, 
    { 
        id: 4, 
        marca: "Zara", 
        nome: "Sobretudo em Mescla de Lã", 
        preco: 610, 
        imagemDoProduto: "product-4.jpg", 
        feminino: false,
     }, 
    {
         id: 5, 
         marca: "Zara", 
         nome: "Camisa Larga Acolchoada de Veludo Cotelê", 
         preco:  410, 
         imagemDoProduto: "product-5.jpg", 
         feminino: false, 
        }, 
    { 
        id: 6, 
        marca: "Zara", 
        nome: "Casaco de Lã com Botões",
        preco: 769, 
        imagemDoProduto: "product-6.jpg", 
        feminino: true, 
    }, 
    { 
        id: 7,
         marca: "Zara", 
         nome: "Casaco com Botões", 
         preco: 275, 
         imagemDoProduto: "product-7.jpg", 
         feminino: true, 
        }, 
    { 
        id: 8, 
        marca: "Zara", 
        nome: "Colete Comprido com Cinto", 
        preco: 188, 
        imagemDoProduto: "product-8.jpg", 
        feminino: true, 
    }
]

for(const produtoCatalogo of catalogo) {
    const cardProduto = 
    `<div class="card-produto-1">
        <img src="./assets/img/${produtoCatalogo.imagemDoProduto}" alt="Primeiro produto do Siso Magazine" class="img-1">
        <p>${produtoCatalogo.marca}</p>
        <p>${produtoCatalogo.nome}</p>
        <p>$${produtoCatalogo.preco}</p>
        <button>Adicionar</button>
    </div>`;

document.getElementById("container-produto").innerHTML += cardProduto;
}