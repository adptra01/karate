<?php

namespace App\Http\Livewire\Events;

use App\Models\Event;
use App\Models\User;
use Livewire\Component;

class Organizer extends Component
{
    public $eventId, $userId = [];
    public function mount($eventId)
    {
        $this->eventId = $eventId;

        $event = Event::find($this->eventId);
        $this->userId = $event->users->pluck('id')->toArray();
    }

    public function render()
    {
        $event = Event::find($this->eventId);
        $users = User::get();
        return view('livewire.events.organizer', compact('users', 'event'));
    }
    public $rules = [
        'userId.*' => 'required:exists:users, id',
    ];
    public function store()
    {
        try {
            $event = Event::find($this->eventId);

            foreach ($this->userId as $userId) {
                $event->users()->attach($userId);
            }
        } catch (\Throwable $th) {
            return redirect()->back();
        }
    }

    public function update()
    {
        try {
            $event = Event::find($this->eventId);

            $userIds = $this->userId;

            if ($userIds == null) {
                $event->users()->detach();
            } else {
                $event->users()->sync($userIds);
            }
        } catch (\Throwable $th) {
            return redirect()->back();
        }
    }
}
