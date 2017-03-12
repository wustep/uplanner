import React, { Component } from 'react';
import "./scraper.css";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TeamUp from './teamup.js';
import MuiTheme from '../App/MuiTheme.js';
import AppTopBar from '../Header/AppTopBar.js';
import AdminNav from './AdminNav.js';
import Paper from 'material-ui/Paper';

export default class Admin extends Component {
	constructor(props) {
		super(props);
		this.populateOutput = this.populateOutput.bind(this);
		this.handleLinkChange = this.handleLinkChange.bind(this);
		this.state = {
			setting: 0,
			output: "",
			url: "",
		 	showOutput: false
		};
	}
	populateOutput(e) {
		this.setState({ showOutput: true });
		if (this.state.url.includes("teamup.com/")) {
			var calStart = this.state.url.indexOf(".com/") + 5;
			var cal = this.state.url.substr(calStart, calStart + 24);
			var startDate = "2016-10-1";
			var endDate = "2016-11-31";
			var that = this;
			TeamUp.makeCorsRequest('https://api.teamup.com/' + cal + '/events?startDate='+startDate+'&endDate='+endDate, function(res) {
				var out = TeamUp.generateSQL(JSON.parse(res.responseText), that.state.url);
				return that.setState({ output: out });
			});
			return;
		} 
		this.setState({ output: "Error: Invalid link type!" })
	}
	handleLinkChange(e) {
		this.setState({ url: e.target.value })
	}
	swapAdminView(n) {
		this.setState({ setting: n });
	}
	render() {
		const {populateOutput, handleLinkChange} = this;
		let content = "";
		if (this.state.setting === 0) {
			content = "adminView";
		} else if (this.state.setting === 1) {
			content = 
				<div id="scraper">
					<TextField id="link" hintText="Link" value={this.state.url} onChange={this.handleLinkChange} />
					<br />
					<RaisedButton className="populateBtn" label="Populate" onClick={populateOutput} primary={true} />
					<br /><br />
					{ this.state.showOutput ? <textarea id="output" value={this.state.output.replace(/\\n/g,'\n')} /> : null }
				</div>;
						
		}

		return (
			<MuiTheme>
				<div className="app">
					<AppTopBar />
					<AdminNav swapAdminView={this.swapAdminView.bind(this)}/>
					<Paper id="admin">
						{content}
					</Paper>
				</div>
			</MuiTheme>
		);
   }
}