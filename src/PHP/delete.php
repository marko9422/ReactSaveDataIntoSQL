<?php
header('Access-Control-Allow-Origin: *');

require 'connection.php';

$id = $_GET['id'];

$sql = "DELETE FROM users WHERE `users`.`id` = $id";

if(mysqli_query($conn,$sql)){
    http_response_code(204);
} else {
    return http_response_code(422);
}
