import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  

  return (
    <>
      <nav className="brand-nav">
        <div className="nav-inner">

          {/* BRAND Name */}
          <Link to="/" className="brand">
            PRIME SPACE
          </Link>

          {/* DESKTOP LINKS */}
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/favourites">Favourites</Link>
          </div>

          
          <button
            className="nav-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {open && (
        <div className="mobile-overlay">
          <button
            className="close-btn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>

          <div className="mobile-links">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/search" onClick={() => setOpen(false)}>Search</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
