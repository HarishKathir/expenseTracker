import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Clear local storage (optional, depending on how you manage tokens)
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      // Navigate to the login page
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="container-fluid">

        <div className="col-lg-6 login">
          <h1>Welcome to Home Page</h1>
          <p>This is your home page content.</p>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
    </div>
  );
};

export default HomePage;
