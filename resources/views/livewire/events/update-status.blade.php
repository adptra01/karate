<div>
    <form wire:submit.prevent='updateStatus'>
        <button wire:offline.attr="disabled" type="submit"
            class="btn btn-label-{{ $event->status == 0 ? 'success' : 'danger' }}">{{ $event->status == 0 ? 'Buka Acara' : 'Tutup Acara' }}</button>
    </form>
</div>
