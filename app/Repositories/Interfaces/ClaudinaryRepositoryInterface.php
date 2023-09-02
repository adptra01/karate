<?php

namespace App\Repositories\Interfaces;

use LaravelEasyRepository\Repository;

interface ClaudinaryRepositoryInterface extends Repository
{

    // Write something awesome :)

    public function uploadClaudinary($requestImage, $getModelName);
    public function deleteClaudinary($mediaId);
}
