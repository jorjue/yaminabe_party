jQuery(function ($) {
    $('.slider').slick({
        centerMode: true,
        dots: true,
        focusOnSelect: true,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
            breakpoint: 1199,
            settings: {
                arrows: false,
            }
        }]
    });
});