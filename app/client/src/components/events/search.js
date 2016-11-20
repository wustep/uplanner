import React, { Component } from 'react';
var fetch = require('node-fetch')

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: null
		};
		var that = this;
		getEvents().then(function(data) {
			var out = "";
			for (var i = 0; i < data.length; i++) {
				out = out + "<b>" + data[i]["name"] + "</b><br/><i>"+data[i]["location"]+"</i><br/>" + data[i]["desc"]+"<br/><hr/>";
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

export default Search;
