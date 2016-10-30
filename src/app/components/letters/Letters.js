import React, {Component} from 'react';
import radium from 'radium';
import {projectTitle, projectLink, paddedComponent} from '../../theme/styles';
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

const Trailer = () => (
  <a target="_blank" href="https://vimeo.com/158765955" title="10 Letters Trailer" style={projectLink}>Trailer</a>);

const Shoe = () => (<a target="_blank" href="https://github.com/brianshiau" title="Brian on Github">Brian Shiau</a>);

const Description = () => (
  <span>
    <p>10 Letters is an iOS game about collecting.</p>
    <p>Inspired by the thrill of snatching an awesome username in the hottest new MMO, we distilled it to its purest form.</p>
    <p>10 Letters is built in native xCode with Objective C, in collaboration with <Shoe/>.
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
            <h5 style={projectTitle}>10 Letters</h5>
            <ul>
              <li><Trailer/></li>
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
    radium(Letters),
    configurations.fastUp),
  "letters");
