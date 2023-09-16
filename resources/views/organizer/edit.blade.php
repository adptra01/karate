<button class="btn btn-label-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
    aria-expanded="false" aria-controls="collapseExample">
    Ubah Anggota
</button>
<form action="{{ route('organizers.update', $event->id) }}" method="post">
    @csrf
    @method('put')
    <div class="collapse mb-3" id="collapseExample">
        <div class="mb-3">
            <label for="select2Multiple" class="form-label">Pilih user</label>
            <select id="select2Multiple" name="userId[]" class="select2 form-select" multiple>
                <option disabled>Pilih salah satu...</option>
                @foreach ($users as $user)
                    <option value="{{ $user->id }}"{{ $event->users->contains('id', $user->id) ? 'selected' : '' }}>
                        {{ $user->name }}
                    </option>
                @endforeach
            </select>
        </div>
        <div class="mb-3 text-end">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
</form>
