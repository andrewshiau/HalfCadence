import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import radium from 'radium';

const styles = {
  title: {
    fontSize: '10vw',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    pointerEvents: 'none'
  },
  fadeIn: {
    transition: 'opacity 10000ms'
  }
};

class Home extends Component {
  componentDidMount() {
    // Get the components DOM node
    const elem = ReactDOM.findDOMNode(this);
    console.log(elem);
    // Set the opacity of the element to 0
    elem.style.opacity = 0;

    window.requestAnimationFrame(() => {
      // set the opacity to 1
      elem.style.opacity = 1;
    });
  }
  render() {
    return (
      <section className="page-large hc-center visible-large" style={styles.fadeIn} id="title">
        <h1 className="title" style={styles.title}>half cadence</h1>
      </section>
    );
  }
}
export default radium(Home);
