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

class App extends Component {
  render() {
    let loggedIn = true;
      
    if(loggedIn) {
        return (
          <div className="App">
            <div className="App-header">
            <br />
              <img src={logo} className="App-logo" alt="logo" />

                <br /><br /><br />
                <h1>Project Name</h1>

                <MuiThemeProvider>
                    <RegisterButton />
                </MuiThemeProvider>

            </div>
            <br />
            <p className="App-intro">
            I am interested in...<br /><br />
                <MuiThemeProvider>
                    <ThreeButtons />
                </MuiThemeProvider>
            </p>
          </div>
        );
    } else {
        return (
            <div>NOT LOGGED IN BITCH</div>
        )
    }
    
  }
}

export default App;
