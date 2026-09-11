import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Build Your Ideal
            <span>Development Stack</span>
          </h1>

          <p className="hero-description">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="explore-button">
              Explore Technologies
            </a>

            <a href="#about" className="learn-button">
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image-wrapper">
          <img
            src="/hero-banner.png"
            alt="Modern development technology stack"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;