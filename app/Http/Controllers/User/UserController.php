<?php

namespace App\Http\Controllers\User;

use App\Http\Requests\UserRequest;
use App\Models\Media;
use App\Models\User;
use App\Services\ClaudinaryService;
use App\Services\UserService;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;


class UserController extends Controller
{
    private $userService;
    private $claudinaryService;

    public function __construct(UserService $userService, ClaudinaryService $claudinaryService)
    {
        $this->userService = $userService;
        $this->claudinaryService = $claudinaryService;
    }
    public function index()
    {
        return view('adm.users.index', [
            'users' => User::latest()->get(),
            'actives' => $this->userService->getBy('status', true)->count(),
            'nonActives' => $this->userService->getBy('status', false)->count(),
            'roles' => Role::get(),
        ]);
    }

    public function store(UserRequest $request)
    {
        // Handle the avatar file upload
        $data = $request->validated();
        // Create the new user
        $data['password'] = bcrypt($request->password);

        $user = $this->userService->create($data);

        if ($request->hasFile('avatar')) {
            try {
                $image = $request->file('avatar');
                $result = $this->claudinaryService->uploadClaudinary($image, $user);
                $avatarPath = $result->getSecurePath();
            } catch (\Throwable $th) {
                $avatarPath = 'https://images.unsplash.com/photo-1608583252022-09323426b8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg';
            }
            $user->update([
                'avatar' => $avatarPath,
            ]);
        }

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
        $data = $request->validated();
        $user = User::find($id);

        if ($request->hasFile('avatar')) {
            if ($user->media()->exists()) {
                $file = $user->media()->first();
                $fileId = $file->id;
                $this->claudinaryService->deleteClaudinary($fileId);
            }
            $image = $request->file('avatar');

            $result = $this->claudinaryService->uploadClaudinary($image, $user);
            $data['avatar'] = $result->getSecurePath();
        }

        // Update user data
        if ($request->filled('password')) {
            // If a new password is provided, hash and update it
            $data['password'] = bcrypt($request->password);
        } else {
            // If no new password is provided, remove it from the data to avoid overwriting with an empty password
            unset($data['password']);
        }

        $this->userService->update($id, $data);

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

    public function updatePassword(Request $request, $id)
    {
        $request->validate([
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $this->userService->find($id);
    }
}
