<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
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
        'position',
    ];

    protected $casts = [
        'status' => 'boolean',
        'position' => 'integer',
    ];

    public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'PageCategory');
    }

    public function pages(): HasMany
    {
        return $this->hasMany(Page::class, 'category_id');
    }
}
