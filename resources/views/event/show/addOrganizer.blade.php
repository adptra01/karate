<!-- Button trigger modal -->
<button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Tambah Penyelenggara
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <form action="{{ route('organizers.store') }}" method="post">
                @csrf
                <div class="modal-body">
                    <div class="container text-center">
                        <h4 class="fw-bold">Tambah Penyelenggara</h4>
                        <p class="fw-bold">Tetapkan anggota manajemen</p>
                    </div>
                    <input type="hidden" name="eventId" value="{{ $event->id }}">
                    {{-- <div class="mb-3">
                        <label for="userId" class="form-label">Name</label>
                        <input type="text" class="form-control" name="userId" id="userId"
                            aria-describedby="helpId" placeholder="userId">
                        @error('userId')
                            <small id="helpId" class="form-text text-danger fw-bold">{{ $message }}</small>
                        @enderror
                    </div> --}}


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                    <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </form>
        </div>
    </div>
</div>
