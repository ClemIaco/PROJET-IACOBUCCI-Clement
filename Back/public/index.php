<?php

use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . "/..");
$dotenv->load();

$app = AppFactory::create();
$app->addBodyParsingMiddleware();

$routes = require __DIR__ . '/../router.php';
$routes($app);

$app->run();