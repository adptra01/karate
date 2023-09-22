<!-- Button trigger modal -->
<button type="button" class="btn btn-label-primary" data-bs-toggle="modal" data-bs-target="#modalId">
    Tambahkan Acara Baru
</button>

<div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId"
    aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ route('events.store') }}" method="post" enctype="multipart/form-data">
                @csrf
                <div class="modal-body">
                    <div class="text-center mb-4">
                        <h3 class="role-title fw-bold">Tambahkan Acara Baru</h3>
                    </div>
                    <div class="divider">
                        <div class="divider-text">Detail Acara</div>
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Nama acara</label>
                        <input type="text" class="form-control" name="name" value="{{ old('name') }}"
                            id="name" aria-describedby="helpId" placeholder="Cth: Championship Karate">
                        @error('name')
                            <small id="helpId" class="form-text text-danger fw-bold">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="mb-3">
                        <label for="location" class="form-label">Lokasi acara</label>
                        <input type="text" class="form-control" name="location" value="{{ old('location') }}"
                            id="location" aria-describedby="helpId" placeholder="Cth: Lapangan GOR Kota Baru">
                        @error('location')
                            <small id="helpId" class="form-text text-danger fw-bold">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Deskripsi/penjelasan acara</label>
                        <textarea class="form-control" name="description" id="editor" rows="3"
                            placeholder="Cth: Championship karate adalah sebuah kompetisi karate yang diadakan untuk menentukan siapa yang menjadi juara dalam pertandingan tersebut.">{{ old('description') }}</textarea>
                        @error('description')
                            <small id="helpId" class="form-text text-danger fw-bold">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="mb-3">
                        <label for="thumbnail" class="form-label">Thumbnail acara</label>
                        <input type="file" class="form-control" name="thumbnail" id="thumbnail"
                            placeholder="thumbnail" aria-describedby="fileHelpId">
                        @error('thumbnail')
                            <small id="helpId" class="form-text text-danger fw-bold">{{ $message }}</small>
                        @enderror
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                    <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </form>
        </div>
    </div>
</div>
