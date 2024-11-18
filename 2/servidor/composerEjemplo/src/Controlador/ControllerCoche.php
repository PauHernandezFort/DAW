<?php
namespace composerEjemplo\Controlador;

use composerEjemplo\Modelo\Coche;
use composerEjemplo\Vista\VerCoche;
class ControllerCoche
{
    public function __construct() {
        $coche = new Coche();
        $pintar = new VerCoche();
    }

}