/* eslint react/no-did-mount-set-state: 0 */

// •••••••• Imports ••••••••
import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

// •••••••• Class Component Definition ••••••••
class MoviesList extends Component {

// •••••••• Default State ••••••••
  state = {
    movies: [],
  }
  
// •••••••• Lifecycle Method ••••••••
  async componentDidMount() {

// •••••••• Try Catch Statement •••••••• 
    try {

// •••••••• API Call Results ••••••••  
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=390a0dae875dea79ef1ba7b008eb0313&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');

// •••••••• Format API Results •••••••• 
      const movies = await result.json();

// •••••••• setState( ) Results ••••••••
      this.setState({
        movies: movies.results,
      });

// •••••••• console.log error •••••••• 
    } catch (error) {
      console.log(error);
    }
  }

// •••••••• Render •••••••• 
  render() {
    return (
      <MovieGrid>
            {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

// •••••••• Exports •••••••• 
export default MoviesList;

// •••••••• Styled-Component Definition •••••••• 
const MovieGrid = styled.div` 
display: grid;
padding: 1rem;
grid-template-columns: repeat(6
  , 1fr);
grid-row-gap: 1rem;
`;

