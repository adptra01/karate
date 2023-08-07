<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index()
    {
        return view('adm.users.index', [
            'users' => User::latest()->get(),
            'actives' => User::whereStatus(true)->count(),
            'nonActives' => User::whereStatus(false)->count(),
            'roles' => Role::get(),
        ]);
    }

    public function store(UserRequest $request)
    {
       // Handle the avatar file upload
       if ($request->hasFile('avatar')) {
        $avatarPath = $request->file('avatar')->store('avatars', 'public');
        } else {
            $avatarPath = null;
        }

    // Create the new user
    $user = new User();
    $user->name = $request->name;
    $user->email = $request->email;
    $user->telp = $request->telp;
    $user->avatar = $avatarPath;
    $user->address = $request->address;
    $user->status = $request->status;
    $user->password = bcrypt($request->password);
    $user->save();

    // Assign the role to the user
    $role = Role::findOrFail($request->role);
    $user->assignRole($role);

        return back()->with('success', 'berhasil');
    }

    public function show($id)
    {
        return view('adm.users.show', [
            'roles' => Role::get(),
            'user' => User::whereId($id)->first(),
        ]);
    }

    public function update(UserRequest $request, $id)
    {
    // Handle the avatar file upload
    if ($request->hasFile('avatar')) {
        $avatarPath = $request->file('avatar')->store('avatars', 'public');
    } else {
        $avatarPath = null;
    }

    // Update the user
    $user = User::findOrFail($id);
    $user->name = $request->name;
    $user->email = $request->email;
    $user->telp = $request->telp;
    $user->address = $request->address;
    $user->status = $request->status;

    // Update the avatar if it is provided
    if ($avatarPath) {
        $user->avatar = $avatarPath;
    }

    $user->save();

    // Assign the role to the user
    $role = Role::findOrFail($request->role);
    $user->syncRoles([$role]);

    return back()->with('success', 'User has been updated successfully.');
    }

    public function destroy($id)
    {
        User::findOrFail($id)->delete();

        return back()->with('success', 'User has been deleted successfully.');

    }

}
