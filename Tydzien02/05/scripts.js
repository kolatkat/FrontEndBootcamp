(function() {

function Toggler(selector) {
	
	if( !(this instanceof Toggler) ) {
            return new Toggler(selector);
        }
	
	this._name = document.querySelector(selector);
	
}
	
	Toggler.prototype.getElem = function() {
		 return this._name;
	}
	
	Toggler.prototype.show = function() {
		
		this._name.style.display = "";
		
	}
	
	Toggler.prototype.hide = function() {
		
		this._name.style.display = "none";
		
	}
	
	
var elem = new Toggler("#message");
var button = document.querySelector("#btn1");

elem.hide();

button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
		btn1.textContent = "Ukryj treść";
    } else {
        elem.hide();
		btn1.textContent = "Pokaż treść";
    }

}, false);



})();

