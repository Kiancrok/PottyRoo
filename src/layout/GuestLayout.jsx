// GuestLayout.jsx

import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer"; // Import the Footer component
import "../App.css";

export default function GuestLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <header className="header">
        <div className="header-container">
        <img className="kang" src="/Kang.jpg" alt="" />
          <h1>PottyRoos</h1>
        </div>
        <nav className={`links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
           </ul> 
           <nav className={`links ${isMenuOpen ? 'open' : ''}`}>
            <ul>
           <li><Link to="/terms">Terms And Conditions</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            </nav>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}
