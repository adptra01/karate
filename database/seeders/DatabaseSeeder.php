<?php

namespace Database\Seeders;

use App\Models\Event;
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
        Event::factory(10)->create();

        $this->call([
            RoleSeeder::class,
            PermissionSeeder::class,
            UserSeeder::class,
        ]);

        Event::factory()
            ->count(10)
            ->create()
            ->each(function ($event) {
                $users = User::factory()->count(rand(1, 3))->create();
                $event->users()->attach($users);
            });
    }
}
