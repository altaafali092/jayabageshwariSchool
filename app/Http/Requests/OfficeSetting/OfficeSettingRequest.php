<?php

namespace App\Http\Requests\OfficeSetting;

use Illuminate\Foundation\Http\FormRequest;

class OfficeSettingRequest extends FormRequest
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
            'office_name' => 'required|string|max:255',
            'office_description' => 'nullable|string',
            'office_logo' => 'nullable|image|max:2048',
            'office_address' => 'required|string|max:255',
            'office_email' => 'nullable|email|max:255',
            'office_phone' => 'nullable|string|max:20',
            'office_phone_2' => 'nullable|string|max:20',
            'gmap_url' => 'nullable|url',
            'yt_url' => 'nullable|url',
            'fb_url' => 'nullable|url',
            'insta_url' => 'nullable|url',
            'titok_url' => 'nullable|url',
        ];
    }
}
