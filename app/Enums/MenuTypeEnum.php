<?php

namespace App\Enums;

enum MenuTypeEnum: string
{
    case PARENT = 'parent';
    case CATEGORY = 'category';
    case STATIC = 'static';
    case ACADEMIC = 'academic';
    case FACILITY = 'facility';


    public static function labels()
    {
        return [

            self::CATEGORY->value => __('Category'),
            self::STATIC->value => __('Static'),
            self::ACADEMIC->value => __('Academic'),
            self::FACILITY->value => __('Facility'),
            self::PARENT->value => __('Parent'),


        ];
    }
}
