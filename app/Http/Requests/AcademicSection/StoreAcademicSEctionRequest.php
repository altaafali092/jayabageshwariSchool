<?php

namespace App\Http\Requests\AcademicSection;

use Illuminate\Foundation\Http\FormRequest;

class StoreAcademicSEctionRequest extends FormRequest
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
            'academic_level_id' => ['required', 'exists:academic_levels,id'],
            'key' => ['required', 'string', 'max:50'],
            'title' => ['nullable', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'sort_order' => ['nullable', 'integer'],
            'description' => ['nullable', 'string'],

        ];
    }
}
