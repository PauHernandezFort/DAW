<?php
require_once "autoloader.php";

abstract class Trajes {
    private $pantalon;
    private $camisa;
    private $chaleco;
    private $talla;
    private $estado;
    private $fecha;


    public function __construct($pantalon, $camisa, $chaleco, $talla, $estado, $fecha) {
        $this->pantalon = $pantalon;
        $this->camisa = $camisa;
        $this->chaleco = $chaleco;
        $this->talla = $talla;
        $this->estado = $estado;
        $this->fecha = $fecha;
    }

    public function getPantalon() {
        return $this->pantalon;
    }

    public function getCamisa() {
        return $this->camisa;
    }

    public function getChaleco() {
        return $this->chaleco;
    }

    public function getTalla() {
        return $this->talla;
    }

    public function getEstado() {
        return $this->estado;
    }

    public function getFecha() {
        return $this->fecha;
    }

    public function getDueño() {
        return self::$dueño;
    }

    public function añadir($dueño, $origen, $precio,$tipo) {
        $instancia = new Conexion();
        $conn = $instancia->getConexion();
        $consulta = "INSERT INTO trajes (talla, dueño, fecha, tipo, estado, origen, precio) VALUES ('$this->talla', '$dueño', '$this->fecha', '$this->tipo', '$this->estado', '$origen', '$precio')";

        if ($conn->query($consulta)) {
            return true;
        } else {
            echo "Error: " . mysqli_error($conn);
            return false;
        }
    }

    public function mostrar() {
        $instancia = new Conexion();
        $conn = $instancia->getConexion();
        $consulta = "SELECT id FROM trajes WHERE disponibilidad = true";
        $result = mysqli_query($conn, $consulta);

        if ($result) {
            echo "Trajes disponibles:\n";
            while ($row = mysqli_fetch_assoc($result)) {
                echo $row['id'] . "\n";
            }
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    }

    abstract protected function averiguar();

    protected function donado($tipo) {
        echo "Por favor, indique el ID del donador: \n";
        $donador = trim(fgets(STDIN));
        $instancia = new Conexion();
        $conn = $instancia->getConexion();
        $consulta = "UPDATE padres SET credito = credito + 1";

        if ($conn->query($consulta)) {
            $this->añadir($donador, 'donado', 0);
            return true;
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    }

    protected function comprado($tipo) {
        echo "Por favor, indique el ID del vendedor: \n";
        $comprador = trim(fgets(STDIN));

        echo "Por favor, indique el precio del traje: \n";
        $precio = trim(fgets(STDIN));

        $this->añadir($comprador, 'comprado', $precio);
    }
    public function delete($id){
        $instancia = new Conexion();
        $conn = $instancia->getConexion();
        $consulta = "DELETE FROM trajes WHERE ID = '$id'";
        if ($conn->query($consulta)) {
            return true;
        }else{
            echo "Error: " . mysqli_error($conn);
        }
    }



}
?>
