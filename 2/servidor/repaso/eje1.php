<?php

$valores = $_GET;
foreach ($valores as $nombre => $valor) {
    echo "se ha recivido $nombre para la clave $valor" . "<br>";

}


?>