<form action="{{ route('profile.destroy', Auth()->user()->id) }}" class="fv-plugins-bootstrap5 fv-plugins-framework"
    method="POST">
    @csrf
    @method('delete')
    <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" name="confirmAccount" id="confirmAccount" required>
        <label class="form-check-label" for="confirmAccount">Saya mengonfirmasi akun saya
            dihapus</label>
        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
        </div>
    </div>
    <button type="submit" class="btn btn-danger">Hapus Akun</button>
    <input type="hidden">
</form>
