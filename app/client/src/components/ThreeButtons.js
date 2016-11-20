import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
  color: 'pink',
};
//var subButtons;

class BigTagButtons extends Component
{
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
                { this.state.visibleAcademic ? <RaisedButton label="Academic" style={style} /> : null }
                { this.state.visibleSocial ? <RaisedButton label="Social" style={style} /> : null }
                { this.state.visibleAthletic ? <RaisedButton label="Athletic" style={style} /> : null }    
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
    
    callApi(label) {
        alert(label);
        // post to API with label as your data
        // get back JSON object
        // this.response.data.map(function(item)) { }
        // loop through every item and create html for item.name
//        var array = [];
//        for(loop through api) {
//            array.push(item.name);
//        }
        
        var response = JSON.parse('[{"bigtag_id":1,"tag_id":1,"name":"Academic"},{"bigtag_id":2,"tag_id":2,"name":"Athletics"},{"bigtag_id":3,"tag_id":3,"name":"Social"}]');
        
        console.log(response);
        var temp = [];
        for(let i=0; i<response.length; i++) {
            console.log(response[i].name);
            temp.push(response[i].name);
        }
        this.setState({subButtons: temp});
    }
    
    render() {
        var self = this;
        var buttons = ["Acadmic", "Social", "Athletic"];
        
        return(
          <div>
            {buttons.map(function(name) {
                return <RaisedButton label={name} onClick={self.callApi.bind(this, name)} style={style} />
            })}
            <br/><br/><br/>
            {this.state.subButtons.map(function(name) {
                return <RaisedButton label={name} style={style} />
            })}
            
          </div>
          
        );
    }
}
export default BigTagButtons;