
<?php  
//SIGNUP BACKEND
include("connection.php");


$username=$_POST['user'];
$pass=$_POST['pass'];
$confirm_pass=$_POST['confirm_pass'];

if($pass !=$confirm_pass)
{
    echo("Password Not matched");
}
else
{
    $sql = "INSERT INTO `loginform`(`user`, `pass`) VALUES ('$username','$pass')";
    
    if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
    
}




?>
