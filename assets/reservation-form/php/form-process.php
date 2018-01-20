<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// NUMBER OF PEOPLE
if (empty($_POST["numberpeople"])) {
    $errorMSG .= "Number of people is required ";
} else {
    $numberpeople = $_POST["numberpeople"];
}

// SMOKERS
if (empty($_POST["smoke"])) {
    $errorMSG .= "Smokers/non-smokers is required ";
} else {
    $smoke = $_POST["smoke"];
}

// HOUR
if (empty($_POST["dinehour"])) {
    $errorMSG .= "Hour is required ";
} else {
    $dinehour = $_POST["dinehour"];
}

// DATE
if (empty($_POST["dinedate"])) {
    $errorMSG .= "Hour is required ";
} else {
    $dinedate = $_POST["dinedate"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}


$EmailTo = "youremail@here.com";
$Subject = "New Message Received";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Number of people: ";
$Body .= $numberpeople;
$Body .= "\n";
$Body .= "Smokers: ";
$Body .= $smoke;
$Body .= "\n";
$Body .= "Hour: ";
$Body .= $dinehour;
$Body .= "\n";
$Body .= "date: ";
$Body .= $dinedate;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>