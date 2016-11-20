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
        let n = 0;
        if(label == 'Academic'){
            n=1;
        }else if (label == 'Social'){
            n=3;
        }else{
            n=2;
        }
        var that = this;
        fetch('http://localhost:3001/api/bigtags/'+n)
        .then(function(response) {
            return response.json();
        }).then(function(response) {
            console.log(response);
            var temp = [];
            for(let i=0; i<response.length; i++) {
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
          <div>
            {buttons.map(function(name) {
                return <RaisedButton label={name} onClick={self.callApi.bind(this, name)} style={style} />
            })}
            <br/><br/>
            {this.state.subButtons.map(function(name) {
                return <RaisedButton label={name} style={style} />
            })}
            
          </div>
          
        );
    }
}
export default BigTagButtons;