<style>
	body {
		margin: 0;
		background-color: #000;
	}
</style>

<?php
// Verificando la llegada de todos los datos
if (isset($_POST)) {
	require_once 'conex.php';
	// Recolectando Datos
	$name =isset( $_POST['name']) ?  $conex->real_escape_string(trim($_POST['name'])) : null;
	$email = isset($_POST['email']) ? $conex->real_escape_string(trim($_POST['email'])) : null;
	$message = isset($_POST['message']) ? $conex->real_escape_string(trim($_POST['message'])) : null;
	$destiny = 'soporte@teampixeland.com';
	$asunto = 'consulta';

	if ($name && $cel && $email && $mensaje) {
		$content = "Nombre: $name\n";
		$content .= "Email: $email\n";
		$content .= "Mensaje: $mensaje";


		// Enviando Datos
		$sql = "INSERT INTO contacto VALUES(null, '$name', '$email', '$message', CURTIME(), CURDATE())";
		$query= $conex->query($sql);

		if ($query) {
			mail($destiny, $asunto, $content);
			echo "<script> alert('Gracias por enviarnos tus datos, 😊 te contactaremos lo más pronto posible. 😉')</script>";
		}else{
			echo "<script> alert('Lamentablemente ocurrio un error al guardar tus  datos. 😥')</script>";
		}

	}else {
		echo "<script> alert('Hubo un problema al enviar tus datos. 😥')</script>";
	}
}else{
	echo "<script> alert('No pudimos recibir tus datos tus datos. 😥')</script>";
}


echo "<script> location.href='../'</script>";
?>