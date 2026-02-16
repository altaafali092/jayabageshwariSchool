<?php

namespace App\Enums;

use App\Traits\EnumTrait;

enum FacilityEnum: string
{
    use EnumTrait;

    case OVERVIEW_MAIN = 'Overview Main';
    case OVERVIEW_LIFESTYLE = 'Overview Lifestyle';
    case HOSTEL_FEATURE = 'Hostel Feature';
    case TRANSPORT_FEATURE = 'Transportation Feature';
    case TRANSPORT_STATS = 'Transportation Stats';
    case SPORTS_ITEM = 'Sports Item';
    case LIBRARY_STATS = 'Library Stats';
    case LIBRARY_IMAGES = 'Library Images';

    public function label(): string
    {
        return self::getLabel($this);
    }

    public static function getLabel(self $value): string
    {
        return match ($value) {
            self::OVERVIEW_MAIN => __('Overview Main'),
            self::OVERVIEW_LIFESTYLE => __('Overview Lifestyle'),
            self::HOSTEL_FEATURE => __('Hostel Feature'),
            self::TRANSPORT_FEATURE => __('Transportation Feature'),
            self::TRANSPORT_STATS => __('Transportation Stats'),
            self::SPORTS_ITEM => __('Sports Item'),
            self::LIBRARY_STATS => __('Library Stats'),
            self::LIBRARY_IMAGES => __('Library Images'),
        };
    }
}
