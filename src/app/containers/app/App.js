import React, {Component, PropTypes} from 'react';

// style sheets
import '../../theme/milligram/milligram.styl';
import './app.styl';

// components
import Header from '../../components/header/Header';
import Home from '../../components/home/Home';
import NeedScrollCreate from '../../components/create/Create';
import About from '../../components/about/About';
import Footer from '../../components/footer/Footer';

// radium styles
import radium, {StyleRoot} from 'radium';

// scroll
import Scroll from 'react-scroll';

const Link = Scroll.Link;
const Events = Scroll.Events;
const scroller = Scroll.scroller;
const makeElement = Scroll.Helpers.Element;

// make create into a scroll Element
const Create = makeElement(NeedScrollCreate);

class App extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    const positionAtPath = this.props.routes[this.props.routes.length - 1].position;
    console.log(positionAtPath);

    scroller.scrollTo(positionAtPath, {
      duration: 0,
      smooth: true
    });
  }

  render() {
    return (
      <StyleRoot>
        <div className="app">
          {/* <li><Link activeClass="active" className="create" to="create" smooth duration={500} >Test 1</Link></li> */}
          <Header/>
          <Home name="home"/>
          <Create name="work" className="element"/>
          <hr/>
          <About/>
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
