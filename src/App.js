import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import CreateAccount from './pages/createacc';
import ForgotPassword from './pages/forgotpassword';
import Homepage from './pages/Homepage'; // <- Added

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/homepage" element={<Homepage />} /> {/* <- Corrected */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
