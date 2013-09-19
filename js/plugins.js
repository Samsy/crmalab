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

LAST_ITEM = 0;

// Place any jQuery/helper plugins in here.
var gettingPics = function gettingPics(){
    console.log('API Call to '+API_URL+' ...');
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: API_URL,
        beforeSend: function(){
            $('.loader').fadeIn('fast');
            $('.g').hide();
        },
        complete: function(){
            $('.loader').fadeOut('fast');
            $('.g').fadeIn('slow');
            $('.contener-img').click(function(){
                $('.contener-img').each(function(){
                    $(this).removeClass('flip');
                });
                $(this).addClass('flip');
            });
            $('.flip').click(function(){
                $(this).removeClass('flip');
                console.log('removed flip');
            });
        },
        success: function(data) {

            // next api call url
            console.log(data);
            API_URL = data.pagination.next_url;
            
            var length = data.data.length;
            
            for (var i = 0; i < length; i++) {

                // Creating the item
                if(data.data[i].type == 'image'){
                    var append = '<li class="contener contener-img item-'+(i+LAST_ITEM)+'" >';
                }
                else {
                    var append = '<li class="contener item-'+(i+LAST_ITEM)+'" >';
                }
               // si image : text
               if (data.data[i].type == 'image') {
                    append += '<div class="text-container">';
                    append += '<p class="text">';
                    append += '<img src="'+data.data[i].user.profile_picture+'" class="img_profile" />';
                    append += '<a href="http://www.instagram.com/'+data.data[i].user.username+'" class="link_profile">';
                    append += data.data[i].user.full_name+'</a>';
                    append += '<span class="caption">'+data.data[i].caption.text+'</span></p>';
                    append += '</div>';
               }
                append += '<div class="imgcontener">';

                append += data.data[i].type == 'image' ? // image ?
                            '<img src="'+data.data[i].images.standard_resolution.url+'"alt="Product Name" class="image_insta" />' : // yes
                            '<canvas width="100%" height="100%"></canvas><video height="100%" width="100%" src="'+data.data[i].videos.standard_resolution.url+'" controls="undefined" buffer="undefined"></video>'; // no
<<<<<<< HEAD
                
=======
               
>>>>>>> master
                append += '</div>';
                append += '</li>';

                $('.g').append(append);

                $('.item-'+(i+LAST_ITEM)).delay(i*50).fadeIn();
                
                if (i+1 == length) {
                    $('.item-'+(i+LAST_ITEM)).addClass('last-item');
                    LAST_ITEM = i+1;
                    
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