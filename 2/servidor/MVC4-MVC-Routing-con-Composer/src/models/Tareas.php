<?php

namespace AP34\Models;

use AP34\Core\Interfaces\IDataBase;

class Tareas
{
    //En vez de usar la clase DataBase usamos la interfaz, de forma que podemos cambiar de motor de BB.DD. y cumpliendo
    //con la interfaz siempre funcionará el Modelo.
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
    public function create($titulo, $descripcion, $fechaC, $fechaV) {

        $sql = "INSERT INTO tareas (titulo, descripcion, fecha_Creacion, fecha_Vencimiento) VALUES ('$titulo', '$descripcion', '$fechaC', '$fechaV')";
        $result = $this->database->executeSQL($sql);

        return $result;
    }

public function delete($id) {

    $sql = "DELETE FROM tareas WHERE id=$id";
    $result = $this->database->executeSQL($sql);

}

}