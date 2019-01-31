/* eslint react/no-did-mount-set-state: 0 */

// •••••••• Imports ••••••••
import React, { Component } from 'react';
import styled from 'styled-components';
import { Poster } from './Movie';

// •••••••• Img Vars ••••••••
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
 
// •••••••• Class Component Definition •••••••• 
class MovieDetail extends Component {

// •••••••• Default State ••••••••
  state = {
    movie: {},
  }

// •••••••• Lifecycle Method ••••••••
  async componentDidMount() {

// •••••••• Try Catch Statement ••••••••
    try {
      
// •••••••• API Call Results ••••••••
      const result = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`);

// •••••••• Format API Results ••••••••
      const movie = await result.json();

// •••••••• setState( ) Results ••••••••
      this.setState({
        movie,
      });
// •••••••• console.log error ••••••••
    } catch (error) {
      console.log(error);
    }
  }

// •••••••• Render ••••••••
  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}
// •••••••• Exports ••••••••
export default MovieDetail;

// •••••••• Styled-Component Definition ••••••••
const MovieWrapper = styled.div`
position: relative;
padding-top: 50vh;
background: url(${props => props.backdrop}) no-repeat;
background-size: cover;
`;

// •••••••• Styled-Component Definition ••••••••
const MovieInfo = styled.div`
  background: aqua;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  div {
    margin-left: 20px;
    background: pink;
  }
  img {
    position: relative;
    top: -5rem;
    // top: -25rem;
  }
`;