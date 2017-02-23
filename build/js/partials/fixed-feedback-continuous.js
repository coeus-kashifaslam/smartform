$(document).ready(function () {
        var defaultFeedbackListItem = $('.no-touch .feedback__continuous__shapes-list__item .feedback__item-label');


    $(defaultFeedbackListItem).hover(
        function() {
            var $this = $(this);
            $this.closest('.feedback__continuous__shapes-list__item').addClass('feedback__continuous__shapes-list__item-hover feedback__continuous__shapes-list__item-hover-current');
            $this.closest('.feedback__continuous__shapes-list__item').prevAll().addClass('feedback__continuous__shapes-list__item-hover');
        }, function() {
            var $this = $(this);
            $this.closest('.feedback__continuous__shapes-list__item').removeClass('feedback__continuous__shapes-list__item-hover feedback__continuous__shapes-list__item-hover-current');
            $this.closest('.feedback__continuous__shapes-list__item').prevAll().removeClass('feedback__continuous__shapes-list__item-hover');
        }
    );


    $(document).on('click','.feedback__continuous__shapes-list__item .feedback__item-label', function () {
        var $this = $(this);
        $this.closest('.feedback__continuous__shapes-list__item').removeClass('feedback__continuous__shapes-list__item-selected feedback__continuous__shapes-list__item-selected-current');

        $this.closest('.feedback__continuous__shapes-list__item').siblings().removeClass('feedback__continuous__shapes-list__item-selected feedback__continuous__shapes-list__item-selected-current');
        
        $this.closest('.feedback__continuous__shapes-list__item').addClass('feedback__continuous__shapes-list__item-selected feedback__continuous__shapes-list__item-selected-current');
        
        $this.closest('.feedback__continuous__shapes-list__item').prevAll().addClass('feedback__continuous__shapes-list__item-selected');
    });

});