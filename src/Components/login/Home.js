import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored tokens or user data
    // ...
    localStorage.removeItem('token');
    // Navigate to the login page
    
    navigate('/');
  };
  return (


    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the home page.</p>

      <button onClick={handleLogout}>Logout</button>

    </div>
  );
};

export default Home;
