
<?php
/**
* Скрипт для GET запроса
**/
$htmlFiles = glob("../../*.html"); // glob() поиск нужных файлов и запись в масив 

$array = [];

foreach($htmlFiles as $file) {
    array_push($array, basename($file)); //basename() функция получает названия файла без лишних символов 
}


//   echo var_dump($htmlFiles); 
echo json_encode($array);// отправка в json формате


?>