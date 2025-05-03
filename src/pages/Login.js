import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import logoImage from '../assets/logo.png'; // Make sure you have this image in your assets folder
import sloganImage from '../assets/slogan.png'; // Make sure you have this image in your assets folder

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    
    // Here you would typically call your authentication API
    // This is just a placeholder - replace with your actual auth logic
    console.log('Logging in with:', email, password);
    
    // For demo purposes, navigate to homepage after "login"
    navigate('/homepage');
  };

  return (
    <div className="login-container">
      <div className="background-logo">
        {/* Add your background logo image here */}
      </div>
      
      <div className="login-box">
        <div className="login-left">
          <h2>Sign In</h2>
          {error && <p className="error">{error}</p>}
          
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <div className="forgot">
              <Link to="/forgot-password" className="auth-link forgot-password">
                Forgot Password?
              </Link>
            </div>
            
            <button type="submit" className="sign-in">
              Sign In
            </button>
          </form>
          
          <div className="create-account">
            Don't have an account?{' '}
            <Link to="/create-account" className="auth-link create-account-btn">
              Create Account
            </Link>
          </div>
        </div>
        
        <div className="login-right">
          {/* Logo and slogan images */}
          <img 
            src={logoImage} 
            alt="Anime-You Logo" 
            className="logo-image" 
          />
          <img 
            src={sloganImage} 
            alt="Discover Your Anime" 
            className="slogan-image" 
          />
        </div>
      </div>
    </div>
  );
}

export default Login;