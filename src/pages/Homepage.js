import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const banners = ['banner 2.png', 'banner 3.png', 'banner 4.png', 'banner 5.png'];

const ProductCard = ({ image, title, subtitle, price }) => (
  <div className="product-card">
    <img src={image} alt={title} />
    <p className="product-title">{title}</p>
    <p className="product-subtitle">{subtitle}</p>
    <p className="product-price">Price: ₱{price}</p>
  </div>
);

const Section = ({ title, products }) => (
  <div className="product-section">
    <h2>{title} ─────────────────────────────────</h2>
    <div className="product-list">
      {products.map((p, index) => (
        <ProductCard key={index} {...p} />
      ))}
    </div>
    <button className="view-all">View All</button>
  </div>
);

export default function Homepage() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    {
      title: 'DESKTOP',
      products: [
        { image: 'penholder2.jpg', title: 'Totobo Pen Holder', subtitle: 'Ghiblok Studio', price: 250 },
        { image: 'mousepad1.jpg', title: 'Nagik Deskmat', subtitle: 'Blue Block', price: 300 },
        { image: 'nb4.jpg', title: 'Mikasasa Notebook', subtitle: 'Attack on Simplicio', price: 150 },
        { image: 'penholder1.jpg', title: 'Giga Chad Pen Holder', subtitle: 'Attack on Dwaine', price: 200 },
        { image: 'mousepad6.jpg', title: 'Gengare Deskmat', subtitle: 'Pokermon', price: 400 }
      ]
    },
    {
      title: 'FIGURINES',
      products: [
        { image: 'figure10.jpg', title: 'Itacho Figurine', subtitle: 'Nauto', price: 950 },
        { image: 'figure3.jpg', title: 'Demon Lover Figurine', subtitle: 'Demon Lover', price: 1200 },
        { image: 'figure11.jpg', title: 'Naku Figurine', subtitle: 'Fairy the Platypus', price: 1050 },
        { image: 'figure12.jpg', title: 'Remmy Figurine', subtitle: 'Re: One', price: 980 },
        { image: 'figure4.jpg', title: 'Sabura Figurine', subtitle: 'Narito', price: 990 }
      ]
    },
    {
      title: 'PLUSHIES',
      products: [
        { image: 'plush3.jpg', title: 'Picante Plush', subtitle: 'Taco', price: 400 },
        { image: 'plush11.jpg', title: 'Gengare Plush', subtitle: 'Pokermon', price: 450 },
        { image: 'plush10.jpg', title: 'Bonito Plush', subtitle: 'Jujubsu Kraizen', price: 400 },
        { image: 'plush7.jpg', title: 'Flyhigh Plush', subtitle: 'Haiyaa', price: 350 },
        { image: 'plush12.jpg', title: 'Bombardilo Plush', subtitle: 'Pokermon', price: 450 }
      ]
    },
    {
      title: 'CLOTHING',
      products: [
        { image: 'clothing8.jpg', title: 'Akina Jacket', subtitle: 'Akina', price: 1200 },
        { image: 'clothing4.jpg', title: 'Evangeline Sweater', subtitle: 'Evangeline', price: 850 },
        { image: 'clothing11.jpg', title: 'Niloko Pants', subtitle: 'Nauto', price: 1400 },
        { image: 'clothing5.jpg', title: 'Evangeline Polo', subtitle: 'Evangeline', price: 900 },
        { image: 'clothing7.jpg', title: 'Phantom Hoodie', subtitle: 'HunterxHunger', price: 1250 }
      ]
    },
    {
      title: 'VARIETIES',
      products: [
        { image: 'key2.jpg', title: 'JK Keychain', subtitle: 'JK Lang', price: 100 },
        { image: 'pin2.jpg', title: 'Demon Lover Pin', subtitle: 'Demon Lover', price: 70 },
        { image: 'poster5.jpg', title: 'Akina Poster', subtitle: 'Akina', price: 300 },
        { image: 'key3.jpg', title: 'Chain Slayer Keychain', subtitle: 'Chain Slayer', price: 100 },
        { image: 'poster4.jpg', title: 'Di Pinili Poster', subtitle: 'Two Piece', price: 300 }
      ]
    }
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo" onClick={() => navigate('/')}>
          <img src="logo.png" alt="Brand Logo" />
        </div>
        <ul className="nav-links">
          {['DESKTOP', 'FIGURINES', 'PLUSHIES', 'CLOTHING', 'VARIETIES'].map(link => (
            <li key={link}>{link}</li>
          ))}
        </ul>
        <div className="nav-icons">
          <svg className="icon" onClick={() => navigate('/search')}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          <svg className="icon" onClick={() => navigate('/cart')}><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39h9.72l2-1.61L23 6H6" /></svg>
          <svg className="icon" onClick={() => navigate('/login')}><path d="M20 21v-2a4 4 0 0 0-3-3.87" /><path d="M4 21v-2a4 4 0 0 1 3-3.87" /><circle cx="12" cy="7" r="4" /></svg>
        </div>
      </nav>

      <div className="carousel">
        <img src={banners[current]} alt={`Banner ${current + 1}`} />
      </div>

      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}

      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column left-column">
            <img src="logo.png" alt="Logo" className="footer-logo" />
            <h3>Follow Us</h3>
            <div className="social-icons">
              <img src="fb.png" alt="Facebook" />
              <img src="ig.png" alt="Instagram" />
              <img src="tt.png" alt="TikTok" />
            </div>
          </div>

          <div className="right-columns-group">
            <div className="footer-column">
              <h3>Customer Support</h3>
              <ul><li>FAQs</li><li>+63 1234 5678</li><li>Track Order</li><li>Return Policy</li></ul>
            </div>
            <div className="footer-column">
              <h3>Explore</h3>
              <ul><li>All Products</li><li>New Offers</li><li>About Us</li><li onClick={() => navigate('/')}>Homepage</li></ul>
            </div>
            <div className="footer-column right-column">
              <h3>Get More Updates</h3>
              <p>Join us and receive updates on the best offers and new items!</p>
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
