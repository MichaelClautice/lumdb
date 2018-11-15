/* eslint react/no-did-mount-set-state: 0 */
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
// EXIT THE IMPORT SECTION


// ENTER THE COMPONENT CREATION SECTION
const App = () => (
  <Router>
  <div className="App">
    <header className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
    </header>
    <Switch>
      <Route exact path="/" component={MoviesList} />
      <Route path="/:id" component={RouterTest1} />
      <Route path="/RouterTest2" component={RouterTest2} />
    </Switch>
  </div>
</Router>
);
// EXIT THE COMPONENT CREATION SECTION


// ENTER THE EXPORT SECTION 
export default App;
// EXIT THE EXPORT SECTION


// ENTER THE ROUTER TEST SECTION
const RouterTest1 = ({match}) => (
  <h1>{match.params.id}</h1>
);
const RouterTest2 = () => (
  <h1>THIS IS ROUTER TEST 2</h1>
);
// EXIT THE ROUTER TEST SECTION
