<form action="{{ route('events.registered', $event->slug) }}" method="post">
    @csrf
    <div class="mb-3">
        <label for="event" class="form-label">event</label>
        <select class="form-select" name="event" id="event" disabled>
            <option selected>{{ $event->name }}</option>
        </select>
        @error('event')
            <small id="event" class="form-text text-danger fw-bold">{{ $message }}</small>
        @enderror
    </div>
    <div class="mb-3">
        <label for="name" class="form-label">Nama Tim</label>
        <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId"
            value="{{ old('name') }}" placeholder="Enter your name team">
        @error('name')
            <small id="name" class="form-text text-danger fw-bold">{{ $message }}</small>
        @enderror
    </div>
    <div class="row">
        <div class="col-md">
            <div class="mb-3">
                <label for="logo" class="form-label">logo tim</label>
                <input type="file" class="form-control" name="logo" id="logo" aria-describedby="helpId"
                    placeholder="Enter your logo team">
                @error('logo')
                    <small id="logo" class="form-text text-danger fw-bold">{{ $message }}</small>
                @enderror
            </div>
        </div>
        <div class="col-md">
            <div class="mb-3">
                <label for="region" class="form-label">Lokasi/Asal Daerah</label>
                <input type="text" class="form-control" name="region" id="region" aria-describedby="helpId"
                    value="{{ old('region') }}" placeholder="Enter your region team">
                @error('region')
                    <small id="region" class="form-text text-danger fw-bold">{{ $message }}</small>
                @enderror
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md">
            <div class="mb-3">
                <label for="manager" class="form-label">manager tim</label>
                <input type="text" class="form-control" name="manager" id="manager" aria-describedby="helpId"
                    value="{{ old('manager') }}" placeholder="Enter your manager team">
                @error('manager')
                    <small id="manager" class="form-text text-danger fw-bold">{{ $message }}</small>
                @enderror
            </div>
        </div>
        <div class="col-md">
            <div class="mb-3">
                <label for="telp" class="form-label">telp manager</label>
                <input type="number" class="form-control" name="telp" id="telp" aria-describedby="helpId"
                    value="{{ old('telp') }}" placeholder="Enter your telp team manager">
                @error('telp')
                    <small id="telp" class="form-text text-danger fw-bold">{{ $message }}</small>
                @enderror
            </div>
        </div>
        <div class="col-md">
            <div class="mb-3">
                <label for="photo" class="form-label">foto manager</label>
                <input type="file" class="form-control" name="photo" id="photo" aria-describedby="helpId"
                    placeholder="Enter your photo team">
                @error('photo')
                    <small id="photo" class="form-text text-danger fw-bold">{{ $message }}</small>
                @enderror
            </div>
        </div>
    </div>
    <div class="mb-3 text-end">
        <button type="submit" class="btn btn-label-primary">Daftar</button>
    </div>

</form>
