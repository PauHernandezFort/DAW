<?php


namespace aev1\Controllers;

use aev1\Core\DataBase;
use aev1\Models\Tareas;


/**
 * Controlador para la ruta /detalle
 */
class DeleteController
{
    public function delete()
    {
      $array=$_POST['borrar'];
        $tarea = new Tareas(new DataBase());
       $tarea -> delete($array);
      }
}