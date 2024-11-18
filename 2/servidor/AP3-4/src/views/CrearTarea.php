<?php

namespace AP34\Views;

/**
 * Clase que se encarga de mostrar un formulario para que el usuario añada una nueva tarea.
 */
class CrearTarea
{
    public function __construct(array $row=null)
    {
        echo '<!DOCTYPE html>';
        echo '<html>';
        echo '<head>';
        echo '<title>Añadir Tarea</title>';
        echo '</head>';
        echo '<body>';
        echo '<h1>Añadir una nueva Tarea</h1>';
        echo '<form action="/AP3-4/public/saveTask/" method="POST">';
        echo '<input type="text" name="titulo" placeholder="Título de la tarea">';
        echo '<input type="text" name="descripcion" placeholder="Descripción de la tarea">';
        echo '<button type="submit">Añadir</button>';
        echo '</form>';
        echo '</body>';
        echo '</html>';

    }

}
