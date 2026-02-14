<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gallery extends Model
{
    use HasFactory, SoftDeletes, FileTrait;

    protected $fillable = [
        'title',
        'slug',
        'gallery_type',
        'images',
        'video_url',
        'description',
        'status',
    ];


    protected $casts = [
        'images' => 'array',
        'status' => 'boolean'
    ];

    public function images(): Attribute
    {
        return $this->castingFile(defaultPath: 'Gallery');
    }

    protected static function booted()

    {
        // When updating & new images uploaded → delete OLD images
        static::updating(function ($model) {
            if (request()->hasFile('images')) {
                deleteFiles($model->getRawOriginal('images'));
            }
        });

        // When deleting → delete images
        static::deleting(function ($model) {
            deleteFiles($model->getRawOriginal('images'));
        });
    }
}
