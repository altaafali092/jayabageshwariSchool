<?php

namespace App\Enums;

use App\Traits\EnumTrait;

enum CardTypeEnum: string
{
    use EnumTrait;

    case CARD = 'Card';
    case DESCRIPTION = 'Description';


    public function label(): string
    {
        return self::getLabel($this);
    }

    public static function getLabel(self $value): string
    {
        return match ($value) {
            self::CARD => __('Card'),
            self::DESCRIPTION => __('Description'),
        };
    }
}
