/* eslint react/no-did-mount-set-state: 0 */
// GitHub Push Test Jan 10
// ENTER THE IMPORT SECTION
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
// EXIT THE IMPORT SECTION


// ENTER THE COMPONENT CREATION SECTION
const App = () => (
  <Router>
  <div className="App">
    <header className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <h4>click on movie poster for details</h4> 
      </Link>
    </header>
    <Switch>
      <Route exact path="/" component={MoviesList} />
      <Route path="/:id" component={MovieDetail} />
    </Switch>
  </div>
</Router>
);
// EXIT THE COMPONENT CREATION SECTION


// ENTER THE EXPORT SECTION 
export default App;
// EXIT THE EXPORT SECTION





