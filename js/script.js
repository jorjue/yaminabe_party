jQuery(function ($) {
    $('#open').click(function () {
        $('#bgMenu').toggleClass('active');
        $('body').toggleClass('fixed');
    });
});