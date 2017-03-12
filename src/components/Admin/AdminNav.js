import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import SocialPerson from 'material-ui/svg-icons/social/person';

const scraperIcon = <IconLocationOn />;
const adminIcon = <SocialPerson />;

const style={
  paddingTop: "84px",
  backgroundColor: "#d0ffef"
};

export default class AdminNav extends Component {
	state = {
		selectedIndex: 0,
	};

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation id="adminNav" style={style} selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Scraper"
            icon={scraperIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Admin"
            icon={adminIcon}
            onTouchTap={() => this.select(1)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}