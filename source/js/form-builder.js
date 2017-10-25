$(document).ready(function () {

    // Styled HTML 5 Select-Option Element
    $('.selectpicker').selectpicker();

    // Show Base Modal
    $('.modal__form-builder').modal('show');

    $('.section-design__sidebar-list .list-group-item').on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
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

