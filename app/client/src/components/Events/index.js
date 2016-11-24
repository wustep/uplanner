import React, { Component } from 'react';
var fetch = require('node-fetch');

import {Card, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Events.css';
import moment from 'moment';
import Search from './Search';

function getEvents(query="") {
	return fetch("http://localhost:3001/api/events/" + query).then(function(response) { return response.json(); }).then(function(json) {
		return json;
	});
}

function createMarkup(val) {
	return {__html: val};
}

function parseSingleDate(val) {
	return moment(val).format("dddd, MMMM Do, h:mma");
}

function parseEvents(data) {
	var out = [];
	for (var i = 0; i < data.length; i++) {
		var name = data[i]["name"];
		if (name !== "null") {
					//var desc = data[i]["desc"] != "null" ? "<span class='eventDescription'>" + data[i]["desc"]+"</span><br/>" : "";
					//out = out + "<div class='event'><span class='eventTitle'>" + name + "</span><br/><span class='eventInfo'>"+data[i]["location"]+"</span><br/><span class='eventDesc'>"+ desc + "</span></div><hr/>";
			var expand = data[i]["desc"] !== "null";
			var sub = data[i]["location"] !== "null" ? data[i]["location"] : "";
			sub = (data[i]["time_start"] !== "null" ? parseSingleDate(data[i]["time_start"]) : "") + (sub.length > 0 ? ", " : "") + sub;
					out.push( 
			(<MuiThemeProvider><Card className="event">
				<CardHeader className="eventTitle" titleStyle={{"fontWeight": "bold"}} title={name} subtitle={sub} actAsExpander={expand} showExpandableButton={expand}/>
					{expand ? <CardText className="eventDesc" expandable={true} dangerouslySetInnerHTML={createMarkup(data[i]["desc"])}></CardText> : null} 
				<hr/>
			</Card></MuiThemeProvider>));
		}
	}
	return out;
}


class Events extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: [],
			repopulate: false
		};
		var self = this;
		getEvents().then(function(data) {
			self.setState({events: parseEvents(data)});
		});
	}
	repopulateEvents(query) {
		
	}
	render() {
		//console.log(this.state.repopulate);
		//console.log(this.props.limit);
		if (this.props.limit) {
		return(
				<div className="Events"><Search/>{this.state.events.slice(0,3)}</div>
			);
		} else {
			return (
				<div className="Events"><Search repopulate={this.state.repopulate}/>{this.state.events}</div>
			);
		}
	}
}

export default Events;
