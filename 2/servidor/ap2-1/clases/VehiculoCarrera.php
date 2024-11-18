<?php
class VehiculoCarrera{
    private $marca;
    private $modelo;
    private $velocidad;
    private $combustible;

   function __construct($marca, $modelo , $velocidad, $combustible){
        $this->marca = $marca;
        $this->modelo = $modelo;
        $this->velocidad = $velocidad;
        $this->combustible = $combustible;
        }
        protected function consumirCombustible(){
        $this->combustible --;
        }
        public function acelerar(){
        $this->velocidad ++;
        }
        public function frenar(){
        $this->velocidad --;
        }
        public function arrancar(){
        echo"arrancado";
        }
        public function parar(){
        echo"parado";
        }
        public function getMarca(){
       return $this->marca;
        }
        {

        }
        public function mostrarEstado{
        echo $this->marca;
        echo "<br>";
        echo $this->modelo;
        echo "<br>";
        echo $this->velocidad;
        echo "<br>";
        echo $this->combustible;
        }
        //public function __destruct(){
       // echo "el coche ha sido retirado de la carrera ";
        //}
}

?>