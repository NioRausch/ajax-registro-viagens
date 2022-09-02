import { formHide, formShow, formReset } from "./form.js";

export function showList(html){
    var container_lista = $("#container-listar");
    var container_lista_body = $("#tbody");

    formHide()

    container_lista_body.html(html)
    container_lista.show()
}

$("#botao-voltar").on("click", function( event ){

    formReset()

    $("#container-listar").hide();
    formShow()
})

