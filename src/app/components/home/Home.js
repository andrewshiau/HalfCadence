import React, {Component} from 'react';
import radium from 'radium';

import reveal, {configurations} from '../scrollReveal/reveal';

const styles = {
  title: {
    fontSize: '10vw',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    pointerEvents: 'none'
  }
};

class Home extends Component {
  render() {
    return (
      <section className="page-large hc-center visible-large" id="home">
        <h1 className="title" style={styles.title}>half cadence</h1>
      </section>
    );
  }
}

export default reveal(radium(Home), configurations.slowUp);
