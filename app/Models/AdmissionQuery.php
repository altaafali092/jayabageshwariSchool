<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AdmissionQuery extends Model
{
    use HasFactory, SoftDeletes, FileTrait;

    protected $fillable = [
        'full_name',
        'date_of_birth',
        'gender',
        'grade_applying_for',
        'nationality',
        'father_name',
        'mother_name',
        'parent_phone',
        'parent_email',
        'parent_address',
        'previous_school_name',
        'previous_last_grade',
        'medical_info',
        'require_attend',
        'remarks',
        'documents',
    ];

    protected $casts = [
        'date_of_birth' => 'date',
    ];
    public function documents(): Attribute
    {
        return $this->castingFile(defaultPath: 'admission-query-documents');
    }
}
