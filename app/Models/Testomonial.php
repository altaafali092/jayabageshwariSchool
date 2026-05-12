<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Testomonial extends Model
{
    use HasFactory, SoftDeletes, FileTrait;

    protected $fillable = [
        'name',
        'designation',
        'image',
        'description',
        'star',
        'is_active',
    ];

    protected $casts = [
        'star' => 'integer',
        'is_active' => 'boolean',
    ];

    public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'testomonial', field: 'image');
    }
}
