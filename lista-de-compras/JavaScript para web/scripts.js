import { adicionarItem } from "./js/adicionaritem.js";
import { verificarListaComprados } from "./js/verificarListaComprados.js";

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);