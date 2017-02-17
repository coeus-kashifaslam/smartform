$(document).ready(function () {
        var defaultFeedbackListItem = $('.no-touch .feedback__grid__emo-list__item .feedback__item-label');


    $(defaultFeedbackListItem).hover(
        function() {
            var $this = $(this);
            $this.closest('.feedback__grid__emo-list__item').addClass('feedback__grid__emo-list__item-hover feedback__grid__emo-list__item-hover-current');
            $this.closest('.feedback__grid__emo-list__item').prevAll().addClass('feedback__grid__emo-list__item-hover');
        }, function() {
            var $this = $(this);
            $this.closest('.feedback__grid__emo-list__item').removeClass('feedback__grid__emo-list__item-hover feedback__grid__emo-list__item-hover-current');
            $this.closest('.feedback__grid__emo-list__item').prevAll().removeClass('feedback__grid__emo-list__item-hover');
        }
    );


    $(document).on('click','.feedback__grid__emo-list__item .feedback__item-label', function () {
        var $this = $(this);
        $this.closest('.feedback__grid__emo-list__item').removeClass('feedback__grid__emo-list__item-selected feedback__grid__emo-list__item-selected-current');

        $this.closest('.feedback__grid__emo-list__item').siblings().removeClass('feedback__grid__emo-list__item-selected feedback__grid__emo-list__item-selected-current');
        
        $this.closest('.feedback__grid__emo-list__item').addClass('feedback__grid__emo-list__item-selected feedback__grid__emo-list__item-selected-current');
        
        $this.closest('.feedback__grid__emo-list__item').prevAll().addClass('feedback__grid__emo-list__item-selected');
    });

});