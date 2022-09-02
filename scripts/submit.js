import { loadingAnimation, setLoadingBar, formReset, formErrorShow } from "./form.js";
import { showList } from "./list.js"

export function submit(event, form) {
    event.preventDefault()
    event.stopPropagation()

    if (form.checkValidity() ) {
        //Bota o formulario no estado de "loading"
        loadingAnimation()

        var id = null;
        var post_recebido = false;
        var recebido_get = false;
        

        var xhttp = new XMLHttpRequest();

        xhttp.onload = function() {
            if (this.readyState == 4 && this.status == 200) {
                //Permite ir para a pagina de lista
                recebido_get = true;
            }
        };

        var width = 0;

        function animation() {
            if (width >= 180 && recebido_get == true){
                clearInterval(id);
                showList(xhttp.responseText)
            }

            //A barrinha ira travar na metade se o post ainda não teve retorno
            if (width <= 50 || post_recebido)
                width++

            setLoadingBar(width)
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
            success: function(msg){
                //Continua a barra de loading
                post_recebido = true;

                //Executa o get para receber a tabela da database
                xhttp.open("GET", "?pagina=db", true);
                xhttp.send();
            }
        }).fail(function(){
            formReset(false)
            formErrorShow()
        })

        //Inicia a animação da barrinha
        id = setInterval(animation, 10);

    }

    //Informa pro usuario se faltou algo
    form.classList.add('was-validated')
}

