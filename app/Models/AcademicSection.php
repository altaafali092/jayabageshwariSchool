<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AcademicSection extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'academic_level_id',
        'key',
        'title',
        'subtitle',
        'description',
        'sort_order',
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

    public function media()
    {
        return $this->morphMany(AcademicMedia::class, 'mediable')
            ->orderBy('sort_order');
    }
}
