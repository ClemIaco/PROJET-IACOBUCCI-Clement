<?php

namespace App\Controllers;
 
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Firebase\JWT\JWT;
use Product;

class ProductController {

    public function getProducts(Request $request, Response $response, array $args): Response
    {
        $entityManager = DatabaseController::$entityManager;

        $repository = $entityManager->getRepository("Product");
        $dbProducts = $repository->findAll();

        if ($dbProducts == null) {
            $response->getBody()->write(json_encode(["success" => false]));
            return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(204);
        }

        $products = array();

        foreach ($dbProducts as $product) {
            $products[] = [
                "id" => $product->getIdProduct(),
                "title" => $product->getTitle(),
                "price" => $product->getPrice(),
                "description" => $product->getDescription(),
                "urlImage" => $product->getUrlImage()
            ];
        }

        $response->getBody()->write(json_encode($products));
        
        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }
}