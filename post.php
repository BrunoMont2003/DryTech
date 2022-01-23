<?php

$nombres = $_POST['nombre'];
$apellidos = $_POST['apellido'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$lavanderia = $_POST['company'];
$cargo = $_POST['job'];


$cn = new mysqli("localhost:3307", "root", "", "drytech");
$cn->query("insert into demo values (null, '{$nombres}', '{$apellidos}', '{$correo}', '{$telefono}', '{$lavanderia}', '{$cargo}');");
$cn->close();