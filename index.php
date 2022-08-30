<?php
    if (isset($_POST["registrar"])){
        echo $_POST["nome"];
        echo "DONE_SQL";
    }
    else if (isset($_GET["pagina"]) && $_GET["pagina"] = "db"){
        echo "Test";
    }
    else{
        include "index.html";
    }
    
?>
