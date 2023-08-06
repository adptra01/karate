<x-layout>
    <x-slot name="title">Roles list</x-slot>
    @include('layouts.table')
    <div class="alert alert-primary" role="alert">
        <strong>Sebuah peran menyediakan akses ke menu dan fitur yang telah ditentukan sehingga tergantung pada peran
            yang diberikan, seorang administrator dapat memiliki akses ke apa yang dibutuhkan pengguna.</strong>
    </div>
    <div class="row g-4 mb-3">
        @foreach ($roles as $role)
            <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between mb-2">
                            <h6 class="fw-normal">Total {{ $role->users->count() }} users</h6>
                            <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
                                @foreach ($role->users as $user)
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        class="avatar avatar-sm pull-up" aria-label="Vinnie Mostowy"
                                        data-bs-original-title="Vinnie Mostowy">
                                        <img class="rounded-circle" src="{{ $user->avatar }}" alt="Avatar">
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                        <div class="d-flex justify-content-between align-items-end">
                            <div class="role-heading justify-content-rounded">
                                <h4 class="mb-1">{{ $role->name }}</h4>
                                @include('roles.edit')
                            </div>
                            <a href="{{ route('roles.destroy', $role->id) }}"
                                onclick="event.preventDefault();
                              document.getElementById('{{ Str::slug($role->name) }}-destroy-form-{{ $role->id }}').submit();"
                                class="text-danger">Delete
                                Role</a>
                            <form id="{{ Str::slug($role->name) }}-destroy-form-{{ $role->id }}" class="d-none"
                                action="{{ route('roles.destroy', $role->id) }}" method="post">
                                @csrf
                                @method('delete')
                                <a type="submit">Hapus</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>


    <div class="card">
        <div class="card-header">
            @include('roles.create')
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table id="example" class="display table nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($users as $no => $item)
                            <tr>
                                <td>{{ ++$no }}.</td>
                                <td>{{ $item->name }}</td>
                                <td>{{ $item->roles->first()->name ?? '-' }}</td>
                                <td><span
                                        class="badge bg-label-{{ $item->status == 0 ? 'danger' : 'success' }}">{{ $item->status == 0 ? 'NON ACTIVE' : 'ACTIVE' }}</span>
                                </td>
                                <td>
                                    <div class="d-flex gap-3 justify-content-center">

                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</x-layout>
