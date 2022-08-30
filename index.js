$('$formulario :input').on('input propertychange', function(){
    var litros = $("#litros").val();
    var kms = $("#kms").val();
    var preco = $("#preco").val();
    
    if (litros.length )
});


$("#container-listar").hide();

$( "#formulario" ).submit(function( event ) {
    event.preventDefault()
    event.stopPropagation()

    var form = this;

    if (this.checkValidity() ) {
        


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



        var id = null;
        var loading = $('#loading');
        var width = 0;
        var container = $("#container-registro");
        var container_lista = $("#container-listar");
        var container_lista_body = $("#tbody");
        var post_recebido = false;

        var xhttp = new XMLHttpRequest();

        var recebido_get = false;

        xhttp.onload = function() {
            
            if (this.readyState == 4 && this.status == 200) {
                recebido_get = true;
                console.log("getrecebido");
            }
        };

        function animation() {
            if (width >= 180 && recebido_get == true){
                clearInterval(id);
                console.log("Exibindo lista");

                container.hide()
                container_lista_body.html(xhttp.responseText)
                container_lista.show()
            }
            else{
                //A barrinha ira travar na metade se o post ainda n foi recebido
                if (width >= 50){
                    if (post_recebido)
                        width++
                }else
                    width++

                if (width <= 100){
                    loading.attr('aria-valuenow', width).css('width', width+'%');
                }

                
            }
        }

        $.ajax({
            type: 'POST',
            url: '',
            data: { 
                'registrar' : true,
                'nome': $("#nome").val(),
                'modelo': $("#modelo").val(),
                'placa': $("#placa").val(),
                'origem': $("#origem").val(),
                'destino': $("#destino").val(),
                'kms': $("#kms").val(),
                'litros': $("#litros").val(),
                'preco': $("#preco").val()
            },
            timeout: 3000,
            fail: function(){
                alert("Algo deu errado não foi possivel mandar um post pro php");
                return true;
            },
            success: function(msg){
                //Inicia a animação da barrinha
                id = setInterval(animation, 10);
                console.log("Post recebido! " + msg);
                post_recebido = true;
                //O post já foi inserido na database

                //Executa o get para receber a tabela da database
                xhttp.open("GET", "?pagina=db", true);
                xhttp.send();
                //alert('wow' + msg);
            }
        });

    }

    this.classList.add('was-validated')
})

$("#botao-voltar").on("click", function( event ){

    var buttons = $("#formulario :button");
    var inputs = $("#formulario :input");
    var form = $("#formulario");

    inputs.prop("disabled", false);
    buttons.prop("disabled", false);
    buttons.html("Enviar");

    inputs.val("");

    $("#progress-bar").remove();

    form.removeClass('was-validated')

    $("#container-listar").hide();
    $("#container-registro").show();
})

