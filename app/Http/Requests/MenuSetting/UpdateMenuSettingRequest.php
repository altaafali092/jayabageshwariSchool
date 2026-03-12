<?php

namespace App\Http\Requests\MenuSetting;

use App\Enums\MenuTypeEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;

class UpdateMenuSettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'menu_id' => ['nullable', Rule::exists('menu_settings', 'id')->withoutTrashed()],
            'menuable_id' => ['nullable'],
            'title' => ['required', 'string', 'max:255'],
            'slug' => [
                'nullable',
                'alpha_dash',
                Rule::unique('menu_settings', 'slug')->ignore($this->menuSetting),
            ],
            'position' => ['nullable', 'integer'],
            'menu_type' => ['required', new Enum(MenuTypeEnum::class)],
            'menu_url' => ['nullable', 'url'],
        ];
    }
}
