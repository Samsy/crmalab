var LENGTH = 0;

$(function(){
    $(document).scroll(function(){

        var last = $('.last-item');
        // console.log($('body').scrollTop() + ' / ' + last.offset().top);

        if ($('body').scrollTop() + 2000 >= last.offset().top ) {

        	// il reste des images à charger
        	if (API_URL) {
        		gettingPics();
            	
        	}
            
            // sinon on répète à l'infini et au delà
            else {
            	items = $('.g .contener');

            	totalLength = items.length;

            	if (LENGTH == 0) {
            		LENGTH = items.length;
            	}

            	items.slice(0, LENGTH).each(function(i){

            		copy = $(this).clone();
            		copy.appendTo('.g');

            		// last item
            		if (i+1 == LENGTH) {
            			LAST_ITEM += (i + 1);
            			copy.addClass('last-item');
            		}
            	});
            }

            last.removeClass('last-item');
        }
    });
})