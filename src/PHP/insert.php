<?php
require 'connection.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');

$postdata = file_get_contents('php://input');


if(isset($postdata) && !empty($postdata)){
    
    $request = json_decode($postdata);

    $firstName = $request->first_name;
    $lastName = $request->last_name;
    $email = $request->email;

    $sql = "INSERT INTO `users` (`name`,`surename`,`email`) VALUES ('{$firstName}','{$lastName}','{$email}')";

   
    if(mysqli_query($conn, $sql)){
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}
