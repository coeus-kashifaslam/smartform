$(document).ready(function () {

    // Styled HTML 5 Select-Option Element
    $('.selectpicker').selectpicker();

    // Show Base Modal
    // $('.modal__form-builder').modal('show');

    $('.section-design__sidebar-list .list-group-item').on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });


    $('.js-upload-logo-cta-trigger').on('click',function (e) {
        e.preventDefault();
        $(this).closest('.upload-logo-cta').find('.js-upload-logo-file-input').trigger('click');
    });


    $('.js-del-placeholder').on('click', function () {
        $(this).closest('.upload-logo').find('.js-placeholder-img-tag').attr('src', '');
    });


    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.js-placeholder-img-tag').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(".js-upload-logo-file-input").change(function(){
        readURL(this);
    });

});

// Init Color Picker
$(function() {
    $('.colorpicker-component').colorpicker({
        format: 'hex'
    });
});


// Init Bootstrap Tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        placement: 'top'
    });
});

