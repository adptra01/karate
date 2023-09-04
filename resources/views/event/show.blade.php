<x-layout>
    <x-slot name="title">{{ $event->name }}</x-slot>
    @include('layouts.table')

    <div class="flex-grow-1">
        <!-- Header -->
        <div class="row">
            <div class="col-12">
                <div class="card mb-4">
                    <div class="user-profile-header-banner">
                        <img src="{{ $event->thumbnail ?? 'https://images.unsplash.com/photo-1603210185246-b1662978ea37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGthcmF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60' }}"
                            alt="Banner image" height="200px" style="object-fit: cover; width: -webkit-fill-available"
                            class="rounded-top">
                    </div>
                    <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                        <div class="flex-grow-1 mt-3 mt-sm-5">
                            <div
                                class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                <div class="card-body row p-0 pb-3">
                                    <div class="border-0 col-12 col-md-8 card-separator">
                                        <h5>Rekapitulasi acara <span
                                                class="text-primary fw-bold">{{ $event->name }}</span> hari ini:</h5>
                                        <div class="d-flex justify-content-between flex-wrap gap-3 me-5">
                                            <div class="d-flex align-items-center gap-3 me-4 me-sm-0">
                                                <span class=" bg-label-primary p-2 rounded">
                                                    <i class="bx bx-laptop bx-sm"></i>
                                                </span>
                                                <div class="content-right">
                                                    <p class="mb-0">Tim Terdaftar</p>
                                                    <h4 class="text-primary mb-0">34h</h4>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center gap-3">
                                                <span class="bg-label-info p-2 rounded">
                                                    <i class="bx bx-bulb bx-sm"></i>
                                                </span>
                                                <div class="content-right">
                                                    <p class="mb-0">Peserta Terdaftar</p>
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
                                    </div>
                                    <div class="col-12 col-md-4 ps-md-3 ps-lg-5 pt-3 pt-md-0">
                                        <div class="d-flex justify-content-end align-items-center"
                                            style="position: relative;">
                                            <form action="{{ route('events.status', $event->id) }}" method="post">
                                                @csrf
                                                @method('put')
                                                <button type="submit"
                                                    class="btn btn-label-{{ $event->status == 0 ? 'success' : 'danger' }}">{{ $event->status == 0 ? 'Buka Acara' : 'Tutup Acara' }}</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-2">
                            <h5>Lokasi: </h5>
                            <p>{{ $event->location }}</p>
                        </div>
                        <div class="mb-2">
                            <h5>Deskripsi: </h5>
                            <p>{{ $event->description }}</p>
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
                        <li class="nav-item">
                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-pills-top-event" aria-controls="navs-pills-top-event"
                                aria-selected="false">Acara</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-pills-top-organizer" aria-controls="navs-pills-top-organizer"
                                aria-selected="false">Penyelenggara</button>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="navs-pills-top-home" role="tabpanel">
                            @include('event.show.teamsParticipants')
                        </div>
                        <div class="tab-pane fade" id="navs-pills-top-event" role="tabpanel">
                            @include('event.edit')
                        </div>
                        <div class="tab-pane fade" id="navs-pills-top-organizer" role="tabpanel">
                            @include('event.show.addOrganizer')
                            @include('event.show.organizer')
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ Header -->
    </div>
</x-layout>
