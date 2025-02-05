<?php
include "config.php";

$sql = "SELECT * FROM members";
$result = $conn->query($sql);

$members = [];
while ($row = $result->fetch_assoc()) {
    $members[] = $row;
}

echo json_encode($members);
?>
