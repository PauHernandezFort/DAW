<?php
function enviarRespuestaHTTP($codigo) {
    if (is_numeric($codigo)) {
        http_response_code((int)$codigo);
    } else {
        http_response_code(400);
        echo "Código 400: Bad Request - Código no válido.";
        return;
    }

    switch ($codigo) {
        case 200:
            echo "Código 200: OK - La solicitud se procesó correctamente.";
            break;
        case 201:
            echo "Código 201: Created - El recurso fue creado correctamente.";
            break;
        case 300:
            echo "Código 300: Multiple Choices - Existen múltiples opciones para este recurso.";
            break;
        case 400:
            echo "Código 400: Bad Request - La solicitud es incorrecta o no se pudo procesar.";
            break;
        case 401:
            echo "Código 401: Unauthorized - Se requiere autenticación para acceder a este recurso.";
            break;
        case 404:
            echo "Código 404: Not Found - El recurso solicitado no se encontró.";
            break;
        case 500:
            echo "Código 500: Internal Server Error - El servidor encontró un error.";
            break;
        default:
            echo "Código $codigo: Código de respuesta no implementado en este ejemplo.";
            break;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['codigo'])) {
        $codigoRespuesta = $_POST['codigo'];
        enviarRespuestaHTTP($codigoRespuesta);
    } else {
        http_response_code(400);
        echo "Código 400: Bad Request - Falta el parámetro 'codigo'.";
    }
} else {
    http_response_code(405);
    echo "Código 405: Method Not Allowed - Solo se permiten solicitudes POST.";
}

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Nombre y Apellido</title>
</head>
<body>
    <h2>Formulario de Registro</h2>
    <form action="" method="POST">
                
        <input type="text" name="codigo">
        
        <button type="submit">Enviar</button>
    </form>
</body>
</html>
