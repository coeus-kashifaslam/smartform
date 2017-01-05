$(document).ready(function (){
    var ratingList = $('.rating-comp__icons-list');
    var ratingContinuous = $('.rating-comp__selection-type__continuous > li label');
    var ratingsingle = $('.rating-comp__selection-type__single > li label');
    var ratingListItem = $('.no-touch .rating-comp__icons-list > li label');
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

    $(ratingContinuous).on('click', function () {
        var $this = $(this);
        $this.closest(ratingList).find('> li').removeClass('rating-comp__hover rating-comp__hover__current rating-comp__selected');
        $this.parent().addClass('rating-comp__selected');
        $this.parent().prevAll().addClass('rating-comp__selected');
    });

    $(ratingsingle).on('click', function () {
        var $this = $(this);
        $this.closest(ratingList).find('> li').removeClass('rating-comp__hover rating-comp__hover__current rating-comp__selected');
        $this.parent().addClass('rating-comp__selected');
    });
    $(document).on('click','.rating-comp__selection-type__continuous.rating-comp__selection-type__total > li label', function () {
        var $this = $(this);
        $this.closest(ratingList).find('> li').removeClass('rating-comp__hover rating-comp__hover__current rating-comp__selected');
        $this.parent().addClass('rating-comp__selected');
        $this.parent().prevAll().addClass('rating-comp__selected');
    });
    $(document).on('click', '.rating-comp__selection-type__single.rating-comp__selection-type__total > li label' ,function () {
        var $this = $(this);
        $this.closest(ratingList).find('> li').removeClass('rating-comp__hover rating-comp__hover__current rating-comp__selected');
        $this.parent().addClass('rating-comp__selected');
    });
});