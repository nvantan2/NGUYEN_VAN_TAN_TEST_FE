import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WrapperFormAuth from '../components/Auth/WrapperForm';

import HomePage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage';
import NotFoundPage from '../containers/NotFoundPage';
import RegisterPage from '../containers/RegisterPage';
import PrivateRoute from './PrivateRoute';

const Routers: React.FC = () => {
  return (
    <Router>
      <Switch>
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
        <PrivateRoute path="/" component={HomePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routers;
