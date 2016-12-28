$(document).ready(function (){
    var ratingList = $('.rating-comp__icons-list');
    var ratingContinuous = $('.rating-comp__selection-type__continuous > li');
    var ratingsingle = $('.rating-comp__selection-type__single > li');
    var ratingListItem = $('.rating-comp__icons-list > li');
    $(ratingListItem).hover(
        function() {
            var $this = $(this);
            $this.addClass('rating-comp__hover rating-comp__hover__current');
            $this.prevAll().addClass('rating-comp__hover');
        }, function() {
            var $this = $(this);
            $this.removeClass('rating-comp__hover rating-comp__hover__current');
            $this.prevAll().removeClass('rating-comp__hover');
        }
    );

    $(ratingContinuous).on('click', function () {
        var $this = $(this);
        $this.closest(ratingList).find('> li').removeClass('rating-comp__hover rating-comp__hover__current rating-comp__selected');
        $this.addClass('rating-comp__selected');
        $this.prevAll().addClass('rating-comp__selected');
    });

    $(ratingsingle).on('click', function () {
        var $this = $(this);
        $this.closest(ratingList).find('> li').removeClass('rating-comp__hover rating-comp__hover__current rating-comp__selected');
        $this.addClass('rating-comp__selected');
    });
});