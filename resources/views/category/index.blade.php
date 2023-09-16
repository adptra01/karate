<div class="mb-3">
    <h5>Kelas Pertandingan</h5>
    @can('manage_event')
        @include('category.add')
        <div class="alert alert-danger" role="alert">
            <strong>Perhatian !!!!</strong>
            <p>User yang pilih adalah mereka yang dipilih dan memiliki tanggung jawab penuh dengan
                acara ini. Pastikan tidak menyalahgunakan kewenangan.</p>
        </div>
    @endcan
</div>
<div class="table-responsive">
    <table id="example" class="display table nowrap" style="width:100%">
        <thead>
            <tr>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>Berat</th>
                <th>Umur</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($categories as $no => $category)
                <tr>
                    <td>{{ $category->name }}</td>
                    <td>{{ $category->gender }}</td>
                    <td>{{ $category->weight }}</td>
                    <td>{{ $category->age }}</td>
                    <td>
                        @can('manage_event')
                            <div class="d-flex gap-3 justify-content-center">
                                @include('category.edit')
                                <form action="" method="post">
                                    @csrf
                                    @method('delete')
                                    <button type="submit" class="btn btn-label-danger btn-sm">Hapus</button>
                                </form>
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
