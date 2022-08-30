<?php
    include_once "lib/conexao.php"

    if (isset($_POST["registrar"])){
        $sql = "INSERT into viagens(modelo,placa,motorista,origem,destino, kilometros, litros, preco_gasolina)
                VALUES (:modelo, :placa, :motorista, :origem, :destino, :kilometros, :litros, :preco_gasolina)";

        $consulta = $conn->prepare($sql);
        if($consulta->execute(array(
            "nome" => $_POST["nome"],
            "modelo" => $_POST["modelo"],
            "placa" => $_POST["placa"],
            "origem" => $_POST["origem"],
            "destino" => $_POST["destino"],
            "kilometros" => $_POST["kms"],
            "litros" => $_POST["litros"],
            "preco_gasolina" => $_POST["preco"]
            
        ))){
            echo "DONE_SQL";
        }
    }
    else if (isset($_GET["pagina"]) && $_GET["pagina"] = "db"){
        echo "Test";
    }
    else{
        include "index.html";
    }
    
?>
