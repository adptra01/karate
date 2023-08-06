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

        $this->call([
            RoleSeeder::class,
            PermissionSeeder::class,
            ]);
        User::create([
            'name' => 'testing',
            'email' => 'testing@testing.com',
            'password' => bcrypt('testing'),
            'avatar' => 'https://cdn.dribbble.com/users/4161211/screenshots/14926208/media/43167fd51820bf5330102b428939efaa.png',
            'telp' => '12345678',
            'status' => 1,
            'address' => 'Lorem ipsum dolor sit amet consectetur adipiscing elit vehicula sollicitudin ornare fringilla, aliquet nibh luctus a magnis ante feugiat lacinia massa',
        ])->assignRole('super admin');


    }
}
