import React, {Component} from 'react';
import radium from 'radium';

import reveal, {configurations} from '../scrollReveal/reveal';
import anchor from '../scrollReveal/anchor';

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
      <section className="page-large hc-center visible-large">
        <h1 className="title" style={styles.title}>half cadence</h1>
      </section>
    );
  }
}

// apply scroll reveal,
// then anchor so that scroll events know where to scroll to
export default anchor(
  reveal(
    radium(Home),
    configurations.slowUp),
  "home");
