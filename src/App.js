import React from 'react';
import './App.css';
import Login from './pages/Login'; // Import the Login component
import ProductCatalog from './pages/ProductCatalog';

function App() {
  return (
    <div className="App">
      <Login /> {/* Render the Login component */}
      <ProductCatalog initialCatalog="desktop" />
    </div>
  );
}

export default App;
