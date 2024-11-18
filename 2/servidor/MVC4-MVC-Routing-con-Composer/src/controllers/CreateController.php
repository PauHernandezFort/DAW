<?php


namespace AP34\Controllers;

use AP34\core\DataBase;
use AP34\models\Tareas;
use AP34\views\CreateTarea;

/**
 * Controlador para la ruta /detalle
 */
class CreateController
{
    public function create($titulo,$descripcion,$fechaC,$fechaV){

    $tarea = new Tareas(new DataBase());
    $tarea->create($titulo,$descripcion,$fechaC,$fechaV);
    }
    public function obtener(){
        $formulario= new CreateTarea();
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $titulo=$_POST['titulo'];
        $descripcion=$_POST['descripcion'];
        $fechaC=$_POST['fechaC'];
        $fechaV=$_POST['fechaV'];

        $this->create($titulo,$descripcion,$fechaC,$fechaV);
            header('Location: pubilc');
            exit();
        }
    }
}


?>