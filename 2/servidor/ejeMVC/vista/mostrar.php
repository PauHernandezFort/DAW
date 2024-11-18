<?php

function mostrar($array){

        if (empty($array)) {
            echo "<p>No hay tareas disponibles.</p>";
            return;
        }

        echo '<table border="1">';
        echo '<tr><th>ID</th><th>Título</th><th>Descripción</th><th>Estado</th></tr>';

        foreach ($array as $tarea) {
            echo '<tr>';
            echo '<td>' . $tarea['id'] . '</td>';
            echo '<td>' . $tarea['titulo'] . '</td>';
            echo '<td>' . $tarea['descripcion'] . '</td>';
            echo '<td>' . $tarea['estado'] . '</td>';
            echo '</tr>';
        }
        echo '</table>';


}
function formulario(){

    echo '<!DOCTYPE html>
<html lang="es">
<h2>Formulario de Tareas</h2>
<form action="" method="post">
 
    <label for="titulo">Título:</label>
    <input type="text" id="titulo" name="titulo" required>

    <label for="descripcion">Descripción:</label>
    <textarea id="descripcion" name="descripcion" rows="4" required></textarea>

    <label for="estado">Estado:</label>
    <select id="estado" name="estado" required>
        <option value="">Seleccione un estado</option>
        <option value="pendiente">Pendiente</option>
        <option value="completada">Completada</option>
    </select>

    <button type="submit">Enviar</button>
</form>

</body>
</html>';
}

