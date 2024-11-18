<?php
function triangulo($base, $altura) {
    return ($base * $altura) / 2;
}

function rectangulo($base, $altura) {
    return $base * $altura;
}

function circulo($radio) {
    return pi() * pow($radio, 2);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $figura = $_POST['figura'];

    if ($figura == 'triangulo') {
        $base = $_POST['base'];
        $altura = $_POST['altura'];
        $area = triangulo($base, $altura);
    } elseif ($figura == 'rectangulo') {
        $base = $_POST['base'];
        $altura = $_POST['altura'];
        $area = rectangulo($base, $altura);
    } elseif ($figura == 'circulo') {
        $radio = $_POST['radio'];
        $area = circulo($radio);
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Calculadora de Áreas</title>
</head>
<body>
<div class="container">
    <h2>Elige la figura</h2>
    <form action="" method="POST">
        <label for="figura">Figura:</label>
        <select name="figura" id="figura">
            <option value="triangulo">Triángulo</option>
            <option value="rectangulo">Rectángulo</option>
            <option value="circulo">Círculo</option>
        </select>
        <br><br>

        <label for="base">Base (para triángulo o rectángulo):</label>
        <input type="number" name="base" id="base" step="0.01">
        <br><br>

        <label for="altura">Altura (para triángulo o rectángulo):</label>
        <input type="number" name="altura" id="altura" step="0.01">
        <br><br>

        <label for="radio">Radio (para círculo):</label>
        <input type="number" name="radio" id="radio" step="0.01">
        <br><br>

        <input type="submit" value="Calcular Área">
    </form>

    <?php if ($area !== null): ?>
        <p>El área es: <?php echo number_format($area, 2); ?></p>
    <?php endif; ?>
</div>
</body>
</html>
