<?php
class Producto {
    private $db;

    public function __construct() {
        // Conexión a la base de datos (ajusta las credenciales)
        $this->db = new mysqli('172.18.0.2', 'root', 'root', 'productos_db');
        if ($this->db->connect_error) {
            die("Error de conexión: " . $this->db->connect_error);
        }
    }

    public function obtenerTodos() {
        $query = "SELECT * FROM productos";
        $result = $this->db->query($query);
        return $result->fetch_all(MYSQLI_ASSOC);
    }
}
