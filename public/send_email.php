<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Assurez-vous que le chemin est correct

$mail = new PHPMailer(true);

try {
    // Paramètres du serveur SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.n0c.com'; // Le serveur SMTP
    $mail->SMTPAuth = true;
    $mail->Username = 'contact-form@fablabmoanda.com'; // Votre adresse e-mail
    $mail->Password = 'TE0?1EtoT?f=?f4a13'; // Votre mot de passe
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Utiliser TLS ou SSL si nécessaire
    $mail->Port = 587; // Le port SMTP (587 pour TLS, 465 pour SSL)

    // Destinataires
    $mail->setFrom('contact-form@fablabmoanda.com', 'Fablab Moanda');
    $mail->addAddress('contact-form@fablabmoanda.com'); // Adresse e-mail de destination

    // Contenu
    $mail->isHTML(true);
    $mail->Subject = 'Nouveau message de ' . $_POST['firstAndLastName'];
    $mail->Body    = 'Nom: ' . $_POST['firstAndLastName'] . '<br>' .
                     'Téléphone: ' . $_POST['phone'] . '<br>' .
                     'Email: ' . $_POST['email'] . '<br>' .
                     'Commentaire: ' . $_POST['comment'];

    // Envoyer l'e-mail
    $mail->send();
    echo 'Votre message a été envoyé avec succès.';
} catch (Exception $e) {
    echo "L'envoi du message a échoué. Erreur: {$mail->ErrorInfo}";
}
?>