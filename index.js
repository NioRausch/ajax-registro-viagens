

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
            <div class="progress">
                <div class="progress-bar" role="progressbar" id="loading" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        `);

        var xhttp = new XMLHttpRequest();

        xhttp.onload = function() {
            
            if (this.readyState == 4 && this.status == 200) {

                
            }
        };

        var id = null;
        var loading = $('#loading');
        var width = 0;
        var container = $("#container-registro");
        var post_recebido = false;

        function animation() {
            if (width >= 180){
                clearInterval(id);
                console.log("Stop");

                container.hide()
                container.html(xhttp.responseText)
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
                //alert('wow' + msg);
            },
            done: function(msg){ 
                console.log("Done " + msg);
                if (msg == "DONE_SQL"){
                    //O post já foi inserido na database

                    //Executa o get para receber a tabela da database
                    xhttp.open("GET", "?pagina=db", true);
                    xhttp.send();

                    return true;
                } else {
                    return false;
                }
            }
        });

    }

    this.classList.add('was-validated')
})
