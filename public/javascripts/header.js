$(document).ready(function () {
    $(window).scroll(function () {
        var pos_body = $('html, body').scrollTop();
        if (pos_body > 20) {
            $('.header').addClass('stick_header')
        } else {
            $('.header').removeClass('stick_header')
        }
        if (pos_body < 500) {
            $('.backtotop').removeClass('unhide')
        } else {
            $('.backtotop').addClass('unhide')
        }
    })
    $('.backtotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 700);
    })
    $('.findfilm').click(function () {
        $('#idfind').focus();
    })
})