<?php
$valores = $_GET;
if($valores){
foreach ($valores as $nombre => $valor) {
    if(is_numeric($valor)){
        echo "es un numero ".  "<br>";
    } elseif (is_string($valor)) {
        echo "es texto" . "<br>";
    } else{
        echo "res de res". "<br>";
    }
    }

}else{
    echo "es null";
    }
?>