<?php

namespace App\Enums;

enum MenuTypeEnum: string
{
    case PARENT = 'parent';
    case PAGE = 'page';
    case STATIC = 'static';
    case ACADEMIC = 'academic';
    case FACILITY = 'facility';


    public static function labels()
    {
        return [

            self::PARENT->value => __('Parent'),
            self::PAGE->value => __('Page'),
            self::STATIC->value => __('Static'),
            self::ACADEMIC->value => __('Academic'),
            self::FACILITY->value => __('Facility'),
        ];
    }
}
