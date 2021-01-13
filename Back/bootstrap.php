<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('Europe/Paris');
require_once "vendor/autoload.php";

$isDevMode = true;

$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);

$conn = array(
'host' => $_ENV['DB_HOST'],
'driver' => $_ENV['DB_DRIVER'],
'user' => $_ENV['DB_USER'],
'password' => $_ENV['DB_PASSWORD'],
'dbname' => $_ENV['DB_NAME'],
'port' => $_ENV['DB_PORT']
);

$entityManager = EntityManager::create($conn, $config);