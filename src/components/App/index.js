import React from 'react';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import GuestNav from '../Header/GuestNav';
import Events from '../Events/';
import AppTopBar from '../Header/AppTopBar';
import LogoBanner from '../../img/combined.png';

const muiTheme = getMuiTheme({
	palette: { // A lot of these are defaults of the Light Theme
		primary1Color: "#17a574", // Darker green
	    primary2Color: cyan700, // Blue
	    primary3Color: grey400,
	    accent1Color: white,
	    accent2Color: grey100,
	    accent3Color: grey500,
	    textColor: darkBlack, 
	    alternateTextColor: white,
	    canvasColor: white,
	    borderColor: grey300,
	    disabledColor: fade(darkBlack, 0.3),
	    pickerHeaderColor: cyan500,
	    clockCircleColor: fade(darkBlack, 0.07),
	    shadowColor: fullBlack
	}
});

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			limit: false
		}
	}

	 handleClick(e) {
		e.preventDefault();
		this.setState({ limit: true })
	  }

	render() {
	
	let loggedIn = true;
	  
	if (loggedIn) {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div className="App">
					<AppTopBar />		
					<GuestNav onClick={this.handleClick.bind(this)}/>
					<div className="App-intro" id='lowerHalf'>
						<Events limit={this.state.limit} />
					</div>
				</div>
			</MuiThemeProvider>
		);
	} else {
		return (
			<div>Guest View</div> // TBD
		)
	}
	
  }
}
