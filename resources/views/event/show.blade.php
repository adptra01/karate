<x-layout>
    <x-slot name="title">{{ $event->name }}</x-slot>
    @push('additional-select2')
        maximumSelectionLength: 3
    @endpush

    @include('layouts.table')
    @include('layouts.select2')


    <div class="flex-grow-1">
        <!-- Header -->
        <div class="row">
            <div class="col-12">
                <div class="card mb-4">
                    <div class="user-profile-header-banner">
                        <img src="{{ $event->thumbnail }}" alt="Banner image" height="200px"
                            style="object-fit: cover; width: -webkit-fill-available" class="rounded-top">
                    </div>
                    <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-1">
                        <div class="flex-grow-1 ">
                            <div class="d-flex container gap-4">
                                <div class="card-body row p-0 pb-1">
                                    <div class="d-flex justify-content-between flex-wrap gap-3 my-3">
                                        <div class="d-flex align-items-center gap-3">
                                            <span class=" bg-label-primary p-2 rounded">
                                                <i class="bx bx-laptop bx-sm"></i>
                                            </span>
                                            <div class="content-right">
                                                <p class="mb-0">Tim</p>
                                                <h4 class="text-primary mb-0">34h</h4>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center gap-3">
                                            <span class="bg-label-info p-2 rounded">
                                                <i class="bx bx-bulb bx-sm"></i>
                                            </span>
                                            <div class="content-right">
                                                <p class="mb-0">Peserta</p>
                                                <h4 class="text-info mb-0">82%</h4>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center gap-3">
                                            <span
                                                class="bg-label-{{ $event->status == 1 ? 'success' : 'danger' }} p-2 rounded">
                                                <i
                                                    class="bx bx-{{ $event->status == 1 ? 'check-circle' : 'x' }} bx-sm"></i>
                                            </span>
                                            <div class="content-right">
                                                <p class="mb-0">Status</p>
                                                <span
                                                    class="badge bg-label-{{ $event->status == 1 ? 'success' : 'danger' }}">{{ $event->status == 1 ? 'Buka' : 'Tutup' }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between gap-1 my-3">
                                        @role('admin|organizer')
                                            <form action="{{ route('events.status', $event->id) }}" method="post">
                                                @csrf
                                                @method('put')
                                                <input type="hidden" name="status"
                                                    value="{{ $event->status == 1 ? 0 : 1 }}">
                                                <button type="submit"
                                                    class="btn btn-label-{{ $event->status == 0 ? 'success' : 'danger' }}">{{ $event->status == 0 ? 'Buka Acara' : 'Tutup Acara' }}</button>
                                            </form>
                                        @else
                                            <a class="btn btn-label-{{ $event->status == 1 ? 'success' : 'danger' }}"
                                                href="{{ route('events.register', $event->id) }}">{{ $event->status == 1 ? 'Daftar pertandingan' : 'Pendaftaran ditutup' }}</a>
                                        @endrole
                                        <div data-bs-toggle="tooltip" data-bs-html="true" data-bs-offset="0,4"
                                            title="Detail Pertandingan">
                                            <a type="button" class="accordion-button" data-bs-toggle="collapse"
                                                data-bs-target="#{{ Str::slug($event->name) }}" aria-expanded="true"
                                                aria-controls="{{ Str::slug($event->name) }}" role="tabpanel">
                                                <i class='bx-tada bx bxs-down-arrow bx-border border-white'></i>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer px-3">
                        <div class="accordion" id="accordionExample">
                            <div id="{{ str::slug($event->name) }}" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="mb-2">
                                                <h6 class="fw-bold text-decoration-underline">Lokasi</h6>
                                                <p>{{ $event->location }}</p>
                                            </div>
                                        </div>
                                        <div class="col-md">
                                            <div class="mb-2">
                                                <h6 class="fw-bold text-decoration-underline">Deskripsi</h6>
                                                {!! $event->description !!}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="nav-align-top mb-4">
                    <ul class="nav nav-pills mb-3" role="tablist">
                        <li class="nav-item">
                            <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-pills-top-home" aria-controls="navs-pills-top-home"
                                aria-selected="true">Tim & Peserta</button>
                        </li>
                        @can('manage_event')
                            <li class="nav-item">
                                <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-top-event" aria-controls="navs-pills-top-event"
                                    aria-selected="false">Pengaturan</button>
                            </li>
                        @endcan
                        <li class="nav-item">
                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-pills-top-category" aria-controls="navs-pills-top-category"
                                aria-selected="false">Kelas Pertandingan</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-pills-top-organizer" aria-controls="navs-pills-top-organizer"
                                aria-selected="false">Penyelenggara</button>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="navs-pills-top-home" role="tabpanel">
                            @include('event.chart')
                        </div>
                        @can('manage_event')
                            <div class="tab-pane fade" id="navs-pills-top-event" role="tabpanel">
                                @include('event.edit')
                            </div>
                        @endcan
                        <div class="tab-pane fade" id="navs-pills-top-category" role="tabpanel">
                            @include('category.index')
                        </div>
                        <div class="tab-pane fade" id="navs-pills-top-organizer" role="tabpanel">
                            @include('organizer.index')
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ Header -->
    </div>

</x-layout>
