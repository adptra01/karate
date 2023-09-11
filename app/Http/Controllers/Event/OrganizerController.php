<?php

namespace App\Http\Controllers\Event;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;

class OrganizerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        // $this->middleware('role:admin|organizer');
    }
    public function store(Request $request)
    {
        // Validasi permintaan
        $request->validate([
            'eventId' => 'required|exists:events,id',
            'userId' => 'required|array',
            'userId.*' => 'exists:users,id',
        ]);

        // Cari event berdasarkan ID
        $event = Event::find($request->eventId);

        // Pastikan event ditemukan
        if (!$event) {
            return back()->with('warning', 'Event tidak ditemukan. Hubungi admin jika terjadi kendala.');
        }

        // Dapatkan array user IDs dari permintaan
        $userIds = $request->userId;

        // Hubungkan user dengan event menggunakan metode attach()
        $event->users()->attach($userIds);

        return back()->with('success', 'Anggota penyelenggara berhasil ditambah.');
    }

    public function update($id, Request $request)
    {
        $request->validate([
            'userId' => 'nullable|array',
            'userId.*' => 'exists:users,id',
        ]);

        $event = Event::find($id);

        // Pastikan event ditemukan
        if (!$event) {
            return back()->with('warning', 'Event tidak ditemukan. Hubungi admin jika terjadi kendala.');
        }

        // Dapatkan array user IDs dari permintaan
        $userIds = $request->userId;

        // Hapus hubungan user yang sebelumnya terkait jika userIds kosong atau null
        if ($userIds == null) {
            $event->users()->detach();
        } else {
        // Jika userIds tidak kosong, tambahkan hubungan baru atau perbaharui yang ada
            $event->users()->sync($userIds);
        }

        return back()->with('success', 'Anggota penyelenggara berhasil diubah.');
    }
}
