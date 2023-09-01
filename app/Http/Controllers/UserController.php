<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    private $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }
    public function index()
    {
        return view('adm.users.index', [
            'users' => $this->userService->all(),
            'actives' => $this->userService->getBy('status', true)->count(),
            'nonActives' => $this->userService->getBy('status', false)->count(),
            'roles' => Role::get(),
        ]);
    }

    public function store(UserRequest $request)
    {
        // Handle the avatar file upload
        if ($request->hasFile('avatar')) {
            $avatarPath = $request->file('avatar')->store('avatars', 'public');
        } else {
            $avatarPath = 'https://images.unsplash.com/photo-1608583252022-09323426b8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg';
        }

        // Create the new user
        $data = $request->validated();
        $data['avatar'] = $avatarPath;
        $data['password'] = bcrypt($request->password);

        $user = $this->userService->create($data);

        if ($request->role) {
            // Assign the role to the user
            $role = Role::findOrFail($request->role);
            $user->assignRole($role);
        }

        return back()->with('success', 'berhasil');
    }

    public function show($id)
    {
        return view('adm.users.show', [
            'roles' => Role::get(),
            'user' => $this->userService->find($id),
        ]);
    }

    public function update(UserRequest $request, $id)
    {
        // Create the new user
        $data = $request->validated();
        $data['password'] = bcrypt($request->password);

        // Handle the avatar file upload
        if ($request->hasFile('avatar')) {
            $avatarPath = $request->file('avatar')->store('avatars', 'public');
            $data['avatar'] = $avatarPath;
        }

        $this->userService->update($id, $data);
        $user = $this->userService->find($id);

        if ($request->role) {
            // Assign the role to the user
            $role = Role::findOrFail($request->role);
            $user->syncRoles($role);
        }

        return back()->with('success', 'User has been updated successfully.');
    }

    public function destroy($id)
    {
        $this->userService->delete($id);

        return back()->with('success', 'User has been deleted successfully.');
    }
}
