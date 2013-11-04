var LENGTH = 0;

$(function(){
    var vanishedLogo = false;
    $(document).scroll(function(e){
        var positionScroll = $(window).scrollTop();
        // Little parallax effect on the logo
        // var scrollOffset = $(document).scrollTop();
        if(!vanishedLogo && positionScroll > 0 && loaded){
            $('.header').animate({opacity:0}, 500, function(){
                vanishedLogo = true;
            });
        }
        if(positionScroll === 0 && vanishedLogo){
            $('.header').animate({opacity:1}, 1, function(){
                vanishedLogo = false;
            });
        }
        //css('top',(-scrollOffset*1.5));

        var last = $('.last-item');
        // console.log($('body').scrollTop() + ' / ' + last.offset().top);
        if(last.length){
            if ($('body').scrollTop() + 2000 >= last.offset().top ) {
                // il reste des images à charger
                if (API_URL) {
                    gettingPics();
                }
                last.removeClass('last-item');
            }

        }
    });
});
