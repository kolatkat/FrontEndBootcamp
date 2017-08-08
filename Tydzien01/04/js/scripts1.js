(function ($){
	
	

	$(document).ready( function() {
		
		var list = $("ul");
		    

			
		$("button").on("click", function () {
		
			var names = $("input[name='imie']"),//uzyć wyrażeń regularnych
				tekst = "";
					
				
			if($.trim(names.val()) === "") {
				console.log("uzupełnij pole");
			} else {
			    tekst = names.val();
				 var listChild = $("<li></li>", {
					 text:tekst,
				 });
				 
				console.log("Wartośc pola unput:"+tekst);
				console.log("Wartośc listy li: "+listChild.text());
			
			listChild.appendTo(list);
			}
			
		});
	
	});
	
	
})(jQuery);