/* eslint react/no-did-mount-set-state: 0 */
// GitHub Push Test Jan 31

// •••••••• Imports ••••••••
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

// •••••••• Function Component Definition ••••••••
const App = () => (
  <Router>
  <div className="App">
    <header className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" /> 
      </Link>
      <h3>TEST</h3>
    </header>
    <Switch>
      <Route exact path="/" component={MoviesList} />
      <Route path="/:id" component={MovieDetail} />
    </Switch>
  </div>
</Router>
);



// •••••••• Exports •••••••• 
export default App;






