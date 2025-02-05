<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "gymdb";

$conn = new mysqli($host, $user, $password, $database);
if ($conn->connect_error) {
    die("Erreur de connexion: " . $conn->connect_error);
}
?>
