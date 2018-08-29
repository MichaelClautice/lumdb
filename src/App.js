/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from "./Movie.js";


class App extends Component {

  state = {
    movies: []
  }

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} /> )}
      </div>
    );
  }
}
export default App;