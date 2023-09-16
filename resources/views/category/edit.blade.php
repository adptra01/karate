<!-- Button trigger modal -->
<button type="button" class="btn btn-label-warning btn-sm" data-bs-toggle="modal"
    data-bs-target="#{{ Str::slug($category->name) }}">
    Edit
</button>

<!-- Modal -->
<div class="modal fade" id="{{ Str::slug($category->name) }}" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content text-start">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <form action="{{ route('category.update', $category->id) }}" method="post">
                @csrf
                @method('put')
                <div class="modal-body">
                    <div class="text-center mb-4">
                        <h3 class="role-title fw-bold">Edit Kelas Pertandingan</h3>
                        <p class="fw-bold text-warning">
                            {{ $category->name }}
                        </p>
                    </div>
                    <div class="divider">
                        <div class="divider-text">Detail Kelas Pertandingan</div>
                    </div>
                    <div class="mb-3">
                        <input type="hidden" name="event_id" value="{{ $event->id }}">
                        <label for="name" class="form-label">nama</label>
                        <input type="text" class="form-control" name="name" id="name"
                            value="{{ $category->name }}" aria-describedby="helpId" placeholder="Cth: Usia Dini">
                        @error('name')
                            <small id="name" class="form-text text-danger fw-bold">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="row">
                        <div class="col-md">
                            <div class="mb-3">
                                <label for="weight" class="form-label">Berat badan</label>
                                <input type="text" class="form-control" name="weight" id="weight"
                                    aria-describedby="weight" placeholder="Cth: +30 Kg" value="{{ $category->weight }}">
                                @error('weight')
                                    <small id="weight" class="form-text text-danger fw-bold">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="mb-3">
                                <label for="age" class="form-label">Umur</label>
                                <input type="text" class="form-control" name="age" id="age"
                                    aria-describedby="age" placeholder="Cth: 1 - 10 Tahun" value="{{ $category->age }}">
                                @error('age')
                                    <small id="age" class="form-text text-danger fw-bold">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md">
                            <div class="mb-3">
                                <label for="gender" class="form-label">Jenis Kelamin</label>
                                <select class="form-select" name="gender" id="gender">
                                    <option selected disabled>Select one</option>
                                    <option value="male" {{ $category->gender == 'male' ? 'selected' : '' }}>Putra
                                    </option>
                                    <option value="female" {{ $category->gender == 'female' ? 'selected' : '' }}>Putri
                                    </option>
                                </select>
                                @error('gender')
                                    <small id="gender" class="form-text text-danger fw-bold">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="mb-3">
                                <label for="type" class="form-label">Kategori</label>
                                <select class="form-select" name="type" id="type">
                                    <option selected disabled>Select one</option>
                                    <option value="individual" {{ $category->type == 'individual' ? 'selected' : '' }}>
                                        Perorangan</option>
                                    <option value="group" {{ $category->type == 'group' ? 'selected' : '' }}>Group
                                    </option>
                                </select>
                                @error('type')
                                    <small id="type" class="form-text text-danger fw-bold">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 text-end">
                        <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Tutup</button>
                        <button type="submit" class="btn btn-label-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
