jQuery(function ($) {
    $('.slider').slick({
        dots: true,
        focusOnSelect: true,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1199,
            settings: {
                arrows: false,
            }
        }]
    });
});