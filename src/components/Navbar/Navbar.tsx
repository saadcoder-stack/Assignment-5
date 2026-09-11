import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Brand */}
        <a href="/" className="brand" onClick={closeMenu}>
          <span className="brand-logo">DS</span>

          <span className="brand-name">
            Dev <span>Stack</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? "menu-open" : ""}`}>
          <a href="/" className="active" onClick={closeMenu}>
            Home
          </a>

          <a href="#technologies" onClick={closeMenu}>
            Technologies
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* Authentication Buttons */}
        <div className="auth-buttons">
          <button className="sign-in">
            Sign In
          </button>

          <button className="sign-up">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;