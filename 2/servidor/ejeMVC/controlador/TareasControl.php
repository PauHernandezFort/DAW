<?php

require_once'Modelo/Tareas.php';
require_once'Vista/Mostrar.php';


class TareasControl{

public function index(){
    $listas = Tareas::getTareas();
    mostrar($listas);
}
public function crear(){
    formulario();
    if ($_POST) {
    $titulo=$_POST['titulo'];
    $descripcion=$_POST['descripcion'];
    $estado=$_POST['estado'];
    $query=Tareas::Crear($titulo,$descripcion,$estado);

    }
}
}