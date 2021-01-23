/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { AppState } from '../store/app.store';

interface PrivateRouteProps {
  component: React.FC<any>;
  [x: string]: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const auth = useSelector((state: AppState) => {
    return state.auth;
  });

  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.authenticated) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
