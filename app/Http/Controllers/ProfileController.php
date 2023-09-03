<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Media;
use App\Models\User;
use App\Services\ClaudinaryService;
use App\Services\UserService;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    private $claudinaryService;
    private $userService;

    public function __construct(ClaudinaryService $claudinaryService, UserService $userService)
    {
        $this->claudinaryService = $claudinaryService;
        $this->userService = $userService;
    }
    public function index()
    {
        return view('auth.profile.index', []);
    }

    public function avatar(Request $request, $id)
    {
        $user = User::find($id);
        $file = $user->media->first();

        if ($file) {
            $fileId = $file->id;
            $this->claudinaryService->deleteClaudinary($fileId);
        }

        $image = $request->file('avatar');

        try {
            $result = $this->claudinaryService->uploadClaudinary($image, $user);

            $user = $user->update([
                'avatar' => $result->getSecurePath(),
            ]);
            return back()->with('success', 'Avatar berhasil diperbarui.');
        } catch (\Throwable $th) {
            return back()->with('error', 'Terjadi kesalahan saat memperbarui avatar.');
        }
    }

    public function update(ProfileUpdateRequest $request, $id)
    {
        $data = $request->validated();
        $this->userService->update($id, $data);
        return back()->with('success', 'Profile berhasil diperbarui');
    }

    public function destroy(Request $request, $id)
    {
        $request->validate([
            'confirmAccount' => 'required'
        ]);

        $user = $this->userService->find($id);

        if ($user->media->first()->exists()) {
            $file = $user->media->first();
            $this->claudinaryService->deleteClaudinary($file->id);
        }
        $user->delete();
        return redirect()->route('welcome');
    }
}
