window.onload=function(){

        var sBackground;
        var color = $('#main').css("background-color");
        var image = $('#main').css("background-image");
        if (image !== 'none') {
	        sBackground = image + ' ' + color;
	    } else {
	    	sBackground = color;
	    }
	    $('.campaign_menu_bottom .container .campaign_image').css("background", sBackground);

};
