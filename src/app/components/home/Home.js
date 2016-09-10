import React from 'react';
import radium from 'radium';

const styles = {
  title: {
    fontSize: '10vw',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    pointerEvents: `none`
  }
};

const Home = () => (
  <section className="page-large hc-center visible-large" id="title">
    <h1 className="title" style={styles.title}>half cadence</h1>
  </section>
);

export default radium(Home);
