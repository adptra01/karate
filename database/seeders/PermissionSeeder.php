<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $admin = Role::find(1);
        $organizer = Role::find(2);
        $operator = Role::find(3);
        $coach = Role::find(4);

        // Mendefinisikan data izin dalam bentuk array
        $permissions = [
            ['name' => 'manage_users'],
            ['name' => 'manage_event'],
            ['name' => 'manage_team'],
            ['name' => 'manage_match'],
        ];

        // Menyimpan data izin ke dalam tabel permissions
        foreach ($permissions as $permission) {
            Permission::create($permission);
        }

        $admin->givePermissionTo([
            'manage_users', 'manage_event', 'manage_team', 'manage_match'
        ]);

        $organizer->givePermissionTo([
            'manage_event',
        ]);

        $operator->givePermissionTo([
            'manage_match'
        ]);

        $coach->givePermissionTo([
            'manage_team',
        ]);
    }
}
