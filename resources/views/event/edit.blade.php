<form action="{{ route('events.update', $event->id) }}" method="post" enctype="multipart/form-data">
    @csrf
    @method('put')
    <div class="mb-4">
        <h5>Ubah acara</h5>
        <div class="alert alert-warning" role="alert">
            <h6 class="alert-heading mb-1">Pastikan bahwa persyaratan-persyaratan ini terpenuhi
            </h6>
            <span>Informasi jelas dan valid</span>
        </div>

    </div>
    <div class="mb-3">
        <label for="name" class="form-label">Nama acara</label>
        <input type="text" class="form-control" name="name" value="{{ $event->name ?? old('name') }}"
            id="name" aria-describedby="helpId" placeholder="Cth: Championship Karate">
        @error('name')
            <small id="helpId" class="form-text text-danger fw-bold">{{ $message }}</small>
        @enderror
    </div>
    <div class="mb-3">
        <label for="location" class="form-label">Lokasi acara</label>
        <input type="text" class="form-control" name="location" value="{{ $event->location ?? old('location') }}"
            id="location" aria-describedby="helpId" placeholder="Cth: Lapangan GOR Kota Baru">
        @error('location')
            <small id="helpId" class="form-text text-danger fw-bold">{{ $message }}</small>
        @enderror
    </div>
    <div class="mb-3">
        <label for="description" class="form-label">Deskripsi/penjelasan acara</label>
        <textarea class="form-control" name="description" id="description" rows="3"
            placeholder="Cth: Championship karate adalah sebuah kompetisi karate yang diadakan untuk menentukan siapa yang menjadi juara dalam pertandingan tersebut.">{{ $event->description ?? old('description') }}</textarea>
        @error('description')
            <small id="helpId" class="form-text text-danger fw-bold">{{ $message }}</small>
        @enderror
    </div>
    <div class="mb-3">
        <label for="thumbnail" class="form-label">Thumbnail acara</label>
        <input type="file" class="form-control" name="thumbnail" id="thumbnail" accept="image/*"
            placeholder="thumbnail" aria-describedby="fileHelpId">
        @error('thumbnail')
            <small id="helpId" class="form-text text-danger fw-bold">{{ $message }}</small>
        @enderror
    </div>
    <div class="mb-3">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</form>
