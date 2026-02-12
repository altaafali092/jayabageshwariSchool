<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle',
        'content',
        'image',
        'notice_date',
        'urgency',
        'cta_text',
        'cta_link',
        'is_active',
        'show_as_popup',
    ];

    protected $casts = [
        'notice_date' => 'date',
        'is_active' => 'boolean',
        'show_as_popup' => 'boolean',
    ];

    /**
     * Scope a query to only include active notices.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to only include notices that should be shown as popups.
     */
    public function scopePopup($query)
    {
        return $query->where('show_as_popup', true);
    }
}
