<?php


namespace AP34\Controllers;

use AP34\core\DataBase;
use AP34\models\Tareas;
use AP34\views\CreateTarea;

/**
 * Controlador para la ruta /detalle
 */
class DeleteController
{
    public function delete($id)
    {

        $tarea = new Tareas(new DataBase());
        $tarea->delete($id);
    }
}
?>

