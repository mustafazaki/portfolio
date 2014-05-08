var app = {

		body: document.getElementById("body"),
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
					imgElem.style.top = "-" + top + "px";
				} else {
					// We reached our target server, but it returned an error
				}
			};
			request.onerror = function() {
				// There was a connection error of some sort
			};
			request.send();
		},
		setBgOfActiveLink: function(that) {
			var em = that.getElementsByTagName("em")[0],
				left = that.getBoundingClientRect().left,
				top = that.getBoundingClientRect().top
			em.style.backgroundSize = app.windowWidth + "px " + app.windowHeight + "px";
			em.style.backgroundPosition = "-" + left + "px " + "-" + top + "px";
		},
		addClickListner: function() {
			var li = document.getElementsByClassName("menu__nav")[0].getElementsByTagName("li");
			for (var i = 0; i < li.length; i++) {
				li[i].addEventListener(
					"click", function() {
						app.setBgOfActiveLink(this);
					});
			}
		},
		addWindowResizeLstner: function() {
			window.onresize = function(event) {

				//	app.windowHeight = document.get
				app.getViewportDimension();
			};
		},
		getViewportDimension: function() {
			windowWidth = app.body.offsetWidth,
			windowHeight = app.body.offsetHeight;
		},
		debug: function() {
		},
		init: function() {
			//	app.getAndSetFbCover();
			app.getViewportDimension();
			app.addClickListner();
			app.addWindowResizeLstner();
			app.debug()
		}
	}
	;
app.init();