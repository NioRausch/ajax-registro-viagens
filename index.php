<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Dados da viagem</title>
    <link rel="stylesheet" href="index.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">

  
</head>
<body>
    <div class="janela">
        <div class="center2 border">
            <h1>Registrar viagem</h1>
            <span>*Obrigatório</span>
            <br>
            <br>
            <form method="post" class="row g-3 needs-validation" novalidate>
                <div class="row">
                    <div class="col-md-12 mb-3">
                        <label for="modelo">Nome do motorista:</label> </label><span> *</span>
                        <input type="text" maxlength="80" class="form-control" id="modelo" required>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-8 mb-3">
                        <label for="modelo">Modelo do carro:</label> </label><span> *</span>
                        <input type="text" maxlength="60" class="form-control" id="modelo" required>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="placa">Placa:</label> </label><span> *</span>
                        <input type="text" maxlength="7" class="form-control" id="placa" required>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="origem">Local de Origem:</label> </label><span> *</span>
                        <input type="text" maxlength="20" class="form-control" id="origem"  required>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="destino">Local de Destino:</label><span> *</span>
                        <input type="text" maxlength="20" class="form-control" id="destino" required>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <label for="kms">Total de kilometros:</label> </label><span> *</span>
                        <input type="number" class="form-control" id="kms" required>
                    </div>

                    <div class="col-md-4 mb-3">
                        <label for="litros">Litros gastos:</label> </label><span> *</span>
                        <input type="number" class="form-control" id="litros"required>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="preco">Preço do litro:</label> </label><span> *</span>
                        <input type="number" class="form-control" id="preco"required>
                    </div>
                </div>

                <br>
                <hr>
                <button class="btn btn-primary btn-lg">Enviar</button>
            </form>
        </div>
    </div>
</body>
</html>

<script>
    (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
        })
    })()
</script>