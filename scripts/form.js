import { submit } from './submit.js';

calculosHide()
formErrorHide()

export function formHide(){
    $("#container-registro").hide();
}

export function formShow(){
    $("#container-registro").show();
}

export function formErrorShow(){
    $("#erro").show();
}

export function formErrorHide(){
    $("#erro").hide();
}

export function calculosShow(){
    $("#calculos").show()
}
export function calculosHide(){
    $("#calculos").hide()
}


export function formReset(resetInput = true){
    var buttons = $("#formulario :button");
    var inputs = $("#formulario :input");
    var form = $("#formulario");

    inputs.prop("disabled", false);
    buttons.prop("disabled", false);
    buttons.html("Enviar");

    if (resetInput)
        inputs.val("");

    $("#progress-bar").remove();

    form.removeClass('was-validated')
    calculosHide()
    formErrorHide()
}


export function loadingAnimation(){
    var buttons = $("#formulario :button");
    var inputs = $("#formulario :input");
    var form = $("#formulario");

    inputs.prop("disabled", true);
    buttons.prop("disabled", true);
    buttons.empty();
    buttons.append(`
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span class="sr-only">Carregando...</span>
    `);

    form.append(`
        <div class="progress" id="progress-bar">
            <div class="progress-bar" role="progressbar" id="loading" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    `);
}

export function setLoadingBar(width){
    if (width <= 100)
        $('#loading').attr('aria-valuenow', width).css('width', width+'%');
}

$("#container-listar").hide();

$('#formulario :input').on('input propertychange', function(){
    var litros = $("#litros").val();
    var kms = $("#kms").val();
    var preco = $("#preco").val();
    
    if (litros.length != 0 && kms.length != 0 && preco.length != 0 ){
        litros = parseFloat(litros);
        kms = parseFloat(kms);
        preco = parseFloat(preco);

        var Autonomia = kms / litros;
        var custo_km = (1 / Autonomia) * preco;

        calculosShow()

        $("#calculos").html(`
            Autonomia: ${(Autonomia).toFixed(1)}km/l
            <br>
            Custo por km: ${custo_km.toFixed(1)} R$
            <br>
            Custo total: ${(custo_km * kms).toFixed(1)} R$
        `)
    }
});

$("#formulario").submit(function(event){  
    submit(event, this)
})
