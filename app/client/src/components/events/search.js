import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';

import config from '../../../../config.json'; // TODO: Might re-think this later...

function searchEvents(q) {
	return fetch(config.baseurl+":3001/api/events/" + q).then(function(response) { return response.json(); });
}

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: []
		};
	}
	handleUpdateInput = (value) => {
		var that = this;
		searchEvents(value).then(function(data) {
			var out = [];
			for (var i = 0; i < data.length && i < 15; i++) {
				var name = data[i]["name"];
				if (name !== "null") {
					out.push(name);
				}
			}
			that.setState({dataSource: out});
		});
	}
	handleSubmit(e) {
		this.props.repopulateEvents(e);
	}
	render() {
		return(
			<div className="Search">
				<AutoComplete
				  hintText="Try searching for an event, tag, or location, like 'Ohio Union' or 'Karaoke'!"
				  dataSource={this.state.dataSource}
				  onUpdateInput={this.handleUpdateInput}
				  filter={AutoComplete.noFilter}
				  maxSearchResults={5}
				  fullWidth={true}
				  onNewRequest={this.handleSubmit.bind(this)}
				  value={this.props.query}
				/>
				<br/><br/>
			</div>
		);
	}
}