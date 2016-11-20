import React, { Component } from 'react';
import 'whatwg-fetch';

function getEvents() {
	fetch("localhost:3001/api/events").then(function(res) {
		return res.json();
	}).then(function(json) {
		for (var i = 0; i < json.length; i++) {
			console.log(json[i]);
		}
	});
}

class Events extends Component {
  render() {
    return (
      <div className="Events">
		<p><b>Event 1</b><br/><i>Time</i> : <i>Location</i><br/>Info</p>
		<hr/>
		<getEvents/>
      </div>
    );
  }
}

export default Events;
