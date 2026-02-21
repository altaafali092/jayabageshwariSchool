<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfficeSetting extends Model
{
    use HasFactory, FileTrait;

    protected $fillable = [
        'office_name',
        'office_description',
        'office_logo',
        'office_address',
        'office_email',
        'office_phone',
        'office_phone_2',
        'gmap_url',
        'yt_url',
        'fb_url',
        'insta_url',
        'titok_url',
    ];

    public function officeLogo(): Attribute
    {
        return $this->castingFile(defaultPath: 'office-settings', field: 'office_logo');
    }
}
