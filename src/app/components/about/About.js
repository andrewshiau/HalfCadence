import React, {Component} from 'react';
import radium from 'radium';
import {widerThan, devices} from '../../theme/media';
import {projectTitle, projectLink, lastPaddedComponent} from '../../theme/styles';
import reveal, {configurations} from '../scrollReveal/reveal';

import image from './assets/rightGrey.jpg';

const styles = {
  aboutPhoto: {
    backgroundColor: 'black',
    backgroundImage: `url(${image})`,
    backgroundPosition: '0% 17%',
    backgroundSize: 'cover',
    marginBottom: '4rem',
    [widerThan(devices.mobile)]: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      marginBottom: '0'
    }
  },
  flakyText: {
    [widerThan(devices.mobile)]: {
      textAlign: 'right'
    }
  },
  reverseWhenLarge: {
    [widerThan(devices.mobile)]: {
      flexDirection: 'row-reverse',
      alignItems: 'flex-end'
    }
  }
};

const Description = () => (
  <span>
    <p>Andrew Shiau is a web designer, game developer, and musician from Houston, Texas.</p>
    <p>At the moment, he is studying Computer Science and Cello Performance at Johns Hopkins University and the Peabody Institute.</p>
  </span>
);

const GithubLink = () => (
  <a
    target="_blank"
    href="https://github.com/andrewshiau"
    title="Andrew's Github"
    style={projectLink}
    >
    Github
  </a>
);

const BlogLink = () => (
  <a
    target="_blank"
    href="https://andrewshiau.wordpress.com/"
    title="Andrew's Blog"
    style={projectLink}
    >
    Blog
  </a>
);

const ResumeLink = () => (
  <a
    target="_blank"
    href="https://docs.google.com/document/d/1IgF7YTc4p7QYQe31GvFUVp8N0b_mxgPqWyA0hDjPu4c"
    title="Andrew's Resume"
    style={projectLink}
    >
    Resume
  </a>
);

const ContactLink = () => (
  <a
    href="mailto:andrew@halfcadence.io"
    title="Email Me"
    style={projectLink}
    >
    Contact
  </a>
);

class About extends Component {
  render() {
    return (
      <section className="container hc-bottom" id="about" style={lastPaddedComponent}>
        <div className="row" style={styles.reverseWhenLarge}>
          <div className="column">
            <div className="image-container thin-image-container" style={styles.aboutPhoto}>
            </div>
          </div>
          <div className="column" style={styles.flakyText}>
            <h5 style={projectTitle}>about</h5>
            <Description/>
            <ul>
              <li><GithubLink/></li>
              <li><BlogLink/></li>
              <li><ResumeLink/></li>
              <li><ContactLink/></li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default reveal(radium(About), configurations.slowLeft);
