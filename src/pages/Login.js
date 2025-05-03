import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmRedirect = window.confirm("Login successful! Would you like to go to the homepage?");
    if (confirmRedirect) {
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <img
        src={`${process.env.PUBLIC_URL}/assets/anime-logo.png`}
        alt="Background decorative logo"
        className="background-logo"
      />

      <div className="login-box">
        {/* Left Side - Form */}
        <form className="login-left" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            autoComplete="username"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            autoComplete="current-password"
          />

          <div className="auth-links">
            <Link to="/forgot-password" className="auth-link">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="sign-in-btn">
            Sign In
          </button>

          <div className="auth-links">
            <Link to="/create-account" className="auth-link">
              Create Account
            </Link>
          </div>
        </form>

        {/* Right Side - Images */}
        <div className="login-right">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            alt="Main brand logo"
            className="logo-image"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/anime-slogan.png`}
            alt="Slogan text"
            className="slogan-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
