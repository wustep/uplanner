import React from 'react';
import AppBar from 'material-ui/AppBar';
import Logo from '../../img/logo.png';
import LogoBanner from '../../img/combined.png';
import Register from "./Register";
import Info from "./Info";
import './Header.css';

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
			<AppBar title={<a href="./"><img alt='Logo Banner' className="app-banner" src={LogoBanner}/><img alt='Logo Banner Small' className='app-logo' src={Logo}/></a>}
					iconElementLeft={<Info />} style={AppBarStyle}
					iconElementRight={this.state.logged ? "" : <Register />} 
			/>
		);
	}
}