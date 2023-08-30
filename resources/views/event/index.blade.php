<x-layout>
    <x-slot name="title">Events</x-slot>
    @include('layouts.table')

    <div class="card">
        <div class="card-header">
            @include('event.add')
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table id="example" class="display table nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>telp</th>
                            <th>image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($events as $no => $event)
                            <tr>
                                <td>{{ ++$no }}.</td>
                                <td>{{ $event }}</td>
                                <td>{{ $event->email }}</td>
                                <td>{{ $event->telp }}</td>
                                <td><img src="{{ $event->image ?? 'https://source.unsplash.com/random/?karate' }}"
                                        class="rounded-circle" width="30" height="30" alt="user image"></td>
                                <td>
                                    <div class="d-flex gap-3 justify-content-center">
                                        <a class="btn btn-info btn-sm" href="{{ route('users.show', $event->id) }}"
                                            role="button">Detail</a>
                                        <form action="{{ route('users.destroy', $event->id) }}" method="post">
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
