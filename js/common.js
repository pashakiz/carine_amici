$(document).ready(function() {

    $('.header-wrap').on('click', '.header__btn', function(){
        $(this).closest('.header-wrap').find('.header-menu').slideToggle();
    });
    $('.custom-file-input').on('change', function(){
        //$('.custom-file-img').css('background-image', 'url(' + $(this).val() + ')');
        $(this).closest('.custom-file').addClass('image');
    });

});