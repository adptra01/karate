<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
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

    public function avatar($id)
    {

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
        if ($request->confirmAccount == 'on') {
            # code...
            $user = User::find($id);
            $user->delete();
            return redirect()->route('welcome');
        }
        return back();
    }
}
