import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

class Login extends React.Component {
	render() {
		return(
			<FlatButton label="Login" />
		);
	}
}

class Register extends React.Component {
	render() {
		return(
			<FlatButton label="Register" />
		);
	}
}

class Info extends React.Component {
	render() {
		return (
			<FlatButton label="Info" />
		);
	}
}

export default class AppBarExampleIcon extends React.Component {
	constructor() {
		super();
		this.state = {
			logged: false
		}
	}
	render() {
		return (
			<AppBar title="UPlanner" 
					iconElementLeft={<Info />}
					iconElementRight={this.state.logged ? "" : <div className="LoginRegisterButtons"><Login /><Register /></div>} 
			/>
		);
	}
}