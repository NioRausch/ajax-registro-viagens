<?php

if (isset($_POST["bSalvar"])){
    if (isset($_POST["iNome"],$_POST["iEmail"],$_POST["iTelefone"],$_POST["sEstado"],$_POST["sCidade"])){
        $sql = "INSERT into interessados(email,nome,fone,estado,cidade)
                VALUES (:email, :nome, :fone, :estado, :cidade)";

        $consulta = $conn->prepare($sql);
        if($consulta->execute(array(
            "email" => $_POST["iEmail"],
            "nome" => $_POST["iNome"],
            "fone" => $_POST["sEstado"],
            "estado" => $_POST["sCidade"],
            "cidade" => $_POST["iTelefone"],
        ))){
            echo "Email cadastrado com sucesso!";
        }else{
            echo "Email já registrado!";
        }
    }
}

?>