<?php
header('Access-Control-Allow-Origin: *');

require 'connection.php';

$id = $_GET['id'];

$sql = "SELECT * FROM users WHERE id = $id";


$results = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($results);

echo $json = json_encode($row);



exit;