<!-- Button trigger modal -->
<button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal"
    data-bs-target="#{{ Str::slug($permission->name) }}">
    Edit
</button>

<!-- Modal -->
<div class="modal fade" id="{{ Str::slug($permission->name) }}" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <form action="{{ route('permissions.update', $permission) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <div class="text-center mb-4">
                        <h3 class="role-title fw-bold">Edit Permission</h3>
                        <p class="fw-bold text-primary">Edit permission as per your requirements.</p>
                    </div>

                    <!-- Add permission form -->
                    <div class="col-12 mb-4">
                        <label class="form-label float-start" for="name">PERMISSION NAME</label>
                        <input type="text" id="name" value="{{ $permission->name }}" name="name"
                            class="form-control" placeholder="Enter a permission name" tabindex="-1"
                            data-listener-added_b4d5a9bb="true">
                        @error('name')
                            <span class="text-danger fw-bold">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="table-responsive">
                        <div class="row">
                            <h6 class="text-start float-start m-0">Roles</h6>
                            <small class="fw-bold text-warning text-start mb-1">Lakukan input ulang pada roles</small>
                            @error('roles')
                                <span class="text-danger fw-bold">{{ $message }}</span>
                            @enderror
                            <!-- Permission table -->
                            @foreach ($roles as $id => $name)
                                <div class="col-md-6">
                                    <div class="form-check">
                                        <input type="checkbox" name="roles[]" id="role-{{ $id }}"
                                            class="form-check-input" value="{{ $id }}">
                                        <label class="form-check-label float-start"
                                            for="role-{{ $id }}">{{ $name }}</label>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                        <!--/ Add permission form -->
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
