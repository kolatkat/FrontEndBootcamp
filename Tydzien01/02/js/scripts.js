(function($) {

   $(document).ready(function() {

   
	//1
   
       $("div.grid.grid-12").addClass("change");
		console.log($("div .grid.grid-12"));
		
		
	//2
	
		$(".nav a[href^='http:']").addClass("change"); 
		console.log($(".nav a[href^='http:']"));
		
	//3	
		
	
    //4	tutaj zrobiłam rozbicie, na elementy typu radio, które nie sa zaznaczone 
		$(":radio").each(function(i, elem) {
			          			
				var value = $(elem).attr("checked");
					if(!value) {
						$(elem).parent().addClass("change");
						console.log($(elem));
						}
					});
				
	//4 oraz elementy typu checkbox	
		$(":checkbox").each(function(i, elem) {
			          			
					
			var value = $(elem).attr("checked");
				if(!value) {
						$(elem).parent().addClass("change");
						console.log($(elem));
						}
					});
		
		
		
	//5	
		
		$("#text p:first,empty").addClass("change");
		console.log($("#text p:first,empty"));
		
	//6
	
		 $(".pagination-item:not(span)").addClass("change"); //tu nie jestem pewna
		console.log($(".pagination-item:not(span)"));
		
		
			
		
   });

})(jQuery); 

