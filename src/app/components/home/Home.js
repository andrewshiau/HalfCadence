import React from 'react';

const styles = {
  title: {
    fontSize: '10vw',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    marginTop: '2rem', // top margin to match bottom margin given by milligram
    pointerEvents: `none`
  }
};

const Home = () => (
  <section className="page-large hc-center" id="title">
    <h1 className="title" style={styles.title}>half cadence</h1>
  </section>
);

export default Home;
