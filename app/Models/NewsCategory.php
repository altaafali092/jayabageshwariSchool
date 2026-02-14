<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NewsCategory extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
    ];
    public $casts = [
        'status' => 'boolean',
    ];

    public function newsEvents()
    {
        return $this->hasMany(NewsEvent::class);
    }
}
