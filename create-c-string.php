<?php

ob_start();
include "html/index.php";
$str = ob_get_contents();
ob_end_clean();

$str= str_replace("\"", '\"', $str);
$str = preg_replace('!\s+!', ' ', $str);

$str=str_replace(PHP_EOL, '', $str);
echo $str;