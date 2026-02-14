<?php

namespace App\Http\Requests\NewsAndEvents\NewsEvent;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreNewsEventRequest extends FormRequest
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
            'news_category_id' => ['required', 'exists:news_categories,id,status,1'],
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'alpha_dash', Rule::unique('news_events', 'slug')->withoutTrashed()],
            'image' => ['nullable', 'array', 'min:1'],
            'image.*' => ['image', 'mimes:jpeg,png,jpg,gif,webp', 'max:2048'],
            'description' => ['required', 'string'],
            'event_date' => ['nullable', 'date'],
            'event_time' => ['nullable', 'string'],
            'event_location' => ['nullable', 'string'],
        ];
    }
}
