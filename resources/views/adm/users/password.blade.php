<form id="formChangePassword" method="POST" class="fv-plugins-bootstrap5 fv-plugins-framework">
    @csrf
    @method('put')
    <div class="alert alert-warning" role="alert">
        <h6 class="alert-heading mb-1">Pastikan bahwa persyaratan-persyaratan ini terpenuhi
        </h6>
        <span>Minimal 8 karakter, huruf kapital & simbol</span>
    </div>
    <div class="row">
        <div class="mb-3 col-12 col-sm-6">
            <label class="form-label" for="newPassword">Kata sandi baru</label>
            <div class="input-group input-group-merge has-validation">
                <input class="form-control" type="password" id="newPassword" name="newPassword"
                    placeholder="············">
                <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
            </div>
            @error('newPassword')
                <small class="fw-bold text-danger">{{ $message }}</small>
            @enderror
        </div>

        <div class="mb-3 col-12 col-sm-6">
            <label class="form-label" for="confirmPassword">Konfirmasi Kata Sandi
                baru</label>
            <div class="input-group input-group-merge has-validation">
                <input class="form-control" type="password" name="confirmPassword" id="confirmPassword"
                    placeholder="············">
                <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
            </div>
            @error('confirmPassword')
                <small class="fw-bold text-danger">{{ $message }}</small>
            @enderror
        </div>
        <div>
            <button type="submit" class="btn btn-primary me-2">Ubah</button>
        </div>
    </div>
</form>
