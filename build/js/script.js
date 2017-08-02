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
$(function () {
    var $document   = $(document),
        $inputRange = $('input[type="range"]');

    // Example functionality to demonstrate a value feedback
    function valueOutput(element) {
        var value = element.value,
            output = element.parentNode.parentNode.getElementsByClassName("js-input");
            output[0].value = value;
    }
    for (var i = $inputRange.length - 1; i >= 0; i--) {
        valueOutput($inputRange[i]);
    }
    $document.on('input', 'input[type="range"]', function(e) {
        valueOutput(e.target);
    });
    // end

    $inputRange.rangeslider({
        polyfill: false
    });
});