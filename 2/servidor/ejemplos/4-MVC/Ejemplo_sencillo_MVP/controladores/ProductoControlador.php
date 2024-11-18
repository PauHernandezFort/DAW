<?php
// Incluir el archivo del Modelo
require_once __DIR__ . '/../modelos/Producto.php'; // Usa __DIR__ para obtener la ruta correcta.

class ProductoControlador {
    public function mostrarProductos() {
        // Crear instancia del Modelo Producto
        $producto = new Producto();

        // Obtener todos los productos
        $productos = $producto->obtenerTodos();

        // Incluir la Vista y pasar los productos
        include __DIR__ . '/../vistas/productosVista.php';
    }
}
