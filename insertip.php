<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {//Check it is comming from a form

	//mysql credentials
	$mysql_host = "localhost";
	$mysql_username = "admin";
	$mysql_password = "lcwins";
	$mysql_database = "nitmundelegates";

  $name = $_POST['Name'];
  $email = $_POST['Email'];
  $phonenumber = $_POST['Phone Number'];
  $college = $_POST['Name'];
  $comm1 = $_POST['Comm1'];
  $cp1 = $_POST['Country/Party1'];
  $comm2 = $_POST['Comm2'];
  $cp2 = $_POST['Country/Party2'];
  $comm3 = $_POST['Comm3'];
  $cp3 = $_POST['Country/Party3'];
  $pe = $_POST['Previous Experiences'];


	//Open a new connection to the MySQL server
	//see https://www.sanwebe.com/2013/03/basic-php-mysqli-usage for more info
	$mysqli = new mysqli($mysql_host, $mysql_username, $mysql_password, $mysql_database);

	//Output any connection error
	if ($mysqli->connect_error) {
		die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
	}

	$statement = $mysqli->prepare("INSERT INTO ip (Name,Email,PhoneNumber,College,Comm1,cp1,Comm2,cp2,Comm3,cp3,PreviousExperiences)
  VALUES (?,?,?,?,?,?,?,?,?,?,?)");
  //echo "hello";
	//bind parameters for markers, where (s = string, i = integer, d = double,  b = blob)

  if (!$statement->bind_param("sssssssssss", $name, $email, $phonenumber, $college, $comm1, $cp1, $comm2, $cp2, $comm3, $cp3, $pe)) {
    die( "Error in bind_param: (" .$conn->errno . ") " . $conn->error); }

	//$statement->bind_param('sssssssssss', $name, $email, $mobile, $phonenumber, $college, $comm1, $cp1, $comm2, $cp2, $comm3, $cp3, $phonenumber, $pe);
  //$statement->execute();

  //echo "hello again";
  //bind values and execute insert query

	if($statement->execute()){
		print "Hello " . $name . "!, your details has been saved!";
	}else{
		print $mysqli->error; //show mysql error if any
	}
}
?>
