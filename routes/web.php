<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');





//Route
//Specifies which controller and method should handle the request to /users.
Route::get('/users', [UserController::class, 'loadUsers'])->name('users.index');
//user edit
Route::get('/edit/user/{user_id}', [UserController::class, 'loadEditForm'])->name('users.edit');

//user delete
Route::get('/delete/user{user_id}', [UserController::class, 'deleteUser'])->name('users.delete');

// post the user data to the EditForm
Route::post('/edit/user', [UserController::class, 'editUser'])->name('users.update');





Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
