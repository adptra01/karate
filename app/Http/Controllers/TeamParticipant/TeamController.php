<?php

namespace App\Http\Controllers\TeamParticipant;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('team.index', [
            ''
        ]);
    }

    public function register($id)
    {
        return view('team.register', [
            'event' => Event::find($id),
        ]);
    }
}
