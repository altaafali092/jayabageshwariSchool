<?php

namespace App\Http\Requests\NewsAndEvents\NewsEvent;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateNewsEventRequest extends FormRequest
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
        $newsEvent = $this->route('news_event');
        return [
            'category' => ['required', 'string'],
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'alpha_dash', Rule::unique('news_events', 'slug')->ignore($newsEvent->id)->withoutTrashed()],
            'image' => ['nullable', 'array', 'min:1'],
            'image.*' => ['image', 'mimes:jpeg,png,jpg,gif,webp', 'max:2048'],
            'description' => ['required', 'string'],
            'event_date' => ['nullable', 'date'],
            'event_time' => ['nullable', 'string'],
            'event_location' => ['nullable', 'string'],
        ];
    }
}
