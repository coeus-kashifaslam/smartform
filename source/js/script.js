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


// Range slider
;(function () {
    var $range = $(".js-range-slider"),
        $input = $(".js-input"),
        instance,
        min = 0,
        max = 100;

    $range.ionRangeSlider({
        type: "single",
        min: min,
        max: max,
        from: 0,
        onStart: function (data) {
            $input.prop("value", data.from);
        },
        onChange: function (data) {
            $input.prop("value", data.from);
        }
    });

    instance = $range.data("ionRangeSlider");

    $input.on("change keyup", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val
        });
    });
})();