const API_URL = 'http://localhost:3001/movies';

export const fetchMovies = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
};

export const addMovie = async (movie) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie),
  });
  if (!response.ok) {
    throw new Error('Failed to add movie');
  }
  return response.json();
};

export const updateMovie = async (movie) => {
  const response = await fetch(`${API_URL}/${movie.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie),
  });
  if (!response.ok) {
    throw new Error('Failed to update movie');
  }
  return response.json();
};

export const deleteMovie = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete movie');
  }
  return response.json();
};
