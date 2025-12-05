<?php
// api/form2.php
// Hero "Get Your Free Quote" form on the home page

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  http_response_code(204);
  exit;
}
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

require __DIR__ . '/../phpmailer/src/PHPMailer.php';
require __DIR__ . '/../phpmailer/src/SMTP.php';
require __DIR__ . '/../phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$phone   = trim($_POST['phone']   ?? '');
$service = trim($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $phone === '' || $service === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'All fields are required on this form.']);
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid email address.']);
  exit;
}

$mail = new PHPMailer(true);

$USE_SMTP   = false;
$SMTP_HOST  = 'smtp.example.com';
$SMTP_USER  = 'no-reply@mas7i.com';
$SMTP_PASS  = 'REPLACE_WITH_PASSWORD';
$SMTP_PORT  = 587;

try {
  if ($USE_SMTP) {
    $mail->isSMTP();
    $mail->Host       = $SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = $SMTP_USER;
    $mail->Password   = $SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $SMTP_PORT;
  } else {
    $mail->isMail();
  }

  $mail->CharSet = 'UTF-8';
  $mail->setFrom('hr@mas7i.com', 'MAS7i Website');
  $mail->addReplyTo($email, $name);

  foreach ([
    'fouzisumbul412@gmail.com',
    'hr@mas7i.com',
    'info@mas7i.com',
    'shehnaaz.noor@gmail.com'
  ] as $rcpt) {
    $mail->addAddress($rcpt);
  }

  $subject = 'New Quote Request (Home Hero Form)';
  $timeStr = date('Y-m-d H:i:s');

  $html  = "<h2>New Quote Request</h2>";
  $html .= "<p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>";
  $html .= "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>";
  $html .= "<p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>";
  $html .= "<p><strong>Service:</strong> " . htmlspecialchars($service) . "</p>";
  $html .= "<p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>";
  $html .= "<hr><p style='font-size:12px;color:#666'>Submitted at: {$timeStr}</p>";

  $alt   = "New Quote Request\n"
         . "Name: {$name}\n"
         . "Email: {$email}\n"
         . "Phone: {$phone}\n"
         . "Service: {$service}\n"
         . "Message:\n{$message}\n"
         . "Submitted at: {$timeStr}\n";

  $mail->isHTML(true);
  $mail->Subject = $subject;
  $mail->Body    = $html;
  $mail->AltBody = $alt;

  $mail->send();
  echo json_encode(['ok' => true, 'message' => 'Sent']);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => $mail->ErrorInfo ?: $e->getMessage()]);
}
