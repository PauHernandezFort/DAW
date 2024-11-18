<?php
class cocheElectricoF1 extends VehiculoCarrera{
private $bateria;
function __construct($marca, $modelo, $velocidad, $combustible, $bateria) {
        parent::__construct($marca, $modelo, $velocidad, $combustible);
        $this->bateria = $bateria;
    }
    public function recargar() {
  $this->bateria ++;
    }
?>
