jQuery(function ($) {
    $('#open').click(function () {
        $('#bgMenu').toggleClass('active');
    });

    $('.slider').slick({
        centerMode: true,
        centerPadding: '30px',
        dots: true,
        focusOnSelect: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});