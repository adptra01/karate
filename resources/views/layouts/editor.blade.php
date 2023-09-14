@push('scripts')
    <script src="https://cdn.ckeditor.com/ckeditor5/39.0.0/classic/ckeditor.js"></script>
@endpush
<style>
    .ck-editor__editable[role="textbox"] {
        /* editing area */
        min-height: 200px;
        background: #232333;
    }

    .ck-content .image {
        /* block images */
        background: #232333;
        max-width: 80%;
        margin: 20px auto;
    }

    .ck.ck-editor__main>.ck-editor__editable {
        background: #2b2c40;
        border-color: #373952;
    }

    .ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,
    .ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners {
        border-radius: var(--ck-border-radius);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        background: #2b2c40;
        border-color: #373952;
    }

    .ck-reset_all :not(.ck-reset_all-excluded *),
    .ck.ck-reset_all {
        border-color: #373952;
        color: #8b8cb0;
        cursor: auto;
        float: none;
        font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
        text-align: left;
        white-space: nowrap;
    }

    .ck.ck-editor__main>.ck-editor__editable:not(.ck-focused) {
        border-color: #373952;
    }
</style>

@push('js')
    ClassicEditor
    .create(document.querySelector("#editor"), {
    toolbar: {
    items: [
    'selectAll','heading','bold', 'italic','bulletedList', 'numberedList', 'todoList','outdent', 'indent','undo',
    'redo','link',
    ],
    },
    })
    .then(editor => {
    console.log("Editor berhasil dimuat:", editor);
    })
    .catch(error => {
    console.error("Ada kesalahan dalam memuat editor:", error);
    });
@endpush
