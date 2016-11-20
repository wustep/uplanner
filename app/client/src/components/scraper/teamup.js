
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
	
	generateSQL: function(data, retrieved) {
		var out = "INSERT INTO events (name, location, desc, retrieved, time_start, time_end)\n";
		if (data["events"] !== null) {
			var events = data["events"];
			for (var i = 0; i < events.length; i++) {
				var cal = events[i]["subcalendar_id"];
				var id = events[i]["id"];
				var title = events[i]["title"];
				var start_dt = events[i]["start_dt"].substring(0,19);
				var end_dt = events[i]["end_dt"].substring(0,19);
				var place = events[i]["location"];
				var desc = events[i]["notes"];
				var desc2 = String(desc).replace(/\<p\>/g,"").replace(/\<\/p\>/g,"").replace(/\n/g,"<br>");
				out = out + "(" + title + "," + place + "," + "," + desc2 + "," + retrieved + "," + start_dt + "," + end_dt + ")\n";
			}
		}
		return out;
	}
}