<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

class TeamFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->company,
            'logo' => $this->faker->imageUrl(),
            'region' => $this->faker->country,
            'manager' => $this->faker->name,
            'telp' => $this->faker->phoneNumber,
            'photo' => $this->faker->imageUrl(),
            'event_id' => Event::all()->random(),
        ];
    }
}
