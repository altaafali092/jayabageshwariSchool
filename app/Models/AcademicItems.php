<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicItems extends Model
{
    use HasFactory, FileTrait;
    protected $fillable = [
        'academic_section_id',
        'title',
        'description',
        'icon',
        'image',
        'meta_key',
        'meta_value',
        'sort_order',
    ];

    public function image(): Attribute
    {
        return  $this->castingFile(defaultPath: 'AcademicItems');
    }

    public function academicSection()
    {
        return $this->belongsTo(AcademicSection::class);
    }
}
