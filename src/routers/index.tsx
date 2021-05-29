import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WrapperFormAuth from '../components/Auth/WrapperForm';

import HomePage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage';
import NotFoundPage from '../containers/NotFoundPage';
import RegisterPage from '../containers/RegisterPage';

const Routers: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/login"
          render={() => (
            <WrapperFormAuth>
              <LoginPage />
            </WrapperFormAuth>
          )}
        />
        <Route
          path="/register"
          render={() => (
            <WrapperFormAuth>
              <RegisterPage />
            </WrapperFormAuth>
          )}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routers;
