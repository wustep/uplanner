import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';

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
		this.showOtherBigTagsAcademic = this.showOtherBigTagsAcademic.bind(this);
		this.showOtherBigTagsSocial = this.showOtherBigTagsSocial.bind(this);
		this.showOtherBigTagsAthletic = this.showOtherBigTagsAthletic.bind(this);
		this.state = {
		  	output: "",
		  	visibleAcademic: false,
		  	visibleSocial: false,
		  	visibleAthletic: false,
		  	subButtons: []
		};
		this.callApi = this.callApi.bind(this)
	}
	showOtherBigTagsAcademic() {
		this.setState({ visibleAcademic: true })
	}
	showOtherBigTagsSocial() {
		this.setState({ visibleSocial: true })
	}
	showOtherBigTagsAthletic() {
		this.setState({ visibleAthletic: true })
	}
	callApi(label, index) { // TODO: Re make this to be dynamic.
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
		var buttons = ["Academic", "Social", "Athletic"];
		
		return(
		  <div id="guestNav">
			I am interested in...
			{buttons.map(function(name, index) {
				return <RaisedButton key={"BigTag" + index} id={index} label={name} onClick={self.callApi.bind(this, name, index + 1)} style={bigTagStyle} />
			})}
			<br/>
			<div style={subTagDivStyle}>
				{this.state.subButtons.map(function(name) {
					return <Chip onClick={self.props.onClick} style={subTagSyle}>{name}</Chip>
				})}
			</div>	
		  </div>
		  
		);
	}
}
export default BigTagButtons;