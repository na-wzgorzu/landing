<?php
header('Content-Type: text/html; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$path = __DIR__ . '/../cennik/cennik.html';

if (!file_exists($path)) {
    http_response_code(404);
    echo '';
    exit;
}

readfile($path);
