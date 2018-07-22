<?php

$client_id = '62394ddd8576b6642dc254c86c137942';
$client_token_mail = 'eaaa4e78ca63426a6ca9861fa19ce14e3b126fc0f5d38fe8dfe8a3544f4873552c83bb8b8687cb889c7e9911e9d16ff052051cb0c2d57ff4d99ba450874f8a311c8719478cc34b2b0b05a2d5355c8bddfb9a25e09c21558895764229f17cda77658a325b97f879d34462580cdd0f3634b5ac8496e965040bdc3c28ab69333db8';
$client_token_recaptcha = 'bc189a48f48c0e6393c401552556783f3482a04c4df730b569df2435dcddb1aa28e9767f8eaed180f18e05e0ef5ccfdfee56e53903caf79bda9d65a8d43e481ca00d95b4f67a3a932a673102086725e61ef0b9b3af44f64dbedac4d42205a86973b4f80ba1846abb41264b3afd929ff94397d292daf2489c82504b3f71c4c5bf';

//Check valid email
$email_address = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

// Check for empty fields for the captcha
if (empty($_POST['recaptcha'])) {
    header('HTTP/1.1 400 Bad Request');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode(array('message' => 'Please complete the recaptcha!')));
}

// Check for empty fields for the email
if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || !$email_address) {
    header('HTTP/1.1 400 Bad Request');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode(array('message' => 'Please fill in all the inputs!')));
}

//Check captcha
$curl = curl_init();
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, ['g-recaptcha-response' => $_POST['recaptcha']]);
curl_setopt($curl, CURLOPT_URL, "https://api.lucacastelnuovo.nl/recaptcha/index.php?client_id={$client_id}&client_token={$client_token_recaptcha}");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);
$result = json_decode($result, true);

if ($result['status'] != 'true') {
    header('HTTP/1.1 400 Bad Request');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode(array('message' => 'Please complete the recaptcha!2')));
}

//Check if email valid
if ($email_address === false) {
    echo 'Invalid email';
    exit(1);
}

//Assign var from post
$name = $_POST['name'];
$message = $_POST['message'];
$ip_addres = $_SERVER['REMOTE_ADDR'];

//Add text to vars
$to = 'ltcastelnuovo@gmail.com';
$email_subject = "Personal Site contact:  {$name}";
$email_body = "<html><body>You have received a new message from your website contact form.<br /><br />"."Here are the details:<br /><br />Name: {$name}<br /><br />Email: {$email_address}<br /><br />IP: {$ip_addres}<br /><br />Message:<br />{$message}</body></html>";

$curl = curl_init();
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, ['to' => $to, 'from_name' => 'Personal Site','subject' => $email_subject, 'body' => $email_body]);
curl_setopt($curl, CURLOPT_URL, "https://api.lucacastelnuovo.nl/mail/index.php?client_id={$client_id}&client_token={$client_token_mail}");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);
$result = json_decode($result, true);

if ($result['status'] != 'true') {
    header('HTTP/1.1 400 Bad Request');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode(array('message' => 'Please fill in all the inputs!')));
}
