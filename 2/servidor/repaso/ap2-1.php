<?php
class VehiculoCarrera {
    private $marca;
    private $modelo;
    private $velocidad;
    private $combustible;

    function __construct($marca, $modelo, $velocidad, $combustible) {
        $this->marca = $marca;
        $this->modelo = $modelo;
        $this->velocidad = $velocidad;
        $this->combustible = $combustible;
    }

    protected function consumirCombustible() {
        $this->combustible--;
    }

    public function acelerar() {
        $this->velocidad++;
    }

    public function frenar() {
        $this->velocidad--;
    }

    public function arrancar() {
        echo "arrancado";
    }

    public function parar() {
        echo "parado";
    }

    public function mostrarEstado() {
        echo $this->marca . "<br>";
        echo $this->modelo . "<br>";
        echo $this->velocidad . "<br>";
        echo $this->combustible;
    }

    public function __destruct() {
        echo "el coche ha sido retirado de la carrera";
    }
}

class cocheF1 extends VehiculoCarrera {
    protected $aleron;

    function __construct($marca, $modelo, $velocidad, $combustible, $aleron) {
        parent::__construct($marca, $modelo, $velocidad, $combustible);
        $this->aleron = $aleron;
    }

    public function activarDRS() {
        $this->acelerar();
        $this->acelerar();
        $this->acelerar();
    }
}

class cocheElectricoF1 extends VehiculoCarrera {
    private $bateria;

    function __construct($marca, $modelo, $velocidad, $combustible, $bateria) {
        parent::__construct($marca, $modelo, $velocidad, $combustible);
        $this->bateria = $bateria;
    }

    public function recargar() {
        $this->bateria++;
    }
}
?>
