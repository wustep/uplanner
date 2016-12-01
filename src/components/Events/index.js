import React from 'react';
import fetch from 'node-fetch';
import './Events.css';
import moment from 'moment';
import Search from './Search';
import EventCard from './EventCard';

function getEvents(query="") {
	return fetch(process.env.REACT_APP_API + "/events/" + query).then(function(response) { return response.json(); }).then(function(json) {
		return json;
	});
}


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
	constructor(props) {
		super(props);
		this.state = {
			events: [],
			query: ""
		};
		var self = this;
		getEvents().then(function(data) {
			self.setState({events: parseEvents(data)});
		});
	}
	repopulateEvents(query) {
		var self = this;
		getEvents(query).then(function(data) { // TODO: For some reason, keyword "Women's" works but not "Men's". Hmm...
			self.setState({events: parseEvents(data)});
		});
	}
	render() {
		if (this.props.limit) {
		return(
				<div className="Events"><Search/>{this.state.events.slice(0,3)}</div>
			);
		} else {
			return (
				<div className="Events">
					<Search query={this.state.query} repopulateEvents={this.repopulateEvents.bind(this)}/>
					{this.state.events}
				</div>
			);
		}
	}
}