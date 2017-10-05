$(window).load(function(){

    var formShadow = $('.sff-form__shadow'),
        topAlertContainer = $('.alert__stick-top'),
        topAlertHeight = topAlertContainer.height(),
        formMargin = topAlertHeight + 20;
    $('body').addClass('ready__top-alert ready__bottom-alert');
    formShadow.css('margin-top', formMargin);

    $('.alert__stick-top .close').on('click',function(e){
        $('body').removeClass('ready__top-alert');
        formShadow.removeAttr('style');
    });

    $('.alert__stick-bottom .close').on('click',function(e){
        $('body').removeClass('ready__bottom-alert');
    });
});