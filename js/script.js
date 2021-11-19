jQuery(function ($) {
    $('#open').click(function () {
        $('#bgMenu').toggleClass('active');
    });
});

$('.slider').slick({
    centerMode: true,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
});