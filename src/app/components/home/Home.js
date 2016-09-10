import React, {Component} from 'react';
import radium from 'radium';

import scrollReveal from '../scrollReveal/scrollReveal';

const styles = {
  title: {
    fontSize: '10vw',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    pointerEvents: 'none'
  }
};

class Home extends Component {

  bindRef(c) {
    this.title = c;
  }

  componentDidMount() {
    const config = {
      origin: 'bottom',
      duration: 2000,
      delay: 150,
      distance: '30px',
      scale: 1,
      easing: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
    };
    scrollReveal.reveal(this.title, config);
  }

  render() {
    const that = this;
    return (
      <section
        className="page-large hc-center visible-large"
        ref={
          function (c) {
            that.bindRef(c);
          }
        }
        id="home"
        >
        <h1 className="title" style={styles.title}>half cadence</h1>
      </section>
    );
  }
}

export default radium(Home);
