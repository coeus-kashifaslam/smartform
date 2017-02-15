$(document).ready(function () {
        var defaultFeedbackListItem = $('.no-touch .feedback__default-emo-list__item .feedback__item-label');


    $(defaultFeedbackListItem).hover(
        function() {
            var $this = $(this);
            $this.closest('.feedback__default-emo-list__item').addClass('feedback__default-emo-list__item-hover feedback__default-emo-list__item-hover-current');
            $this.closest('.feedback__default-emo-list__item').prevAll().addClass('feedback__default-emo-list__item-hover');
        }, function() {
            var $this = $(this);
            $this.closest('.feedback__default-emo-list__item').removeClass('feedback__default-emo-list__item-hover feedback__default-emo-list__item-hover-current');
            $this.closest('.feedback__default-emo-list__item').prevAll().removeClass('feedback__default-emo-list__item-hover');
        }
    );


    $(document).on('click','.feedback__default__emo-list .feedback__item-label', function () {
        var $this = $(this);
        $this.closest('.feedback__default-emo-list__item').removeClass('feedback__default-emo-list__item-selected feedback__default-emo-list__item-selected-current');

        $this.closest('.feedback__default-emo-list__item').siblings().removeClass('feedback__default-emo-list__item-selected feedback__default-emo-list__item-selected-current');
        
        $this.closest('.feedback__default-emo-list__item').addClass('feedback__default-emo-list__item-selected feedback__default-emo-list__item-selected-current');
        
        $this.closest('.feedback__default-emo-list__item').prevAll().addClass('feedback__default-emo-list__item-selected');
    });

});