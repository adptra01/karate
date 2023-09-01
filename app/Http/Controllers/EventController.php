<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Models\Event;
use App\Models\Media;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
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

        $event = new Event();
        $event->name = $request->name;
        $event->location = $request->location;
        $event->description = $request->description;
        $event->status = false;
        $event->thumbnail = 'https://images.unsplash.com/photo-1688744249266-3718f88f0e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg';
        $event->save();

        $image = $request->file('thumbnail');
        try {
            $result = Cloudinary::upload($image->getRealPath(), ['public_id' => 'thumbnail' . rand()]);

            $media = new Media([
                'file_url' => $result->getSecurePath(),
                'file_name' => $result->getPublicId(),
                'file_type' => $result->getExtension(),
                'size' => $result->getSize(),
            ]);

            $event->media()->save($media);
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
        $validates = $request->validated();

        Event::whereId($id)->update($validates);

        return back()->with('success', 'Perubahan pada data acara' . $request->name . ' berhasil dilakukan.');
    }

    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        $avatar = Media::find($event->media->first()->id);
        $event->delete();
        if ($avatar) {
            try {
                Cloudinary::destroy($avatar->file_name);
            } catch (\Throwable $th) {
                //throw $th;
            }
        }
        return back()->with('success', 'Anda telah berhasil menghapus acara yang diinginkan.');
    }

    public function status($id)
    {
    }
}
