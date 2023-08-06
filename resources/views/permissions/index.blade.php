<x-layout>
    <x-slot name="title">Permissions List</x-slot>
    @include('layouts.table')
    <p>Setiap kategori mencakup peran yang telah ditentukan seperti yang
        ditunjukkan di bawah ini.</p>
    <div class="card">
        <div class="card-header">
            @include('permissions.create')
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table id="example" class="display table nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Assigned To</th>
                            <th>Create date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($permissions as $no => $permission)
                            <tr>
                                <td>{{ ++$no }}.</td>
                                <td>{{ $permission->name }}</td>
                                <td>
                                    @foreach ($permission->roles as $role)
                                        <span class="badge bg-label-primary">{{ $role->name }}</span>
                                    @endforeach
                                </td>
                                <td>{{ $permission->created_at }}</td>
                                <td>
                                    <div class="d-flex gap-3 justify-content-center">
                                        @include('permissions.edit')
                                        <form action="{{ route('permissions.destroy', $permission->id) }}"
                                            method="post">
                                            @csrf
                                            @method('delete')
                                            <button type="submit" class="btn btn-danger btn-sm">Hapus</button>
                                        </form>
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
