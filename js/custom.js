$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 100 ? $('.to_top').fadeIn() : $('.to_top').fadeOut(0)
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });

    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 600);
    });

    //mainslide

    $('.main_slide').on('init afterChange', function (e) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    })
    $('.main_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        pauseOnHover: false,
        pauseOnFocus: false,
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