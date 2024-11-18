<?php

namespace AP34\Controllers;

use AP34\Core\DataBase;
use AP34\Models\Tareas;
use AP34\Views\CrearTarea;
use AP34\Views\ListadoTareas;

class MainController
{
    public function main(){
        //Creamos una conexión a la BB.DD. e instanciamos el modelo Tarea para poder acceder a los datos.
        $tarea = new Tareas(new DataBase());
        //Ahora recibimos todos los datos que existan en la tabla.
        new ListadoTareas($tarea->findAll());
    }
    public function addTask(){
        //Creamos una conexión a la BB.DD. e instanciamos el modelo Tarea para poder acceder a los datos.
        $tarea = new Tareas(new DataBase());
        //Ahora abrimos el formulario de crear tarea.
        new CrearTarea();
    }

    public function saveTask(){
        //Creamos una conexión a la BB.DD. e instanciamos el modelo Tarea para poder acceder a los datos.
        $tarea = new Tareas(new DataBase());
        $tarea->insert($_POST['titulo'], $_POST['descripcion']);
        echo "tarea $_POST[titulo] guardada <br>";
        new ListadoTareas($tarea->findAll());
    }

    public function deleteTask($id){
        //Creamos una conexión a la BB.DD. e instanciamos el modelo Tarea para poder acceder a los datos.
        $tarea = new Tareas(new DataBase());
        $tarea->deleteById($id);
        echo "tarea $id eliminada <br>";
        new ListadoTareas($tarea->findAll());
    }
}
