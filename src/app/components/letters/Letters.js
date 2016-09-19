import React, {Component} from 'react';
import radium from 'radium';
import {slantTitle, paddedComponent} from '../../theme/styles';
import reveal, {configurations} from '../scrollReveal/reveal';
import anchor from '../scrollReveal/anchor';
import lettersMockup from './assets/lettersMockup.png';

const styles = {
  photo: {
    backgroundColor: '#efeff4',
    backgroundImage: `url(${lettersMockup})`,
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
    href="https://vimeo.com/158765955"
    title="10 Letters Trailer"
    style={slantTitle}
    >
    Trailer
  </a>
);

const Description = () => (
  <span>
    <p>10 Letters is an iOS game about collecting.</p>
    <p>Inspired by the thrill of snatching an awesome username in the hottest new MMO, we distilled it to its purest form.</p>
    <p>10 Letters is built in native xCode with Objective C and is a collaboration between myself and&nbsp;
      <a
        target="_blank"
        href="https://github.com/brianshiau"
        title="Brian on Github"
        >
        Brian Shiau
      </a>
      .
    </p>
  </span>
);

// make a component that we apply scroll reveal to
class Letters extends Component {
  render() {
    return (
      <section className="container" style={paddedComponent}>
        <div className="row"> <Photo/> </div>
        <div className="row">
          <div className="column column-25">
            <h6 style={slantTitle}>10 Letters</h6>
            <ul>
              <li><TrailerLink/></li>
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
    Letters,
    configurations.fastUp),
  "letters");
