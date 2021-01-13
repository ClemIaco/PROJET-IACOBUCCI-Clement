<?php

namespace App\Controllers;
use Psr\Http\Message\ResponseInterface as Response;
use Firebase\JWT\JWT;

class TokenController{

    public static function createJwt(Response $response) : Response {
        
        $issuedAt = time();
        $payload = [
            "user" => [
                "id" => $_ENV["ADMIN_LOGIN"],
                "email" => $_ENV["ADMIN_EMAIL"],
            ],
            "iat" => $issuedAt,
            "exp" => $issuedAt + 60  // jwt valid for 60 seconds from the issued time
        ];
        $token_jwt = JWT::encode($payload, $_ENV["JWT_SECRET"], "HS256");
        $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
        return $response;
    }
}