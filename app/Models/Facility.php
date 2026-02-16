<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Facility extends Model
{
    use SoftDeletes, FileTrait;

    protected $fillable = [
        'title',
        'slug',
        'category',
        'description',
        'image',
        'icon',
        'position',
        'status',
        'meta_data'
    ];

    protected $casts = [
        'meta_data' => 'array',
        'status' => 'boolean',
        'image' => 'array',

    ];

    public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'Facility');
    }

    public function icon(): Attribute
    {
        return $this->castingFile(defaultPath: 'Facility');
    }
}
