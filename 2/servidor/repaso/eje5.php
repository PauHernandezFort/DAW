<?php
$host = 'servidor_db';
$user = 'root';
$password = 'root';
$datbase = 'AP1';


$mysqli = new mysqli($host, $user, $password, $datbase);


if ($mysqli->connect_errno) {
    die("Error al conectar a la base de datos: " . $mysqli->connect_error);
}
echo "Conectado";


$query = "INSERT INTO `usuarios` (`id`, `nombre`, `estado`) VALUES (29, 'creilla', 0)";
if ($mysqli->query($query)) {
    echo "<br>Datos insertados correctamente";
} else {
    echo "<br>Error al insertar datos: " . $mysqli->error;
}

echo "<br>";


$consulta = 'SELECT * FROM usuarios';
$result = $mysqli->query($consulta);

if ($result) {
    while ($row = $result->fetch_assoc()) {
        echo "<br>";
        echo $row['nombre'];
        echo " tiene la id ";
        echo $row['id'];
    }
} else {
    echo "<br>Error al consultar datos: " . $mysqli->error;
}

echo "<br>";
$query = "UPDATE usuarios SET id='911' WHERE id='29'";
if ($mysqli->query($query)) {
    echo "<br>Datos editados correctamente";
} else {
    echo "<br>Error al actualizar datos: " . $mysqli->error;
}

echo "<br>";
echo "Esta es la base de datos actualizada:<br>";
$consulta = 'SELECT * FROM usuarios';
$result = $mysqli->query($consulta);

if ($result) {
    while ($row = $result->fetch_assoc()) {
        echo "<br>";
        echo $row['nombre'];
        echo " tiene la id ";
        echo $row['id'];
    }
} else {
    echo "<br>Error al consultar datos: " . $mysqli->error;
}

echo "<br>";
$consulta = 'DELETE FROM usuarios WHERE id=911';
if ($mysqli->query($consulta)) {
    echo "<br>Datos borrados";
} else {
    echo "<br>Error al borrar datos: " . $mysqli->error;
}

$mysqli->close();
?>
