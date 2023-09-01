<?php

namespace App\Services;

use LaravelEasyRepository\Service;
use App\Repositories\Interfaces\UserRepositoryInterface;
use Illuminate\Support\Facades\Log;

class UserService extends Service
{

    /**
     * don't change $this->mainInterface variable name
     * because used in extends service class
     * in pack for laravel 9^, this name is user\UserServiceImplement
     */
    protected $mainInterface;

    public function __construct(UserRepositoryInterface $mainInterface)
    {
        $this->mainInterface = $mainInterface;
    }

    // Define your custom methods :)
    public function getBy($condition, $value)
    {
        try {
            return $this->mainInterface->getBy($condition, $value);
        } catch (\Throwable $th) {
            Log::debug($th->getMessage());
            return null;
        }
    }
}
