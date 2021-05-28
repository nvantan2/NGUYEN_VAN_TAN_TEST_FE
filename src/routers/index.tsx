import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../containers/HomePage';
import NotFoundPage from '../containers/NotFoundPage';

const Routers: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routers;
