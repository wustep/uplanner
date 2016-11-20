import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RegisterButton from './components/RegisterButton';
import InterestedButton from './components/InterestedButton';
import MasterGrid from './components/MasterGrid';

class App extends Component {
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
      </div>
    );
  }
}

export default App;
