<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add New Role
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
            <form action="{{ route('roles.store') }}" method="POST">
                @csrf
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <div class="text-center mb-4">
                        <h3 class="role-title fw-bold">Add New Role</h3>
                        <p class="fw-bold text-primary">Set role permissions</p>
                    </div>
                    <!-- Add role form -->
                        <div class="col-12 mb-4">
                            <label class="form-label" for="name">Role Name</label>
                            <input type="text" id="name" name="name" class="form-control"
                                placeholder="Enter a role name" tabindex="-1" data-listener-added_b4d5a9bb="true">
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
                                                    @checked(in_array($id, old('permissions', [])))>
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
