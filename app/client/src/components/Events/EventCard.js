import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';

function createMarkup(val) {
	return {__html: val};
}

function parseSingleDate(val) {
	return moment(val).format("dddd, MMMM Do, h:mma");
}

export default class EventCard extends React.Component {
	render() {
		const desc = this.props.desc != "null" && this.props.desc.length > 3 ? this.props.desc : "";
		const expand = desc !== "";
		const sub = (this.props.time_start !== "" ? parseSingleDate(this.props.time_start) : "") + (this.props.location.length > 0 ? ", " : "") + this.props.location;
		return(
			<div className="eventCard">
				<MuiThemeProvider><Card className="event">
					<CardHeader className="eventTitle" titleStyle={{"fontWeight": "bold"}} title={this.props.name} subtitle={sub} actAsExpander={expand} showExpandableButton={expand}/>
						{expand ? <CardText className="eventDesc" expandable={true} dangerouslySetInnerHTML={createMarkup(desc)}></CardText> : null} 
					<hr/>
				</Card></MuiThemeProvider>
			</div>
		);
	}
}