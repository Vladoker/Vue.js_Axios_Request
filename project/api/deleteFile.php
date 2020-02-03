<?php
$_POST = json_decode(file_get_contents("php://input"), true);

$newFile = "../../" . $_POST["deletePage"]; // получаем названия от пользователя и дописываем расширения и путь

if(file_exists($newFile)) {
    unlink($newFile);
} else {
    header("HTTP/1.0 400 Bad Request"); //Отправка пользователю ошибку
}

?>