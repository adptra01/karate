<?php

namespace App\Http\Controllers\Event;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use App\Models\Event;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

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
