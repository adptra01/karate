<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'name' => 'Super Admin',
                'guard_name' => 'web'
            ],
            [
                'name' => 'Tournament Management',
                'guard_name' => 'web'
            ],
            [
                'name' => 'Score Management',
                'guard_name' => 'web'
            ],
            [
                'name' => 'Participant Management',
                'guard_name' => 'web'
            ],
            [
                'name' => 'Team Management',
                'guard_name' => 'web'
            ],
        ];

        foreach ($roles as $item) {
            Role::create($item);
        }

    }
}
