import React from 'react';
import './about.styl';

const About = () => (
  <section className="container hc-bottom" id="about">
    <div className="row">
      <div className="column">
        <div className="image-container thin-image-container about-photo">
        </div>
      </div>
      <div className="column thin-picture-text">
        <h6>half cadence</h6>
        <p>Andrew Shiau is a web designer, game developer, and musician from Houston, Texas.</p>
        <p>At the moment, he is studying Computer Science and Cello Performance at Johns Hopkins University and at the Peabody Institute.</p>
        <ul>
          <li><a target="_blank" href="https://github.com/andrewshiau" title="Andrew's Github">Github</a></li>
          <li><a target="_blank" href="https://andrewshiau.wordpress.com/" title="Andrew's Blog">Blog</a></li>
          <li><a target="_blank" href="https://google.com/" title="Andrew's Resume">Resume</a></li>
          <li><a href="mailto:andrew-s@comcast.net" title="Email Me">Contact</a></li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
