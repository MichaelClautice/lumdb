import React from 'react';
import PropTypes from 'prop-types';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'

const Movie = ({ movie }) => (
    <div>
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </div>
    );

// const Movie = ({ movie }) => (
//     <div>
//             <h3>{movie.title}</h3>
//     </div>
//     );

export default Movie;
// test comment2

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};