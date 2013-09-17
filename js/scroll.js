$(function(){
    $(document).scroll(function(){

        var last = $('.last-item');
        console.log($('body').scrollTop() + ' / ' + last.offset().top);

        if ($('body').scrollTop() + 2000 >= last.offset().top && API_URL) {

            gettingPics();
            last.removeClass('last-item');

        }
    });
})