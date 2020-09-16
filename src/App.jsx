import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage'
import ActiveTasks from './components/ActiveTasks'
import AuthenticateRoute from './util/AuthenticatedRoute'
import history from './util/history';
import { isAuthenticated } from './util/Authentication.js'
function App() {

  return (

    <div className="App">
      <div>
        { isAuthenticated() ? "Authenticated" : "Please Log In"}
      </div>
      <Router history={history}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/main">Active Tasks</Link></li>
        </ul>
        <Switch>
          <Route path="/" />
          <Route path="/login" exact component={LoginPage} />
          <AuthenticateRoute path="/main" exact componet={ActiveTasks} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
