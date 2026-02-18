<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AcademicLevel extends Model
{
    use  HasFactory, SoftDeletes, FileTrait;

    protected $fillable = [
        'title',
        'slug',
        'badge',
        'subtitle',
        'description',
        'status',
        'sort_order',
        'image',
    ];
    protected $casts = [
        'status' => 'boolean',
    ];

    public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'AcademicLevel');
    }

    public function sections()
    {
        return $this->hasMany(AcademicSection::class);
    }
}
