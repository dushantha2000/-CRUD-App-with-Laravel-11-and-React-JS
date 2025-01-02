<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// Provides support for rendering views using the Inertia.js library,
// allowing seamless integration between Laravel and modern JavaScript frameworks like Vue or React.
use Inertia\Inertia;
// Refers to the User model, typically used to interact with the users table in the database.
use App\Models\User;
// Hashing support
use Illuminate\Support\Facades\Hash;
// Auth support
use Illuminate\Support\Facades\Auth;

// This defines a new controller class named UserController that extends the base Controller class.
class UserController extends Controller
{
    // Declares a public method named loadUsers.
    // Public methods in controllers are typically accessible via routes.
    public function loadUsers()
    {
        // Calls the all() method on the User model to retrieve all users.
        $users = User::all();
        // Retrieves the currently authenticated user.
        $user = Auth::user();
        // The second argument ['users' => $users, 'user' => $user] passes data to the frontend component.
        return Inertia::render('Users/Users', ['users' => $users, 'user' => $user]);
    }



    public function loadEditForm($user_id)
    {
        $user = Auth::user();
        $userDetails = User::find($user_id);
        return Inertia::render('Users/EditForm', ['user' => $user, 'userDetails' => $userDetails]);
    }
    public function editUser(Request $request)
    {

        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        return Inertia::render('users.index');
    }
    
}
