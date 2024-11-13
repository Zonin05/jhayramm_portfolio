<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $firstName = htmlspecialchars($_POST['first-name']);
    $lastName = htmlspecialchars($_POST['last-name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = "your-email@example.com"; // Replace with your email

    // Set the email subject
    $subject = "Message from: $firstName $lastName";

    // Create the email body
    $body = "You have received a new message from your contact form.\n\n";
    $body .= "First Name: $firstName\n";
    $body .= "Last Name: $lastName\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    // Set headers for email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us, $firstName. We will get back to you shortly!";
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
}
?>
