import React from 'react';
import radium from 'radium';
import {widerThan, devices} from '../../theme/media';

import newButton from './assets/newButton.png';
import groupButton from './assets/groupButton.png';
import trashButton from './assets/trashButton.png';

const styles = {
  createPhoto: {
    backgroundColor: '#efeff4',
    backgroundImage: `url(${groupButton})`,
    backgroundSize: `50%`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    [widerThan(devices.mobile)]: {
      backgroundSize: `auto`,
      backgroundImage: `url(${newButton}), url(${groupButton}), url(${trashButton})`,
      backgroundPosition: `left 2rem top 2rem, center, right 2rem bottom 2rem`
    }
  }
};

const Create = () => (
  <section className="container" id="create">
    <div className="row">
      <div className="column column-photo">
        <div className="image-container fat-image-container" style={styles.createPhoto}>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="column column-25">
        <h6>Create</h6>
        <ul>
          <li><a target="_blank" href="https://vimeo.com/166755544" title="Create Trailer">Trailer</a></li>
          <li><a target="_blank" href="https://github.com/andrewshiau/create" title="Create on Github">Github</a></li>
        </ul>
      </div>
      <div className="column column-75">
        <p>Create is a brainstorming application using virtual notecards.</p>
        <p>Its simple, reactive interface helps teams collaborate during the vital first hours of a project.	</p>
        <p>Create is built on the Meteor stack using Javascript / jQuery, Sass, Node.js and MongoDB.</p>
      </div>
    </div>
  </section>
);

export default radium(Create);
