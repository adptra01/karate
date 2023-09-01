<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Media;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'avatar' => ['required'],
            'telp' => ['required', 'min:11', 'numeric', 'digits_between:10,13', 'unique:users,telp'],
            'address' => ['required', 'min:5', 'string', 'max:200'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     * 'name','email','password','avatar','telp','status','address'
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        $image = $data['avatar'];

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'telp' => $data['telp'],
            'address' => $data['address'],
        ]);

        try {
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
            Session::flash('success', 'Pendaftaran berhasil, Selamat datang, ' . $user->name . '! ✨');
        } catch (\Throwable $th) {
            Session::flash('error', 'Perdaftaran berhasil, tapi gambar profil gagal diupload.');

        }

        Auth::login($user);

        return $user;
    }
}
