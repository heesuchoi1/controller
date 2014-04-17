$(document).ready(function(){
	    $('.controller').keydown(function(key) {
        switch(parseInt(key.which,10)) {
				
			$('.left-btn').click(function(){
				$(this).animate({left: "-=10px"}, 'fast');
				break;
			});

			$('.up-btn').click(function(){
				$(this).animate({top: "-=10px"}, 'fast');
			break;
			});
			
			$('.right-btn').click(function(){
				$('this').animate({left: "+=10px"}, 'fast');
			break;
			});
			
			$('.down-btn').click(function(){
			$('img').animate({top: "+=10px"}, 'fast');
			break;
			});
		}
	});
	
	 $('.in-btn').click(function() {
         	$(this).fadeIn('fast');
    	 });
    	 $('.out-btn').click(function() {
         	$(this).fadeOut('fast');
    	 });
});
