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
	getEvents(q="") {
		if (q === "" && this.props.guestTags.length > 0) { // Not using search and tags are set -- use guest-events call
			return fetch(apiURL + "/guest-events/" + this.props.guestTags.toString().replace(/,/g, "+")).then(function(response) { return response.json(); }).then(function(json) {
				return json;
			}); 
		} else {
			return fetch(apiURL + "/events/" + encodeURIComponent(q)).then(function(response) { return response.json(); }).then(function(json) {
				return json;
			});
		}
	}
	constructor(props) {
		super(props);
		this.state = {
			events: []
		};
		var self = this;
		this.getEvents().then(function(data) {
			self.setState({events: parseEvents(data)});
		});
	}
	repopulateEvents(query) {
		var self = this;
		this.getEvents(query).then(function(data) { // TODO: For some reason, keyword "Women's" works but not "Men's". Hmm...
			self.setState({events: parseEvents(data)});
		});
	}
	componentWillReceiveProps() {
		this.repopulateEvents();
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