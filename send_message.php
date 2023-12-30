<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "contact@ayberkyavas.com";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $email_content = "Ad: $fname $lname\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Konu: $subject\n\n";
    $email_content .= "Mesaj:\n$message";

    if (mail($to, $subject, $email_content, $headers)) {
        echo "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.";
    } else {
        echo "Mesaj gönderirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.";
    }
} else {

    header("HTTP/1.1 403 Forbidden");
    exit("Bu sayfaya doğrudan erişim yasaktır.");
}

?>
