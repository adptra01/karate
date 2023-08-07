<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Illuminate\Support\Str;


class GeneratePassword extends Component
{
    public $name;
    public $password;

    public function updatedName()
    {
        // Remove any spaces from the name and convert to slug
        $slug = Str::slug($this->name, '-');

        // Generate the password with the slug and a random number
        $randomPassword = $slug . rand(1000, 9999);

        $this->password = $randomPassword;
    }

    public function render()
    {
        return view('livewire.generate-password');
    }
}
