import React from 'react';
import './Login.css'; // optional external CSS


const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <h2>LOGIN</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="forgot">
              <button type="button" className="forgot-password">
                Forgot Password?
              </button>
            </div>
            <button type="submit" className="sign-in">
              SIGN IN
            </button>
            <div className="create-account">
              <button type="button" className="create-account-btn">
                Create Account
              </button>
            </div>
          </form>
        </div>
        <div className="login-right">
          <img src="./assets/anime-logo.png" alt="Anime&You Logo" />
          <h3>Your Anime<br />Your Dreams</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
