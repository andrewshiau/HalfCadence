import React, {Component} from 'react';
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

class App extends Component {
  bindRef(c) {
    this.title = c;
  }

  componentDidMount() {
    console.log('entire page stuff');
    const home = ReactDOM.findDOMNode(this);
    console.log(home);
    console.log(`${home.scrollTop} / ${home.scrollHeight}`);
    console.log('home stuff');
    console.log(ReactDOM.findDOMNode(this.title));
    console.log(`${ReactDOM.findDOMNode(this.title).scrollTop} / ${ReactDOM.findDOMNode(this.title).scrollHeight}`);
  }

  render() {
    const that = this;
    return (
      <StyleRoot>
        <div className="app">
          <Header/>
          <Home
            ref={
              function (c) {
                that.bindRef(c);
              }
            }
            />
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
