<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add New Permission
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <form action="{{ route('permissions.store') }}" method="POST">
                @csrf
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <div class="text-center mb-4">
                        <h3 class="role-title fw-bold">Add New Permission</h3>
                        <p class="fw-bold text-primary">Permissions you may use and assign to your users.</p>
                    </div>
                    <!-- Add permission form -->
                    <div class="col-12 mb-4 fv-plugins-icon-container">
                        <label class="form-label" for="name">PERMISSION NAME</label>
                        <input type="text" id="name" name="name" class="form-control"
                            placeholder="Enter a permission name" tabindex="-1" data-listener-added_b4d5a9bb="true">
                        @error('name')
                            <span class="text-danger fw-bold">{{ $message }}</span>
                        @enderror
                    </div>

                    <!--/ Add permission form -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
