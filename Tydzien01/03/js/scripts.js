(function ($) {

   $(document).ready(function() {
		
		var menu = $("#showmenu"),
			img = $("img");
		
		
		img.on("click", function(e) {
			
		if(menu.is(":hidden")) {
			
			menu.slideDown(500);
		}else {
			
			menu.slideUp(500);
		}
		
		
		});						
		
	});
	
	 
})(jQuery);		
    

