<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence(3),
            'location' => $this->faker->city(),
            'thumbnail' => 'https://images.unsplash.com/photo-1603210185246-b1662978ea37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGthcmF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format',
            'description' => $this->faker->paragraph(1),
            'status' => rand(0,1),
        ];
    }
}
