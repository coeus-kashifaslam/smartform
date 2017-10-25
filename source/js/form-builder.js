$(document).ready(function () {

    // Styled HTML 5 Select-Option Element
    $('.selectpicker').selectpicker();

    // Show Base Modal
    // $('.modal__form-builder').modal('show');


    // Init Color Picker
    $(function() {
        $('.colorpicker-component').colorpicker({
            format: 'hex'
        });
    });

});


// Init Bootstrap Tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        placement: 'top'
    });
});

