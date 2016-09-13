import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/app/App';
import configureStore from './app/store/configureStore';
import {Router, Redirect, Route, browserHistory} from 'react-router';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" position={"home"}/>
        <Redirect from="work" to="/work/create"/>
        <Route path="work/create" position={"create"}/>
        <Redirect from="work/*" to="/work/create"/>
        <Route path="about" position={"about"}/>
        <Redirect from="about/*" to="/about"/>
      </Route>
      <Redirect from="*" to="/"/>
    </Router>
  </Provider>,
  document.getElementById('cad')
);
