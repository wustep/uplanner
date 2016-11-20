import React, { Component } from 'react';
import "./scraper.css";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {fullWhite} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

class Scraper extends Component {
	constructor(props) {
		super(props);
		this.populateOutput = this.populateOutput.bind(this);
		this.state = {
		  output: ""
		};
	}
	populateOutput(e) {
		this.setState({output: "testing"})
	}
	render() {
		const {populateOutput} = this;
		return (
			<MuiThemeProvider>
				<div className="Scraper">
					<TextField id="link" hintText="Link"/>
					<br />
					<RaisedButton className="populateBtn" label="Populate" onClick={populateOutput} primary={true} />
					<br /><br />
					<div className="output">
						{this.state.output}
					</div>
				</div>
			</MuiThemeProvider>
		);
   }
}

export default Scraper;
