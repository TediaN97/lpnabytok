<?php
declare(strict_types=1);

// ===== CORS (MUSÍ BYŤ ÚPLNE NAVRCH) =====
$allowedOrigins = [
  'https://lpnabytok.sk',
  'https://www.lpnabytok.sk',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
  header("Access-Control-Allow-Origin: $origin");
  header('Vary: Origin'); // dôležité pre cache/proxy
  header('Access-Control-Allow-Credentials: false');
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
}

// Preflight
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
  http_response_code(204);
  exit;
}

// Bežné odpovede
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

// CORS (ak voláš z lpnabytok.sk na api.lpnabytok.sk)
$allowedOrigin = 'https://lpnabytok.sk';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === $allowedOrigin) {
  header("Access-Control-Allow-Origin: $allowedOrigin");
  header("Access-Control-Allow-Methods: POST, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type");
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

$configPath = __DIR__ . '/../../private/mail-config.php';

if (!file_exists($configPath)) {
  http_response_code(500);
  echo json_encode(['error' => 'Missing mail config']);
  exit;
}

$config = require $configPath;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Prečítaj JSON
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$tel = trim((string)($data['tel'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

// Validácia
if (mb_strlen($name) < 2 || mb_strlen($message) < 5 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid input']);
  exit;
}

// Anti-spam (honeypot voliteľné)
$hp = (string)($data['website'] ?? '');
if ($hp !== '') {
  http_response_code(200);
  echo json_encode(['ok' => true]);
  exit;
}

try {
  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';

  $mail->isSMTP();
  $mail->Host = $config['smtpHost'];
  $mail->SMTPAuth = true;
  $mail->Username = $config['smtpUser'];
  $mail->Password = $config['smtpPass'];
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL/TLS
  $mail->Port = $config['smtpPort'];

  $mail->setFrom($config['smtpFrom'], 'LPnábytok web');
  $mail->addAddress($config['toEmail']);
  $mail->addReplyTo($email, $name);

  $mail->Subject = "Nová správa z webu LPnábytok";
  $mail->Body = "Meno: $name\nEmail: $email\nTel: $tel\n\nSpráva:\n$message";

  $mail->send();

  echo json_encode(['ok' => true]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['error' => 'Email failed']);
}