import React from 'react';
import { Link } from 'react-router-dom';

import useFetchMovies from '../useFetchMovies';

const Autocomplete = ({ searchKeyword }) => {

  const { movies } = useFetchMovies(searchKeyword, 1);

  if(movies) {
    return (
      <div>
        {movies.slice(0, 5).map((movie, index) => {
          return (
            <div key={index}>
              <Link to={`/movies/${movie.imdbID}`} style={{ textDecoration: 'none' }}>{movie.Title}</Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Autocomplete
