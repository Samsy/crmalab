// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
var gettingPics = function gettingPics(){
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/tags/crmaxv/media/recent?client_id=7359917ce0c44b26b15157dc9f64fbb5&count=-1",
        success: function(data) {
            console.log(data);
            var length = data.data.length,
            j = 0;
            for (var i = 0; i < length; i++) {
                // Creating the img
                if (data.data[i].type == 'image') {
                    var append = '<li class="contener">';
                    append += '<div class="text-container ">';
                    append += '<p class="text">';
                    append += '<a href="http://www.instagram.com/'+data.data[i].user.full_name+'">'+data.data[i].user.full_name;
                    append += '</a>';
                    append += "</p>";
                    append += '</div>';
                    append += '<div class="imgcontener">';
                    append += '<img src="'+data.data[i].images.standard_resolution.url+'"alt="Product Name" />'; 
                    append += '</div>';
                    append += '</li>';
                    $('.g').append(append);
                }
                else {
                    var append = '<li class="contener">';
                    append += '<div class="text-container2">';
                    append += '<p class="text">';
                    append += '<a href="http://www.instagram.com/'+data.data[i].user.full_name+'">'+data.data[i].user.full_name;
                    append += '</a>';
                    append += "</p>";
                    append += '</div>';
                    append += '<div class="imgcontener">';
                    append += '<video src="'+data.data[i].videos.standard_resolution.url+'" controls="undefined" buffer="undefined"></video'; 
                    append += '</div>';
                    append += '</li>';
                    $('.g').append(append);
                }
            }       
        }
    });
}

/* var hoverImages = function hoverImages(){
    var nrImg;
    $('.item').bind({
        mouseenter: function(){
            nrImg = $(this).attr('data-img');
            $('.item-desc-'+nrImg).slideUp('fast');
        },
        mouseleave: function(){
            $('.item-desc-'+nrImg).slideDown('fast');
        }
    });
} */