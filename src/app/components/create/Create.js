import React from 'react';
import './create.styl';

const Create = () => (
  <section className="container page-large hc-center" id="create">
    <div className="row">
      <div className="column column-photo">
        <div className="image-container fat-image-container create-photo">
        </div>
      </div>
    </div>
    <div className="row">
      <div className="column column-33">
        <h6>Create</h6>
        <ul>
          <li><a target="_blank" href="https://vimeo.com/166755544" title="Create Trailer">Trailer</a></li>
          <li><a target="_blank" href="https://github.com/andrewshiau/create" title="Create on Github">Github</a></li>
        </ul>
      </div>
      <div className="column">
        <p>Create is a brainstorming application using virtual notecards.</p>
        <p>Its simple, reactive interface helps teams collaborate during the vital first hours of a project.	</p>
        <p>Create is built on the Meteor stack using Javascript / jQuery, Sass, Node.js and MongoDB.</p>
      </div>
    </div>
  </section>
);

export default Create;
