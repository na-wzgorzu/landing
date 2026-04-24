<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$dirs = ['2-house', '2-room-bt', '3-room-bt', '3-room-t', '4-house', '4-room-bt', '5-house'];
$extensions = ['jpg', 'jpeg', 'png', 'webp', 'avif'];

$images = [];

foreach ($dirs as $dir) {
    foreach ($extensions as $ext) {
        $pattern = __DIR__ . '/' . $dir . '/*.' . $ext;
        foreach (glob($pattern) as $file) {
            $images[] = '/' . $dir . '/' . basename($file);
        }
    }
}

sort($images);

echo json_encode($images);
