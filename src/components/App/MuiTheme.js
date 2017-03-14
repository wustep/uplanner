import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
	cyan500, cyan700, grey100, grey300, grey400, grey500,
	white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {fade} from 'material-ui/utils/colorManipulator';

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
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				{this.props.children}
			</MuiThemeProvider>
		);
  	}
}