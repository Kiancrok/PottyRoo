import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer"; // Import the Footer component
import "../App.css";

export default function GuestLayout() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className="flex flex-col items-center justify-center">
      <header 
        className={`sticky bg-gradient-to-r from-green-500 to-yellow-300 w-full h-20 p-10 flex justify-between items-center transition-all duration-1000 ${
          isHeaderVisible ? "top-0" : "-top-full"
        }`}
      >
        <div className="flex items-center">
          <img className="kang" src="/Kang.jpg" alt="" style={{ margin: "3px" }} />
          <h1 className="text-7xl text-black text-center">PottyRoos</h1>
        </div>
        <div className="links">
          <ul className="flex items-center gap-2 text-black">
            <li>
              <Link
                to="/"
                className="boldLink p-3 bg-green-200 shadow-md"
                style={{ textDecoration: "none", color: "black" }} onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Events"
                className="boldLink p-3 bg-green-200 shadow-md"
                style={{ textDecoration: "none", color: "black" }} onClick={() => window.scrollTo(0, 0)}
              >
                 Events
              </Link>
            </li>
            <li>
              <Link
                to="Gallery"
                className="boldLink p-3 bg-green-200 shadow-md"
                style={{ textDecoration: "none", color: "black" }} onClick={() => window.scrollTo(0, 0)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/Terms"
                className="boldLink p-3 bg-green-200 shadow-md"
                style={{ textDecoration: "none", color: "black" }} onClick={() => window.scrollTo(0, 0)}
              >
                Terms And Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="boldLink p-3 bg-green-200 shadow-md"
                style={{ textDecoration: "none", color: "black" }}onClick={() => window.scrollTo(0, 0)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <Outlet />
      <Footer />
    </div>
  );
}
