import React, {Component} from 'react';

import Header from '../../components/header/Header';
import Home from '../../components/home/Home';
import Create from '../../components/create/Create';
import About from '../../components/about/About';
import Footer from '../../components/footer/Footer';

import './app.styl';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
