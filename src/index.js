import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/app/App';
import configureStore from './app/store/configureStore';
import {Router, Route, Redirect, browserHistory} from 'react-router';

const store = configureStore();

// position property tells which component to scroll to
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" position={"cad"}/>
        <Route path="work" position={"work"}/>
        <Route path="about" position={"about"}/>
      </Route>
      <Redirect from="*" to="/"/>
    </Router>
  </Provider>,
  document.getElementById('cad')
);
