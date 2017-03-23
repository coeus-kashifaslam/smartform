$(document).ready(function () {
        var defaultFeedbackListItem = $('.no-touch .feedback__continuous__shapes-list__item .feedback__item-label');


    $(defaultFeedbackListItem).hover(
        function() {
            var $this = $(this);
            $this.closest('.feedback__continuous__emo-list__shape-item').addClass('feedback__continuous__emo-list__shape-item-hover feedback__continuous__emo-list__shape-item-hover-current');
            $this.closest('.feedback__continuous__emo-list__shape-item').prevAll().addClass('feedback__continuous__emo-list__shape-item-hover');
        }, function() {
            var $this = $(this);
            $this.closest('.feedback__continuous__emo-list__shape-item').removeClass('feedback__continuous__emo-list__shape-item-hover feedback__continuous__emo-list__shape-item-hover-current');
            $this.closest('.feedback__continuous__emo-list__shape-item').prevAll().removeClass('feedback__continuous__emo-list__shape-item-hover');
        }
    );


    $(document).on('click','.feedback__continuous__emo-list__shape-item .feedback__item-label', function () {
        var $this = $(this);
        $this.closest('.feedback__continuous__emo-list__shape-item').removeClass('feedback__continuous__emo-list__shape-item-selected feedback__continuous__emo-list__shape-item-selected-current');

        $this.closest('.feedback__continuous__emo-list__shape-item').siblings().removeClass('feedback__continuous__emo-list__shape-item-selected feedback__continuous__emo-list__shape-item-selected-current');
        
        $this.closest('.feedback__continuous__emo-list__shape-item').addClass('feedback__continuous__emo-list__shape-item-selected feedback__continuous__emo-list__shape-item-selected-current');
        
        $this.closest('.feedback__continuous__emo-list__shape-item').prevAll().addClass('feedback__continuous__emo-list__shape-item-selected');
    });

    $(".feedback__continuous__emo-list").each(function() {
        var $thisContinuous = $(this),
            colWidth = parseInt($thisContinuous.find('.feedback__item-label .ico').css('font-size'));
        $thisContinuous.find('.feedback__continuous__emo-list__shape-item').css("width" , colWidth + 3 + "px");
    });

});