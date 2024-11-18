<?php

require_once 'Conexion.php';
class Tareas {
    private $id;
    private $titulo;
    private $descripcion;
    private $estado;

    public function __construct($id) {
        $this->id = $id;
        $this->comprobar($id);
    }

    public function comprobar($id) {
        $db = new Conexion('servidor_db', 'root', 'root', 'tareas_db');
        $conexion = $db->getConn();
        $sql = "SELECT * FROM usuarios WHERE id = '$id'";

        if ($result = $conexion->query($sql)) {
            $datos = $result->fetch_assoc();
            $this->titulo = $datos['titulo'];
            $this->descripcion = $datos['descripcion'];
            $this->estado = $datos['estado'];
        } else {
            return false;
        }
    }

    public static function Crear($titulo, $descripcion, $estado) {
        $db = new Conexion('servidor_db', 'root', 'root', 'tareas_db');
        $conexion = $db->getConn();

        // Preparar la consulta de inserción con parámetros
        $sql = "INSERT INTO tareas (titulo, descripcion, estado) VALUES ( '$titulo', '$descripcion', '$estado')";

        if ($conexion->query($sql)) {
            return true;
        } else {
            return false;
        }
    }

    public static function getTareas() {
        $db = new Conexion('servidor_db', 'root', 'root', 'tareas_db');
        $conexion = $db->getConn();
        $sql = "SELECT * FROM tareas";

        if ($result = $conexion->query($sql)) {
            return $result->fetch_all(MYSQLI_ASSOC);
        } else {
            return false;
        }
    }
}
