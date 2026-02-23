<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;



class NewsEvent extends Model
{
    use HasFactory, SoftDeletes, FileTrait;

    protected $fillable = [
        'category',
        'title',
        'slug',
        'description',
        'image',
        'event_date',
        'event_time',
        'event_location',
        'status',
    ];
    protected $casts = [
        'status' => 'boolean',
        'image' => 'array',
    ];



    public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'NewsEvent');
    }

    protected static function booted()

    {
        // When updating & new images uploaded → delete OLD images
        static::updating(function ($model) {
            if (request()->hasFile('image')) {
                deleteFiles($model->getRawOriginal('image'));
            }
        });

        // When deleting → delete images
        static::deleting(function ($model) {
            deleteFiles($model->getRawOriginal('image'));
        });
    }
}
