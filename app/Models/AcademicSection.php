<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AcademicSection extends Model
{
    use HasFactory, SoftDeletes, FileTrait;

    protected $fillable = [
        'academic_level_id',
        'key',
        'title',
        'subtitle',
        'description',
        'sort_order',
        'image',
        'status',
    ];

    public function academicLevel()
    {
        return $this->belongsTo(AcademicLevel::class);
    }

    public function academicItem()
    {
        return $this->hasMany(AcademicItems::class);
    }

    public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'AcademicSection');
    }
}
