<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AcademicLevel extends Model
{
    use  HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'badge',
        'subtitle',
        'description',
        'status',
        'sort_order',
    ];
    protected $casts = [
        'status' => 'boolean',
    ];
    public function sections()
    {
        return $this->hasMany(AcademicSection::class);
    }

    // public function media()
    // {
    //     return $this->hasMany(AcademicMedia::class);
    // }
}
