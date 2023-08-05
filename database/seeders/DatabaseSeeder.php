<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();

        $this->call(
            RoleSeeder::class
        );
        User::create([
            'name' => 'testing',
            'email' => 'testing@testing.com',
            'password' => bcrypt('testing'),
            'image' => 'https://cdn.dribbble.com/users/4161211/screenshots/14926208/media/43167fd51820bf5330102b428939efaa.png',
            'telp' => '12345678',
        ])->assignRole('super admin');


    }
}
