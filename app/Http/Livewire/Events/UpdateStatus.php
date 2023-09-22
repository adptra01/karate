<?php

namespace App\Http\Livewire\Events;

use App\Models\Event;
use Livewire\Component;

class UpdateStatus extends Component
{
    public $event;

    public function mount(Event $event)
    {
        $this->event = $event;
    }

    public function updateStatus()
    {
        $this->event->status = $this->event->status == 1 ? 0 : 1;
        $this->event->save();
        $data = $this->event->status;
        // dd($data);
        $this->emit('updateStatus', $data);

        $message = $this->event->status == 1 ? 'Selamat ' . $this->event->name . ' Telah dibuka !!! ✨' : 'Maaf, saat ini ' . $this->event->name . ' sedang ditutup.';
        session()->flash($this->event->status == 1 ? 'success' : 'warning', $message);
    }


    public function render()
    {
        return view('livewire.events.update-status');
    }
}
