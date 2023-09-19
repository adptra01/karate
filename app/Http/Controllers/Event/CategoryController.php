<?php

namespace App\Http\Controllers\Event;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use App\Models\Event;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function store(CategoryRequest $request, $slug)
    {
        $event = Event::whereSlug($slug)->first();
        if ($event) {
            $data = $request->validated();
            $data['event_id'] = $event->id;
            Category::create($data);
            return back()->with('success', 'Kelas pertandingan berhasil dibuat');
        } else {
            return back()->with('error', 'Event pertandingan tidak ditemukan.');
        }
    }

    public function update($id, CategoryRequest $request)
    {
        $category = Category::find($id);
        $category->update($request->validated());

        return back()->with('success', 'Perubahan pada kelas pertandingan ' . $category->name . ' berhasil dilakukan.');
    }

    public function destroy($id)
    {
        Category::find($id)->delete();
        return back()->with('success', 'Kelas pertandingan berhasil di hapus');
    }
}
