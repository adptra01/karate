<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionController extends Controller
{
    public function index()
    {
        $permissions = Permission::with('roles:name')->get();

        return view('permissions.index', compact('permissions'));
    }

    public function create() {
        $roles = Role::pluck('name', 'id');

        return view('permissions.create', compact('roles'));
    }

    public function store(Request $request) {
        $data = $request->validate([
            'name' => ['required', 'string', 'unique:permissions'],
            'roles' => ['array'],
        ]);

        $permission = Permission::create($data);

        $permission->syncRoles($request->input('roles'));

        return redirect()->route('permission-editor.permissions.index');
    }

    public function edit(Permission $permission) {
        $roles = Role::pluck('name', 'id');

        return view('permissions.edit', compact('permission', 'roles'));
    }

    public function update(Request $request, Permission $permission)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'unique:permissions,id,' . $permission->id],
            'roles' => ['array'],
        ]);

        $permission->update($data);

        $permission->syncRoles($request->input('roles'));

        return redirect()->route('permission-editor.permissions.index');
    }

    public function destroy(Permission $permission)
    {
        $permission->delete();

        return redirect()->route('permission-editor.permissions.index');
    }
}