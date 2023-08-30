<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        return view('event.index', [
            'events' => Event::latest()->get(),
        ]);
    }

    public function store(EventRequest $request)
    {
        Event::create([
            'name' => $request->name,
            'location' => $request->location,
            'thumbnail' => 'https://cdn.dribbble.com/users/4161211/screenshots/14926208/media/43167fd51820bf5330102b428939efaa.png',
            'description' => $request->description,
            'status' => false,
        ]);
    }

    public function show($id)
    {
    }

    public function update(Request $request, $id)
    {
    }

    public function delete($id)
    {
    }

    public function status($id)
    {
    }
}
