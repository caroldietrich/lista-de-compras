import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVasia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("container-lista-comprados");

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?")

    if (confirmacao) {
        elemento.remove();

        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    }
}

export { excluirItem };