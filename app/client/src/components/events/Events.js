import React, { Component } from 'react';
var fetch = require('node-fetch')

class Events extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		<div className="Events">
			<getEventsChildren/>
		</div>
		);
	}
}

class getEventsChildren extends Component {
	render() {
		return (
			fetch("http://localhost:3001/api/events").then(function(response) {
				return response.json;
			}).then(function(body) {
				console.log(body);
				for (var i = 0; i < body.length; i++) {
					return <EventChild name="test" />
				}
			})
		);
	}
}

class EventChild extends Component {
	render() {
		return (
			<p><b>Name: {this.props.name}</b><br/><i>{this.props.time_start} to {this.props.time_end} at {this.props.location}</i><br/>{this.props.description}</p>
		);
	}
}

export default Events;
