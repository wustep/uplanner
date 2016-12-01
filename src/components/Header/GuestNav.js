import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
require('dotenv').config();

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
		var lowerLevelButtons = [
			<div>
				{ this.state.visibleAcademic ? <RaisedButton label="Academic" style={bigTagStyle} /> : null }
				{ this.state.visibleSocial ? <RaisedButton label="Social" style={bigTagStyle} /> : null }
				{ this.state.visibleAthletic ? <RaisedButton label="Athletic" style={bigTagStyle} /> : null }    
			</div>
		];	
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
	callApi(label) { // TODO: Re make this to be dynamic.
		let n = 0;
		if (label == 'Academic') {
			n = 1;
		} else if (label == 'Social') {
			n = 3;
		} else {
			n = 2;
		}
		var that = this;
		fetch(process.env.REACT_APP_API + '/bigtags/' + n)
		.then(function(response) {
			return response.json();
		}).then(function(response) {
			var temp = [];
			for(let i = 0; i < response.length; i++) {
				console.log(response[i].name);
				temp.push(response[i].name);  
			}
		   that.setState({subButtons: temp});
		});
	}   
	render() {
		var self = this;
		var buttons = ["Academic", "Social", "Athletic"];
		
		return(
		  <div id="topHalf">
			I am interested in...
			{buttons.map(function(name) {
				return <RaisedButton label={name} onClick={self.callApi.bind(this, name)} style={bigTagStyle} />
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