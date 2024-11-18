<?php
// Incluir el Controlador
require_once __DIR__ . '/controladores/ProductoControlador.php';

// Instanciar el Controlador y ejecutar la acción de mostrar productos
$controlador = new ProductoControlador();
$controlador->mostrarProductos();
