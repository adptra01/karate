<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
       'event_id', 'name', 'weight', 'age', 'gender', 'type'
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
