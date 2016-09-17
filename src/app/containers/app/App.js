import React, {Component, PropTypes} from 'react';

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
  // when mounting scroll immediately to the position
  componentDidMount() {
    scroller.scrollTo(this.props.routes[this.props.routes.length - 1].position);
  }

  // when the route changes, scroll smoothly
  componentWillReceiveProps(nextProps) {
    scroller.scrollTo(nextProps.routes[nextProps.routes.length - 1].position,
      {
        duration: 500,
        smooth: true
      }
    );
  }

  render() {
    return (
      <StyleRoot>
        <div className="app">
          <Header/>
          <Home/>
          <Create/>
          <hr/><About/>
          <hr/><Footer/>
        </div>
      </StyleRoot>

    );
  }
}

App.propTypes = {
  routes: PropTypes.array
};

export default radium(App);
