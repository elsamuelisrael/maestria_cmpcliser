<?php

function conectar_bd(){

	if (!($conexion = mysqli_connect("127.0.0.1", "uniru","unirp","unir")))
		die(" *** No se puede conectar LIB");

	return $conexion;
}

?>
