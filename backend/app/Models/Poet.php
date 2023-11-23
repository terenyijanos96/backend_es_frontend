<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Poet extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'birth_year',
    ];
}
