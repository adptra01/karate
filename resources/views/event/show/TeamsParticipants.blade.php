<div class="row">
    <div class="col-md col-xl-4 mb-4">
        <h5 class="fw-bold">Tim</h5>
        <div class="table-responsive" style="max-height: 670px">
            <table class="table">
                <thead>
                    <tr>
                        <th>image</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $users = App\models\User::all();
                    @endphp
                    @foreach ($users as $no => $item)
                        <tr>
                            <td><img src="{{ $item->image ?? 'https://source.unsplash.com/random/?karate' }}"
                                    class="rounded-circle avatar avatar-sm" style="object-fit: cover" alt="user image">
                            </td>
                            <td>{{ $item->name }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    <div class="col-xl-8 mb-4">
        <h5 class="fw-bold">Peserta</h5>
        <div class="table-responsive" style="max-height: 670px">
            <table id="example" class="display table nowrap" style="width:100%">
                <thead>
                    <tr>
                        <th>image</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $users = App\models\User::all();
                    @endphp
                    @foreach ($users as $no => $item)
                        <tr>
                            <td><img src="{{ $item->image ?? 'https://source.unsplash.com/random/?karate' }}"
                                    class="rounded-circle avatar avatar-sm" style="object-fit: cover" alt="user image">
                            </td>
                            <td>{{ $item->name }}</td>
                            <td>
                                <div class="d-flex gap-3 justify-content-center">
                                    <a class="btn btn-info btn-sm" href="{{ route('users.show', $item->id) }}"
                                        role="button">Detail</a>
                                    <form action="{{ route('users.destroy', $item->id) }}" method="post">
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
