<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Page extends Model
{
    use HasFactory, FileTrait, SoftDeletes;

    protected $fillable = [
        'category_id',
        'title',
        'slug',
        'images',
        'description',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
        'images' => 'array',
    ];

    public function category()
    {
        return $this->belongsTo(PageCategory::class);
    }
    public function images(): Attribute
    {
        return $this->castingFile(defaultPath: 'Page');
    }
}
