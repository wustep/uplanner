import React from 'react';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import GuestNav from '../Header/GuestNav';
import Events from '../Events/';
import AppTopBar from '../Header/AppTopBar';
import LogoBanner from '../../img/combined.png';
import MuiTheme from './MuiTheme.js';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			guestTags: []
		}
	}
	
	guestPop(subTags) {
		this.setState({guestTags: subTags})
	}

	render() {
		let loggedIn = false;
		if (loggedIn) {
			return (
				<div>User View</div> // TBD
			)
		} else {
			return (
				<MuiTheme>
					<div className="app">
						<AppTopBar />		
						<GuestNav guestPop={this.guestPop.bind(this)}/>
						<div className="app-intro" id='lowerHalf'>
							<Events guestTags={this.state.guestTags} />
						</div>
					</div>
				</MuiTheme>
			);
		}
  	}
}
