<!-- Button trigger modal -->
<a class="text-warning" data-bs-toggle="modal" data-bs-target="#{{ Str::slug($role->name) }}">
    Edit Role
</a>

<!-- Modal -->
<div class="modal fade" id="{{ Str::slug($role->name) }}" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
            <form action="{{ route('roles.update', $role) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <div class="text-center mb-4">
                        <h3 class="role-title fw-bold">Edit Role</h3>
                        <p class="fw-bold text-primary">{{ $role->name }}</p>
                    </div>
                    <!-- Add role form -->
                    <form id="addRoleForm" class="row g-3 fv-plugins-bootstrap5 fv-plugins-framework"
                        onsubmit="return false" novalidate="novalidate">
                        <div class="col-12 mb-4 fv-plugins-icon-container">
                            <label class="form-label" for="name">Role Name</label>
                            <input type="text" id="name" name="name" class="form-control"
                                value="{{ $role->name }}" placeholder="Enter a role name" tabindex="-1"
                                data-listener-added_b4d5a9bb="true">
                            @error('name')
                                <span class="text-danger fw-bold">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="table-responsive">
                            <div class="row">
                                <h6>Role Permissions</h4>
                                    @error('permissions')
                                        <span class="text-danger fw-bold">{{ $message }}</span>
                                    @enderror
                                    <!-- Permission table -->
                                    @foreach ($permissions as $id => $name)
                                        <div class="col-md-6">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="permissions[]"
                                                    id="permission-{{ $id }}" value="{{ $id }}"
                                                    {{ in_array($id, $role->permissions->pluck('id')->toArray()) ? 'checked' : '' }}>
                                                <label class="form-check-label"
                                                    for="permission-{{ $id }}">{{ $name }}</label>
                                            </div>
                                        </div>
                                    @endforeach
                            </div>

                            <!-- Permission table -->
                        </div>
                        <!--/ Add role form -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
