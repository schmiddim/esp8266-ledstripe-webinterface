<?php


$str=file_get_contents('index.html');

$str= str_replace("\"", '\"', $str);
$str=str_replace(PHP_EOL, '', $str);
echo $str;