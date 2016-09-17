import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

// style sheets
import '../../theme/milligram/milligram.styl';
import './app.styl';

// components
import Header from '../../components/header/Header';
import Home from '../../components/home/Home';
import Create from '../../components/create/Create';
import About from '../../components/about/About';
import Footer from '../../components/footer/Footer';

// radium styles
import radium, {StyleRoot} from 'radium';

// scroll
import Scroll from 'react-scroll';
const scroller = Scroll.scroller;

class App extends Component {
  handleScroll(event) {
    console.log(event.srcElement.body.scrollTop);
    const header = ReactDOM.findDOMNode(this.header).getBoundingClientRect().top;
    const work = ReactDOM.findDOMNode(this.work).getBoundingClientRect().top;
    const about = ReactDOM.findDOMNode(this.about).getBoundingClientRect().top;
    console.log(`${header} / ${work} / ${about}`);
    // window.history.replaceState({}, "test", "/test");
  }

  componentDidMount() {
    console.log(this.props.routes[this.props.routes.length - 1].position);
    // scroll immediately to route at position
    scroller.scrollTo(this.props.routes[this.props.routes.length - 1].position);
    // listen to scroll to push state when necessary
    window.addEventListener('scroll', this.handleScroll);

    console.log(window.innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    // when the route changes, scroll smoothly
    const nextPosition = nextProps.routes[nextProps.routes.length - 1].position;
    scroller.scrollTo(nextPosition,
      {
        duration: 500,
        smooth: true
      }
    );
  }

  render() {
    const that = this;
    return (
      <StyleRoot>
        <div className="app">
          <Header
            ref={function (c) {
              that.header = c;
            }}
            />
          <Home
            ref={function (c) {
              that.home = c;
            }}
            />
          <Create
            ref={function (c) {
              that.work = c;
            }}
            />
          <hr/>
          <About
            ref={function (c) {
              that.about = c;
            }}
            />
          <hr/>
          <Footer/>
        </div>
      </StyleRoot>

    );
  }
}

App.propTypes = {
  routes: PropTypes.array
};

export default radium(App);
