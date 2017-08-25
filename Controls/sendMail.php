<?php

    header("Content-Type: text/plain");

    if (isset($_GET['name']) && isset($_GET['email']) && isset($_GET['message'])) {
        $name = $_GET['name'];
        $email = $_GET['email'];
        $message = $_GET['message'];
        ft_send_email($name, $email, $message);
    }

    function ft_send_email($name, $email, $message) {
        mail("dubesimba31@gmail.com", "Bookings", $message, "FROM: $name email address $email");
    }

?>