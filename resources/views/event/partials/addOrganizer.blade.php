<button class="btn btn-label-success mb-3" type="button" data-bs-toggle="collapse"
    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Tambah Anggota
</button>
<form action="{{ route('organizers.store') }}" method="post">
    @csrf
    <input type="hidden" name="eventId" value="{{ $event->id }}">
    <div class="collapse mb-3" id="collapseExample">
        <div class="mb-3">
            <label for="select2Multiple" class="form-label">Pilih user</label>
            <select id="select2Multiple" name="userId[]" class="select2 form-select" multiple>
                <option disabled>Pilih salah satu...</option>
                @foreach ($users as $user)
                    <option value="{{ $user->id }}">
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
