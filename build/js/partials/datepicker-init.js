$(document).ready(function () {
    $('.datepicker-addon').on('click',function() {
        $(this).closest('.datepicker__col').find('.datepicker').focus();
    });
    $(document).on('focus',".datepicker", function(){
        $(this).datepicker({
            dateFormat: 'yy/mm/dd',
            beforeShow: function(input, inst) {
                $('#ui-datepicker-div').addClass('datepicker__base');
            }
        });
    });
});