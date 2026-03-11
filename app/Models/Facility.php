<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Facility extends Model
{
    use SoftDeletes, FileTrait;

    protected $fillable = [
        'facility_category_id',
        'title',
        'slug',
        'description',
        'icon',
        'image',
        'meta_key',
        'meta_value',
        'content_type',
        'sort_order',
        'meta_data',
        'status'
    ];

    protected $casts = [
        'status' => 'boolean',
        'image' => 'array',
    ];

    public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'Facility');
    }

    public function facilityCategory(): BelongsTo
    {
        return $this->belongsTo(FacilityCategory::class);
    }
}
