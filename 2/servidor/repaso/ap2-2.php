<?php
class VehiculoCarrera {
    private $marca;
    private $modelo;
    private $velocidad;
    private $combustible;
    private $posicion;

    function __construct($marca, $modelo, $velocidad, $combustible) {
        $this->marca = $marca;
        $this->modelo = $modelo;
        $this->velocidad = $velocidad;
        $this->combustible = $combustible;
        $this->posicion = 0;
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

    public function avanzar($num){
        $this->posicion += $this->velocidad + $num;
    }

    public function mostrarEstado() {
        echo "Marca: " . $this->marca . "\n";
        echo "Modelo: " . $this->modelo . "\n";
        echo "Velocidad: " . $this->velocidad . "\n";
        echo "Combustible: " . $this->combustible . "\n";
        echo "Metros recorridos: " . $this->posicion . "\n";
    }

    public function getPosicion() {
        return $this->posicion;
    }

    public function getMarca() {
        return $this->marca;
    }

    public function __destruct() {
        echo "El coche ha sido retirado de la carrera\n";
    }
}

echo "Número de jugadores: ";
$njugadores = trim(fgets(STDIN));
$jugadores = [];

for ($i = 1; $i <= $njugadores; $i++) {
    echo "Introduce la marca del coche del jugador $i: ";
    $marca = trim(fgets(STDIN));

    echo "Introduce el Modelo del coche del jugador $i: ";
    $modelo = trim(fgets(STDIN));

    $jugadores[$i] = new VehiculoCarrera($marca, $modelo, 10, 0);
}

$ganador = false;

while (!$ganador) {
    foreach ($jugadores as $index => $jugador) {
        echo "\nTurno del jugador $index con el coche " . $jugador->getMarca() . ". Presiona Enter para continuar...";
        trim(fgets(STDIN));

        $jugador->avanzar(random_int(1, 10));
        if (random_int(1, 10) <= 5) {
            $jugador->acelerar();
        }

        $jugador->mostrarEstado();

        if ($jugador->getPosicion() >= 100) {
            echo "\n¡El coche " . $jugador->getMarca() . " del jugador $index ha ganado la carrera!\n";
            $ganador = true;
            break;
        }
    }
}

?>