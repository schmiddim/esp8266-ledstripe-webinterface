<?php


$str=file_get_contents('html/index.html');

$str= str_replace("\"", '\"', $str);
$str = preg_replace('!\s+!', ' ', $str);

$str=str_replace(PHP_EOL, '', $str);
echo $str;