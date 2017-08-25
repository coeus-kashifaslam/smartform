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
    $(".bootstrap-slider").on("slide", function(slideEvt) {
        $this = $(this);
        $this.parents('.elem__constant-sum__row')
            .find('.js-input')
            .val(slideEvt.value);
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

