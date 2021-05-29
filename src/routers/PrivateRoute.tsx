import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IPrivateRoute {
  component: React.FC;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({ path, exact, component }) => {
  return localStorage.getItem('access_token') ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
