import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';

function searchEvents(q) {
	return fetch("http://localhost:3001/api/events/" + q).then(function(response) { return response.json(); }).then(function(json) {
		return json;
	});
}


class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: []
			//repopulate: props.repopulate;
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
	handleSubmit() {
		//this.state.repopulate = true;
	}
	render() {
		return(
			<MuiThemeProvider>
			<div className="Search">
				<AutoComplete
				  hintText="Try searching for an event, tag, or location, like 'Ohio Union' or 'Karaoke'!"
				  dataSource={this.state.dataSource}
				  onUpdateInput={this.handleUpdateInput}
				  fullWidth={true}
				  onNewRequest={this.handleSubmit}
				/>
				<br/><br/>
			</div>
			</MuiThemeProvider>
		);
	}
}

export default Search;