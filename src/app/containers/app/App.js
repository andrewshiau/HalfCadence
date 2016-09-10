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

// radium styles
import radium, {StyleRoot} from 'radium';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="app">
          <Header/>
          <Home/>
          <Create/>
          <hr/>
          <About/>
          <hr/>
          <Footer/>
        </div>
      </StyleRoot>

    );
  }
}

export default radium(App);
