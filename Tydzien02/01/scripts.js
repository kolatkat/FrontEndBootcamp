(function() {
if(typeof String.prototype.repeatt !== "function" ) {
	
	String.prototype.repeatt = function(a) {
		
		if(a < 0) {
            throw new Error("Invalid count value");
        }
		
		   var  counter = a,
			    text = this.toString(),
				output = "";
				
			   
		for (var i=0; i<counter; i++) {
			output +=text+" "; 
		}
		
		return output;
		
	} 
	
}
})();

