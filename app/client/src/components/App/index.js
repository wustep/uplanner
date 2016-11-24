import React from 'react';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import RegisterButton from '../Header/RegisterButton';
import GuestNav from '../Header/GuestNav';
import Events from '../Events/';
import InformationButton from '../Header/InformationButton';
import AppTopBar from '../Header/AppTopBar';
import LogoBanner from '../../img/combined.png';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            limit: false
        }
    }

     handleClick(e) {
        e.preventDefault();
        this.setState({ limit: true })
        console.log(e);
        console.log(this.props);
      }

	render() {
	
	let loggedIn = true;
      
    if (loggedIn) {
        return (
          <div className="App">
                <div className="App-header" id='topHalf'>
				<a href="http://localhost:3000"><img className="App-banner" src={LogoBanner}/></a><br/>
                <MuiThemeProvider>
                    <RegisterButton />
                </MuiThemeProvider>
				
                <MuiThemeProvider>
					<GuestNav onClick={this.handleClick.bind(this)}/>
				</MuiThemeProvider>

				<MuiThemeProvider>
					<InformationButton />
				</MuiThemeProvider>
            </div>
            <div className="App-intro" id='lowerHalf'>
			<Events limit={this.state.limit} />
    		</div></div>
        );
    } else {
        return (
            <div>Guest View</div> // TBD
        )
    }
    
  }
}

export default App;
