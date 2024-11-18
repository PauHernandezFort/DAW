<?php
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
?>
