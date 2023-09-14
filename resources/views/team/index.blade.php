<x-layout>
    <x-slot name="title">{{ $event->name ?? '' }}</x-slot>
    <div class="card mb-3">
        <div class="d-flex align-items-end row">
            <div class="col-8">
                <div class="card-body">
                    <h4 class="card-title mb-4">Hello {{ auth()->user()->name }}!</h4>
                    <small class="mb-3">Jangan lewatkan kesempatan ini untuk menunjukkan <span
                            class="text-primary">kemampuanmu</span>
                        dan bersaing dengan <span class="text-warning">tim-tim terbaik</span> di sana. Ayo daftarkan
                        <span class="text-success">timmu</span> sekarang dan raih
                        <span class="text-danger">kemenangan</span>!
                    </small>
                </div>
            </div>
            <div class="col-4 pt-3 ps-0 text-center">
                <img src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/prize-light.png"
                    width="90" height="140" class="rounded-start" alt="View Sales">
            </div>
        </div>
    </div>
    <div class="card mb-3">
        <div class="card-body">
            {{-- @include('team.add') --}}
        </div>
    </div>
</x-layout>
