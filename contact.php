<?php
/**
 * Lead Handler for Delta Greenville
 * Sends form data to javheri80@gmail.com
 */

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Recipient
    $to = "javheri80@gmail.com";
    $subject = "New Lead: Delta Greenville Website";

    // 2. Data Retrieval & Sanitization
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : "N/A";
    $phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : "N/A";
    $email = isset($_POST['email']) ? strip_tags(trim($_POST['email'])) : "N/A";
    $config = isset($_POST['config']) ? strip_tags(trim($_POST['config'])) : "N/A";

    // 3. Message Formatting
    $message = "You have received a new lead from the Delta Greenville website.\n\n";
    $message .= "--------------------------------------------------\n";
    $message .= "Name:          " . $name . "\n";
    $message .= "Phone:         " . $phone . "\n";
    $message .= "Email:         " . $email . "\n";
    $message .= "Configuration: " . $config . "\n";
    $message .= "--------------------------------------------------\n\n";
    $message .= "Sent on: " . date("d-M-Y H:i:s") . "\n";

    // 4. Headers
    $headers = "From: leads@deltathane.com\r\n";
    $headers .= "Reply-To: " . ($email != "N/A" ? $email : "no-reply@deltathane.com") . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 5. Send Mail
    // Note: mail() depends on server SMTP configuration
    @mail($to, $subject, $message, $headers);

    // 6. Redirect to Thank You Page
    header("Location: thank-you.html");
    exit();
} else {
    // Redirect back if accessed directly
    header("Location: index.html");
    exit();
}
?>
