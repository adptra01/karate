<?php

namespace App\Http\Controllers\TeamParticipant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ParticipantController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
}
