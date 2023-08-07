<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#users">
    Add New User
</button>

<!-- Modal -->
<div class="modal fade" id="users" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <form action="{{ route('users.store') }}" method="POST">
                @csrf
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <div class="text-center mb-4">
                        <h3 class="role-title fw-bold">Add New User</h3>
                        <p class="fw-bold text-primary">Set role user</p>
                    </div>
                    <!-- Add user form -->
                    <div class="divider">
                        <div class="divider-text">Profile</div>
                    </div>

                    {{-- livewire component generate-password  --}}
                    <livewire:generate-password />
                    {{-- /livewire component generate-password  --}}

                    <div class="row">
                        <div class="col-md">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" name="email" value="{{ old('email') }}"
                                    id="email" aria-describedby="helpId" placeholder="Enter user email">
                                @error('email')
                                    <small id="helpId" class="form-text text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="mb-3">
                                <label for="telp" class="form-label">telp</label>
                                <input type="number" class="form-control" name="telp" value="{{ old('telp') }}"
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
                                <input type="file" class="form-control" name="avatar" id="avatar"
                                    aria-describedby="helpId" placeholder="Enter user avatar">
                                @error('avatar')
                                    <small id="helpId" class="form-text text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="mb-3">
                                <label for="address" class="form-label">Alamat</label>
                                <input type="text" class="form-control" name="address" value="{{ old('address') }}"
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
                                    <option value="0" {{ old('status') == 0 ? 'selected' : '' }}>Non Active
                                    </option>
                                    <option value="1" {{ old('status') == 1 ? 'selected' : '' }}>Active</option>
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
                                    <option value=" ">Select one</option>
                                    @foreach ($roles as $role)
                                        <option value="{{ $role->id }}"
                                            {{ old('role') == $role->id ? 'selected' : '' }}>{{ $role->name }}
                                        </option>
                                    @endforeach
                                </select>
                                @error('roles')
                                    <small id="helpId" class="form-text text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <!--/ Add user form -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
