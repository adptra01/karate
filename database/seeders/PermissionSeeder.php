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
        // Membuat peran (roles)
        $superAdminRole = Role::where('name', 'Super Admin')->first();
        $organizerRole = Role::where('name', 'Tournament Management')->first();
        $scoreManagerRole = Role::where('name', 'Score Management')->first();
        $teamManagerRole = Role::where('name', 'Team Management')->first();
        $participantManagerRole = Role::where('name', 'Participant Management')->first();

        // Membuat izin (permissions) untuk User Management
        Permission::create(['name' => 'user_edit']);
        Permission::create(['name' => 'user_delete']);
        Permission::create(['name' => 'user_create']);

        // Membuat izin (permissions) untuk Tournament Management
        Permission::create(['name' => 'tournament_edit']);
        Permission::create(['name' => 'tournament_delete']);
        Permission::create(['name' => 'tournament_create']);

        // Membuat izin (permissions) untuk Score Management
        Permission::create(['name' => 'score_edit']);
        Permission::create(['name' => 'score_read']);
        Permission::create(['name' => 'score_write']);

        // Membuat izin (permissions) untuk Team Management
        Permission::create(['name' => 'team_edit']);
        Permission::create(['name' => 'team_delete']);
        Permission::create(['name' => 'team_create']);

        // Membuat izin (permissions) untuk Participant Management
        Permission::create(['name' => 'participant_edit']);
        Permission::create(['name' => 'participant_delete']);
        Permission::create(['name' => 'participant_create']);

        // Berikan izin kepada peran (roles) sesuai dengan kebutuhan
        $superAdminRole->givePermissionTo([
            'user_edit', 'user_delete', 'user_create',
            'tournament_edit', 'tournament_delete', 'tournament_create',
            'score_edit', 'score_read', 'score_write',
            'team_edit', 'team_delete', 'team_create',
            'participant_edit', 'participant_delete', 'participant_create',
        ]);

        $organizerRole->givePermissionTo([
            'tournament_edit', 'tournament_delete', 'tournament_create',
        ]);

        $scoreManagerRole->givePermissionTo([
            'score_edit', 'score_read', 'score_write',
        ]);

        $teamManagerRole->givePermissionTo([
            'team_edit', 'team_delete', 'team_create',
        ]);

        $participantManagerRole->givePermissionTo([
            'participant_edit', 'participant_delete', 'participant_create',
        ]);

    }
}
