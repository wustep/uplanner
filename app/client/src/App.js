import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RegisterButton from './RegisterButton';
import InterestedButton from './InterestedButton';
import MasterGrid from './MasterGrid';

class LandingPage extends Component {
  render() {
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
        <p className="App-intro">
            <MuiThemeProvider>
                <InterestedButton />
            </MuiThemeProvider>
        </p>
        
        <div>
        
        </div>
      </div>
    );
  }
}

export default LandingPage;
