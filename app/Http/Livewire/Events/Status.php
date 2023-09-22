<?php

namespace App\Http\Livewire\Events;

use App\Models\Event;
use Livewire\Component;

class Status extends Component
{
    public $status = null;

    public $listeners = [
        'updateStatus' => 'handleStatus'
    ];

    public function mount($status)
    {
        $this->status = $status;
    }

    public function handleStatus($data)
    {
        $this->status = $data;
    }
    public function render()
    {
        return view('livewire.events.status');
    }
}
