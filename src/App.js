import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import LoginComponent from './Dahboard/login';
import RegisterComponent from './Dahboard/register';
import AdminLoginComponent from './Admin/login';
import DashboradComponent from './Dahboard/index';
import PrivateRoute from './Route/PrivateRoute';
import {ProvideAuth} from './Util/index';
function App() {
  return (
    <div className="App">
      <ProvideAuth>
      <Router>
        <div>
          <Switch>
            <Route path="/register">
              <RegisterComponent />
            </Route>
            <Route path="/admin">
              <AdminLoginComponent />
            </Route>
            <Route path="/login">
              <LoginComponent />
            </Route>
             <PrivateRoute path="/">
              <DashboradComponent />
           </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>  
    </div>
  );
}

export default App;
