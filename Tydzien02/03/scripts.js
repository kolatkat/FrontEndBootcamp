(function() {

var button = document.querySelector("#btn1"),
	message = document.querySelector("#message");
	
	
	
function fecz(url,success,failure) {

var xhr = new XMLHttpRequest();

xhr.open("GET", "http://code.eduweb.pl/bootcamp/users/", true);

xhr.onload = function(e) {

    if(this.readyState === 4 && this.status >= 200 && this.status < 400) {
         success(xhr.responseText);// tutaj ma wywołać się funkcja jesli sukcess
    } else  {
		
		failure( new Error("Wystąpił błąd!. Kod statusu HTTP to: " + xhr.status) );
	}

};


		xhr.onerror = function() {

            failure( new Error("Wystąpił nieoczekiwany błąd!") );

        };

xhr.send();


}	
	


button.addEventListener("click", function (e) {

        fecz("http://code.eduweb.pl/bootcamp/users/", function(data) {

            console.log("Sukces");

            message.textContent = data;

        }, function(err) {

            console.log("Wystąpił błąd!");

            console.log(err.message);

        });

    }, false);

})();

