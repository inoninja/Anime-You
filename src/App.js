// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import CreateAccount from './pages/createacc';
import ForgotPassword from './pages/forgotpassword';
import Home from './pages/Home'; // Import Home component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} /> {/* Add Home route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;