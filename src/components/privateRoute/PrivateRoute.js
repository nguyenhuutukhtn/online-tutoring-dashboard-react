import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={props =>
      localStorage.getItem('userInfo') ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);
