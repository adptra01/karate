<!--/ Add user form -->
<form action="{{ route('users.update', $user->id) }}" method="POST" enctype="multipart/form-data">
    @csrf
    @method('PUT')
    <div class="mb-3">
        <label for="name" class="form-label">Nama Lengkap</label>
        <input type="text" name="name" value="{{ $user->name ?? old('name') }}" class="form-control" id="name"
            aria-describedby="helpId" placeholder="Enter user name">
        @error('name')
            <small id="helpId" class="form-text text-danger">{{ $message }}</small>
        @enderror
    </div>
    <div class="row">
        <div class="col-md">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" name="email" value="{{ $user->email ?? old('email') }}"
                    id="email" aria-describedby="helpId" placeholder="Enter user email">
                @error('email')
                    <small id="helpId" class="form-text text-danger">{{ $message }}</small>
                @enderror
            </div>
        </div>
        <div class="col-md">
            <div class="mb-3">
                <label for="telp" class="form-label">telp</label>
                <input type="number" class="form-control" name="telp" value="{{ $user->telp ?? old('telp') }}"
                    id="telp" aria-describedby="helpId" placeholder="Enter user telp">
                @error('telp')
                    <small id="helpId" class="form-text text-danger">{{ $message }}</small>
                @enderror
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md">
            <div class="mb-3">
                <label for="avatar" class="form-label">avatar</label>
                <input type="file" class="form-control" name="avatar" id="avatar" aria-describedby="helpId"
                    placeholder="Enter user avatar">
                @error('avatar')
                    <small id="helpId" class="form-text text-danger">{{ $message }}</small>
                @enderror
            </div>
        </div>
        <div class="col-md">
            <div class="mb-3">
                <label for="address" class="form-label">Alamat</label>
                <input type="text" class="form-control" name="address" value="{{ $user->address ?? old('address') }}"
                    id="address" aria-describedby="helpId" placeholder="Enter user address">
                @error('address')
                    <small id="helpId" class="form-text text-danger">{{ $message }}</small>
                @enderror
            </div>
        </div>
    </div>

    <div class="divider">
        <div class="divider-text">Private</div>
    </div>
    <div class="row">
        <div class="col-md">
            <div class="mb-3">
                <label for="status" class="form-label">Status</label>
                <select class="form-select" name="status" id="status">
                    <option value=" ">Select one</option>
                    <option value="0" {{ $user->status == 0 ? 'selected' : '' }}>Non Active
                    </option>
                    <option value="1" {{ $user->status == 1 ? 'selected' : '' }}>Active</option>
                </select>
                @error('status')
                    <small id="helpId" class="form-text text-danger">{{ $message }}</small>
                @enderror
            </div>
        </div>
        <div class="col-md">
            <div class="mb-3">
                <label for="role" class="form-label">Role</label>
                <select class="form-select" name="role" id="role">
                    <option value="">Select one</option>
                    @foreach ($roles as $role)
                        <option value="{{ $role->id }}"
                            @if ($user->roles->first()) {{ $user->roles->first()->id == $role->id ? 'selected' : '' }} @endif>
                            {{ $role->name }}
                        </option>
                    @endforeach
                    <option value="0">tidak ada</option>
                </select>
                @error('roles')
                    <small id="helpId" class="form-text text-danger">{{ $message }}</small>
                @enderror
            </div>
        </div>
    </div>
    <div class="mb-3">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    <!--/ Add user form -->
</form>
