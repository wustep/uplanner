import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

var apiURL = (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_API_PROD : process.env.REACT_APP_API_DEV; // TODO: This is a temp solution for distinguishing API urls

function searchEvents(q="") {
	return fetch(apiURL + "/events/" + encodeURIComponent(q)).then(function(response) { return response.json(); });
}

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: [],
			query: ""
		};
	}
	handleUpdateInput = (value) => {
		this.setState({query : value});
		if (this.state.query.length > 2) { // TODO: This doesn't seem to always work on suppressing dropdown, but it's fine for now.
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
		} else {
			this.setState({dataSource: []});
		}
	}
	handleSubmit(e) { 
		this.props.repopulateEvents(e);
	}
	handleKeyPress(e) {
		if (e.key === 'Enter' && this.state.query.length === 0) { // This is since submit doesn't work on empty input
			this.props.repopulateEvents();
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
				  searchText={this.state.query}
				  onKeyPress={this.handleKeyPress.bind(this)}
				/>
				<br/><br/>
			</div>
		);
	}
}