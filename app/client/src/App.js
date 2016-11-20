import React, { Component } from 'react';
import logo from './images/logo.svg';
import logo2 from './images/logo.png';
import './css/App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RegisterButton from './components/RegisterButton';
import ThreeButtons from './components/ThreeButtons';
import Events from './components/events/Events';
import InformationButton from './components/InformationButton';
import AppTopBar from './components/AppTopBar';

class App extends Component {
  render() {
    let loggedIn = true;
      
    if(loggedIn) {
        return (
          <div className="App">
            
            <div className="App-header" id='topHalf'>
            
                
            
                <h1>UPlanner</h1>

            

                <br />
            
                
                <div id='registerButton'>
                <MuiThemeProvider>
                    <RegisterButton />
                </MuiThemeProvider>
                </div>
            
            <div id='informationButton'>
                <MuiThemeProvider>
                    <InformationButton />
                </MuiThemeProvider>
                </div>
            </div>
            <p className="App-intro" id='lowerHalf'>
            I am interested in...<br /><br />

            <div className="App-intro">

                <MuiThemeProvider>
                    <ThreeButtons />
                </MuiThemeProvider>
            </div>
			<Events/>
         </p> </div>
        );
    } else {
        return (
            <div>Guest View</div> // TBD
        )
    }
    
  }
}

export default App;
