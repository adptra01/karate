<x-layout>
    <x-slot name="title">User Profile</x-slot>
    <div class="flex-grow-1">
        <!-- Header -->
        <div class="row">
            <div class="col-12">
                <div class="card mb-4">
                    <div class="user-profile-header-banner">
                        <img src="https://images.unsplash.com/photo-1603210185246-b1662978ea37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGthcmF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
                            alt="Banner image" height="200px" style="object-fit: cover; width: -webkit-fill-available"
                            class="rounded-top">
                    </div>
                    <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                        <div class="flex-grow-1 mt-3 mt-sm-5">
                            <div
                                class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                <div class="user-profile-info">
                                    <h4>{{ auth()->user()->name }}</h4>
                                    <ul
                                        class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                        <li class="list-inline-item fw-medium">
                                            <i class="bx bx-pen"></i> {{ Auth()->user()->email }}
                                        </li>
                                        <li class="list-inline-item fw-medium">
                                            <i class="bx bx-map"></i> {{ Auth()->user()->address }}
                                        </li>
                                        <li class="list-inline-item fw-medium">
                                            <i class="bx bx-calendar-alt"></i> {{ Auth()->user()->telp }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ Header -->

        <div class="row fv-plugins-icon-container">
            <div class="col-md-12">
                <div class="card mb-4">
                    <h5 class="card-header">Profile Details</h5>
                    <!-- Account -->
                    <div class="card-body">
                        <div class="d-flex align-items-start align-items-sm-center gap-4">
                            <img src="{{ Auth()->user()->avatar }}" alt="user-avatar" class="d-block rounded"
                                height="100" width="100" id="uploadedAvatar">
                            <div class="button-wrapper">
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
                            </div>
                        </div>
                    </div>
                    <hr class="my-0">
                    <div class="card-body">
                        <form id="formAccountSettings" method="POST" class="fv-plugins-bootstrap5 fv-plugins-framework"
                            novalidate="novalidate" action="{{ route('profile.update', Auth()->user()->id) }}">
                            @csrf
                            @method('PUT')
                            <div class="row">
                                <div class="mb-3 col-md-6 fv-plugins-icon-container">
                                    <label for="name" class="form-label">Nama</label>
                                    <input
                                        class="form-control @error('name')
                                    invalid
                                    @enderror"
                                        type="text" id="name" value="{{ auth()->user()->name }}" name="name">
                                    @error('name')
                                        <small class="text-danger fw-bold">{{ $message }}</small>
                                    @enderror
                                </div>
                                <div class="mb-3 col-md-6 fv-plugins-icon-container">
                                    <label for="email" class="form-label">email</label>
                                    <input
                                        class="form-control @error('email')
                                    invalid
                                    @enderror"
                                        type="email" id="email" value="{{ auth()->user()->email }}"
                                        name="email">
                                    @error('email')
                                        <small class="text-danger fw-bold">{{ $message }}</small>
                                    @enderror
                                </div>
                                <div class="mb-3 col-md-6 fv-plugins-icon-container">
                                    <label for="telp" class="form-label">telp</label>
                                    <input
                                        class="form-control @error('telp')
                                    invalid
                                    @enderror"
                                        type="telp" id="telp" value="{{ auth()->user()->telp }}"
                                        name="telp">
                                    @error('telp')
                                        <small class="text-danger fw-bold">{{ $message }}</small>
                                    @enderror
                                </div>
                                <div class="mb-3 col-md-6 fv-plugins-icon-container">
                                    <label for="address" class="form-label">address</label>
                                    <input
                                        class="form-control @error('address')
                                    invalid
                                    @enderror"
                                        type="address" id="address" value="{{ auth()->user()->address }}"
                                        name="address">
                                    @error('address')
                                        <small class="text-danger fw-bold">{{ $message }}</small>
                                    @enderror
                                </div>

                            </div>
                            <div class="mt-2">
                                <button type="submit" class="btn btn-primary me-2">Simpan</button>
                                <button type="reset" class="btn btn-secondary">Reset</button>
                            </div>
                        </form>
                    </div>
                    <!-- /Account -->
                </div>
                <div class="card">
                    <h5 class="card-header">Hapus Akun</h5>
                    <div class="card-body">
                        <div class="mb-3 col-12 mb-0">
                            <div class="alert alert-warning">
                                <h6 class="alert-heading fw-medium mb-1">Apakah Anda yakin ingin menghapus akun Anda?
                                </h6>
                                <p class="mb-0">Setelah akun Anda dihapus, tidak ada cara untuk memulihkannya. Mohon
                                    diperhatikan.</p>
                            </div>
                        </div>
                        <form action="{{ route('profile.destroy', Auth()->user()->id) }}"
                            class="fv-plugins-bootstrap5 fv-plugins-framework" method="POST">
                            @csrf
                            @method('delete')
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" name="confirmAccount"
                                    id="confirmAccount" required>
                                <label class="form-check-label" for="confirmAccount">Saya mengonfirmasi akun saya
                                    dihapus</label>
                                <div
                                    class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                                </div>
                            </div>
                            <button type="submit" class="btn btn-danger">Hapus Akun</button>
                            <input type="hidden">
                        </form>
                    </div>
                </div>
            </div>
        </div>



    </div>
</x-layout>
