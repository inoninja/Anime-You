import React, { useState } from 'react';
import { ShoppingCart, Search, User } from 'lucide-react';
import './ProductCatalog.css';
import catalogData from '../data/catalogData';

// Main App Component
const ProductCatalog = ({ initialCatalog = 'desktop' }) => {
  // State to track which catalog is currently displayed
  const [currentCatalog, setCurrentCatalog] = useState(initialCatalog);
  
  // Get the current catalog data
  const catalog = catalogData[currentCatalog] || catalogData.desktop;
  
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <Navbar currentCatalog={currentCatalog} onCatalogChange={setCurrentCatalog} />
      
      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Category Header */}
          <CategoryHeader title={catalog.title} />
          
          {/* Product Grid */}
          <ProductGrid products={catalog.products} />
        </div>
      </main>
      
      {/* Footer Line */}
      <div className="footer-line"></div>
    </div>
  );
};

// Navbar Component
const Navbar = ({ currentCatalog, onCatalogChange }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container navbar-container">
          {/* Logo */}
          <div className="logo-container">
            <img 
              src="/api/placeholder/100/100" 
              alt="AnimeToYou Logo" 
              className="logo"
            />
          </div>
          
          {/* Navigation Links */}
          <div className="nav-links">
            <div className="nav-items">
              <NavLink 
                label="DESKTOP" 
                active={currentCatalog === 'desktop'} 
                onClick={() => onCatalogChange('desktop')}
              />
              <NavLink 
                label="FIGURINES" 
                active={currentCatalog === 'figurines'} 
                onClick={() => onCatalogChange('figurines')}
              />
              <NavLink 
                label="PLUSHIES" 
                active={currentCatalog === 'plushies'} 
                onClick={() => onCatalogChange('plushies')}
              />
              <NavLink 
                label="CLOTHING" 
                active={currentCatalog === 'clothing'} 
                onClick={() => onCatalogChange('clothing')}
              />
              <NavLink 
                label="VARIETIES" 
                active={currentCatalog === 'varieties'} 
                onClick={() => onCatalogChange('varieties')}
              />
            </div>
          </div>
          
          {/* Right Icons */}
          <div className="icons-container">
            <Search className="icon" />
            <ShoppingCart className="icon" />
            <User className="icon" />
          </div>
        </div>
      </nav>
      {/* Red Line Accent */}
      <div className="red-line"></div>
    </header>
  );
};

// Navigation Link Component
const NavLink = ({ label, active = false, onClick }) => {
  return (
    <a 
      href="#" 
      className={`nav-link ${active ? 'nav-link-active' : 'nav-link-inactive'}`}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
    >
      {label}
    </a>
  );
};

// Category Header Component
const CategoryHeader = ({ title }) => {
  return (
    <div className="category-header">
      <h1 className="category-title">{title}</h1>
      <div className="category-divider"></div>
    </div>
  );
};

// Product Grid Component
const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-container">
        <img 
          src={product.imageSrc} 
          alt={product.name}
          className="product-image"
        />
      </div>
      
      {/* Product Details */}
      <div className="product-details">
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="product-price">₱ {product.price}</p>
        </div>
        
        {/* Add to Cart Button */}
        <button className="cart-button">
          <ShoppingCart className="cart-icon" />
        </button>
      </div>
    </div>
  );
};

export default ProductCatalog;
