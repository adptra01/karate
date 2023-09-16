<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Route;

class UserRequest extends FormRequest
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
        // $userId = Route::current()->parameter('user'); // Assuming your route parameter is named 'user'

        return [
            'name' => 'required|string|max:255|min:5',
            'email' => 'required|email|unique:users,email,' . $this->id,
            'telp' => 'required|string|min:11|max:12',
            'address' => 'nullable|string|max:255|min:6',
            'status' => 'required|in:0,1',
            'role' => 'nullable|required',
        ];
    }
}
