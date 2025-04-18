import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login({ username });
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
