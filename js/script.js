jQuery(function ($) {
    $('#open').click(function () {
        $('#bgMenu').toggleClass('active');
    });

    $('.slider').slick({
        centerMode: true,
        centerPadding: '30px',
        dots: true,
        focusOnSelect: true,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});