<?php

namespace AP34\Models;

use AP34\Core\Interfaces\IDataBase;
use Tarea;

class Tareas
{
    //En vez de usar la clase DataBase usamos la interfaz, de forma que podemos cambiar de motor de BB.DD. y cumpliendo
    //con la interfaz siempre funcionará el modelo.
    private IDataBase $database;
    public function __construct(IDataBase $database)
    {
        $this->database = $database;
    }

    /**
     * Función que nos devuelve todos los registros de la tabla Tarea
     */
    public function findAll(){
        $sql = "SELECT * FROM tareas";
        return $this->database->executeSQL($sql);
    }

    /**
     * Función que nos devuelve el contenido de una tarea para su id
     */
    public function findById($id){
        $sql = "SELECT * FROM tareas WHERE id=$id";

        $result = $this->database->executeSQL($sql);
        return array_shift($result);
    }

    public function deleteById($id){
        $sql = "DELETE FROM tareas WHERE id=$id";
        $this->database->executeSQLnoreturn($sql);
        return true;
    }

    public function insert($titulo, $descripcion){
        $sql = "INSERT INTO tareas (titulo, descripcion, fecha_creacion, fecha_vencimiento) 
        VALUES ('$titulo', '$descripcion', NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY))";
        $this->database->executeSQLnoreturn($sql);
        return true;
    }
}