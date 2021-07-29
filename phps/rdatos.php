<?php

	//error_reporting(E_ALL ^ E_NOTICE);

	session_start();

	header('Content-Type: application/json');

	//if(true){
	if(isset($_POST["x"])){

		include "lib.php";

		$con = conectar_bd();
		mysqli_set_charset($con, "utf8");

		$x = $_POST["x"];

		$info = array();
		$data = array();

		// $sql ="SELECT id, nombre FROM unir.losnombres WHERE nombre LIKE '%$q%';";

        $sql ="SELECT id, nombre, activo FROM unir.losnombres WHERE 1 ORDER BY nombre";

		if (!$result = mysqli_query($con, $sql)){

			$info[] = array (
				'id' => 0,
	 			'success' => false,
	 			'elid' => 0,
	 			'error' => mysqli_error($con)
	 		 );

	 		echo json_encode(array('info' => $info));

			die();

		}

		else{

			while($row = mysqli_fetch_array($result)){

				$elid = $row['id'];
				$nombre = $row['nombre'];
                $activo = $row['activo'];

				$data[] = array(

					'elid' => $elid*1,
                    'nombre' => $nombre,
                    'activo' => $activo*1

				);

	    	}

			echo json_encode(
				array(
					"status" => true,
					  "error" => null,
					  "data" => array(
						  "nombres" => $data
					)
				)
			);

		}

		mysqli_free_result($result);
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
