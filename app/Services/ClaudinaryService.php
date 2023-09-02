<?php

namespace App\Services;

use LaravelEasyRepository\Service;
use App\Repositories\Interfaces\ClaudinaryRepositoryInterface;
use Illuminate\Support\Facades\Log;

class ClaudinaryService extends Service
{

    /**
     * don't change $this->mainInterface variable name
     * because used in extends service class
     */
    protected $mainInterface;

    public function __construct(ClaudinaryRepositoryInterface $mainInterface)
    {
        $this->mainInterface = $mainInterface;
    }

    public function uploadClaudinary($requestImage, $getModelName)
    {
        try {
            return $this->mainInterface->uploadClaudinary($requestImage, $getModelName);
        } catch (\Throwable $th) {
            Log::debug($th->getMessage());
            return null;
        }
    }

    public function deleteClaudinary($mediaId)
    {
        try {
            return $this->mainInterface->deleteClaudinary($mediaId);
        } catch (\Throwable $th) {
            Log::debug($th->getMessage());
            return null;
        }
    }
}
