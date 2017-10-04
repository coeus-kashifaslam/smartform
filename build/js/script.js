$(document).ready(function (){
    // $('.bootstrap-select').selectpicker({
    //     iconBase: 'ico',
    //     tickIcon: 'ico-tick'
    // });

    var ratingHeight = parseInt($('.elem__rating-thumbnail-right__body .rating__icons__col__content').height()),
        thumbnailHeight = parseInt($('.rating__thumbnail__col__content .rating__thumbnail__container .product-thumbnail').height());

    if(ratingHeight <= thumbnailHeight ) {
        $('.rating__thumbnail__col__content .rating__thumbnail__container .product-thumbnail').animate({
            height: ratingHeight + 'px'
        }, 1000);
    }

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

;(function() {
    // Initialize
    var bLazy = new Blazy({
        error: function(ele, msg){
            if(msg === 'missing'){
                $(ele).attr("src", "");
                $(ele).attr("alt", "Image data-src is missing");
            }
            else if(msg === 'invalid'){
                $(ele).attr("src", "");
                $(ele).attr("alt", "Image not found");
            }
        }
    });
})();

$(window).load(function(){

    var formShadow = $('.sff-form__shadow'),
        topAlertContainer = $('.alert__stick-top'),
        topAlertHeight = topAlertContainer.height(),
        formMargin = topAlertHeight + 20;
    $('body').addClass('ready__top-alert ready__bottom-alert');
    formShadow.css('margin-top', formMargin);

    $('.alert__stick-top .close').on('click',function(e){
       $('body').removeClass('ready__top-alert');
       formShadow.removeAttr('style');
    });

    $('.alert__stick-bottom .close').on('click',function(e){
        $('body').removeClass('ready__bottom-alert');
    });
});