import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import ActionInfo from 'material-ui/svg-icons/action/info';

const infoIcon = <ActionInfo />;

/**
 * Dialog content can be scrollable.
 */
export default class DialogExampleScrollable extends React.Component {
	state = {
		open: false,
		value: 1
	};
	handleOpen = () => {
		this.setState({open: true});
	};
	handleClose = () => {
		this.setState({open: false});
	};
	handleChange = (event, index, value) => this.setState({value});	
	render() {
		const actions = [
			<FlatButton
				label="Cool!"
				primary={true}
				onTouchTap={this.handleClose}
			/>,
		];
		return (
			<div id='informationButton'>
				<FlatButton icon={infoIcon} label="Information" secondary={true} onTouchTap={this.handleOpen} />
				<Dialog
					title='About this app'
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
					autoScrollBodyContent={true}>
					<br />
					Tailored towards college campuses, UPlanner was built from the ground up to give college students everywhere a comprehensive guide to the events around them.
					<br /><br />
					As a guest, you can get started right away by choosing your interests and looking at events around you, or you can create an account for more personalized options!
					<br /><br />
					This was built with love by <a href="http://wustep.me">Stephen Wu</a>, <a href='http://itaparia.github.io'>Ishan Taparia</a>, Jacob Shoaf, and Stephen Pioro. 
					Check out all the open source code at the GitHub repository <a href="https://github.com/wustep/hackohio">here</a>!
				</Dialog>
			</div>
		);
	}
}