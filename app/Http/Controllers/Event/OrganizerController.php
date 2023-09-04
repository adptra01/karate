<?php

namespace App\Http\Controllers\Event;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;

class OrganizerController extends Controller
{
    public function store(Request $request)
    {
        dd($request->all());
        // $user = User::find($id);
        // $event = Event::find($id);
    }
}
