<?php

	//error_reporting(E_ALL ^ E_NOTICE);

	session_start();

	header('Content-Type: application/json');

	//if(true){
	if(isset($_POST["elid"], $_POST["elrenglon"], $_POST["activodesactivo"])){

		include "lib.php";

		$con = conectar_bd();
		mysqli_set_charset($con, "utf8");

		$elid = $_POST["elid"];
        $activodesactivo = $_POST["activodesactivo"];
		$renglon = $_POST["elrenglon"];

		$activodesactivonumero = 2;

		switch($activodesactivo){
			case 'Desactivar'	: {$activodesactivonumero = 0; break;}
			case 'Activar'		: {$activodesactivonumero = 1; break;}
		}

		$info = array();

        $sql ="UPDATE unir.losnombres SET activo = '$activodesactivonumero' WHERE unir.losnombres.id='$elid'";

		if (!$result = mysqli_query($con, $sql)){

			$info[] = array (
				'id' => 0,
	 			'success' => false,
	 			'elid' => 0,
	 			'error' => mysqli_error($con),
				'sql' => $sql
	 		);

	 		echo json_encode(array('info' => $info));

			die();

		}

		else{
			
			$info[] = array (
				'id' => 0,
	 			'success' => true,
	 			'elid' => 0,
	 			'error' => 'NO',
				'renglon' => $renglon
	 		);

			echo json_encode(
				array(
					"status" => true,
					  "error" => null,
					  "data" => array(
						  "info" => $info
					)
				)
			);

		}

		mysqli_close($con);

	 }
	 else{

 		$info[] = array (
 			'id' => 0,
 			'success' => false,
 			'msg' => 'No-se-puede-entregar-información'
 		);

 		echo json_encode(array('info' => $info));

 	}

?>
