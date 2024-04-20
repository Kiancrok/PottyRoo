// Gallery.jsx

// Gallery.jsx

import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Painted from "./Painted";
import Unpainted from "./Unpainted";
import Pots from "./Pots";
import "../styles/Gallery.css"; // Import CSS file for styling

function Gallery() {
  return (
    <div className="gallery-container">
      <h1>Our Customers Painted Pots</h1>
      <ul className="gallery-list">
        <li className="gallery-list-item">
          <Link to="/Gallery/Painted">
            <img className="imgr" src="/painted.png" alt="" />
          </Link>
        </li>
      </ul>
      <h1>Painted Pots Available To Buy And Our In-Store Stock</h1>
      <ul className="gallery-list">
        <li className="gallery-list-item">
          <Link to="/Gallery/Pots">
            <img className="imgr" src="/sell.png" alt="" />
          </Link>
        </li>
        <li className="gallery-list-item">
          <Link to="/Gallery/Unpainted">
            <img className="imgr" src="/buy.png" alt="" />
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/Gallery/Painted" element={<Painted />} />
        <Route path="/Gallery/Unpainted" element={<Unpainted />} />
        <Route path="/Gallery/Pots" element={<Pots />} />
      </Routes>
    </div>
  );
}

export default Gallery;
