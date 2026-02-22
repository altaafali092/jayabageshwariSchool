<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    use HasFactory, FileTrait;

    protected $fillable = [
        'full_name',
        'designation',
        'department',
        'image',
        'phone',
        'email',
        'bio',
        'fb_url',
        'insta_url',
        'linkedin_url',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'staff', field: 'image');
    }
}
