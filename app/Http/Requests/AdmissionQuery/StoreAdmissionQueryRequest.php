<?php

namespace App\Http\Requests\AdmissionQuery;

use Illuminate\Foundation\Http\FormRequest;

class StoreAdmissionQueryRequest extends FormRequest
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
            'full_name' => ['required', 'string', 'max:255'],
            'date_of_birth' => ['required', 'date'],
            'gender' => ['required', 'string', 'max:255'],
            'grade_applying_for' => ['required', 'string', 'max:255'],
            'nationality' => ['required', 'string', 'max:255'],
            'father_name' => ['required', 'string', 'max:255'],
            'mother_name' => ['required', 'string', 'max:255'],
            'parent_phone' => ['required', 'string', 'max:255'],
            'parent_email' => ['required', 'string', 'max:255'],
            'parent_address' => ['required', 'string', 'max:255'],
            'previous_school_name' => ['required', 'string', 'max:255'],
            'previous_last_grade' => ['required', 'string', 'max:255'],
            'medical_info' => ['nullable', 'string'],
            'require_attend' => ['nullable', 'string'],
            'remarks' => ['nullable', 'string'],
            'documents' => ['nullable', 'array'],
            'documents.*' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,pdf', 'max:2048'],
        ];
    }
}
