import React, { Component } from 'react';
var fetch = require('node-fetch')

function getEvents() {
	return fetch("http://localhost:3001/api/events").then(function(response) { return response.json(); }).then(function(json) {
		return json;
	});
}

class Events extends Component {
	componentWillMount() {
		getEvents().then(function(res) { console.log(res)});
	}
	render() {
		return (<div className="Events">
			<p>
				<b>Name</b>
			</p>
		</div>)
	}
}

export default Events;
