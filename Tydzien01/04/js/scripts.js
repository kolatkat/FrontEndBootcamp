(function ($){
	
	var form = $("#Form"),
		names = form.find("input[name='imie']"),
		list = $("ul"),
		tekst = "";
		
		console.log(list);
		
				
		    
		form.on("submit", function(e) {
			
		   e.preventDefault();
		   	   
			   //
			var regex = /([\?!@#$%^&*()_;"+=<>,./\|{}[\]`\/\\])|(\d)/,
				wynik  = regex.test(names.val());
				
				console.log(wynik);
				console.log(!wynik);
									
			if($.trim(names.val()) === "" || (!!wynik)) {
				names.addClass("error");
				return
			} 
			
			    tekst = names.val();
				 var listChild = $("<li></li>", {
					 text:tekst,
				 });
				 
				console.log("Wartośc pola input:"+tekst);
				console.log("Wartośc listy li: "+listChild.text());
			
			listChild.appendTo(list);
			
			 names.removeClass("error").val("");
			
		});
	
	
			  


	
})(jQuery);