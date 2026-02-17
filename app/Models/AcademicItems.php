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

    public function academicSections()
    {
        return $this->belongsTo(AcademicSection::class);
    }
}
