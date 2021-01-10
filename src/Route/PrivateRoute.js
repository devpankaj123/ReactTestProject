import React , {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
  import {useAuth} from '../Util/index';

const PrivateRoute = ({children, ...props}) => {
const auth = useAuth();
  return (
    <Route
      {...props}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
    }

export default PrivateRoute;