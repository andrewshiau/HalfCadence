import React from 'react';
import radium from 'radium';
import {narrowerThan, devices} from '../../theme/media';

const styles = {
  page: {
    [narrowerThan(devices.mobile)]: {
      display: 'none'
    }
  },
  title: {
    fontSize: '10vw',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    pointerEvents: `none`
  }
};

const Home = () => (
  <section className="page-large hc-center" style={styles.page} id="title">
    <h1 className="title" style={styles.title}>half cadence</h1>
  </section>
);

export default radium(Home);
