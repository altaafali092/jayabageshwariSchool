<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class slider extends Model
{
    use HasFactory, FileTrait;
    protected $fillable = [
        'title',
        'image',
        'badge',
        'description',
        'status',
    ];
    protected $casts = [

        'status' => 'boolean',
    ];
    public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'Slider');
    }
    
}
