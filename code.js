$(function(){
    $(window).scroll(function() {
        if ($(window).scrollTop() + 100 > $('#sec2').offset().top) {
            $('#header-title h1').css('color', '#000000'); 
            $('.menu li a').css('color', '#000000');
        } else {
            $('#header-title h1').css('color', '#FFFFFF'); 
            $('.menu li a').css('color', '#FFFFFF');
        }
    });
});

$(function() {
    $('a[href^="#"]').click(function() {
        var speed = 200;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});