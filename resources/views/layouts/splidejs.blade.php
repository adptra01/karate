{{-- <div class="splide">
    <div class="splide__track">
        <ul class="splide__list">
            @foreach ($ts as $item)
                <li class="splide__slide">
                    <div class="splide__slide__container">
                        <div class="slide__content mb-5 text-center"
                            style="width: 600px;">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img class="card-img card-img-left" src="assets/img/elements/12.jpg"
                                            alt="Card image" />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                This is a wider card with supporting text below as a natural lead-in
                                                to additional content. This content
                                                is a
                                                little bit longer.
                                            </p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins
                                                    ago</small></p>
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
</div> --}}

@push('css')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@2.4.21/dist/css/splide.min.css" />
@endpush
@push('scripts')
    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@2.4.21/dist/js/splide.min.js"></script>
@endpush
@push('js')
    new Splide( '.splide', {
    @stack('additional-splide')
    } ).mount();
@endpush
