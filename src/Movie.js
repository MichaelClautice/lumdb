// •••••••• Imports •••••••• 
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// •••••••• Img Vars •••••••• 
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

// •••••••• Function Component Definition •••••••• 
const Movie = ({ movie }) => (
    <Link to={`/${movie.id}`}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Link>
);

// •••••••• Exports ••••••••
export default Movie;

// •••••••• Data Validation •••••••• 
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
// •••••••• Styled-Component Definition ••••••••
export const Poster = styled.img`
box-shadow: 0 0 35px black;
  `;
