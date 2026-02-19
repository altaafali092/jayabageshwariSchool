<?php

namespace App\Http\Requests\AcademicLevel;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateAcedamicLevelRequest extends FormRequest
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

        $academicLevel = $this->route('academicLevel'); // route-model binding

        return [
            'title' => ['required', 'string', 'max:255'],

            'slug' => ['required', 'alpha_dash', Rule::unique('academic_levels', 'slug')->withoutTrashed()->ignore($this->$academicLevel)],
            'badge' => ['nullable', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'sort_order' => ['required', 'integer'],
            'image' => ['nullable', 'image', 'max:2048'],
        ];
    }
}
