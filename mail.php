<?php

$client_id = 'rranurxdknxitn05hv5wzquv8jlbo1tf';

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
curl_setopt($curl, CURLOPT_POSTFIELDS, ['g-recaptcha-response' => $_POST['recaptcha'], 'client_id' => $client_id]);
curl_setopt($curl, CURLOPT_URL, "https://api.lucacastelnuovo.nl/recaptcha/");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);
$result = json_decode($result, true);

if ($result['status'] != 'true') {
    header('HTTP/1.1 400 Bad Request');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode(array('message' => 'Please complete the recaptcha!')));
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
curl_setopt($curl, CURLOPT_POSTFIELDS, ['to' => $to, 'from_name' => 'Personal Site','subject' => $email_subject, 'body' => $email_body, 'client_id' => $client_id]);
curl_setopt($curl, CURLOPT_URL, "https://api.lucacastelnuovo.nl/mail/");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);
$result = json_decode($result, true);

if ($result['status'] != 'true') {
    header('HTTP/1.1 400 Bad Request');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode(array('message' => 'Please fill in all the inputs!')));
}
