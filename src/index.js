import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/app/App';
import configureStore from './app/store/configureStore';
import {Router, Route, Redirect, IndexRedirect, browserHistory} from 'react-router';

const store = configureStore();

function trolld(nextState, replace, callback) {
  console.log(`on enter\n` +
    `--------\n` +
    `next: ${JSON.stringify(nextState.routes[nextState.routes.length - 1], null, 2)}\n`
  );
  callback();
}

function troll(prevState, nextState, replace, callback) {
  console.log(`on change\n` +
    `--------\n` +
    `previous: ${JSON.stringify(prevState.routes[prevState.routes.length - 1], null, 2)}\n` +
    `next: ${JSON.stringify(nextState.routes[nextState.routes.length - 1], null, 2)}\n`
  );
  callback();
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" position={"home"} onChange={troll} onEnter={trolld}/>
        <Route path="work" onChange={troll} onEnter={trolld}>
          <IndexRedirect to="create"/>
          <Route path="create" onChange={troll} onEnter={trolld} position={"create"}/>
          <Redirect from="*" to="/work/create"/>
        </Route>
        <Route path="about" onChange={troll} onEnter={trolld} position={"about"}/>
        <Redirect from="about/*" to="/about"/>
      </Route>
      <Redirect from="*" to="/"/>
    </Router>
  </Provider>,
  document.getElementById('cad')
);
