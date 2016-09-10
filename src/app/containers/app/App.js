import React, {Component} from 'react';

// style sheets
import '../../theme/milligram/milligram.styl';
import './app.styl';

// components
import Header from '../../components/header/Header';
import Home from '../../components/home/Home';
import Create from '../../components/create/Create';
import About from '../../components/about/About';
import Footer from '../../components/footer/Footer';

// https://github.com/FormidableLabs/radium/tree/master/docs/api#styleroot-component
import {StyleRoot} from 'radium';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="app">
          <Header/>
          <hr className="visible-small"></hr>
          <Home/>
          <hr></hr>
          <Create/>
          <hr></hr>
          <About/>
          <hr></hr>
          <Footer/>
        </div>
      </StyleRoot>

    );
  }
}

export default App;
