<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'event_id' => Event::all()->random(),
            'name' => $this->faker->word,
            'weight' => $this->faker->randomDigit,
            'age' => $this->faker->numberBetween(1, 100),
            'gender' => $this->faker->randomElement(['male', 'female']),
            'type' => $this->faker->randomElement(['individual', 'group']),
        ];
    }
}
