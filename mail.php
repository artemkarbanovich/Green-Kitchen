<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$e_mail = $_POST['user_e-mail'];
$subject = $_POST['user_subject'];
$message = $_POST['user_message'];

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'greenkitchen.minsk@gmail.com';
$mail->Password = '1234567890project2020';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->setFrom('greenkitchen.minsk@gmail.com');
$mail->addAddress('greenkitchen.minsk@gmail.com');
$mail->isHTML(true);

$mail->Subject = 'Заявка с Green kitchen';
$mail->Body    = 'Имя: ' .$name . '<br>Почта: ' .$e_mail . '<br>Тема: ' .$subject . '<br>Сообщение: ' .$message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: contacts.html');
}
?>