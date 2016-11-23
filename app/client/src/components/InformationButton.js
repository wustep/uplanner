import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import logo from '../images/logo.png'

const styles = {
  radioButton: {
    marginTop: 16,
  },
};

/**
 * Dialog content can be scrollable.
 */
export default class DialogExampleScrollable extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});
    
  render() {
    const actions = [
      <FlatButton
        label="Cool!"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];


    return (
      <div id='informationButton'>
        <RaisedButton label="Information" onTouchTap={this.handleOpen} />
        <Dialog
          title = 'About this app'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
        <br />
        Tailored towards college campuses, UPlanner was built from the ground up to give college students everywhere a comprehensive guide to the events around them.
        <br /><br />
        As a guest, you can get started right away by choosing your interests and looking at events around you, or you can create an account for more personalized options!
        <br /><br />
        This was built with love by <a href="http://wustep.me">Stephen Wu</a>, <a href='http://itaparia.github.io'>Ishan Taparia</a>, Jacob Shoaf, and Stephen Pioro. Check out all the open source code at the GitHub repository <a href="https://github.com/wustep/hackohio">here</a>!
        
        </Dialog>
        
      </div>
    );
  }
}