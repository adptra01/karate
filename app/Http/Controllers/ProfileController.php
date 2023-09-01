<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Media;
use App\Models\User;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function index($id)
    {
        return view('auth.profile.index', [
            'user' => User::find($id),
        ]);
    }

    public function avatar(Request $request, $id)
    {
        $user = User::find($id);
        $avatar = Media::find($user->media->first()->id);
        $image = $request->file('avatar');

        try {
            if ($avatar) {
                Cloudinary::destroy($avatar->file_name);

                $result = Cloudinary::upload($image->getRealPath(), ['public_id' => 'img' . rand()]);

                $avatar->update([
                    'file_url' => $result->getSecurePath(),
                    'file_name' => $result->getPublicId(),
                    'file_type' => $result->getExtension(),
                    'size' => $result->getSize(),
                ]);

                $user->update([
                    'avatar' => $result->getSecurePath(),
                ]);
            } else {
                $result = Cloudinary::upload($image->getRealPath(), ['public_id' => 'img' . rand()]);

                $media = new Media([
                    'file_url' => $result->getSecurePath(),
                    'file_name' => $result->getPublicId(),
                    'file_type' => $result->getExtension(),
                    'size' => $result->getSize(),
                ]);

                $user->media()->save($media);
                $user->update([
                    'avatar' => $result->getSecurePath(),
                ]);
            }

            return back()->with('success');
        } catch (\Throwable $th) {
            return back()->with('error');
        }
    }

    public function update(ProfileUpdateRequest $request, $id)
    {
        // dd($request->all());
        User::find($id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'telp' => $request->telp,
            'address' => $request->address,
        ]);
        return back()->with('success', 'Profile berhasil diperbarui');
    }

    public function destroy(Request $request, $id)
    {
        $request->validate([
            'confirmAccount' => 'required'
        ]);

        $user = User::find($id);
        $avatar = Media::find($user->media->first()->id);
        try {
            Cloudinary::destroy($avatar->file_name);
        } catch (\Throwable $th) {
            //throw $th;
        }
        $user->delete();
        return redirect()->route('welcome');
    }
}
