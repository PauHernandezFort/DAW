<?php
$array = [
1 => "primero",
3 => "segundo",
5 => "tercero",
7 => "cuarto",
9 => "quinto",
11 => "sexto",
];
$position = 1;
foreach ($array as $key => $value) {
    if( $position %2 ==0 ) {
        echo "$key es impar". "<br>";
        $par = false;
        $impar = true;;
    }else{
        echo "$key es par". "<br>";
        $par = true;
        $impar = false;

    }
    echo"<br>";
    $position++;


}
 ?>
