import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/app/App';
import configureStore from './app/store/configureStore';
// import {Router, Redirect, Route, IndexRoute, browserHistory} from 'react-router';
import {Router, Redirect, Route, browserHistory} from 'react-router';

const store = configureStore();

/*
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={App} position={"home"}/>
        <Route path="work" component={App} position={"work"}/>
        <Route path="about" component={App} position={"about"}/>
        <Route path=":wtf" component={App} position={"wtf"}/>
      </Route>
      <Route path="*" component={App} position={"home"}/>
    </Router>
  </Provider>,
  document.getElementById('cad')
);
*/

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} position={"home"}/>
      <Redirect from="*" to="/"/>
    </Router>
  </Provider>,
  document.getElementById('cad')
);
