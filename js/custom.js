$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });
    $('.main_slide').slick({
        arrows: false,
        fade: true,
    });

    $('.premium_line').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    });
    $('.main_premium .premium_arrows .left').on('click', function () {
        $('.premium_line').slick('slickPrev')
    });
    $('.main_premium .premium_arrows .right').on('click', function () {
        $('.premium_line').slick('slickNext')
    });

    $('.product_slide').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
    $('.main_unit .unit_arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev')
    });
    $('.main_unit .unit_arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext')
    });

});