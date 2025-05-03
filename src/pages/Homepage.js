import React, { useState, useEffect } from 'react';
import './Homepage.css';

export default function Homepage() {
  const banners = ['banner 2.png', 'banner 3.png', 'banner 4.png', 'banner 5.png'];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Brand Logo" />
        </div>
        <ul className="nav-links">
          <li>DESKTOP</li>
          <li>FIGURINES</li>
          <li>PLUSHIES</li>
          <li>CLOTHING</li>
          <li>VARIETIES</li>
        </ul>
        <div className="nav-icons">
          {/* Icons */}
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </nav>

      {/* Carousel */}
      <div className="carousel">
        <img src={banners[current]} alt={`Banner ${current + 1}`} />
      </div>

      {/* Section 1: DESKTOP */}
      <div className="product-section desktop-section">
        <h2>DESKTOP ──────────────────────────────────</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="penholder2.jpg" alt="Totobo Pen Holder" />
            <p className="product-title">Totobo Pen Holder</p>
            <p className="product-subtitle">Ghiblok Studio</p>
            <p className="product-price">Price: ₱250</p>
          </div>
          <div className="product-card">
            <img src="mousepad1.jpg" alt="Nagik Deskmat" />
            <p className="product-title">Nagik Deskmat</p>
            <p className="product-subtitle">Blue Block</p>
            <p className="product-price">Price: ₱300</p>
          </div>
          <div className="product-card">
            <img src="nb4.jpg" alt="Mikasasa Notebook" />
            <p className="product-title">Mikasasa Notebook</p>
            <p className="product-subtitle">Attack on Simplicio</p>
            <p className="product-price">Price: ₱150</p>
          </div>
          <div className="product-card">
            <img src="penholder1.jpg" alt="Giga Chad Pen Holder" />
            <p className="product-title">Giga Chad Pen Holder</p>
            <p className="product-subtitle">Attack on Dwaine</p>
            <p className="product-price">Price: ₱200</p>
          </div>
          <div className="product-card">
            <img src="mousepad6.jpg" alt="Gengare Deskmat" />
            <p className="product-title">Gengare Deskmat</p>
            <p className="product-subtitle">Pokermon</p>
            <p className="product-price">Price: ₱400</p>
          </div>
        </div>
        <button className="view-all">View All</button>
      </div>

      {/* Section 2: FIGURINES */}
      <div className="product-section figurines-section">
        <h2>FIGURINES ─────────────────────────────────</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="figure10.jpg" alt="Itacho Figurine" />
            <p className="product-title">ItachoFigurine</p>
            <p className="product-subtitle">Nauto</p>
            <p className="product-price">Price: ₱950</p>
          </div>
          <div className="product-card">
            <img src="figure3.jpg" alt="Demon Lover Figurine" />
            <p className="product-title">Demon Lover Figurine</p>
            <p className="product-subtitle">Demon Lover</p>
            <p className="product-price">Price: ₱1,200</p>
          </div>
          <div className="product-card">
            <img src="figure11.jpg" alt="Naku Figurine" />
            <p className="product-title">NakuFigurine</p>
            <p className="product-subtitle">Fairy the Platypus</p>
            <p className="product-price">Price: ₱1,050</p>
          </div>
          <div className="product-card">
            <img src="figure12.jpg" alt="Remmy Figurine" />
            <p className="product-title">Remmy Figurine</p>
            <p className="product-subtitle">Re: One</p>
            <p className="product-price">Price: ₱980</p>
          </div>
          <div className="product-card">
            <img src="figure4.jpg" alt="Sabura Figurine" />
            <p className="product-title">Sabura Figurine</p>
            <p className="product-subtitle">Narito</p>
            <p className="product-price">Price: ₱990</p>
          </div>
        </div>
        <button className="view-all">View All</button>
      </div>

      {/* Section 3: PLUSHIES */}
      <div className="product-section plushies-section">
        <h2>PLUSHIES ──────────────────────────────────</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="plush3.jpg" alt="Picante Plush" />
            <p className="product-title">Picante Plush</p>
            <p className="product-subtitle">Taco</p>
            <p className="product-price">Price: ₱400</p>
          </div>
          <div className="product-card">
            <img src="plush11.jpg" alt="Gengare Plush" />
            <p className="product-title">Gengare Plush</p>
            <p className="product-subtitle">Pokermon</p>
            <p className="product-price">Price: ₱450</p>
          </div>
          <div className="product-card">
            <img src="plush10.jpg" alt="Bonito Plush" />
            <p className="product-title">Bonito Plush</p>
            <p className="product-subtitle">Jujubsu Kraizen</p>
            <p className="product-price">Price: ₱400</p>
          </div>
          <div className="product-card">
            <img src="plush7.jpg" alt="Flyhigh Plush" />
            <p className="product-title">Flyhigh Plush</p>
            <p className="product-subtitle">Haiyaa</p>
            <p className="product-price">Price: ₱350</p>
          </div>
          <div className="product-card">
            <img src="plush12.jpg" alt="Bombardilo Plush" />
            <p className="product-title">Bombardilo Plush</p>
            <p className="product-subtitle">Pokermon</p>
            <p className="product-price">Price: ₱450</p>
          </div>
        </div>
        <button className="view-all">View All</button>
      </div>

      {/* Section 4: CLOTHING */}
      <div className="product-section clothing-section">
        <h2>CLOTHING ─────────────────────────────────</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="clothing8.jpg" alt="Akina Jacket" />
            <p className="product-title">Akina Jacket</p>
            <p className="product-subtitle">Akina</p>
            <p className="product-price">Price: ₱1,200</p>
          </div>
          <div className="product-card">
            <img src="clothing4.jpg" alt="Evangeline Sweater" />
            <p className="product-title">Evangeline Sweater</p>
            <p className="product-subtitle">Evangeline</p>
            <p className="product-price">Price: ₱850</p>
          </div>
          <div className="product-card">
            <img src="clothing11.jpg" alt="Niloko Pants" />
            <p className="product-title">Niloko Pants</p>
            <p className="product-subtitle">Nauto</p>
            <p className="product-price">Price: ₱1,400</p>
          </div>
          <div className="product-card">
            <img src="clothing5.jpg" alt="Evangeline Long-sleeve Polo" />
            <p className="product-title">Evangeline Long-sleeve Polo</p>
            <p className="product-subtitle">Evangeline</p>
            <p className="product-price">Price: ₱900</p>
          </div>
          <div className="product-card">
            <img src="clothing7.jpg" alt="Phantom Tropa Hoodie" />
            <p className="product-title">Phantom Tropa Hoodie</p>
            <p className="product-subtitle">HunterxHunger</p>
            <p className="product-price">Price: ₱1,250</p>
          </div>
        </div>
        <button className="view-all">View All</button>
      </div>

      {/* Section 5: VARIETIES */}
      <div className="product-section varieties-section">
        <h2>VARIETIES ─────────────────────────────────</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="key2.jpg" alt="JK Keychain" />
            <p className="product-title">JK Keychain</p>
            <p className="product-subtitle">JK Lang</p>
            <p className="product-price">Price: ₱100</p>
          </div>
          <div className="product-card">
            <img src="pin2.jpg" alt="Demon Lover Pin" />
            <p className="product-title">Demon Lover Pin</p>
            <p className="product-subtitle">Demon Lover</p>
            <p className="product-price">Price: ₱70</p>
          </div>
          <div className="product-card">
            <img src="poster5.jpg" alt="Akina Poster" />
            <p className="product-title">Akina Poster</p>
            <p className="product-subtitle">Akina</p>
            <p className="product-price">Price: ₱300</p>
          </div>
          <div className="product-card">
            <img src="key3.jpg" alt="Chain Slayer Keychain" />
            <p className="product-title">Chain Slayer Keychain</p>
            <p className="product-subtitle">Chain Slayer</p>
            <p className="product-price">Price: ₱100</p>
          </div>
          <div className="product-card">
            <img src="poster4.jpg" alt="Di Pinili Poster" />
            <p className="product-title">Di Pinili Poster</p>
            <p className="product-subtitle">Two Piece</p>
            <p className="product-price">Price: ₱300</p>
          </div>
        </div>
        <button className="view-all">View All</button>
      </div>

  {/*Footer*/}
  <footer className="footer">
  <div className="footer-columns">
    {/* Left Column */}
    <div className="footer-column left-column">
      <img src="logo.png" alt="Logo" className="footer-logo" />
      <h3 className="footer-left">Follow Us</h3>
      <div className="social-icons">
        <img src="fb.png" alt="Facebook" />
        <img src="ig.png" alt="Instagram" />
        <img src="tt.png" alt="TikTok" />
      </div>
    </div>

     {/* Right Columns Group */}
  <div className="right-columns-group">
    <div className="footer-column">
      <h3 className="footer-heading">Customer Support</h3>
      <ul>
        <li>FAQs</li>
        <li>+63 1234 5678</li>
        <li>Track Order</li>
        <li>Return Policy</li>
      </ul>
    </div>
    <div className="footer-column">
      <h3 className="footer-heading">Explore</h3>
      <ul>
        <li>All Products</li>
        <li>New Offers</li>
        <li>About Us</li>
        <li>Homepage</li>
      </ul>
    </div>
    <div className="footer-column right-column">
      <h3 className="footer-heading">Get More Updates</h3>
      <p className="footer-sentence">Join us and receive updates on the best offers and new items!</p>
      <form className="subscribe-form">
        <div className="subscribe-wrapper">
          <input type="email" placeholder="Your email" />
          <button type="submit">I'm in</button>
        </div>
      </form>
    </div>
  </div>
</div>

  <p className="footer-bottom">&copy; 2025 Anime&You. All rights reserved.</p>
</footer>
 </div>
  );
}
