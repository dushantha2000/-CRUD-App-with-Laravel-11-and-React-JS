<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//Provides support for rendering views using the Inertia.js library, 
//allowing seamless integration between Laravel and modern JavaScript frameworks like Vue or React.
use Inertia\Inertia;
// Refers to the User model, typically used to interact with the users table in the database.
use App\Models\User;
use PHPStan\PhpDocParser\Ast\PhpDoc\PureUnlessCallableIsImpureTagValueNode;
use Illuminate\Support\Facades\Hash;
//This defines a new controller class named UserController that extends the base Controller class.
class UserController extends Controller
{

    //Declares a public method named loadUsers. //Public methods in controllers are typically accessible via routes.
    public function loadUsers()
    {

        //Calls the all() method on the User model.
        $users = User::all();

        //The second argument ['users' => $users] passes data ($users) to the frontend component as a prop named users.
        return Inertia::render('Users/Users', ['users' => $users]);
    }

    
}
