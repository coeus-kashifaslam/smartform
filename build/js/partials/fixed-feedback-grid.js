$(document).ready(function () {
        var defaultFeedbackListItem = $('.no-touch .fixed__grid-content__row .grid-shape-label');


    $(defaultFeedbackListItem).hover(
        function() {
            var $this = $(this);
            $this.closest('.fixed__grid-shape__col').addClass('fixed__grid-shape__hover fixed__grid-shape__hover-current');
            $this.closest('.fixed__grid-shape__col').prevAll().addClass('fixed__grid-shape__hover');
        }, function() {
            var $this = $(this);
            $this.closest('.fixed__grid-shape__col').removeClass('fixed__grid-shape__hover fixed__grid-shape__hover-current');
            $this.closest('.fixed__grid-shape__col').prevAll().removeClass('fixed__grid-shape__hover');
        }
    );


    $(document).on('click','.fixed__grid-content__row .grid-shape-label', function () {
        var $this = $(this);

        $this.closest('.fixed__grid-shape__col').siblings().removeClass('fixed__grid-shape__selected fixed__grid-shape__selected-current');
        
        $this.closest('.fixed__grid-shape__col').addClass('fixed__grid-shape__selected fixed__grid-shape__selected-current');
        
        $this.closest('.fixed__grid-shape__col').prevAll().addClass('fixed__grid-shape__selected');
    });

    $(".fixed__grid-table").each(function() {
        var $thisTable = $(this),
            colWidth = parseInt($thisTable.find('.fixed__grid-shape').css('font-size'));
        $thisTable.find('.fixed__grid-shape__col').css("width" , colWidth + 15 + "px");
    });

});