<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
    aria-expanded="false" aria-controls="collapseExample">
    add role
</button>
<div class="collapse mt-3" id="collapseExample">
    <div class="border rounded p-3">
        <div class="divider">
            <div class="divider-text">
                Hak akses tertentu yang diberikan kepada pengguna
            </div>
        </div>
        <form action="{{ route('roles.store') }}" method="POST">
            @csrf
            <div class="mb-3">
                <label for="name" class="form-label">Name role</label>
                <input type="text" class="form-control" value="{{ old('name') }}" name="name" id="name"
                    aria-describedby="helpId" placeholder="enter role name">
                @error('name')
                    <small id="helpId" class="form-text text-danger">{{ $message }}</small>
                @enderror
            </div>
            <div class="mb-3">
                <label for="permissions" class="form-label">Multiple</label>
                <select id="permissions" name="permissions[]" class="select2 form-select" multiple>
                    @foreach ($permissions as $item)
                        <option value="{{ $item->id }}">{{ $item->name }}</option>
                    @endforeach
                    <option value="AK">Alaska</option>
                    <option value="HI">Hawaii</option>
                </select>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button class="btn btn-secondary" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Close
                </button>
            </div>
        </form>
    </div>
</div>
