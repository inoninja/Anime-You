import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <img
        src="/assets/anime-logo.png"
        alt="Side Logo"
        className="background-logo"
      />

      <div className="login-box">
        <div className="login-left">
          <h2>Burnik</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="forgot">
  <button type="button" className="auth-link forgot-password">
    Forgot Password?
  </button>
</div>
            <button type="submit" className="sign-in">SIGN IN</button>
            <div className="create-account">
  <button type="button" className="auth-link create-account-btn">
    Create Account
  </button>
</div>
          </form>
        </div>
        <div className="login-right">
          <img src="/assets/logo.png" alt="Logo" className="logo-image" />
          <img src="/assets/anime-slogan.png" alt="Slogan" className="slogan-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
