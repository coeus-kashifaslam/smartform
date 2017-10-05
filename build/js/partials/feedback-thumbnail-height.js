$(document).ready(function () {
    var ratingHeight = parseInt($('.elem__rating-thumbnail-right__body .rating__icons__col__content').height()),
        thumbnailHeight = parseInt($('.rating__thumbnail__col__content .rating__thumbnail__container .product-thumbnail').height());

    if(ratingHeight <= thumbnailHeight ) {
        $('.rating__thumbnail__col__content .rating__thumbnail__container .product-thumbnail').animate({
            height: ratingHeight + 'px'
        }, 1000);
    }
});