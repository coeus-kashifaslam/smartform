$(document).ready(function (){
    var ratingList = $('.rating-comp__selection-type__continuous');
    var ratingListItem = $('.rating-comp__selection-type__continuous > li');
    $(ratingListItem).hover(
        function() {
            var $this = $(this);
            $this.addClass('rating-comp__hover');
            $this.prevAll().addClass('rating-comp__hover');
        }, function() {
            var $this = $(this);
            $this.removeClass('rating-comp__hover');
            $this.prevAll().removeClass('rating-comp__hover');
        }
    );

    $(ratingListItem).on('click', function () {
        var $this = $(this);
        $this.closest(ratingList).find('> li').removeAttr('class');
        $this.addClass('rating-comp__selected');
        $this.prevAll().addClass('rating-comp__selected');
    });
});