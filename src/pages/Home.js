// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Create a CSS file for styling if needed

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Homepage!</h1>
      <p>This is a simple sample homepage.</p>
      <Link to="/create-account" className="nav-link">Create an Account</Link>
      <Link to="/" className="nav-link">Login</Link>
    </div>
  );
};

export default Home;