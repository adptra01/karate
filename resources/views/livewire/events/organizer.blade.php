<div>
    @include('layouts.bs-select')

    <div class="mb-3">
        <h5>Anggota penyelenggara</h5>
        @can('manage_event')
            <div class="alert alert-danger" role="alert">
                <strong>Perhatian !!!!</strong>
                <p>User yang pilih adalah mereka yang dipilih dan memiliki tanggung jawab penuh dengan
                    acara ini. Pastikan tidak menyalahgunakan kewenangan.</p>
            </div>
            <form
                @if ($event->users->count() == null) wire:submit.prevent="store"@else
        wire:submit.prevent="update" @endif>
                <div class="mb-3">
                    <div wire:ignore>
                        <label for="userId" class="form-label">Pilih Anggota Penyelenggara</label>
                        <select id="userId" wire:model="userId" class="form-select selectpicker w-100"
                            data-style="btn-default" multiple data-max-options="3">
                    </div>
                    <option disabled>Pilih salah satu...</option>
                    @foreach ($users as $user)
                        <option value="{{ $user->id }}">
                            {{ $user->name }}
                        </option>
                    @endforeach
                    </select>
                </div>
                @error('userId')
                    <small class="fw-bold text-denger">{{ $message }}</small>
                @enderror
                <div class="my-3 text-end">
                    <button wire:loading.class="d-none" type="submit"
                        class="btn btn-label-{{ $event->users->count() == null ? 'primary' : 'warning' }} btn-sm">{{ $event->users->count() == null ? 'Tambah Anggota' : 'Ubah Anggota' }}</button>
                    <i wire:loading class="bx bx-loader bx-spin"></i>

                </div>
            </form>
        </div>
    @endcan
    <div class="card border">
        <div class="table-responsive">
            <table class="table card-table text-center">
                <thead>
                    <tr>
                        <th>image</th>
                        <th>Nama</th>
                        <th>Telp</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($event->users as $no => $item)
                        <tr>
                            <td><img src="{{ $item->image ?? 'https://source.unsplash.com/random/?karate' }}"
                                    class="rounded-circle avatar avatar-sm" style="object-fit: cover" alt="user image">
                            </td>
                            <td>{{ $item->name }}</td>
                            <td>{{ $item->telp }}</td>
                            <td>{{ $item->email }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
