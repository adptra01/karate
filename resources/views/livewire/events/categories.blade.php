<div>
    <div class="mb-3">
        <h5>Kelas Pertandingan</h5>
        @can('manage_event')
            <div class="alert alert-danger" role="alert">
                <strong>Perhatian !!!!</strong>
                <p>User yang pilih adalah mereka yang dipilih dan memiliki tanggung jawab penuh dengan
                    acara ini. Pastikan tidak menyalahgunakan kewenangan.</p>
            </div>
            @if ($formUpdate == true)
                <div class="border p-3 rounded">
                    <div class="divider">
                        <div class="divider-text fw-bold">
                            <h5>
                                Update Kelas Pertandingan
                            </h5>
                        </div>
                    </div>
                    <form wire:submit.prevent="update">
                        <div class="row">
                            <div class="col-md">
                                <div class="mb-3">
                                    <label for="name" class="form-label">nama</label>
                                    <input type="text" class="form-control" wire:model="name" id="name"
                                        value="{{ old('name') }}" aria-describedby="helpId"
                                        placeholder="Cth: Kata Usia Dini/Kata Putra/Kata Putri">
                                    @error('name')
                                        <small wire:loading.class="d-none" wire:target="name"
                                            class="form-text text-danger fw-bold">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="mb-3">
                                    <label for="type" class="form-label">Kategori</label>
                                    <select class="form-select" wire:model="type" id="type">
                                        <option selected>Select one</option>
                                        <option value="individual">Perorangan</option>
                                        <option value="group">Group</option>
                                    </select>
                                    @error('type')
                                        <small wire:loading.class="d-none" wire:target="type"
                                            class="form-text text-danger fw-bold">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md">
                                <div class="mb-3">
                                    <label for="weight" class="form-label">Berat badan</label>
                                    <input type="text" class="form-control" wire:model="weight" id="weight"
                                        aria-describedby="weight" placeholder="Cth: +30 Kg" value="{{ old('weight') }}">
                                    @error('weight')
                                        <small wire:loading.class="d-none" wire:target="weight"
                                            class="form-text text-danger fw-bold">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="mb-3">
                                    <label for="age" class="form-label">Umur</label>
                                    <input type="text" class="form-control" wire:model="age" id="age"
                                        aria-describedby="age" placeholder="Cth: 1 - 10 Tahun" value="{{ old('age') }}">
                                    @error('age')
                                        <small wire:loading.class="d-none" wire:target="age"
                                            class="form-text text-danger fw-bold">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="mb-3">
                                    <label for="gender" class="form-label">Jenis Kelamin</label>
                                    <select class="form-select" wire:model="gender" id="gender">
                                        <option selected>Select one</option>
                                        <option value="male">Putra</option>
                                        <option value="female">Putri</option>
                                    </select>
                                    @error('gender')
                                        <small wire:loading.class="d-none" wire:target="gender"
                                            class="form-text text-danger fw-bold">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <button wire:offline.attr="disabled" type="submit"
                                class="btn btn-label-primary text-end">Submit</button>
                        </div>
                    </form>
                </div>
            @elseif ($formUpdate == false)
                <div class="border p-3 rounded">
                    <div class="divider">
                        <div class="divider-text fw-bold">
                            <h5>
                                Tambah Kelas Pertandingan
                            </h5>
                        </div>
                    </div>
                    <form wire:submit.prevent="store">
                        <div class="row">
                            <div class="col-md">
                                <div class="mb-3">
                                    <label for="name" class="form-label">nama</label>
                                    <input type="text" class="form-control" wire:model="name" id="name"
                                        value="{{ old('name') }}" aria-describedby="helpId"
                                        placeholder="Cth: Kata Usia Dini/Kata Putra/Kata Putri">
                                    @error('name')
                                        <small wire:loading.class="d-none" wire:target="name"
                                            class="form-text text-danger fw-bold">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="mb-3">
                                    <label for="type" class="form-label">Kategori</label>
                                    <select class="form-select" wire:model="type" id="type">
                                        <option selected>Select one</option>
                                        <option value="individual">Perorangan</option>
                                        <option value="group">Group</option>
                                    </select>
                                    @error('type')
                                        <small wire:loading.class="d-none" wire:target="type"
                                            class="form-text text-danger fw-bold">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md">
                                <div class="mb-3">
                                    <label for="weight" class="form-label">Berat badan</label>
                                    <input type="text" class="form-control" wire:model="weight" id="weight"
                                        aria-describedby="weight" placeholder="Cth: +30 Kg" value="{{ old('weight') }}">
                                    @error('weight')
                                        <small wire:loading.class="d-none" wire:target="weight"
                                            class="form-text text-danger fw-bold">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="mb-3">
                                    <label for="age" class="form-label">Umur</label>
                                    <input type="text" class="form-control" wire:model="age" id="age"
                                        aria-describedby="age" placeholder="Cth: 1 - 10 Tahun"
                                        value="{{ old('age') }}">
                                    @error('age')
                                        <small wire:loading.class="d-none" wire:target="age"
                                            class="form-text text-danger fw-bold">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="mb-3">
                                    <label for="gender" class="form-label">Jenis Kelamin</label>
                                    <select class="form-select" wire:model="gender" id="gender">
                                        <option selected>Select one</option>
                                        <option value="male">Putra</option>
                                        <option value="female">Putri</option>
                                    </select>
                                    @error('gender')
                                        <small wire:loading.class="d-none" wire:target="gender"
                                            class="form-text text-danger fw-bold">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <button wire:offline.attr="disabled" type="submit"
                                class="btn btn-label-primary text-end">Submit</button>
                        </div>
                    </form>
                </div>
            @endif

        @endcan
    </div>

    <div class="card border">
        <div class="table-responsive">
            <table class="table card-table text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nama</th>
                        <th>Jenis Kelamin</th>
                        <th>Berat</th>
                        <th>Umur</th>
                        <th>Kategori</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($categories as $no => $category)
                        <tr>
                            <td>{{ ++$no }}</td>
                            <td>{{ $category->name }}</td>
                            <td>{{ $category->gender == 'male' ? 'Putra' : 'Putri' }}</td>
                            <td>{{ $category->weight }}</td>
                            <td>{{ $category->age }}</td>
                            <td>{{ $category->type == 'group' ? 'Group' : 'Perorangan' }}</td>
                            <td>
                                @can('manage_event')
                                    <div class="d-flex gap-3">
                                        <button wire:loading.attr="disabled" class="btn btn-sm btn-label-warning"
                                            role="button" wire:click="show({{ $category->id }})">Edit</button>
                                        <button wire:loading.attr="disabled" class="btn btn-sm btn-label-danger"
                                            role="button" wire:click="destroy({{ $category->id }})">Hapus</button>
                                    </div>
                                @else
                                    -
                                @endcan
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
