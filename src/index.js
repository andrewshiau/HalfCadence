import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/app/App';
import configureStore from './app/store/configureStore';
import {Router, Route, Redirect, browserHistory} from 'react-router';

// scroll
import Scroll from 'react-scroll';
const scroller = Scroll.scroller;

const store = configureStore();

function logEnter(nextState, replace, callback) {
  console.log(`on enter\n` +
    `--------\n` +
    `next: ${JSON.stringify(nextState.routes[nextState.routes.length - 1], null)}\n`
  );

 /*
  scroller.scrollTo('create', {
    duration: 500,
    smooth: true
  });
*/
  callback();
}

function logChange(prevState, nextState, replace, callback) {
  console.log(`on change\n` +
    `--------\n` +
    `previous: ${JSON.stringify(prevState.routes[prevState.routes.length - 1], null)}\n` +
    `next: ${JSON.stringify(nextState.routes[nextState.routes.length - 1], null)}\n`
  );
  callback();
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" position={"home"} onChange={logChange} onEnter={logEnter}/>
        <Route path="work" onChange={logChange} onEnter={logEnter} position={"work"}/>
        <Route path="about" onChange={logChange} onEnter={logEnter} position={"about"}/>
      </Route>
      <Redirect from="*" to="/"/>
    </Router>
  </Provider>,
  document.getElementById('cad')
);
