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

class App extends Component {
  bindRef(c) {
    this.title = c;
  }

  componentDidMount() {
    console.log(JSON.stringify(this.props.route.position, null, 2));
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

App.propTypes = {
  route: PropTypes.object
};

export default radium(App);
