import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Block */}
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <span className="footer-logo-box">DS</span>

            <span>
              Dev <strong>Stack</strong>
            </span>
          </a>

          <p className="footer-description">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="social-links">
            <a href="#" aria-label="GitHub">
              GitHub
            </a>

            <a href="#" aria-label="Twitter">
              Twitter
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>


        {/* Product Links */}
        <div className="footer-column">
          <h3>PRODUCT</h3>

          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#technologies">Technologies</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>


        {/* Company Links */}
        <div className="footer-column">
          <h3>COMPANY</h3>

          <ul>
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>


        {/* Legal Links */}
        <div className="footer-column">
          <h3>LEGAL</h3>

          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>

      </div>


      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;