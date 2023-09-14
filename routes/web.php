<?php

use App\Http\Controllers\Event\EventController;
use App\Http\Controllers\Event\OrganizerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TeamParticipant\TeamController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\User\PermissionController;
use App\Http\Controllers\User\RoleController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Auth::routes();

Route::middleware(['auth'])->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');

    Route::prefix('roles')->group(function () {
        Route::get('/', [RoleController::class, 'index'])->name('roles.index');
        Route::post('/', [RoleController::class, 'store'])->name('roles.store');
        Route::put('/{role}', [RoleController::class, 'update'])->name('roles.update');
        Route::delete('/{role}', [RoleController::class, 'destroy'])->name('roles.destroy');
    });

    Route::prefix('permissions')->group(function () {
        Route::get('/', [PermissionController::class, 'index'])->name('permissions.index');
        Route::post('/', [PermissionController::class, 'store'])->name('permissions.store');
        Route::put('/{permission}', [PermissionController::class, 'update'])->name('permissions.update');
        Route::delete('/{permission}', [PermissionController::class, 'destroy'])->name('permissions.destroy');
    });

    Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('users.index');
        Route::post('/', [UserController::class, 'store'])->name('users.store');
        Route::get('/{id}', [UserController::class, 'show'])->name('users.show');
        Route::put('/{id}', [UserController::class, 'update'])->name('users.update');
        Route::delete('/{id}', [UserController::class, 'destroy'])->name('users.destroy');
        Route::put('/{id}/password', [UserController::class, 'password'])->name('users.password');
    });

    Route::prefix('account')->group(function () {
        Route::get('/{slug}/profile', [ProfileController::class, 'index'])->name('profile.index');
        Route::put('/{id}/avatar', [ProfileController::class, 'avatar'])->name('profile.avatar');
        Route::put('/{id}', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/{id}', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
    Route::prefix('events')->group(function () {
        Route::get('/', [EventController::class, 'index'])->name('events.index');
        Route::post('/', [EventController::class, 'store'])->name('events.store');
        Route::get('/{id}', [EventController::class, 'show'])->name('events.show');
        Route::put('/{id}', [EventController::class, 'update'])->name('events.update');
        Route::delete('/{id}', [EventController::class, 'destroy'])->name('events.destroy');

        Route::put('/{id}/status', [EventController::class, 'status'])->name('events.status');
        Route::get('/{id}/register', [EventController::class, 'register'])->name('events.register');
    });

    Route::prefix('organizers')->group(function () {
        Route::post('/', [OrganizerController::class, 'store'])->name('organizers.store');
        Route::put('/{id}', [OrganizerController::class, 'update'])->name('organizers.update');
    });

    // Route::prefix('teams')->group(function () {

    // });

    Route::resource('teams', TeamController::class);
});
