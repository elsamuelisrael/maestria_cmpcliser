<?php

	//error_reporting(E_ALL ^ E_NOTICE);

	session_start();

	header('Content-Type: application/json');

	//if(true){
	if(isset($_POST["elnombre"])){

		include "lib.php";

		$con = conectar_bd();
		mysqli_set_charset($con, "utf8");

        $elnombre = $_POST["elnombre"];

		$info = array();

        $sql ="INSERT INTO unir.losnombres (id, nombre, activo) VALUES (0, '$elnombre', 0)";

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
