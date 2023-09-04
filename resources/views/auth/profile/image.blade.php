<form action="{{ route('profile.avatar', Auth()->user()->id) }}" method="post" enctype="multipart/form-data">
    @csrf
    @method('PUT')
    <label for="upload" class="btn btn-light me-2 mb-4" tabindex="0">
        <span class="d-none d-sm-block">Upload new photo</span>
        <i class="bx bx-upload d-block d-sm-none"></i>
        <input type="file" id="upload" class="account-file-input" hidden="" name="avatar"
            accept="image/png, image/jpeg">
    </label>
    <button type="submit" class="btn btn-primary account-image-reset mb-4">
        <i class="bx bx-reset d-block d-sm-none"></i>
        <span class="d-none d-sm-block">Submit</span>
    </button>

    <p class="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
</form>
