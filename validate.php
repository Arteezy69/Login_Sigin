
<?php  
//LOGIN BACKEND
include("connection.php");


$username=$_POST['username'];
$password=$_POST['password'];



$sql = "SELECT * FROM `loginform` WHERE user='$username' AND pass='$password' ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    echo("Password is correct");
  } else {
    echo "Incorrect Password";
    $conn->close();
  }
?>

