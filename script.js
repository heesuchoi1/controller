$(document).ready(function(){
	    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			case 38:
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			case 39:
				// Put our code here
				$('img').animate({left: "+=10px"}, 'fast');
				break;
			// Down Array Pressed
			case 40:
				// Put our code here
				$('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});
