    @include('layouts.editor')
    <form action="{{ route('events.update', $event->slug) }}" method="post" enctype="multipart/form-data">
        @csrf
        @method('put')
        <div class="mb-4">
            <h5>Informasi Acara</h5>
            <div class="alert alert-warning" role="alert">
                <h6 class="alert-heading mb-1">Anda dapat mengubah informasi dari acara <span
                        class="text-white">{{ $event->name }}</span>
                    serta pastikan bahwa
                    informasi itu jelas dan valid.</h6>
            </div>
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Nama acara</label>
            <input type="text" class="form-control" name="name" value="{{ $event->name ?? old('name') }}"
                id="name" aria-describedby="helpId" placeholder="Cth: Championship Karate">
            @error('name')
                <small id="name" class="form-text text-danger fw-bold">{{ $message }}</small>
            @enderror
        </div>
        <div class="row">
            <div class="col-md">
                <div class="mb-3">
                    <label for="location" class="form-label">Lokasi acara</label>
                    <input type="text" class="form-control" name="location"
                        value="{{ $event->location ?? old('location') }}" id="location" aria-describedby="helpId"
                        placeholder="Cth: Lapangan GOR Kota Baru">
                    @error('location')
                        <small id="location" class="form-text text-danger fw-bold">{{ $message }}</small>
                    @enderror
                </div>
            </div>
            <div class="col-md">
                <div class="mb-3">
                    <label for="thumbnail" class="form-label">Thumbnail acara</label>
                    <input type="file" class="form-control" name="thumbnail" id="thumbnail" accept="image/*"
                        placeholder="thumbnail" aria-describedby="fileHelpId">
                    @error('thumbnail')
                        <small id="thumbnail" class="form-text text-danger fw-bold">{{ $message }}</small>
                    @enderror
                </div>
            </div>
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Deskripsi/penjelasan acara</label>
            <textarea class="form-control" id="editor" name="description" rows="10">{{ $event->description ?? old('description') }}</textarea>
            @error('description')
                <small id="description" class="form-text text-danger fw-bold">{{ $message }}</small>
            @enderror
        </div>
        <div class="mb-3">
            <button type="submit" class="btn btn-primary">Ubah</button>
        </div>
    </form>
