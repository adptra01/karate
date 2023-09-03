<x-auth>

    @include('layouts.bs-stepper')
    <x-slot name="title">Register Page</x-slot>
    <!-- Content -->

    <div class="justify-content-center">
        <div class="align-self-center row m-0">
            <!-- /Left Text -->
            <div class="d-none d-lg-flex col-md align-items-center">
                <div class="w-100 d-flex justify-content-center">
                    <img src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/boy-with-rocket-dark.png"
                        class="img-fluid" alt="Login image" width="700"
                        data-app-dark-img="illustrations/boy-with-rocket-dark.png"
                        data-app-light-img="illustrations/boy-with-rocket-light.png">
                </div>
            </div>
            <!-- /Left Text -->

            <!-- Login -->
            <div class="d-flex col-md align-items-center authentication-bg p-sm-5 p-4">
                <div class="mx-auto">
                    <!-- Logo -->
                    <div class="app-brand mb-5">
                        <a href="/" class="app-brand-link gap-2">
                            <span class="app-brand-text demo text-body fw-bold">Karateo</span>
                        </a>
                    </div>
                    <!-- /Logo -->
                    <h4 class="mb-2">Siap untuk petualangan baru? 👋</h4>
                    <p class="mb-4">Buat akun sekarang dan mulai perjalananmu bersama kami</p>

                    <div class="bs-stepper shadow-none wizard-numbered mt-2">
                        <div class="bs-stepper-header">
                            <div class="step" data-target="#account-details">
                                <button type="button" class="step-trigger">
                                    <span class="bs-stepper-circle">1</span>
                                    <span class="bs-stepper-label mt-1">
                                        <span class="bs-stepper-title">Detail Akun</span>
                                        <span class="bs-stepper-subtitle">Siapkan detail akun</span>
                                    </span>
                                </button>
                            </div>
                            <div class="line">
                                <i class="bx bx-chevron-right"></i>
                            </div>
                            <div class="step" data-target="#personal-info">
                                <button type="button" class="step-trigger">
                                    <span class="bs-stepper-circle">2</span>
                                    <span class="bs-stepper-label mt-1">
                                        <span class="bs-stepper-title">Info Pribadi</span>
                                        <span class="bs-stepper-subtitle">Tambahkan info pribadi</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="bs-stepper-content">
                            <form id="formAuthentication" class="mb-3" action="{{ route('register') }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <div id="account-details" class="content">
                                    <div class="content-header mb-3">
                                        <h6 class="mb-0">Detail Akun</h6>
                                        <small>Masukkan detail akun mu</small>
                                    </div>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <label for="name" class="form-label">nama lengkap</label>
                                            <input type="text"
                                                class="form-control @error('name') is-invalid @enderror" id="name"
                                                name="name" value="{{ old('name') }}" required autocomplete="name"
                                                autofocus placeholder="Enter your name">

                                            @error('name')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                        <div class="col-md-6">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email"
                                                class="form-control @error('email') is-invalid @enderror" id="email"
                                                name="email" value="{{ old('email') }}" required autocomplete="email"
                                                autofocus placeholder="Enter your email">

                                            @error('email')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                        <div class="col-md-6 form-password-toggle">
                                            <div class="d-flex justify-content-between">
                                                <label class="form-label" for="password">Password</label>
                                            </div>
                                            <div class="input-group input-group-merge">
                                                <input type="password" id="password"
                                                    class="form-control @error('password') is-invalid @enderror"
                                                    name="password"
                                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                    aria-describedby="password" required />
                                                <span class="input-group-text cursor-pointer"><i
                                                        class="bx bx-hide"></i></span>
                                                @error('password')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="col-md-6 form-password-toggle">
                                            <div class="d-flex justify-content-between">
                                                <label class="form-label" for="password">Konfirmasi Password</label>
                                            </div>
                                            <div class="input-group input-group-merge">
                                                <input type="password" id="password_confirmation"
                                                    class="form-control @error('password_confirmation') is-invalid @enderror"
                                                    name="password_confirmation"
                                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                    aria-describedby="password_confirmation" required />
                                                <span class="input-group-text cursor-pointer"><i
                                                        class="bx bx-hide"></i></span>
                                                @error('password_confirmation')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="col-md">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="agree"
                                                    name="agree" value="1" required>
                                                <label class="form-check-label" for="agree">
                                                    Saya setuju dengan kebijakan & ketentuan privasi
                                                </label>
                                                @error('agree')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="col-12 d-flex justify-content-between">
                                            <button class="btn btn-label-secondary btn-prev" disabled>
                                                <i class="bx bx-chevron-left bx-sm ms-sm-n2"></i>
                                                <span class="align-middle d-sm-inline-block d-none">Previous</span>
                                            </button>
                                            <button class="btn btn-primary btn-next">
                                                <span
                                                    class="align-middle d-sm-inline-block d-none me-sm-1 me-0">Next</span>
                                                <i class="bx bx-chevron-right bx-sm me-sm-n2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <!-- Personal Info -->
                                <div id="personal-info" class="content">
                                    <div class="content-header mb-3">
                                        <h6 class="mb-0">Personal Info</h6>
                                        <small>Enter Your Personal Info.</small>
                                    </div>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <label for="avatar" class="form-label">photo profil</label>
                                            <input type="file"
                                                class="form-control @error('avatar') is-invalid @enderror"
                                                id="avatar" name="avatar" required autofocus
                                                placeholder="Enter your avatar" accept="image/png, image/jpeg">

                                            @error('avatar')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                        <div class="col-md-6">
                                            <label for="telp" class="form-label">telp</label>
                                            <input type="number"
                                                class="form-control @error('telp') is-invalid @enderror"
                                                id="telp" name="telp" value="{{ old('telp') }}" required
                                                autocomplete="telp" placeholder="Enter your telp">

                                            @error('telp')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                        <div class="col-md">
                                            <label for="address" class="form-label">alamat</label>
                                            <textarea class="form-control @error('address') is-invalid @enderror" name="address" id="address" rows="3">{{ old('address') }}</textarea>
                                            @error('address')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                        <div class="col-12 d-flex justify-content-between">
                                            <button class="btn btn-primary btn-prev"> <i
                                                    class="bx bx-chevron-left bx-sm ms-sm-n2"></i>
                                                <span class="align-middle d-sm-inline-block d-none">Previous</span>
                                            </button>
                                            <button type="submit" class="btn btn-success btn-submit">Submit</button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>

                        <p class="text-center pb-3">
                            <span>Sudah punya akun?</span>
                            <a href="{{ route('login') }}">
                                <span>Masuk sekarang</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <!-- /Login -->
        </div>
    </div>
    <!-- / Content -->
</x-auth>
