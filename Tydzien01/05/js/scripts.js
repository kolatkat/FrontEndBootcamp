(function ($){
	
	

	$(document).ready( function() {
		
		var button = $("#button"),
			output = $("#output"),
			dane = "",
			dane1 = [],
		    list = $("ul");
		
		
		
		
		
		button.on("click", function() {
			
			$.ajax({
				url: "http://code.eduweb.pl/bootcamp/users/",
				method: "GET",
				dataType: "JSON",
				context: button,
				success: function(data, status, jqXHR) {
					console.log("Żądanie zakończone sukcesem");
					console.log(status);
					this.attr("disabled", "disabled");
					dane = JSON.stringify(data,null,4);
					dane1 = JSON.parse(dane);
										
					console.log(dane);
					
					
					for( var i=0; i<dane1.length;i++) {
						var tekst = dane1[i].name+" ;     "+dane1[i].username+" ; "+dane1[i].email+" ; "+dane1[i].phone,
						 listChild = $("<li></li>", {
					         text:tekst,
				             });
					listChild.appendTo(list);
					}
					
				},
				error: function(jqXHR, status, errorThrown) {
					console.log("Wystapił błąd");
					console.log(status);
					console.log(errorThrown);
					
				},
				 complete: function(jqXHR, status) {
                    console.log("Żądanie zakończone");
                    console.log(status);
                    console.log(jqXHR);
                }
				
				
			
		});
		
		
		
		
		
	
	});
	
	
	
	
		
			
		

	
	});
	
	
})(jQuery);