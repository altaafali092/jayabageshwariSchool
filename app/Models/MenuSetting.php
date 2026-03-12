<?php

namespace App\Models;

use App\Enums\MenuTypeEnum;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MenuSetting extends Model
{
    use HasFactory;

    protected $with = ['parent'];
    protected $fillable = [
        'menuable_type',
        'menuable_id',
        'title',
        'slug',
        'menu_id',
        'position',
        'menu_type',
        'menu_url',
        'is_active',
        'created_by',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'menu_type' => MenuTypeEnum::class,
    ];

    protected $appends = ['url'];


    public function url(): Attribute
    {
        return Attribute::get(function ($value, array $attributes) {

            return match ($attributes['menu_type']) {

                MenuTypeEnum::PARENT->value => '#',

                MenuTypeEnum::ACADEMIC->value =>
                route('academicsShow', ['academicLevel' => $attributes['slug']]),

                MenuTypeEnum::STATIC->value =>
                route('staticPage', $attributes['slug']),

                MenuTypeEnum::FACILITY->value =>
                route('facilities', ['facilityCategory' => $attributes['slug']]),

                default => '#',
            };
        });
    }

    protected static function booted(): void
    {
        static::saving(function ($menuSetting) {
            $menuSetting->loadMissing('menuable');
            if ($menuSetting->menu_type === 'static') {
                $menuSetting->menu_url = route('staticPage', ['slug' => $menuSetting->slug]);
            }
            if ($menuSetting->menu_type === MenuTypeEnum::ACADEMIC->value && $menuSetting->menuable) {
                $menuSetting->menu_url = route('academicsShow', [
                    'academicLevel' => $menuSetting->menuable->name // or use slug if your route uses slug
                ]);
            }
            if ($menuSetting->menu_type === MenuTypeEnum::FACILITY->value && $menuSetting->menuable) {
                $menuSetting->menu_url = route('facilities', [
                    'facilityCategory' => $menuSetting->menuable->name // or use slug if your route uses slug
                ]);
            }
        });
    }


    public function parent(): BelongsTo
    {
        return $this->belongsTo(MenuSetting::class, 'menu_id');
    }

    public function children(): HasMany
    {
        return $this->hasMany(MenuSetting::class, 'menu_id');
    }

    public function childrenRecursive(): HasMany
    {
        return $this->children()->with('childrenRecursive');
    }

    public function menuable()
    {
        return $this->morphTo(__FUNCTION__, 'menuable_type', 'menuable_id');
    }
}
