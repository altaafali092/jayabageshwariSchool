<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AcademicItems extends Model
{
    protected $fillable = [
        'academic_section_id',
        'title',
        'description',
        'icon',
        'meta_key',
        'meta_value',
        'sort_order',
    ];

    public function academicSection()
    {
        return $this->belongsTo(AcademicSection::class);
    }
    public function media()
    {
        return $this->morphMany(AcademicMedia::class, 'mediable')
            ->orderBy('sort_order');
    }
}
