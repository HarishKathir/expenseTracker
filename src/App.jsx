import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {LoginPage , SignupPage , HomePage} from './pages/indexPages'
import './App.css'

function App() {

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const token = localStorage.getItem('token'); // Get existing token from localStorage
        const response = await axios.post('http://localhost:5002/api/auth/refresh-token', {}, {
          headers: { "Authorization": `Bearer ${token}` }
        });

        localStorage.setItem('token', response.data.token); // Update token in localStorage
        console.log('Token refreshed successfully');
      } catch (error) {
        console.error('Error refreshing token:', error);
      }
    };

    const intervalId = setInterval(refreshToken, 55 * 60 * 1000); // Refresh token every 55 minutes

    return () => clearInterval(intervalId); // Cleanup function to clear interval
  }, []);
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signUp' element={<SignupPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
