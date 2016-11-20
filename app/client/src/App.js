import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RegisterButton from './components/RegisterButton';
import ThreeButtons from './components/ThreeButtons';
import Events from './components/Events';

class App extends Component {
  render() {
    let loggedIn = true;
      
    if(loggedIn) {
        return (
          <div className="App">
            <div className="App-header">
            <br />
              <img src={logo} className="App-logo" alt="logo" />
                <h1>Event Digest</h1>

                <MuiThemeProvider>
                    <RegisterButton />
                </MuiThemeProvider>

            </div>
            <p className="App-intro">
            Interested in:
                <MuiThemeProvider>
                    <ThreeButtons />
                </MuiThemeProvider>
            </p>
			<Events/>
          </div>
        );
    } else {
        return (
            <div>Guest View</div> // TBD
        )
    }
    
  }
}

export default App;
