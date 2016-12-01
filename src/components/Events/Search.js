import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';

var apiURL = (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_API_PROD : process.env.REACT_APP_API_DEV; // TODO: This is a temp solution for distinguishing API urls

function searchEvents(q) {
	return fetch(apiURL + "/events/" + q).then(function(response) { return response.json(); });
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
	handleKeyPress(e) {
		if (e.key == 'Enter') {
			this.props.repopulateEvents(this.props.query);
		}
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
				  onKeyPress={this.handleKeyPress.bind(this)}
				/>
				<br/><br/>
			</div>
		);
	}
}