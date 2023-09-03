<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Models\Event;
use App\Models\Media;
use App\Services\ClaudinaryService;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;

class EventController extends Controller
{
    private $claudinaryService;

    public function __construct(ClaudinaryService $claudinaryService)
    {
        $this->claudinaryService = $claudinaryService;
    }
    public function index()
    {
        return view('event.index', [
            'events' => Event::latest()->get(),
        ]);
    }

    public function store(EventRequest $request)
    {
        $data = $request->validated();

        $data['status'] = false;
        $data['thumbnail'] = 'https://images.unsplash.com/photo-1688744249266-3718f88f0e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg';

        $event = Event::create($data);
        $image = $request->file('thumbnail');
        try {
            $result = $this->claudinaryService->uploadClaudinary($image, $event);
            $event->update(['thumbnail' => $result->getSecurePath()]);
            return back()->with('success', 'Data acara baru berhasil ditambahkan.');
        } catch (\Throwable $th) {
            return back()->with('warning', 'Data acara baru berhasil ditambahkan, tetapi terdapat kesalahan pada pengunggahan thumbnail acara.');
        }
    }

    public function show($id)
    {
        return view('event.show', [
            'event' => event::find($id),
        ]);
    }

    public function update(EventRequest $request, $id)
    {
        $validatedData = $request->validated();

        $event = Event::find($id);

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

    public function status($id)
    {
        $event = Event::find($id);
        $change = $event->status == 1 ? 0 : 1;
        $event->update(['status' => $change]);
        $session = $change == 1 ? 'Selamat ' . $event->name . ' Telah dibuka !!! ✨' : 'Maap, saat ini ' . $event->name . ' sedang ditutup.';
        return back()->with($change == 1 ? 'success' : 'warning', $session);
    }
}
