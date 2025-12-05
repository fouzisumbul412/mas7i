<?php
// api/form1.php
// Receives: name, email, phone, service, message
// Sends to 4 recipients using PHPMailer (no Composer)

// ---- CORS & JSON headers (handy for local dev/Vite proxy) ----
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  http_response_code(204);
  exit;
}
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

// ---- Include PHPMailer from the folder you downloaded ----
require __DIR__ . '/../phpmailer/src/PHPMailer.php';
require __DIR__ . '/../phpmailer/src/SMTP.php';
require __DIR__ . '/../phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ---- Read & validate inputs ----
$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$phone   = trim($_POST['phone']   ?? '');
$service = trim($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Missing required fields (name, email, message).']);
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid email address.']);
  exit;
}

// ---- Configure mailer ----
$mail = new PHPMailer(true);

// Set to true and fill details if your host requires SMTP:
$USE_SMTP   = false;       // <<< flip to true if you want SMTP
$SMTP_HOST  = 'smtp.example.com';
$SMTP_USER  = 'no-reply@mas7i.com';
$SMTP_PASS  = 'REPLACE_WITH_PASSWORD';
$SMTP_PORT  = 587;         // 465 for SMTPS, 587 for STARTTLS

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
    $mail->isMail(); // use server's mail() / sendmail
  }

  $mail->CharSet = 'UTF-8';
  $mail->setFrom('hr@mas7i.com', 'MAS7i Website'); // domain sender
  $mail->addReplyTo($email, $name);                // visitor as reply-to

  // Recipients (all 4)
  foreach ([
    'fouzisumbul412@gmail.com',
    'hr@mas7i.com',
    'info@mas7i.com',
    'shehnaaz.noor@gmail.com'
  ] as $rcpt) {
    $mail->addAddress($rcpt);
  }

  // Build message
  $subject = 'New Contact Form Submission (Contact Page)';
  $timeStr = date('Y-m-d H:i:s');

  $html  = "<h2>New Contact Form Submission</h2>";
  $html .= "<p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>";
  $html .= "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>";
  if ($phone !== '')   $html .= "<p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>";
  if ($service !== '') $html .= "<p><strong>Service:</strong> " . htmlspecialchars($service) . "</p>";
  $html .= "<p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>";
  $html .= "<hr><p style='font-size:12px;color:#666'>Submitted at: {$timeStr}</p>";

  $alt   = "New Contact Form Submission\n"
         . "Name: {$name}\n"
         . "Email: {$email}\n"
         . ($phone ? "Phone: {$phone}\n" : '')
         . ($service ? "Service: {$service}\n" : '')
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
