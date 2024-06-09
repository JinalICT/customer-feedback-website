<?php

session_start();
 

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}
?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome Admin</title>
   
    <title>Submit Feedback</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome Admin</h1>


    <h1>Feedback report</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Feedback</th>
                <th>Submitted At</th>
            </tr>
        </thead>
        <tbody>
            <?php
            require 'config.php';

            $sql = "SELECT id, name, email, feedback, submitted_at FROM feedback ORDER BY submitted_at DESC";
            $result = $link->query($sql);

            if ($result->num_rows > 0) {
              
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    echo "<td>" . htmlspecialchars($row['name'], ENT_QUOTES, 'UTF-8') . "</td>";
                    echo "<td>" . htmlspecialchars($row['email'], ENT_QUOTES, 'UTF-8') . "</td>";
                    echo "<td>" . htmlspecialchars($row['feedback'], ENT_QUOTES, 'UTF-8') . "</td>";
                    echo "<td>" . $row['submitted_at'] . "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='5'>No feedback available</td></tr>";
            }

            $link->close();
            ?>
        </tbody>
    </table>




    <p>
        <a href="reset-password.php" class="btn btn-warning">Reset Your Password</a>
        <a href="logout.php" class="btn btn-danger ml-3">Sign Out of Your Account</a>
    </p>
</body>
</html>