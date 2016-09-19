import React, {Component} from 'react';
import radium from 'radium';
import {widerThan, devices} from '../../theme/media';
import {slantTitle, paddedComponent} from '../../theme/styles';
import reveal, {configurations} from '../scrollReveal/reveal';
import anchor from '../scrollReveal/anchor';
import groupButton from './assets/groupButton.png';

const styles = {
  createPhoto: {
    backgroundColor: '#efeff4',
    backgroundImage: `url(${groupButton})`,
    backgroundSize: `50%`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    marginBottom: '4rem',
    [widerThan(500)]: {
      backgroundSize: `auto`
    }
  }
};

const NoRadiumPhoto = () => (
  <div className="column column-photo">
    <div className="image-container fat-image-container" style={styles.createPhoto}>
    </div>
  </div>
);
const Photo = radium(NoRadiumPhoto);

const TrailerLink = () => (
  <a
    target="_blank"
    href="https://vimeo.com/166755544"
    title="Create Trailer"
    style={slantTitle}
    >
    Trailer
  </a>
);

const GithubLink = () => (
  <a
    target="_blank"
    href="https://github.com/andrewshiau/create"
    title="Create on Github"
    style={slantTitle}
    >
    Github
  </a>
);

const Description = () => (
  <span>
    <p>Create is a brainstorming application using virtual notecards.</p>
    <p>Its simple, reactive interface helps teams collaborate during the vital first hours of a project.</p>
    <p>Create is built on the Meteor stack using Javascript / jQuery, Sass, Node.js and MongoDB.</p>
  </span>
);

// make a component that we apply scroll reveal to
class Create extends Component {
  render() {
    return (
      <section className="container" style={paddedComponent}>
        <div className="row"> <Photo/> </div>
        <div className="row">
          <div className="column column-25">
            <h6 style={slantTitle}>Create</h6>
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
    Create,
    configurations.fastUp),
  "work");
