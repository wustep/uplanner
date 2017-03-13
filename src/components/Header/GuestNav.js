import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import './Header.css';

var apiURL = (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_API_PROD : process.env.REACT_APP_API_DEV; // TODO: This is a temp solution for distinguishing API urls

const bigTagStyle = {
  	margin: "10px"
};
const subTagDivStyle = {
	display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
};
const subTagSyle = {
	cursor: "pointer",
	margin: "8px",
	backgroundColor: "white",
	borderRadius: "4px"
};
//var subButtons;

class BigTagButtons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  	output: "",
		  	subButtons: []
		};
		this.callApi = this.callApi.bind(this)
	}
	callApi(label, index) {
		var that = this;
		fetch(apiURL + '/bigtags/' + index).then(function(response) {
			return response.json();
		}).then(function(response) {
			var temp = [];
			for(let i = 0; i < response.length; i++) {
				temp.push(response[i].name);  
			}
			that.setState({subButtons: temp});
		});	
	}   
	render() {
		var self = this;
		var buttons = ["Academic", "Social", "Athletic"]; // TODO: Change this to not be hard-coded
		
		return(
		  <div id="guestNav">
			<span id="interested-in">I am interested in...</span>
			{buttons.map(function(name, index) {
				return <RaisedButton key={index} id={index} label={name} onClick={self.callApi.bind(this, name, index + 1)} style={bigTagStyle} />
			})}
			<br/>
			<div style={subTagDivStyle}>
				{this.state.subButtons.map(function(name, index) {
					return <Chip key={index} onClick={self.props.onClick} style={subTagSyle}>{name}</Chip>
				})}
			</div>	
		  </div>
		  
		);
	}
}
export default BigTagButtons;