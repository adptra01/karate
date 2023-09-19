<div class="mb-3">
    <h5>Anggota penyelenggara</h5>
    @can('manage_event')
        <div class="alert alert-danger" role="alert">
            <strong>Perhatian !!!!</strong>
            <p>User yang pilih adalah mereka yang dipilih dan memiliki tanggung jawab penuh dengan
                acara ini. Pastikan tidak menyalahgunakan kewenangan.</p>
        </div>

        @if ($event->users->count() > 0)
            @include('events.organizer.edit')
        @else
            @include('events.organizer.add')
        @endif
    @endcan
</div>
<div class="table-responsive">
    <table id="example" class="display table nowrap" style="width:100%">
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
