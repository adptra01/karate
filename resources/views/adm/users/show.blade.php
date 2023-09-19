<x-layout>
    <x-slot name="title">Profil Pengguna</x-slot>
    @include('layouts.table')
    <div class="row">
        <!-- User Sidebar -->
        <div class="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
            <!-- User Card -->
            <div class="card mb-4">
                <div class="card-body">
                    <div class="user-avatar-section">
                        <div class=" d-flex align-items-center flex-column">
                            <img src="{{ $user->avatar }}" class="img-fluid rounded my-4" height="110" width="110"
                                alt="User avatar">
                            <div class="user-info text-center">
                                <h4 class="mb-2">{{ $user->name }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="divider">
                        <div class="divider-text">Detail Account</div>
                    </div>
                    <div class="info-container">
                        <ul class="list-unstyled">
                            <li class="mb-3">
                                <span class="fw-medium me-2">Nama Lengkap:</span>
                                <span>{{ $user->name }}</span>
                            </li>
                            <li class="mb-3">
                                <span class="fw-medium me-2">Email:</span>
                                <span>{{ $user->email }}</span>
                            </li>
                            <li class="mb-3">
                                <span class="fw-medium me-2">Status:</span>
                                <span
                                    class="badge bg-label-{{ $user->status == 0 ? 'danger' : 'success' }}">{{ $user->status == 0 ? 'NON ACTIVE' : 'ACTIVE' }}</span>
                            </li>
                            <li class="mb-3">
                                <span class="fw-medium me-2">Peran:</span>
                                <span>
                                    <span
                                        class="badge text-primary bg-label-secondary">{{ $user->getRoleNames()->first() ?? 'Tidak ada' }}</span>
                                </span>
                            </li>
                            <li class="mb-3">
                                <span class="fw-medium me-2">Alamat:</span>
                                <span>{{ $user->address }}</span>
                            </li>
                            <li class="mb-3">
                                <span class="fw-medium me-2">Kontak:</span>
                                <span>{{ $user->telp }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /User Card -->
            <!-- Plan Card -->
            <div class="card mb-4">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start">
                        <span class="badge bg-label-primary">Standard</span>
                        <div class="d-flex justify-content-center">
                            <sup class="h5 pricing-currency mt-3 mb-0 me-1 text-primary">$</sup>
                            <h1 class="display-5 mb-0 text-primary">99</h1>
                            <sub class="fs-6 pricing-duration mt-auto mb-3">/month</sub>
                        </div>
                    </div>
                    <ul class="ps-3 g-2 my-4">
                        <li class="mb-2">10 Users</li>
                        <li class="mb-2">Up to 10 GB storage</li>
                        <li>Basic Support</li>
                    </ul>
                    <div class="d-flex justify-content-between align-items-center mb-1">
                        <span>Days</span>
                        <span>65% Completed</span>
                    </div>
                    <div class="progress mb-1" style="height: 8px;">
                        <div class="progress-bar" role="progressbar" style="width: 65%;" aria-valuenow="65"
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>4 days remaining</span>
                    <div class="d-grid w-100 mt-4 pt-2">
                        <button class="btn btn-primary" data-bs-target="#upgradePlanModal"
                            data-bs-toggle="modal">Upgrade Plan</button>
                    </div>
                </div>
            </div>
            <!-- /Plan Card -->
        </div>
        <!--/ User Sidebar -->


        <!-- User Content -->
        <div class="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
            <!-- User Pills -->
            <!-- User Pills -->
            <div class="tab-content">
                <ul class="nav nav-pills flex-column flex-md-row mb-3">
                    <li class="nav-item"><a type="button" class="nav-link active" role="tab" data-bs-toggle="tab"
                            data-bs-target="#navs-pills-top-home" aria-controls="navs-pills-top-home"
                            aria-selected="true"><i class="bx bx-detail me-1"></i>Perizinan</a></li>
                    <li class="nav-item"><a type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                            data-bs-target="#navs-pills-top-profile" aria-controls="navs-pills-top-profile"
                            aria-selected="true"><i class="bx bx-lock-alt me-1"></i>Keamanan</a></li>
                    <li class="nav-item"><a type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                            data-bs-target="#navs-pills-top-password" aria-controls="navs-pills-top-password"
                            aria-selected="true"><i class="bx bx-user me-1"></i>Profil</a></li>
                </ul>
                <div class="tab-pane fade show active" id="navs-pills-top-home" role="tabpanel">
                    <div class="card">
                        <div class="card-body">
                            @foreach ($user->roles as $role)
                                <div class="table-responsive">
                                    <table id="example" class="display table nowrap" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Permission</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($role->permissions as $no => $item)
                                                <tr>
                                                    <td>{{ ++$no }}.</td>
                                                    <td>{{ $item->name }}</td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="navs-pills-top-profile" role="tabpanel">
                    <div class="card mb-4">
                        <h5 class="card-header">Ubah Kata Sandi</h5>
                        <div class="card-body">
                            @include('adm.users.password')
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="navs-pills-top-password" role="tabpanel">
                    <div class="card">
                        <h5 class="card-header">Ubah Profil</h5>
                        <div class="card-body">
                            <div class="alert alert-warning" role="alert">
                                <h6 class="alert-heading mb-1">Pastikan bahwa persyaratan-persyaratan ini terpenuhi
                                </h6>
                                <span>Data pengguna valid</span>
                            </div>
                            @include('adm.users.edit')
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ User Content -->
    </div>
</x-layout>
