import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const RatedFiveStars = () => {
  const { movies } = useContext(MovieContext);

  const fiveStarMovies = movies.filter((movie) => movie.rating === 5);

  return (
    <div>
      <h2>Rated 5 Stars</h2>
      <ul>
        {fiveStarMovies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.year}) - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatedFiveStars;
