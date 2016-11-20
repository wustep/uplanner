
module.exports = {
	// Creates a CORS request in a cross-browser manner (from teamup API website)
	createCORSRequest: function(method, url) {
		var apiKey = '5668a0a6945a3199ababf3e17fe4cea817fb6d44520379d6a9515b5eb24d74ce';
		var xhr = new XMLHttpRequest();
		if ("withCredentials" in xhr) {
			// XHR for Chrome/Firefox/Opera/Safari/IE10+.
			xhr.open(method, url, true);
			xhr.setRequestHeader('Teamup-Token', apiKey);
		} else if (typeof XDomainRequest !== "undefined") {
			// XDomainRequest for IE8/IE9.
			xhr = new XDomainRequest();
			// XDomainRequest does not support querying HTTPS from HTTP pages
			if (window.location.protocol === 'http:') {
				url = url.replace('https://', 'http://');
			}
			if (-1 === ['GET', 'POST'].indexOf(method)) {
				alert('XDomainRequest only supports GET and POST methods');
				return;
			}
			if (-1 === url.indexOf('?')) {
				url += '?_teamup_token=' + apiKey;
			} else {
				url += '&_teamup_token=' + apiKey;
			}
			xhr.open(method, url);
		} else {
			// CORS not supported.
			xhr = null;
		}
		return xhr;
	},

	// Sends the actual CORS request, (from teamup API website)
	makeCorsRequest: function(url, successCallback, errorCallback) {
		var xhr = this.createCORSRequest('GET', url);
		if (!xhr) {
			alert('CORS not supported');
			return;
		}

		// Response handlers.
		xhr.onload = function (xhr) {
			if (xhr.target.status < 400) {
				if (successCallback) successCallback(xhr.target);
			} else if (errorCallback) {
				errorCallback(xhr.target);
			}
		};
		xhr.onerror = function (xhr) {
			if (errorCallback) {
				errorCallback(xhr.target);
			}
		};

		xhr.send();
	},
	
	generateSQL: function(data) {
		return data;
	}
}