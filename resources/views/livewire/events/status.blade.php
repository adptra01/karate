<div>
    <div class="d-flex align-items-center gap-3">
        <span class="bg-label-{{ $status == 1 ? 'success' : 'danger' }} p-2 rounded">
            <i class="bx bx-{{ $status == 1 ? 'check-circle' : 'x' }} bx-sm"></i>
        </span>
        <div class="content-right">
            <p class="mb-0">Status</p>
            <span
                class="badge bg-label-{{ $status == 1 ? 'success' : 'danger' }}">{{ $status == 1 ? 'Buka' : 'Tutup' }}</span>
        </div>
    </div>
</div>
