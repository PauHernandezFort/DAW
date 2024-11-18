<?php

require_once "autoload.php";

class Normal extends Trajes
{
    private $pañuelo;
    private $zapatillas;

    public function __construct($pantalon, $camisa, $chaleco, $talla, $estado, $fecha, $pañuelo, $zapatillas)
    {
        parent::__construct($pantalon, $camisa, $chaleco, $talla, $estado, $fecha);
     $this->pañuelo = $pañuelo;
     $this->zapatillas = $zapatillas;

    }

    public function getPañuelo()
    {
        return $this->pañuelo;
    }
    public function getZapatillas(){
        return $this->zapatillas;
    }

    protected function averiguar()
    {
        echo "Por favor pulse 1 si el traje es donado o 2 si es comprado: \n";
        $tipo = trim(fgets(STDIN));
        if ($tipo == "1") {
            $this->donado('normal');
        } elseif ($tipo == "2") {
            $this->comprado('normal');
        } else {
            echo "Tipo no válido \n";
        }
    }
}

?>