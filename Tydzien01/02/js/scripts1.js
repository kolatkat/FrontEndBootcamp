(function($) {

   $(document).ready(function() {

        var elemDiv = $("div .grid.grid-12");
		
		elemDiv.on("mouseover click", function() {
			
			elemDiv.addClass("change");
		});
		
		
		var elemA = $(".nav a[href^='http:']"); 
		console.log(elemA);
		
		elemA.on("mouseover", function() {
			
			elemA.addClass("change");
		});
		
		
		$(":radio").each(function(i, elem) {
			          			
					
					$(elem).on("mouseover", function() {
						
						var value = $(elem).attr("checked");
						if(!value) {
						$(elem).parent().addClass("change");
						}
					});
				});
		
		$(":checkbox").each(function(i, elem) {
			          			
					
					$(elem).on("mouseover", function() {
						
						var value = $(elem).attr("checked");
						if(!value) {
						$(elem).parent().addClass("change");
						}
					});
				});
		
		
		
		
		
		var elemPargraf = $("#text p:first,empty");
		elemPargraf.on("mouseover click", function() {
			
			elemPargraf.addClass("change");
		});
		
		var elempagination = $(".pagination-item:not('span')"); //tu nie jestem pewna
		console.log(elempagination);
		
		elempagination.on("mouseover", function() {
			
			elempagination.addClass("change");
		});
		
		
    });

})(jQuery); 

