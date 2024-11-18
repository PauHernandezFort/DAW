<?php
require_once "autoload.php";
class Gala extends Trajes {
    private $medias;

    public function __construct($pantalon, $camisa, $chaleco, $talla, $estado, $fecha, $medias) {
        parent::__construct($pantalon, $camisa, $chaleco, $talla, $estado, $fecha);
        $this->medias = $medias;
    }

    public function getMedias() {
        return $this->medias;
    }
    protected function averiguar() {
        echo "Por favor pulse 1 si el traje es donado o 2 si es comprado: \n";
        $tipo = trim(fgets(STDIN));
        if ($tipo == "1") {
            $this->donado('gala');
        } elseif ($tipo == "2") {
            $this->comprado('gala');
        } else {
            echo "Tipo no válido \n";
        }
    }
}
?>
