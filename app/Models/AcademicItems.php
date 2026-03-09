<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AcademicItems extends Model
{
    use HasFactory, FileTrait;
    protected $fillable = [
        'academic_level_id',
        'title',
        'description',
        'icon',
        'image',
        'meta_key',
        'meta_value',
        'content_type',
        'sort_order',
    ];

    public function image(): Attribute
    {
        return  $this->castingFile(defaultPath: 'AcademicItems');
    }

    public function academicLevel(): BelongsTo
    {
        return $this->belongsTo(AcademicLevel::class);
    }
}
