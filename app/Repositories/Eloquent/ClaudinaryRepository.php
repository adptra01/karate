<?php

namespace App\Repositories\Eloquent;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Repositories\Interfaces\ClaudinaryRepositoryInterface;
use App\Models\Media;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class ClaudinaryRepository extends Eloquent implements ClaudinaryRepositoryInterface
{

    /**
     * Model class to be used in this repository for the common methods inside Eloquent
     * Don't remove or change $this->model variable name
     * @property Model|mixed $model;
     */
    protected $model;

    public function __construct(Media $model)
    {
        $this->model = $model;
    }

    // Write something awesome :)
    public function uploadClaudinary($requestImage, $getModelName)
    {
        $result = Cloudinary::upload($requestImage->getRealPath(), ['public_id' => 'img' . rand()]);

        $media = new Media([
            'file_url' => $result->getSecurePath(),
            'file_name' => $result->getPublicId(),
            'file_type' => $result->getExtension(),
            'size' => $result->getSize(),
        ]);

        $getModelName->media()->save($media);

        return $result;
    }

    public function deleteClaudinary($getMediaId)
    {
        $mediaId = Media::find($getMediaId);
        Cloudinary::destroy($mediaId->file_name);
        $mediaId->delete();
    }
}
