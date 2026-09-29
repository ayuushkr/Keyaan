import { ArrowRight } from "lucide-react";
import "./Hero.css";
import herocopy from "../../assets/herocopy.png";

function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-yellow-shape"></div>

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-welcome">
            » Welcome to Keyanntech Solution
          </span>

          <h1>
            The Best Source For IT Solutions
          </h1>

          <p>
            We are your trusted partner in navigating the ever-evolving
            digital landscape. We create modern, reliable and user-friendly
            digital solutions that help businesses grow and succeed.
          </p>

          <a
            href="/Contact"
            className="hero-button"
          >
            Let's Talk
            <ArrowRight size={17} />
          </a>

        </div>

        <div className="hero-image-container">

          <img
            src={herocopy}
            alt="IT Solutions"
            className="hero-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;