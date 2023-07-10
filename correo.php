
<?php
/*if (isset($_POST['enviar'])) {
    if (!empty($_POST['name']) && !empty($_POST['asunto']) && !empty($_POST['mensaje']) && !empty($_POST['email'])) {
        $nombre = $_POST['name'];
        $telefono = $_POST['telefono'];
        $correo = $_POST['correo'];
        $tema = $_POST['tema'];
        $mensaje = $_POST['mensaje'];
        $header = "From: ejcuri@gmail.com" . "\r\n";
        $header = "Reply-To: ejcuri@gmail.com" . "\r\n";
        $header = "X-Mailer: PHP/" . phpversion();
        $mail = @mail($email;$tema;$mensaje;$header)
        if ($mail) {
            echo "<h4>¡Mail enviado exitosamente!</h4>";
        }
    }
}
?>*/


if (isset($_POST['enviar'])) {
    if (!empty($_POST['name']) && !empty($_POST['asunto']) && !empty($_POST['mensaje']) && !empty($_POST['email'])) {
        $nombre = $_POST['name'];
        $telefono = $_POST['telefono'];
        $correo = $_POST['email'];
        $tema = $_POST['asunto'];
        $mensaje = $_POST['mensaje'];
        $header = "From: ejcuri@gmail.com" . "\r\n";
        $header .= "Reply-To: ejcuri@gmail.com" . "\r\n";
        $header .= "X-Mailer: PHP/" . phpversion();
        $mail = @mail($correo, $tema, $mensaje, $header);
        if ($mail) {
            echo "<h4>¡Correo enviado exitosamente!</h4>";
        } else {
            echo "<h4>Error al enviar el correo. Por favor, intenta nuevamente.</h4>";
        }
    }
}
?>
 