import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  radioButton: {
    marginTop: 16,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
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

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    const tilesData = [
  {
    img: 'http://wallpapercave.com/wp/athM8ow.png',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'https://lastfm-img2.akamaized.net/i/u/300x300/38d4fd81e8be48a6bd286c5db72ccd8a.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqsp6dYSwVZpzM3OacF2FcRansqLlyzRbFpWjr3srM1Xgf3Zc',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://www.maliburumdrinks.com/Templates/Images/red_bg_1680.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Color_icon_red.svg/220px-Color_icon_red.svg.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://content.internetvideoarchive.com/content/photos/1428/06000501_.jpg',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEUekP/tgdY3AAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFQ8PFS0dFRkrLSsrKy0rNS0rKy0tKy0tLS0rLS0tLSstLS0tLSstLSstKy0tKy0tLS0tLS0tLS0tLf/AABEIALEBHAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAAIDBAb/xAAhEAEBAQAABgIDAAAAAAAAAAAAARECMUFRgfBx0SGxwf/EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBv/EABkRAQEBAAMAAAAAAAAAAAAAAAABEQJBUf/aAAwDAQACEQMRAD8A+MS1a+3fLpLUkkkkkkkYgUlCDEEolElCIUEQSikiClEQklQhQUKWYUGUKKaGWgzWmb1ZrUVFIoSBoBbSDsyVgSROsnSiglqKGlIqAoFRVJKEFBEEooQkE73ZhQO9gkkhSKEhSGSGWqAWaK1WaxWoICBSKlUC1+VoTqDpZ1JNIHSkCkkkkClEU0hEgSFECoKakYqiQizCkUkQksVCXYU/xllCg0UVoVmmhitQCmhmkIIFpBOqKCSK0JI6QjoJZJRIRDRZKBiBQKSSTQKCSNiQWpFLTyCAQQBTNIrNIoVFZrQopZrFaSC1knUE7IoJJpBakUNSTSBIJZLQJZMIaMZJDUQKBIhgFSWLEDoQBIQCSCGlVmms0WmKs01msWtRM02s2sWtRUahvwzrTSCd9BQS1FBLUSyUmkEQ1pZJDULMplagJCagaLJVoaaZhjFrJ8oeENSCGrStQGjThGrQNOIK1m1m04rRaLRWbWpFazVaLWLWpFaNGrWdaxvUNTvoK0JaitCWollLQ0dZ0lNLWS1oaOs6dagxrTrGnWoMbMrErUFDcTMO+1ztZa8UD3mtGo1mq0HTiQ0azpw6NGjRpw2s2q1m1m1qQ1m1Ws2s2tSK0Wqs2sWtSHRo0aNOOqZ1a7hpMpDGlrOnVqKGpJpBHQ1p1lNLGizpMoa1ayW5RjcMrErUotFjen3uxp1ytZxr3kBq0asOs2rRatOIaNGjTh0aBaLThtZtVrNrNrUhtZtVrNrNrUhtZtVrNrFrUh0aNGs61jshq16dYKGrVqKB1alpCKJZWoNHWdLQaWhGUNLWTrerGtalYlLNoxvTvvJjTrlazjWjRo0asOoaFpwjVrOjThtZqtZtFrUhtZtWs2sWtSG1m1Ws2s2tSK0Wq1m1m1qQ6NGjWdOO61J6mDo1LUitCQaTJOooEglknUdOsk6CgmtTWmVks2hrTrMq1ytGNIaNWhrQNGrTh0Wi0WjTitFAtZtakVrNqtZrFrUhtZtVrNrNrUitFotFrFrUiWs6tZ1rHpWjfleXscjqH5WpE6yUiWSQSIiiWeRIKSl6Ugocl+imiyRQToTnQUFgSWqs1FWhUVm0q1m1UVm1qQazaazWLWorWbVWaza3IrRaqzWLWpFq0BnTj2VlJ7nGNs8SSgjQ4SjEupSKXY1IhXkYkguFcSR9XZq6BNBrse6Q5IpJyrKhSCZoqSMH2zftIVoVmpMVoVipMVqCs1JmtRlmpMVuChJkv//Z',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://cdn.wonderfulengineering.com/wp-content/uploads/2014/09/blue-wallpaper-7.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQiIn7ngwgdHtaaf988P7Jx6nyGLwXfLeFGdu7sh6ZmmhMhB6VzIg',
    title: 'Camera',
    author: 'Danson67',
  },
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const MasterGrid = () => (
  <div style={styles.root}>
    <GridList
      cols={2}
      cellHeight={160}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);


    return (
      <div>
        <RaisedButton label="I am Interested In" onTouchTap={this.handleOpen} />
        <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={false}
        >
          <MasterGrid />
        </Dialog>
      </div>
    );
  }
}