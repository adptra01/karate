<!-- resources/views/livewire/generate-password.blade.php -->
<div>
    <div class="mb-3">
        <label for="name" class="form-label">Nama Lengkap</label>
        <input type="text" wire:model="name" name="name" class="form-control" id="name" aria-describedby="helpId"
            placeholder="Enter user name">
        @error('name')
            <small id="helpId" class="form-text text-danger">{{ $message }}</small>
        @enderror
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="text" wire:model="password" name="password" class="form-control" id="password"
            aria-describedby="helpId" placeholder="Enter user password" readonly>
        @error('password')
            <small id="helpId" class="form-text text-danger">{{ $message }}</small>
        @enderror
    </div>
</div>
