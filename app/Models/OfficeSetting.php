<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use phpDocumentor\Reflection\Types\Boolean;

class OfficeSetting extends Model
{
    use HasFactory, FileTrait;


    protected $appends = ['computed_is_open'];

    protected $fillable = [
        'office_name',
        'office_description',
        'office_logo',
        'office_address',
        'office_email',
        'office_phone',
        'office_phone_2',
        'office_hour',
        'gmap_url',
        'yt_url',
        'fb_url',
        'insta_url',
        'titok_url',
        'is_open',
        'is_admission',
        'key_contact_person_id',
        'key_contact_secperson_id',
        "office_from",
        "office_to"

    ];
    protected $casts = [
        'is_open' => 'boolean',
        'is_admission' => 'boolean',
    ];


    public function getComputedIsOpenAttribute()
    {
        $today = now()->dayOfWeek; // 6 = Saturday
        return $today !== 6 && $this->is_open;
    }

    public function officeLogo(): Attribute
    {
        return $this->castingFile(defaultPath: 'office-settings', field: 'office_logo');
    }
    public function keyContactPerson()
    {
        return $this->belongsTo(Staff::class, 'key_contact_person_id');
    }
    public function keyContactSecPerson()
    {
        return $this->belongsTo(Staff::class, 'key_contact_secperson_id');
    }
}
