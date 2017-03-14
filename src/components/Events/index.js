import React from 'react';
import fetch from 'node-fetch';
import './Events.css';
import Search from './Search';
import EventCard from './EventCard';

var apiURL = (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_API_PROD : process.env.REACT_APP_API_DEV; // TODO: This is a temp solution for distinguishing API urls

function parseEvents(data) { // TODO: Make this into a legit component?
	var out = [];
	for (var i = 0; i < data.length; i++) {
		var name = data[i]["name"];
		if (name !== "null") {
			out.push(<EventCard key={"Event" + i} name={data[i]["name"]} location={data[i]["location"]} time_start={data[i]["time_start"]} time_end={data[i]["time_end"]} desc={data[i]["desc"]} />);
		}
	}
	return out;
}

export default class Events extends React.Component {
	getEvents(q="", guestTags=[]) {
		if (guestTags.length > 0) { // If user is changing tags, use this. Otherwise fetch normally by query
			return fetch(apiURL + "/guest-events/" + guestTags.toString().replace(/,/g, "+")).then(function(response) { return response.json(); }).then(function(json) {
				return json;
			}); 
		}
		return fetch(apiURL + "/events/" + encodeURIComponent(q)).then(function(response) { return response.json(); }).then(function(json) {
			return json;
		});
	}
	repopulateEvents(query) {
		var self = this;
		this.getEvents(query).then(function(data) { // TODO: For some reason, keyword "Women's" works but not "Men's". Hmm...
			self.setState({events: parseEvents(data)});
		});
	}
	constructor(props) {
		super(props);
		this.state = {
			events: []
		};
		this.repopulateEvents();
	}
	componentWillReceiveProps(nextProps) {
		var self = this;
		this.getEvents("", nextProps.guestTags).then(function(data) { // TODO: For some reason, keyword "Women's" works but not "Men's"... Check SQl later
			self.setState({events: parseEvents(data)});
		});
	}
	render() {
		return (
			<div className="Events">
				<Search repopulateEvents={this.repopulateEvents.bind(this)}/>
				{this.state.events}
			</div>
		);
	}
}