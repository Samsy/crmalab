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
                    append += '<img src="';
                    append +=  data.data[i].images.standard_resolution.url;
                    append += '"'
                    append += '  alt="Product Name"> '; 
                    append += '</div>';
                    append +=  '</li>';
                    $('.g').append(append);
                }

            }


    /*        console.log(data);
            var length = data.data.length,
            j = 0;
            for (var i = 0; i < length; i++) {
                // Creating the row
                if(i%4 === 0){
                    j++;
                    var newDiv = document.createElement('div');
                    newDiv.className = 'span12 row row-'+j;
                    document.getElementsByClassName('content')[0].appendChild(newDiv);
                }
                // Creating the img
                if(data.data[i].type == 'image'){
                    var newDivImg = document.createElement('div');
                    var newImg = document.createElement('img');
                    newDivImg.className = 'span3 item container-item item-'+i; 
                    newDivImg.setAttribute('data-img', i);
                    newImg.className = 'span12';
                    newImg.src = data.data[i].images.standard_resolution.url;
                    document.getElementsByClassName('row-'+j)[0].appendChild(newDivImg);
                    document.getElementsByClassName('item-'+i)[0].appendChild(newImg);
                    var newDivDesc = document.createElement('div');
                    newDivDesc.className = 'span12 center item-desc item-desc-'+i;
                    newDivDesc.setAttribute('data-desc', i);
                    var texte = document.createTextNode(data.data[i].user.full_name);
                    var newButton = document.createElement('a');
                    newButton.href = 'http://www.instagram.com/'+data.data[i].user.username;
                    newButton.target = '_blank';
                    newButton.className = 'button-user span4';
                    newButton.appendChild(texte);
                    document.getElementsByClassName('item-'+i)[0].appendChild(newDivDesc);
                    document.getElementsByClassName('item-desc-'+i)[0].appendChild(newButton);
                }
                else {
                    var newDivVideo = document.createElement('div');
                    var newVideo = document.createElement('video');
                    newDivVideo.className = 'span3 item container-item item-'+i; 
                    newDivVideo.setAttribute('data-img', i);
                    newVideo.className = 'span12';
                    newVideo.src = data.data[i].videos.standard_resolution.url;
                    newVideo.setAttribute('controls');
                    newVideo.setAttribute('buffer');
                    document.getElementsByClassName('row-'+j)[0].appendChild(newDivVideo);
                    document.getElementsByClassName('item-'+i)[0].appendChild(newVideo);
                    var newDivDesc = document.createElement('div');
                    newDivDesc.className = 'span12 center item-desc-video item-desc-'+i;
                    newDivDesc.setAttribute('data-desc', i);
                    var texte = document.createTextNode(data.data[i].user.full_name);
                    var newButton = document.createElement('a');
                    newButton.href = 'http://www.instagram.com/'+data.data[i].user.username;
                    newButton.target = '_blank';
                    newButton.className = 'button-user span4';
                    newButton.appendChild(texte);
                    document.getElementsByClassName('item-'+i)[0].appendChild(newDivDesc);
                    document.getElementsByClassName('item-desc-'+i)[0].appendChild(newButton);

                }
                
            } */         
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