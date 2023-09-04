<form id="formAccountSettings" method="POST" class="fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate"
    action="{{ route('profile.update', Auth()->user()->id) }}">
    @csrf
    @method('PUT')
    <div class="row">
        <div class="mb-3 col-md-6 fv-plugins-icon-container">
            <label for="name" class="form-label">Nama</label>
            <input class="form-control @error('name')
        invalid
        @enderror" type="text" id="name"
                value="{{ auth()->user()->name }}" name="name">
            @error('name')
                <small class="text-danger fw-bold">{{ $message }}</small>
            @enderror
        </div>
        <div class="mb-3 col-md-6 fv-plugins-icon-container">
            <label for="email" class="form-label">email</label>
            <input class="form-control @error('email')
        invalid
        @enderror" type="email" id="email"
                value="{{ auth()->user()->email }}" name="email">
            @error('email')
                <small class="text-danger fw-bold">{{ $message }}</small>
            @enderror
        </div>
        <div class="mb-3 col-md-6 fv-plugins-icon-container">
            <label for="telp" class="form-label">telp</label>
            <input class="form-control @error('telp')
        invalid
        @enderror" type="number" id="telp"
                value="{{ auth()->user()->telp }}" name="telp">
            @error('telp')
                <small class="text-danger fw-bold">{{ $message }}</small>
            @enderror
        </div>
        <div class="mb-3 col-md-6 fv-plugins-icon-container">
            <label for="address" class="form-label">address</label>
            <input class="form-control @error('address')
        invalid
        @enderror" type="address"
                id="address" value="{{ auth()->user()->address }}" name="address">
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
