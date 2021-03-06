import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
const registerIcon = <ActionAccountCircle />;

/**
 * Dialog content can be scrollable.
 */
export default class DialogExampleScrollable extends React.Component {
	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};
	state = {
		open: false,
		value: 1,
	};

	handleChange = (event, index, value) => this.setState({value});
		
	render() {
		const actions = [];
		return (
			<div id="registerButton">
				<FlatButton icon={registerIcon} label="Register/Log in" secondary={true} onTouchTap={this.handleOpen} />
				<Dialog actions={actions} modal={false} open={this.state.open}
						onRequestClose={this.handleClose} autoScrollBodyContent={true}>
					<div id='leftRegister'>
						<h1>Register</h1><br />
						<TextField hintText="" floatingLabelText="Email" floatingLabelFixed={true} /><br />
						<TextField hintText="" floatingLabelText="Password" type='password' floatingLabelFixed={true} /><br />
						<TextField hintText="" floatingLabelText="Verify Password" type='password' floatingLabelFixed={true} /><br />
						<SelectField floatingLabelText="Type of User"value={this.state.value} onChange={this.handleChange} autoWidth={true}>
							<MenuItem value={1} primaryText="Undergraduate Student" />
							<MenuItem value={2} primaryText="Graduate Student" />
							<MenuItem value={3} primaryText="Staff/Faculty Member" />
							<MenuItem value={4} primaryText="Other" />
						</SelectField><br />
						<RaisedButton id='signupButton' label="Register" /></div>
					<div id='rightRegister'>
						<h1>Log In</h1><br />
						<TextField hintText="" floatingLabelText="Email" floatingLabelFixed={true} /><br />
						<TextField hintText="" floatingLabelText="Password" type='password' floatingLabelFixed={true} /><br />
						<RaisedButton id='signupButton' label="Log in" />
					</div>
				</Dialog>
			</div>
		);
	}
}