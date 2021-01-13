<?php

use Slim\Interfaces\RouteCollectorProxyInterface as Group;
use App\Controllers\HomeController;
use App\Controllers\UserController;
use App\Middlewares\CorsMiddleware;
use Slim\App;
use Tuupola\Middleware\JwtAuthentication;

return function (App $app) {

    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        return $response;
    });

    $app->add(CorsMiddleware::class);

    $app->get('/', HomeController::class . ":home");   // Ou "App\Controllers\HomeController:home au lieu de HomeController::class

    $app->group('/user', function (Group $group) {
        $group->post('/login', UserController::class . ":login");
        $group->post('/register', UserController::class . ":register");
        $group->get('/{login}', UserController::class . ":getCustomer");
    });

    $options = [
        "attribute" => "token",
        "header" => "Authorization",
        "regexp" => "/Bearer\s+(.*)$/i",
        "secure" => false,
        "algorithm" => ["HS256"],
        "secret" => $_ENV['JWT_SECRET'],
        "path" => ["/"],
        "ignore" => ["/user/login","/user/register"],
        "error" => function ($response, $arguments) {
            $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
            $response = $response->withStatus(401);
            return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
        }
    ];

    //Chargement du middleware
    $app->add(new JwtAuthentication($options));
};