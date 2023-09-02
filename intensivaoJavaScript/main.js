import { renderizarCatalogo } from "./src/cardProduto.js";
import { inicializarCarrinho } from "./src/menuCarrinho.js";
import {renderizarProdutosCarrinho} from "./src/menuCarrinho.js";
import {atualizarPrecoCarrinho} from "./src/menuCarrinho.js"
import {inicializarFiltros} from "./src/filtrosCatalogo.js"

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();