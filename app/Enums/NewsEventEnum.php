<?php

namespace App\Enums;

use App\Traits\EnumTrait;

enum NewsEventEnum: string

{
    use EnumTrait;

    case NEWS = 'News';
    case EVENT = 'Event';
    case NOTICE = 'Notice';

    public function label(): string
    {
        return self::getLabel($this);
    }

    public static function getLabel(self $value): string
    {
        return match ($value) {
            self::NEWS => __('News'),
            self::EVENT => __('Event'),
            self::NOTICE => __('Notice'),
        };
    }
}
