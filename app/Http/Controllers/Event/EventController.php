<?php

namespace App\Http\Controllers\Event;

use App\Http\Controllers\Controller;
use App\Http\Requests\EventRequest;
use App\Models\Category;
use App\Models\Event;
use App\Models\User;
use App\Services\ClaudinaryService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class EventController extends Controller
{
    private $claudinaryService;

    public function __construct(ClaudinaryService $claudinaryService)
    {
        $this->claudinaryService = $claudinaryService;
        $this->middleware('auth');
    }
    public function index()
    {
        return view('events.event.index', [
            'events' => Event::latest()->get(),
            'activeEvents' => Event::whereStatus(1)->get(),
            'nonEvents' => Event::whereStatus(0)->get(),
        ]);
    }

    public function store(EventRequest $request)
    {

        $data = $request->validated();

        $data['slug'] = 'evt' . Str::random(10);
        $data['thumbnail'] = 'https://images.unsplash.com/photo-1688744249266-3718f88f0e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg';

        $event = Event::create($data);
        if (!Auth()->user()->hasRole('admin')) {
            $event->users()->attach(Auth()->user()->id);
        }
        $image = $request->file('thumbnail');
        try {
            $result = $this->claudinaryService->uploadClaudinary($image, $event);
            $event->update(['thumbnail' => $result->getSecurePath()]);
            return redirect()->route('events.show', $event->slug)->with('success', 'Data acara baru berhasil ditambahkan.');
        } catch (\Throwable $th) {
            return redirect()->route('events.show', $event->slug)->with('warning', 'Data acara baru berhasil ditambahkan, tetapi terdapat kesalahan pada pengunggahan thumbnail acara.');
        }
    }

    public function show($slug)
    {
        $event = event::whereSlug($slug)->first();
        if ($event) {
            return view('events.event.show', [
                'event' => $event,
                'users' => User::get(),
                'categories' => Category::where('event_id', $event->id)->get()
            ]);
        } else {
            return view('errors.404');
        }
    }

    public function update(EventRequest $request, $slug)
    {
        $validatedData = $request->validated();

        $event = Event::whereSlug($slug)->first();

        if ($request->hasFile('thumbnail')) {
            $media = $event->media->first();
            if ($media) {
                $this->claudinaryService->deleteClaudinary($media->id);
            }

            $image = $request->file('thumbnail');
            $result = $this->claudinaryService->uploadClaudinary($image, $event);
            $validatedData['thumbnail'] = $result->getSecurePath();
        }

        $event->update($validatedData);
        return back()->with('success', 'Perubahan pada data acara ' . $request->name . ' berhasil dilakukan.');
    }

    public function destroy($id)
    {
        $event = Event::find($id);
        $media = $event->media->first();
        if ($media->exists()) {
            $this->claudinaryService->deleteClaudinary($media->id);
        }
        $event->delete();

        return back()->with('success', 'Anda telah berhasil menghapus acara yang diinginkan.');
    }

    public function status(Request $request, $id)
    {
        $validatedData = $request->validate(['status' => 'required|boolean']);
        $event = Event::find($id);
        $event->update($validatedData);

        $session = $event->status == 1 ? 'Selamat ' . $event->name . ' Telah dibuka !!! ✨' : 'Maaf, saat ini ' . $event->name . ' sedang ditutup.';
        return back()->with($event->status == 1 ? 'success' : 'warning', $session);
    }

    public function register($slug)
    {
        $event = Event::whereSlug($slug)->first();
        if ($event) {
            # code...
            return view('team.index', [
                'event' => $event,
            ]);
        } else {
            return view('errors.404');
        }
    }
    public function registered(Request $request, $slug)
    {
        $request->validate([
            'name' => 'required|min:5|max:100',
            'logo' => 'required|mimes:png,jpg|images',
            'region' => 'required|min:5|max:50',
            'manager' => 'required|min:5|max:50',
            'telp' => 'required|min:11|max:12',
            'photo' => 'required|min:5|max:50',
        ]);

        
        dd($request->all());
    }
}
