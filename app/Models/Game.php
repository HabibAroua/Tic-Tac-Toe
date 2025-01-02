<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    protected $fillable = 
    [
        'played_at',
        'result'
    ];

    protected $hidden = 
    [
        'created_at',
        'updated_at'
    ];
}
