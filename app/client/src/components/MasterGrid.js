import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
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
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Color_icon_red.svg/220px-Color_icon_red.svg.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/225px-Solid_blue.svg.png',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEUekP/tgdY3AAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0HBwcHCA0ICAcHBw0HBwcHCA8ICQcNIBEiIiARExMYHSggGCYlGxUfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDysZFRkrKysrLSsrKzctKysrKy0rKysrNzcrLS0rLSsrKysrKystKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAABAgMABQT/xAAYEAEBAQEBAAAAAAAAAAAAAAAAEQESAv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A7GafNSzT5r6J86rmmzUs02azqq5p81LNNmoK5ps1LNNmsxVc0+almmzWVUzTVLNHNQWzRzUs02akFaNSzRqRVc0ekqNSCuaPSXQ9JFU6bpPpqQU6ap9NSClCkrUgehuk6DpYh90tLuhVgahS0KRB3Q3S7pd1YDul3Q3Q3WkHdLQoVUczNNmpZps10QVzT5qOabNZiq5p81HNNmpBbNNmo5ps1mC2ejZqGejZqRVqbNRz0bPSQVz0bNRzTdMwVo9JdD0kVXoekum6ILdN0lR6SCtap9N0RVK3SfTdEFKFJ0HRBSh0n0HREU30FJQqwPQ3SUKsD76Lvou6XdWIahuloVYg7oUu6FWDmZps1LNPmuhFM02anmmzWVUzTZqVHNSC2aNSzTVmCmafNRzTZqQVzRqWabpIqueh6So56SCueh6SrdJBboekum6ILdN0l0PSRVem6TrVIKdN0nWqwU6CkrUgehSUKQUoUlCrA++g6JQpA+6FJQqxD0KTdCrEPS0N0tWDmZp81HNPmuiIrmmzUs0c1mKrRqeaOakFc0anRzUgrmjmpZps1BXNGpUazFUo1PoaQUzRqdGpBTNHNSps1IK1qnRpFUrdJ9NUgp01TrUgpW6TrUgfoKWhVgehSVqQPQpK1WBqFLQpENWpKFUNuhS0KsRzM02almmzXRBXNNmpZps1mCtHNSzTZqQUzRzU80akFc01SzRzUgrWqdGpBSjUqNSCtHpKtSKtnoc1LNHNSCtGpUakVStU+mpBStU61IKVqn03RBStU+m6IHrUnQUgehukrVYGrUlCrEPQpK1IG3Qpd0K1Bzc02almmzXvEVzRzU80azBSjU6NSCmabPSVHNSCtGpUc9JBXoanWqQUo9J1qQV6GpVqkFs0c1LPQ9EFeh6Sz0NSKpWqdGkFKFJWqQPWpKFWClap1qQUoUlDogpQpK1WBq1JQpA9CloVYHoUlarBzs0c1PNNmvZlTNNmpU1SKpWzU6OagpRqdGgpRqdGoHo0laoKVqSjSB80anRqQUo1OjmpBSj0nWqQU6bpOjSKp03SdakFK1TrdED1qTpqsD0KStSB61TrUgehS0KsD1qStSBqFLQqo5+abNSzTZr2RXNGp5o1BStSZo1FPRpK1QUo1OjUD0anRoKUanRqQUrUlakFK1JRqQPRqdakFK1To0gfpqStSClCkrUinrUlagehS0KB61JWqhq1LWoGrUlakQ1aloVRz80c0maNeiKUanRoKUanRqClGp1qiqUanRqB6OanRqClGp0aB6NJWoKVqStQUrVOjQPRqdagpWpKFBStU6NFPWpK1A9CloUD1qStRDVqWhVgetSVqQNQoUKo8Gaap5o1tFM0anmjUD0aStQPRpKNRT5o1PNGoHo1OjUFM0anmjQUo1OtUFK1JRoGo0lagejU61BStU61BStU6NUPWpK1A9CloUD1qStQNRpK1UNWpK1WIahS1qQeLNHNZmg2azMgLVmAaLMDUazIDmszIotWYBo1mQajWYBrVmQatWZQK1ZgajWZRq1ZgahRYArVmUaszAFasyo1CswP/9k=',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://i.imgur.com/eucAMTA.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUXFxUVFxUVFRUWFxUVFxcYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8PFS0dFR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTctN//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EABwQAQEBAAEFAAAAAAAAAAAAAAABEQISIVFhgf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgX/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/APPtGY1HMcJoqaaiGhyKCVKqCkCpFGtajDSIsENBdQ1QZXRLQCJqirEppREFBUtFRRYIagqBVBAFDAARUBoSVdEVYgiLYYigJixAKkWoKoAIpqUFUhREAFSgKCs6ugozjUiCRQBBYAhVTAZtNaxMVQEwFEAVSRRExSiAsRRFqKmAItQAtEFFRdBI1iEEKikFZpoKosQEaQwBcGZb4aQTFEAwBRNXSoAakUU0AGg1KiBKQUW0S0QaNTVEKhoCAkVVgHEFDViIiLSiomtIomBqikAEFSQBYgVAMEqi2CAAiaKoaA0Wi6ImJFASimAsEVATFARNWs2qNarMVBVTTRFEoAFTRQKii6mgKasQBUAFtS1NKCypqCqumJKsoiKANQCREC30i0EVKAoYmAolqglDQU1UUCBq6iCVUACFUVEAVNUBBUFKipoGItqWqqC6mgiwWAnUp3AbgmiMqGAAJoLiLCAAmgaAKoiwQAkAURAKlVQIaArKmIJANVUTVQAEVVZxcANVAGhnVBpYCMmKyoAQQFNQCpVRRUsXEwBYigumJKIKgiioIKuLiEEUDQKlNBUMVAZUJFUqKUEJFMBlV0B0GVRkURBYVFAAoJQKoCUlBdAtBUkWCCJVSqBhCiiyJoCoIDSFBBNNBURdFVBU0CAgq2iAOoFRhRE5XJuA1EqogqEUERplRFIYKoiiGgAIpQQAUIAFWpSUFRQRKmKlgqBTVURWQDUiqoADqIYywugoCYGgoQQEAEUFEWGAGkACpaoCSipQKAKAAqABUUBlGjVVmxnlG2aLiEoiq1oz9AjsoMsJoALABCrUECLABFAE0qCixKAKUAMTAQq4gKBgCqgAioAiwFVKzgAlSArRgAP/2Q==',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
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
      cellHeight={200}
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

export default MasterGrid;