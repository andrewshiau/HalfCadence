import React, {Component} from 'react';
import radium from 'radium';
import {slantTitle, paddedComponent} from '../../theme/styles';
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

const TrailerLink = () => (
  <a
    target="_blank"
    href="https://vimeo.com/160977283"
    title="Aegis Trailer"
    style={slantTitle}
    >
    Trailer
  </a>
);

const GithubLink = () => (
  <a
    target="_blank"
    href="https://github.com/Snaboflafer/AegisGame"
    title="Create on Github"
    style={slantTitle}
    >
    Github
  </a>
);

const Description = () => (
  <span>
    <p>Aegis is a side-scrolling shooter set in a dystopian future.</p>
    <p>Pilot a futuristic mech / spaceship hybrid to defeat the Empire and return peace to the world.</p>
    <p>Aegis is built in lua using the LÖVE engine, in collaboration with my&nbsp;
      <a
        target="_blank"
        href="http://gaming.jhu.edu/~phf/2016/fall/cs255"
        title="CS 255 Class Page"
        >
        CS255
      </a>
      &nbsp;teammates&nbsp;
      <a
        target="_blank"
        href="https://github.com/jungyang"
        title="Andy on Github"
        >
        Andy
      </a>
      ,&nbsp;
      <a
        target="_blank"
        href="https://github.com/Snaboflafer"
        title="Nathaniel on Github"
        >
        Nathaniel
      </a>
      , and&nbsp;
      <a
        target="_blank"
        href="https://github.com/sausti"
        title="Steve on Github"
        >
        Steve
      </a>
      .
    </p>
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
            <h6 style={slantTitle}>Aegis</h6>
            <ul>
              <li><TrailerLink/></li>
              <li><GithubLink/></li>
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
    Aegis,
    configurations.fastUp),
  "aegis");
