<?php
// Define recipient email
$to = 'ayanmujahid1234@gmail.com, masoodum123@gmail.com, abdulqadirkhimani136@gmail.com';

// Define sender email
$from = 'info@designatrix.com';

// Get form fields
$name     = isset($_POST['order_fullname']) ? htmlspecialchars(trim($_POST['order_fullname'])) : '';
$email    = isset($_POST['order_email']) ? htmlspecialchars(trim($_POST['order_email'])) : '';
$phone    = isset($_POST['number']) ? htmlspecialchars(trim($_POST['number'])) : '';
$message  = isset($_POST['order_description']) ? htmlspecialchars(trim($_POST['order_description'])) : '';
$ip       = isset($_POST['cip']) ? htmlspecialchars(trim($_POST['cip'])) : '';
$location = isset($_POST['locationURL']) ? htmlspecialchars(trim($_POST['locationURL'])) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    header("Location: thankyou.php?status=error");
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: thankyou.php?status=invalid_email");
    exit;
}

// Compose email
$subject = "New Contact Form Message - Designatrix";

$body  = "You have received a new message:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Message: $message\n";
$body .= "IP Address: $ip\n";
$body .= "Page: $location\n";

// Email headers
$headers  = "From: Designatrix <$from>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email and redirect
if (mail($to, $subject, $body, $headers)) {
    header("Location: thankyou.php?status=success");
    exit;
} else {
    header("Location: thankyou.php?status=failed");
    exit;
}
?>
