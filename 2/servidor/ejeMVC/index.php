<?php
namespace Pau;
require_once 'controlador/TareasControl.php';
$url = $_SERVER['REQUEST_URI'];

$url_parts = explode('/', $url);
var_dump($url_parts);
$controlador = !empty($url_parts[2]) ? ucfirst($url_parts[2])  : 'TareasControl';
$accion = $url_parts[3] ?? 'index';
$parametro = $url_parts[4] ?? null;
echo '<br>'.$controlador.'<br>';
$controladorFile = 'Controlador/' . $controlador . 'VerCoche.php';

if (file_exists($controladorFile)) {
    require_once $controladorFile;
    echo $controladorFile;
    if (class_exists($controlador)) {
        $controladorObj = new $controlador();
        echo '<br>'.$accion.'<br>';
        call_user_func_array([$controladorObj, $accion], [$parametro]);
    } else {
        echo"Error: Controlador no encontrado - " . $controlador;
    }
} else {
    echo "Error: Archivo de Controlador no encontrado - " . $controladorFile;
}
?>
