const mensagemListaVazia = document.getElementById("mensaggem-linha-vazia");

export function verificarListaVazia(lista){
    console.log(lista);
    if (lista.querySelectorAll("li").length === 0) {
        mensagemListaVazia.style.display = "block";
    }
    else {
    mensagemListaVazia.style.display = "none";
    }
}