import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [auth, setAuth] = useState({ isAuthenticated: false, user: null });

  // Fetch movies from server
  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error('Failed to fetch movies:', err));
  }, []);

  const addMovie = (movie) => {
    setMovies((prev) => [...prev, movie]);
  };

  const updateMovie = (updatedMovie) => {
    setMovies((prev) =>
      prev.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie))
    );
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const login = (user) => {
    setAuth({ isAuthenticated: true, user });
  };

  const logout = () => {
    setAuth({ isAuthenticated: false, user: null });
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        addMovie,
        updateMovie,
        deleteMovie,
        auth,
        login,
        logout,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
