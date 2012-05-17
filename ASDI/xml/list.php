<?php


$file_handle = fopen("js/json.js", "r");

while (!feof($file_handle) ) {

$line_of_text = fgetcsv($file_handle, 1024);

print $line_of_text[12] . $line_of_text[13]. $line_of_text[14] . "<BR>";

}

fclose($file_handle);

?>