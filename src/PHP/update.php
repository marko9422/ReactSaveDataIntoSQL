<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

require 'connection.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){

    $request = json_decode($postdata);

    print_r($request);

    $id = $_GET['id'];
    $firstname = $request->first_name;
    $surename = $request->last_name;
    $email = $request->email;

    $sql = "UPDATE `users` SET `name` = '$firstname', `surename` = '$surename', `email` = '$email' WHERE `users`.`id` = $id";

    if(mysqli_query($conn, $sql)){
        http_response_code(204);
    } else {
        return http_response_code(422);
    }

}
