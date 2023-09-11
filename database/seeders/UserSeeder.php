<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = [
            'name' => 'testing',
            'email' => 'testing@testing.com',
            'password' => bcrypt('testing'),
            'avatar' => 'https://cdn.dribbble.com/users/4161211/screenshots/14926208/media/43167fd51820bf5330102b428939efaa.png',
            'telp' => '12345678900',
            'status' => 1,
            'address' => 'Lorem ipsum dolor sit amet consectetur adipiscing elit vehicula sollicitudin ornare fringilla, aliquet nibh luctus a magnis ante feugiat lacinia massa',
        ];

        $user = [
            'name' => 'testingUser',
            'email' => 'testing1@testing1.com',
            'password' => bcrypt('testing1'),
            'avatar' => 'https://cdn.dribbble.com/users/4161211/screenshots/14926208/media/43167fd51820bf5330102b428939efaa.png',
            'telp' => '12345679090',
            'status' => 0,
            'address' => 'Lorem ipsum dolor sit amet consectetur adipiscing elit vehicula sollicitudin ornare fringilla, aliquet nibh luctus a magnis ante feugiat lacinia massa',
        ];

        $user1 = User::create($admin);
        $user2 = User::create($user);

        $user1->assignRole('admin');
        $user2->assignRole('organizer');
    }
}
