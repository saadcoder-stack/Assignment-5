import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="/" className="brand">
          <span className="brand-logo">DS</span>
          <span className="brand-name">
            Dev <span>Stack</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="/" className="active">
            Home
          </a>

          <a href="#technologies">
            Technologies
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>
        </nav>

        {/* Authentication Buttons */}
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;