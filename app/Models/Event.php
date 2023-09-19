<?php

namespace App\Models;

use CloudinaryLabs\CloudinaryLaravel\MediaAlly;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory, MediaAlly;

    protected $fillable =
    [
        'name',
        'location',
        'thumbnail',
        'description',
        'status',
        'slug',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function media()
    {
        return $this->morphMany(Media::class, 'medially');
    }

    public function categories()
    {
        return $this->hasMany(Teams::class);
    }
    public function teams()
    {
        return $this->hasMany(Teams::class);
    }
}
