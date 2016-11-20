import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
  color: 'pink',
};

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="Academic" style={style} />
    <RaisedButton label="Social" style={style} />
    <RaisedButton label="Athletic" style={style} />
    <br />
    <br />
  </div>
);

export default RaisedButtonExampleSimple;