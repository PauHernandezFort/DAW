<?php

namespace composerEjemplo\Controlador;
use ComposerEjemplo\Modelo\Moto;
use ComposerEjemplo\Vista\VerMoto;

class ControllerMoto
{

    public function __construct() {
        $moto = new Moto();
        $pintar = new VerMoto();
    }

}