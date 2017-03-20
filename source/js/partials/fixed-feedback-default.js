$(document).ready(function (){
    var ratingListItem = $('.no-touch .ranking__list__default > li .ranking__list__item__label');

    $(ratingListItem).hover(
        function() {
            var $this = $(this);
            $this.parent().addClass('rating-comp__hover rating-comp__hover__current');
            $this.parent().prevAll().addClass('rating-comp__hover');
        }, function() {
            var $this = $(this);
            $this.parent().removeClass('rating-comp__hover rating-comp__hover__current');
            $this.parent().prevAll().removeClass('rating-comp__hover');
        }
    );

    $(ratingListItem).on('click', function () {
        var $this = $(this);
        $this.parent().addClass('rating-comp__selected rating-comp__selected__current');
        $this.parent().siblings().removeClass('rating-comp__selected rating-comp__selected__current');
        $this.parent().prevAll().addClass('rating-comp__selected');
    });

});