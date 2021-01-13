<?php

namespace App\Controllers;

require_once "../bootstrap.php";

class DatabaseController
{
    public static $entityManager;
}

DatabaseController::$entityManager = $entityManager;