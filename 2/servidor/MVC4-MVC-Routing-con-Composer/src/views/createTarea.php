<?php

namespace AP34\Views;

class CreateTarea
{
    public function __construct()
    {
       echo '<html>
        <h2>Añadir Nueva Tarea</h2>
    <form action="" method="POST">
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" name="titulo" required>

        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" name="descripcion" rows="4" required></textarea>

        <label for="fechaC">Fecha de Creación:</label>
        <input type="date" id="fechaC" name="fechaC" required>

        <label for="fechaV">Fecha de Vencimiento:</label>
        <input type="date" id="fechaV" name="fechaV" required>

        <input type="submit" value="Añadir Tarea">
    </form>
</html>';
    }

}