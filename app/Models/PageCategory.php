<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageCategory extends Model
{
    use HasFactory, FileTrait;
    protected $fillable = [
        'title',
        'slug',
        'image',
        'description',
        'status',
    ];
    protected $casts = [
        'status' => 'boolean',
    ];

    public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'PageCategory');
    }

    // public function pages()
    // {
    //     return $this->hasMany(Page::class);
    // }
}
