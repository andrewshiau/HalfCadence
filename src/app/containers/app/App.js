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

const Link = Scroll.Link;
const Events = Scroll.Events;
const scroller = Scroll.scroller;
const makeElement = Scroll.Helpers.Element;

// make create into a scroll Element
const ScrollCreate = makeElement(Create);

class App extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
/*
    scroller.scrollTo('create', {
      duration: 500,
      offset: -50, // hack to give me 2 rem
      smooth: true
    });*/
  }

  render() {
    return (
      <StyleRoot>
        <div className="app">
          <li><Link activeClass="active" className="create" to="create" smooth offset={-20} duration={500} >Test 1</Link></li>
          <Header/>
          <Home name="home"/>
          <ScrollCreate name="create" className="element"/>
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
