import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const Watchlist = () => {
  const { movies } = useContext(MovieContext);

  const watchlist = movies.filter((movie) => movie.watchlist);

  return (
    <div>
      <h2>Watchlist</h2>
      <ul>
        {watchlist.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.year}) - {movie.genre} - Rating: {movie.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
