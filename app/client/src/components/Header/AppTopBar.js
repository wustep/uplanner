import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import config from '../../../../config.json'; // TODO: Might re-think this later...
import LogoBanner from '../../img/combined.png';
import RegisterButton from "./RegisterButton";
import InformationButton from "./InformationButton";


const AppBarStyle = {
	padding: "10px 24px",
	position: "fixed"
}

export default class AppBarExampleIcon extends React.Component {
	constructor() {
		super();
		this.state = {
			logged: false
		}
	}
	render() { // TODO: Update ports to be dynamic as well!
		return (
			<AppBar title={<a href={config.baseurl+":3000"}><img alt='Logo Banner' className="App-banner" src={LogoBanner}/></a>}
					iconElementLeft={<InformationButton />} style={AppBarStyle}
					iconElementRight={this.state.logged ? "" : <div className="LoginRegisterButtons"><RegisterButton /></div>} 
			/>
		);
	}
}