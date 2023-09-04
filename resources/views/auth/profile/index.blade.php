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
                                height="100" width="100" style="object-fit: cover;" id="uploadedAvatar">
                            <div class="button-wrapper">
                                @include('auth.profile.image')
                            </div>
                        </div>
                    </div>
                    <hr class="my-0">
                    <div class="card-body">
                        @include('auth.profile.edit')
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
                        @include('auth.profile.delete')
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-layout>
