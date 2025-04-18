import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const AllMovies = () => {
  const { movies, deleteMovie } = useContext(MovieContext);

  return (
    <div>
      <h2>All Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.year}) - {movie.genre} - Rating: {movie.rating}
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllMovies;
