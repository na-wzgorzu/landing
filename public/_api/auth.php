<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$configPath = __DIR__ . '/config.json';
$config = json_decode(file_get_contents($configPath), true);
$body = json_decode(file_get_contents('php://input'), true);
$action = $body['action'] ?? '';

if ($action === 'login') {
    if ($body['username'] === $config['username'] && $body['password'] === $config['password']) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(401);
        echo json_encode(['error' => 'Nieprawidłowy login lub hasło']);
    }
    exit;
}

if ($action === 'change-password') {
    if ($body['username'] !== $config['username'] || $body['currentPassword'] !== $config['password']) {
        http_response_code(401);
        echo json_encode(['error' => 'Nieprawidłowe aktualne hasło']);
        exit;
    }
    $newPassword = $body['newPassword'] ?? '';
    if (strlen($newPassword) < 4) {
        http_response_code(400);
        echo json_encode(['error' => 'Hasło musi mieć co najmniej 4 znaki']);
        exit;
    }
    $config['password'] = $newPassword;
    file_put_contents($configPath, json_encode($config, JSON_PRETTY_PRINT));
    echo json_encode(['success' => true]);
    exit;
}

http_response_code(400);
echo json_encode(['error' => 'Nieznana akcja']);
