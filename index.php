<?php
    include_once "lib/conexao.php";

    if (isset($_POST["registrar"])){
        $sql = "INSERT into viagens(modelo,placa,motorista,origem,destino, kilometros, litros, preco_gasolina)
                VALUES (:modelo, :placa, :motorista, :origem, :destino, :kilometros, :litros, :preco_gasolina)";

        $consulta = $conn->prepare($sql);
        if($consulta->execute(array(
            "motorista" => $_POST["nome"],
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
        $sql = "SELECT * from viagens";

        $consulta = $conn->prepare($sql);
        $resultado = $consulta->execute();

        while($linha = $consulta->fetch()){

            echo '<tr>';
            echo "<th scope='row'>{$linha['id']}</th>";
            echo "<td>{$linha['modelo']}</td>";
            echo "<td>{$linha['placa']}</td>";
            echo "<td>{$linha['motorista']}</td>";
            echo "<td>{$linha['origem']}</td>";
            echo "<td>{$linha['destino']}</td>";
            echo "<td>{$linha['kilometros']}</td>";
            echo "<td>{$linha['litros']}</td>";
            echo "<td>{$linha['preco_gasolina']}</td>";
            echo "</tr>";
        }
    }
    else{
        include "index.html";
    }
    
?>
