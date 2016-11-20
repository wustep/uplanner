import React, { Component } from 'react';
var fetch = require('node-fetch')
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './events.css';

function getEvents() {
	return fetch("http://localhost:3001/api/events").then(function(response) { return response.json(); }).then(function(json) {
		return json;
	});
}

class Events extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: null
		};
		var that = this;
		getEvents().then(function(data) {
			var out = "";
			for (var i = 0; i < data.length; i++) {
				out = out + "<span class='eventTitle'>" + data[i]["name"] + "</span><br/><span class='eventInfo'>"+data[i]["location"]+"</span><br/><span class='eventDescription'>" + data[i]["desc"]+"</span><br/><hr/>";
			}
			that.setState({events: out});
		});
	}
	render() {
		return(
			<div className="Events">
				<div dangerouslySetInnerHTML={{__html: this.state.events}} />
			</div>
		);
	}
}

export default Events;
