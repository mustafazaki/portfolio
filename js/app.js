var app = {

	getAndSetFbCover: function() {
		request = new XMLHttpRequest();
		request.open('GET', 'http://graph.facebook.com/mustafa.zaki.31?fields=cover', true);
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				// Success!
				resp = request.responseText;
				console.log(resp)
				var img = JSON.parse(resp);
				var imgsrc = img.cover.source;
				var top = img.cover.offset_y;
				var imgElem = document.querySelector(".thumb__img");

				imgElem.setAttribute("src", imgsrc);
				imgElem.style.top = "-"+top+"px";



			} else {
				// We reached our target server, but it returned an error
			}
		};
		request.onerror = function() {
			// There was a connection error of some sort
		};
		request.send();
	},
	init: function() {
		app.getAndSetFbCover();
	}


};
app.init();