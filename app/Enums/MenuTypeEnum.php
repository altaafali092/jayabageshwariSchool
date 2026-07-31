<?php

namespace App\Enums;

enum MenuTypeEnum: string
{
    case PARENT = 'parent';
    case PAGE = 'page';
    case STATIC = 'static';
   


    public static function labels()
    {
        return [

            self::PARENT->value => __('Parent'),
            self::PAGE->value => __('Page'),
            self::STATIC->value => __('Static'),
           
        ];
    }
}
