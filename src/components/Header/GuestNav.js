import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import './Header.css';

var apiURL = (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_API_PROD : process.env.REACT_APP_API_DEV; // TODO: This is a temp solution for distinguishing API urls

const style = {
	bigTag: {
		margin: "10px",
		borderRadius: "4px"
	},
	bigTagLabel: {
		textTransform: "none"
	},
	subTagDiv: {
		display: "flex",
    	flexWrap: "wrap",
    	alignItems: "center",
    	justifyContent: "center"
    },
	subTag: {
		cursor: "pointer",
		margin: "8px",
		borderRadius: "4px"
	},
	subTagEnabled: {
		backgroundColor: "#d0ffef"
	},
	subTagDisabled: {
		backgroundColor: "white"
	}
}
//var subButtons;

export default class GuestNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  	output: "",
		  	subButtons: [],
		  	subButtonsIds: [],
		  	subTagsEnabled: []
		};
		this.callApi = this.callApi.bind(this);
		this.subTagClick = this.subTagClick.bind(this);
	}
	getInitialState() {
		return JSON.parse(localStorage.getItem('GuestNav') || '{}');
	}
	componentDidMount() {
		var self = this;
		setInterval(function () {
	 		localStorage.setItem('GuestNav', JSON.stringify(this.state));
 		}, 3000);
	}
	callApi(label, index) {
		var that = this;
		fetch(apiURL + '/bigtags/' + index).then(function(response) {
			return response.json();
		}).then(function(response) {
			var temp = [];
			var tempIds = [];
			for(let i = 0; i < response.length; i++) {
				temp.push(response[i].name);  
				tempIds.push(response[i].tag_id)
			}
			that.setState({subButtonsIds: tempIds});
			that.setState({subButtons: temp});
		});	
	}   
	subTagClick(index) { // Index is the index of the subButtonIds, NOT the index of the 
		var subTags = this.state.subTagsEnabled;
		if (subTags.includes(this.state.subButtonsIds[index])) {
			subTags.splice(subTags.indexOf(this.state.subButtonsIds[index]), 1);
		} else {
			subTags.push(this.state.subButtonsIds[index]);
		}
		this.props.guestPop(subTags);
	}
	render() {
		var self = this;	
		var buttons = ["Academic", "Athletic", "Social"]; // TODO: Change this to not be hard-coded
			
		return(
		  <div id="guestNav">
			<span id="interested-in">I am interested in...</span><br className="visible-xs"/>
			{buttons.map(function(name, index) {
				return <RaisedButton key={index} id={index} label={name} onClick={self.callApi.bind(this, name, index + 1)} style={style.bigTag} labelStyle={style.bigTagLabel} />
			})}
			<br/>
			<div style={style.subTagDiv}>
				{this.state.subButtons.map(function(name, index) {
					return <Chip key={index} onClick={self.subTagClick.bind(this, index)} style={{...style.subTag, ...((self.state.subTagsEnabled.includes(self.state.subButtonsIds[index])) ? style.subTagEnabled : style.subTagDisabled)}}>{name}</Chip>
				})}
			</div>	
		  </div>
		);
	}
}