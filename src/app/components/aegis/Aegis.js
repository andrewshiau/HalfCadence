import React, {Component} from 'react';
import radium from 'radium';
import {projectTitle, projectLink, paddedComponent} from '../../theme/styles';
import reveal, {configurations} from '../scrollReveal/reveal';
import anchor from '../scrollReveal/anchor';
import aegisMockup from './assets/aegisMockup.png';

const styles = {
  photo: {
    backgroundColor: '#efeff4',
    backgroundImage: `url(${aegisMockup})`,
    backgroundSize: `100%`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    marginBottom: '4rem'
  }
};

const NoRadiumPhoto = () => (
  <div className="column column-photo">
    <div className="image-container fat-image-container" style={styles.photo}>
    </div>
  </div>
);
const Photo = radium(NoRadiumPhoto);

const Trailer = () => (
  <a target="_blank" href="https://vimeo.com/160977283" title="Aegis Trailer" style={projectLink}>Trailer</a>);
const Github = () => (
  <a target="_blank" href="https://github.com/Snaboflafer/AegisGame" title="Create on Github" style={projectLink}>Github</a>);
const CS255 = () => (<a target="_blank" href="http://gaming.jhu.edu/~phf/2016/fall/cs255" title="CS 255 Class Page">CS255</a>);
const Andy = () => (<a target="_blank" href="https://github.com/jungyang" title="Andy on Github">Andy</a>);
const Nathaniel = () => (<a target="_blank" href="https://github.com/Snaboflafer" title="Nathaniel on Github">Nathaniel</a>);
const Steve = () => (<a target="_blank" href="https://github.com/sausti" title="Steve on Github">Steve</a>);

const Description = () => (
  <span>
    <p>Aegis is a side-scrolling shooter set in a dystopian future.</p>
    <p>Transform between rugged mech warrior and lightsome scape fighter to overthrow the tyrannical empire.</p>
    <p>Aegis is built in lua using the LÖVE engine, in collaboration with my <CS255/> teammates <Andy/>, <Nathaniel/>, and <Steve/>.</p>
  </span>
);

// make a component that we apply scroll reveal to
class Aegis extends Component {
  render() {
    return (
      <section className="container" style={paddedComponent}>
        <div className="row"> <Photo/> </div>
        <div className="row">
          <div className="column column-25">
            <h6 style={projectTitle}>Aegis</h6>
            <ul>
              <li><Trailer/></li>
              <li><Github/></li>
            </ul>
          </div>
          <div className="column column-75">
            <Description/>
          </div>
        </div>
      </section>
    );
  }
}

// apply scroll reveal,
// then anchor so that scroll events know where to scroll to
export default anchor(
  reveal(
    radium(Aegis),
    configurations.fastUp),
  "aegis");
