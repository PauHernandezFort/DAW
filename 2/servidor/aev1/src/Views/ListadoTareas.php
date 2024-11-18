<?php

namespace aev1\Views;

class ListadoTareas
{
    /**
     * Lista todas las tareas de la tabla para
     * @param array|null $row
     */
    public function __construct(array $rows = null)
    {
        if(is_null($rows)){
            //No hemos recibido nada por lo que debemos indicarlo.
            echo "No se han recibido datos para mostrar en la vista de Detalle";
            echo "<p><a href='/'>volver</p>";
        }else {
            //Verificamos que hemos recibido contenido para rellenar la tabla y si no hemos recibido nada lo indicaremos.
            if (count($rows) > 0) {
                echo "<table border='1'>";
                echo "<tr><td>Título</td><td>Descripción</td><td>Fecha de Creación</td><td>Fecha de Vencimiento</td></tr>";
                $contador = 0;
                echo "<form method='POST' action='/aev1/public/delete/'>";
                foreach ($rows as $row){
                    $d = ('2024-10-22');
                    if ($row["fecha_vencimiento"] < $d) {
                        echo "<tr>
               <td><a href='/aev1/public/detalle/".$row["id"]."'>" . $row["titulo"] . "</a></td>
              <td>" . $row["descripcion"] . "</td>
             <td>" . $row["fecha_creacion"] . "</td>
               <td bgcolor='red'>" . $row["fecha_vencimiento"] . "</td> 
               <td> <input type='checkbox' name='borrar[]' value=".$row["id"]."></td>
          </tr>";
                    }

                    echo "<tr>
        <td><a href='/aev1/public/detalle/".$row["id"]."'>" . $row["titulo"] . "</a></td>
        <td>" . $row["descripcion"] . "</td>
        <td>" . $row["fecha_creacion"] . "</td>
        <td>" . $row["fecha_vencimiento"] . "</td> 
        <td> <input type='checkbox' name='borrar[]' value=".$row["id"]."></td>
      </tr>";

                    $contador = $contador + 1;
                }
                echo "</table>";
                
                     echo "<input type='submit' value='Borrar seleccionados'>";
                
                echo "</form>";
            } else {
                echo "0 results";
                echo "<p><a href='/'>volver</p>";
            }
        }
    }

}