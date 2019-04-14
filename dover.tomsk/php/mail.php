<?php

$recepient = "Doveryayev@yandex.ru";
$sitename = "ДоверяевЪ";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$address = trim($_POST["address"]);
$message = "Имя: $name \nТелефон: $phone \nАдрес: $address";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");