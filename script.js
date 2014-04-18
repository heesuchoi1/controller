$(document).ready(function(){
	   
	   	$('#left-btn').click(function(){
				$('#player').animate({left: "-=10px"}, 'fast');
			});

			$('#up-btn').click(function(){
				$('#player').animate({top: "-=10px"}, 'fast');
			});
			
			$('#right-btn').click(function(){
				$('#player').animate({left: "+=10px"}, 'fast');
			});
			
			$('#down-btn').click(function(){
				$('#player').animate({top: "+=10px"}, 'fast');
			});
	   
	    $('.controller').keydown(function(key) {
        switch(parseInt(key.which,10)) {
		case 37: //left
		
		case 38: //up
		
		case 39: //right
			
		case 40:
		
		}
	});
	
	 $('#in-btn').click(function() {
         	$(this).fadeIn('fast');
    	 });
    	 $('#out-btn').click(function() {
         	$(this).fadeOut('fast');
    	 });
});
