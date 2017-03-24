import React from 'react';
import { Router, browserHistory, Route, IndexRoute, IndexRedirect } from 'react-router';
import NotFound from './components/NotFound';
import Main from './components/Main';
import SingleView from './components/Views/SingleView';

export default (
  <Router>

    <Route path="/" component={Main}>
      {/* Default route*/}
      <IndexRoute component={SingleView} />
    </Route>

    <Route path="*" component={NotFound} />

  </Router>
);
