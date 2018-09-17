/* eslint react/no-did-mount-set-state: 0 */
// importing what is needed...
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Movie from "./Movie.js";

// test comment Mon Sept 17, 2018 Hello There!
// this class will instantiate the App parent component...
class App extends Component {
// assigning the state of this component
  state = {
    movies: []
  }
// connecting w the movie db
  async componentDidMount() {
    try {
      const result = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=390a0dae875dea79ef1ba7b008eb0313&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");
      const movies = await result.json();
      console.log(movies)
      this.setState({
        movies: movies.results,
      })
    } catch(error) {
      console.log(error);
    }
}

  render() {

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} /> )}
        </div>
      </Router>
    );
  }
}
export default App;