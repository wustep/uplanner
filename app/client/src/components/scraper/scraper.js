import React, { Component } from 'react';
import "./scraper.css";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {fullWhite} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import TeamUp from './teamup.js';

class Scraper extends Component {
	constructor(props) {
		super(props);
		this.populateOutput = this.populateOutput.bind(this);
		this.handleLinkChange = this.handleLinkChange.bind(this);
		this.state = {
		  output: "",
		  url: ""
		};
	}
	populateOutput(e) {
		if (this.state.url.includes("teamup")) {
			var startDate = "2016-11-19";
			var endDate = "2016-11-26";
			var that = this;
			TeamUp.makeCorsRequest('https://api.teamup.com/kse89a84dcb543ed5e/events?startDate='+startDate+'&endDate='+endDate, function(res) {
				var out = TeamUp.generateSQL(JSON.parse(res.responseText));
				console.log(out);
				console.log(JSON.stringify(out));
				return that.setState({ output: JSON.stringify(out) });
			});
		}
	}
	handleLinkChange(e) {
		this.setState({ url: e.target.value })
	}
	render() {
		const {populateOutput, handleLinkChange} = this;
		return (
			<MuiThemeProvider>
				<div className="Scraper">
					<TextField id="link" hintText="Link" value={this.state.url} onChange={this.handleLinkChange} />
					<br />
					<RaisedButton className="populateBtn" label="Populate" onClick={populateOutput} primary={true} />
					<br /><br />
					<textarea className="output" value={this.state.output} />
				</div>
			</MuiThemeProvider>
		);
   }
}

export default Scraper;
