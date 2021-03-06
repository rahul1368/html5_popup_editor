<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'slug' => '',
            'title' => 'required|min:3',
            'id' => 'required',
            'top' => 'required|min:3',
            'left' => 'required|min:3',
            'content' => 'required|min:3',
            'created_at' => 'nullable|date',
        ];
    }
}
