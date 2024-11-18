<?php
require_once "autoload.php";
class Padres{
  private $dni;
}

public function añadir(){
    echo "Por favor dime tu nombre: \n";
    $nombre = trim(fgets(STDIN));
    echo "Por favor dime tu apellido: \n";
    $apellido = trim(fgets(STDIN));
    echo "Por favor dime tu DNI: \n";
    $dni = trim(fgets(STDIN));
    echo "Por favor dime tu año de inicio: \n";
    $año = trim(fgets(STDIN));

    $instancia = new Conexion();
    $conn = $instancia->getConexion();
    $consulta = "INSERT INTO padres (DNI, nombre,apellido, fecha, credito, estado,) VALUES ('$this->dni','$nombre','$apellido','$año', '2', 'false')";
}
public function coger($id){
    $instancia = new Conexion();
    $conn = $instancia->getConexion();
    $consulta = "";

}
?>