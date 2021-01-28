<?php

$mysqli = new mysqli("localhost", 'root', "", "laravel");

/* check connection */
if (mysqli_connect_error()) {
    printf(mysqli_connect_error());
    exit();
}

$query = "SHOW TABLES";
$result = $mysqli->query($query);

if (empty($result)) echo "Table tidak ditemukan";

while ($row = $result->fetch_array()) {
    if ($row[0] != "migrations") {
        $rows[] = $row[0];
    }
}

$ulang = ',"table": {' . "\n";
for ($i = 0; $i < count($rows); $i++) {
    $fields = "SHOW COLUMNS FROM " . $rows[$i];
    $fields = $mysqli->query($fields);
    
    $ulang .= '"'.$rows[$i] . '":[';
    while ($fieldsrow = $fields->fetch_array()) {
        $ulang .= '"' . $fieldsrow[0] . '",';
    }
    $ulang .= '],';
}
$ulang .= "}}}}";

$fileName = "config/config.json";
$jsonFile = fopen($fileName, "w") or die("Unable to open file!");
fwrite($jsonFile, $ulang);
$str = file_get_contents($fileName);
$str = str_replace(",]", "]", $str);
file_put_contents($fileName, $str);
$str = file_get_contents($fileName);
$str = str_replace(",}", "}", $str);
file_put_contents($fileName, $str);
$str = file_get_contents($fileName);
$str = str_replace('},', ",", $str);
file_put_contents($fileName, $str);