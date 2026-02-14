<?php

namespace App\Enums;

use App\Traits\EnumTrait;

enum GalleryEnum: string
{
    use EnumTrait;

    case VIDEO = 'Video';
    case PHOTO = 'Photo';

    public function label(): string
    {
        return self::getLabel($this);
    }

    public static function getLabel(self $value): string
    {
        return match ($value) {
            self::VIDEO => __('Video'),
            self::PHOTO => __('Photo'),
        };
    }
}
