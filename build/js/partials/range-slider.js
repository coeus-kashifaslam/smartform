$(document).ready(function (){

    $(".bootstrap-slider").slider();
    $(".bootstrap-slider").on("change", function(slideEvt) {
        $this = $(this);
        $this.parents('.elem__constant-sum__row')
            .find('.js-input')
            .val(slideEvt.value.newValue);
    });

    $('.js-input').on("change paste keyup", function(e) {
        var $this = $(this),
            inputVal = $this.val();
        $this.parents('.elem__constant-sum__row')
            .find('.bootstrap-slider')
            .slider('setValue',inputVal);
    });

});