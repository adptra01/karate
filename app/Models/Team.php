<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'logo', 'region', 'event_id'
    ];

    public function media()
    {
        return $this->morphMany(Media::class, 'medially');
    }

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
