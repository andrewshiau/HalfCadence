import React, {Component} from 'react';
import radium from 'radium';
import {widerThan, devices} from '../../theme/media';
import {slantTitle} from '../../theme/styles';
import scrollReveal from '../scrollReveal/scrollReveal';

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

class About extends Component {
  bindRef(c) {
    this.c = c;
  }

  componentDidMount() {
    const config = {
      origin: 'right',
      duration: 1000,
      delay: 150,
      distance: '15px',
      scale: 1,
      easing: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
    };
    scrollReveal.reveal(this.c, config);
  }

  render() {
    const that = this;
    return (
      <section
        className="container hc-bottom"
        id="about"
        ref={
          function (c) {
            that.bindRef(c);
          }
        }
        >
        <div className="row" style={styles.reverseWhenLarge}>
          <div className="column">
            <div className="image-container thin-image-container" style={styles.aboutPhoto}>
            </div>
          </div>
          <div className="column" style={styles.flakyText}>
            <h6 style={slantTitle}>about</h6>
            <p>Andrew Shiau is a web designer, game developer, and musician from Houston, Texas.</p>
            <p>At the moment, he is studying Computer Science and Cello Performance at Johns Hopkins University and the Peabody Institute.</p>
            <ul>
              <li><a
                target="_blank"
                href="https://github.com/andrewshiau"
                title="Andrew's Github"
                style={slantTitle}
                >
                Github
              </a></li>
              <li><a
                target="_blank"
                href="https://andrewshiau.wordpress.com/"
                title="Andrew's Blog"
                style={slantTitle}
                >
                Blog
              </a></li>
              <li><a
                target="_blank"
                href="https://google.com/"
                title="Andrew's Resume"
                style={slantTitle}
                >
                Resume
              </a></li>
              <li><a
                href="mailto:andrew-s@comcast.net"
                title="Email Me"
                style={slantTitle}
                >
                Contact
              </a></li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default radium(About);
