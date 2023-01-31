<?php
require 'connection.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');

error_reporting(E_ERROR);
$users = [];
$sql = "SELECT * FROM users";

if($results = mysqli_query($conn, $sql)){
    $user = 0;
    while($row = mysqli_fetch_assoc($results)){
        $users[$user]['id'] = $row['id'];
        $users[$user]['name'] = $row['name'];
        $users[$user]['surename'] = $row['surename'];
        $users[$user]['email'] = $row['email'];
        $user++;
    }
    echo json_encode($users);
} else {
    http_response_code(404);
}

?>