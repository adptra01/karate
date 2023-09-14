<x-layout>
    <x-slot name="title">Events</x-slot>
    @push('additional-splide')
        perPage : 2,
        breakpoints: {
        640: {
        perPage: 1,
        },
        },
    @endpush
    @include('layouts.editor')
    @include('layouts.table')
    @include('layouts.splidejs')
    @can('manage_event')
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
                                <th>thumbnail</th>
                                <th>Nama</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @hasrole('organizer')
                                @foreach (Auth()->user()->events as $no => $event)
                                    <tr>
                                        <td>{{ ++$no }}.</td>
                                        <td><img src="{{ $event->thumbnail }}" alt=""
                                                class="avatar avatar-sm rounded-circle">
                                        </td>
                                        <td>{{ $event->name }}</td>
                                        <td><span
                                                class="badge bg-label-{{ $event->status == 0 ? 'danger' : 'success' }}">{{ $event->status == 0 ? 'Tutup' : 'Buka' }}</span>
                                        </td>
                                        <td>
                                            <div class="d-flex gap-3 justify-content-center">
                                                @can('manage_event')
                                                    <a class="btn btn-info btn-sm" href="{{ route('events.show', $event->id) }}"
                                                        role="button">Detail</a>
                                                    <form action="{{ route('events.destroy', $event->id) }}" method="post">
                                                        @csrf
                                                        @method('delete')
                                                        <button type="submit" class="btn btn-danger btn-sm">Hapus</button>
                                                    </form>
                                                @endcan
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            @endrole
                            @hasrole('admin')
                                @foreach ($events as $no => $event)
                                    <tr>
                                        <td>{{ ++$no }}.</td>
                                        <td><img src="{{ $event->thumbnail }}" alt=""
                                                class="avatar avatar-sm rounded-circle">
                                        </td>
                                        <td>{{ $event->name }}</td>
                                        <td><span
                                                class="badge bg-label-{{ $event->status == 0 ? 'danger' : 'success' }}">{{ $event->status == 0 ? 'Tutup' : 'Buka' }}</span>
                                        </td>
                                        <td>
                                            <div class="d-flex gap-3 justify-content-center">
                                                <a class="btn btn-info btn-sm" href="{{ route('events.show', $event->id) }}"
                                                    role="button">Detail</a>
                                                <form action="{{ route('events.destroy', $event->id) }}" method="post">
                                                    @csrf
                                                    @method('delete')
                                                    <button type="submit" class="btn btn-danger btn-sm">Hapus</button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            @endrole
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    @else
        <h6 class="text-warning mt-3">Berlangsung</h6>
        @if ($activeEvents->isNotEmpty())
            <div class="splide">
                <div class="splide__track">
                    <ul class="splide__list">
                        @foreach ($activeEvents as $event)
                            <li class="splide__slide">
                                <div class="splide__slide__container">
                                    <div class="slide__content">
                                        <div class="card mb-5 shadow-lg mx-2 rounded">
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img class="card-img card-img-left" src="assets/img/elements/12.jpg"
                                                        style="min-width: 170px;object-fit: cover; min-height: 200px;"
                                                        alt="Card image" />
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="card-title fw-bold">{{ $event->name }}</h5>
                                                        <p class="card-text">
                                                            {!! Str::limit($event->description, 50, '...') !!}
                                                        </p>
                                                        <a href="{{ route('events.show', $event->id) }}"
                                                            class="btn btn-label-primary">Detail</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        @else
            <div class="card shadow-lg rounded bg-body" style="max-width: 300px; height: 200px;">
            </div>
        @endif
    @endcan


</x-layout>
