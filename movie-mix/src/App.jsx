import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MovieProvider, MovieContext } from './context/MovieContext';
import AllMovies from './pages/AllMovies';
import Watchlist from './pages/Watchlist';
import RatedFiveStars from './pages/RatedFiveStars';
import Login from './pages/Login';

const ProtectedRoute = ({ children }) => {
  const { auth } = React.useContext(MovieContext);
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AllMovies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/watchlist"
            element={
              <ProtectedRoute>
                <Watchlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rated-five-stars"
            element={
              <ProtectedRoute>
                <RatedFiveStars />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
