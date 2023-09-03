<x-auth>
    <x-slot name="title">Login Page</x-slot>
    <!-- Content -->

    <div class="justify-content-center">
        <div class="align-self-center row m-0">
            <!-- /Left Text -->
            <div class="d-none d-lg-flex col-md align-items-center p-5">
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
                    <h4 class="mb-2">Balik lagi! 👋</h4>
                    <p class="mb-4">Masuk ke akunmu dan nikmati pengalaman yang seru dan mudah</p>

                    <form id="formAuthentication" class="mb-3" action="{{ route('login') }}" method="POST">
                        @csrf
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control @error('email') is-invalid @enderror"
                                id="email" name="email" value="{{ old('email') }}" required autocomplete="email"
                                autofocus placeholder="Enter your email">

                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="mb-3 form-password-toggle">
                            <div class="d-flex justify-content-between">
                                <label class="form-label" for="password">Password</label>
                                <a href="{{ route('password.request') }}">
                                    <small>Lupa Password?</small>
                                </a>
                            </div>
                            <div class="input-group input-group-merge">
                                <input type="password" id="password"
                                    class="form-control @error('password') is-invalid @enderror" name="password"
                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                    aria-describedby="password" required />
                                <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="remember" id="remember"
                                    {{ old('remember') ? 'checked' : '' }}>
                                <label class="form-check-label" for="remember">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary d-grid w-100">
                            Sign in
                        </button>
                    </form>

                    <p class="text-center">
                        <span>Kamu anak baru?</span>
                        <a href="{{ route('register') }}">
                            <span>Yuk buat akun</span>
                        </a>
                    </p>
                </div>
            </div>
            <!-- /Login -->
        </div>
    </div>

    <!-- / Content -->
</x-auth>
