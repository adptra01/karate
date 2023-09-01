<?php

namespace App\Repositories\Interfaces;

use LaravelEasyRepository\Repository;

interface UserRepositoryInterface extends Repository
{

    // Write something awesome :)

    public function getBy($condition, $value);
}
