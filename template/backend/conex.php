<?php 
// Creando conexion
$conex = new mysqli('nibbleteach87363.ipagemysql.com', 'dark_aomine', 'databasedarkaomine', 'dark_aomine');
if (!$conex) {
	echo "<script> alert('Lo siento... no pudimos conectarnos con la base de datos :\'v)</script>";
} 
$conex->set_charset("utf8");
?>