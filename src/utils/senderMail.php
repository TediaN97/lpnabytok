<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["meno"];
  $email = $_POST["email"];
  $telefon = $_POST["telefon"];
  $message = $_POST["sprava"];

  $to = "lp@lpnabytok.sk";
  $subject = "Nová správa od $name";
  $headers = "From: $email";

  // Odošlite e-mail
  mail($to, $subject, $message, $headers);
}
?>