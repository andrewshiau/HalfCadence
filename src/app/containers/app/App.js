import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

// style sheets
import '../../theme/milligram/milligram.styl';
import './app.styl';

// components
import Header from '../../components/header/Header';
import Home from '../../components/home/Home';
import Create from '../../components/create/Create';
import Letters from '../../components/letters/Letters';
import About from '../../components/about/About';
import Footer from '../../components/footer/Footer';

// radium styles
import radium, {StyleRoot} from 'radium';

// scroll
import Scroll from 'react-scroll';
const scroller = Scroll.scroller;

function debounce(fn, after) {
  let timer;
  return function () {
    if (timer !== undefined) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, after);
  };
}

class App extends Component {
  constructor() {
    super();
    this.replaceRouteBasedOnScrollPosition = this.replaceRouteBasedOnScrollPosition.bind(this);
    this.handleScroll = debounce(this.replaceRouteBasedOnScrollPosition, 150);
  }

  replaceRouteBasedOnScrollPosition() {
    // current Scroll Top
    const scrollTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    // number of screens past the current scroll Top
    const work = this.workNode.getBoundingClientRect().top / window.innerHeight;
    const about = this.aboutNode.getBoundingClientRect().top / window.innerHeight;

    // within 1/8 screen of top... a bit of a hack to prevent route from going immediately
    // to /work on mobile
    const shouldForceHome = scrollTop < window.innerHeight / 8;
    if (shouldForceHome) {
      if (location.pathname !== "/") {
        window.history.replaceState({}, "home", "/");
      }
    // about is less than half a screen past the current scroll Top
    } else if (about < 0.5) {
      if (location.pathname !== "/about") {
        window.history.replaceState({}, "about", "/about");
      }
    // work is less than half a screen past the current scroll Top
    } else if (work < 0.5) {
      if (location.pathname !== "/work") {
        window.history.replaceState({}, "work", "/work");
      }
    // we are home
    } else if (location.pathname !== "/") {
      window.history.replaceState({}, "home", "/");
    }
  }

  componentDidMount() {
    // scroll to current position
    scroller.scrollTo(this.props.routes[this.props.routes.length - 1].position);

    // listen to scroll
    window.addEventListener('scroll', this.handleScroll);

    // find dom elements for detecting their scroll position
    this.homeNode = ReactDOM.findDOMNode(this.home);
    this.workNode = ReactDOM.findDOMNode(this.work);
    this.aboutNode = ReactDOM.findDOMNode(this.about);
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
          <Letters/>
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
