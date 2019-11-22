import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = () => {
  return (
    <div>
      {
        localStorage.getItem('token') ? (
          <Route
            path={this.props.path}
          />
        ) : (
          <Redirect/>
        )
      }
    </div>
  )
}

export default PrivateRoute;
