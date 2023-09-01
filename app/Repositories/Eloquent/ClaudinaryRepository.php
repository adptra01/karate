<?php

namespace App\Repositories\Eloquent;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Repositories\Interfaces\ClaudinaryRepositoryInterface;
use App\Models\Claudinary;

class ClaudinaryRepository extends Eloquent implements ClaudinaryRepositoryInterface{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected $model;

    public function __construct(Claudinary $model)
    {
        $this->model = $model;
    }

    // Write something awesome :)
}
