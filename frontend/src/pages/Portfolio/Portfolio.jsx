import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Wok-Shi",
    category: "WordPress",
    image: "/images/port1.png",
    description:
      "A modern restaurant website designed to present the brand, menu and services in a clean digital experience.",
  },
  {
    id: 2,
    title: "Glorious Doors & Windows",
    category: "WordPress",
    image: "/images/port2.png",
    description:
      "A professional business website created to showcase products and services with a responsive interface.",
  },
  {
    id: 3,
    title: "The Trade Gate",
    category: "WordPress",
    image: "/images/port3.png",
    description:
      "A business-focused website designed with a clean layout and strong visual presentation.",
  },
  {
    id: 4,
    title: "Kamal Cooperative Society",
    category: "WordPress",
    image: "/images/port4.png",
    description:
      "A structured organization website designed to present information and services clearly.",
  },
  {
    id: 5,
    title: "Maharaja Montmorency",
    category: "WordPress",
    image: "/images/port5.png",
    description:
      "A visually focused website created to communicate the brand identity and offerings.",
  },
  {
    id: 6,
    title: "Noor Mahal",
    category: "WordPress",
    image: "/images/port6.png",
    description:
      "A responsive website developed with an elegant visual style and user-friendly navigation.",
  },
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <div className="portfolio-page">

      {/* =================================
          PORTFOLIO HERO
      ================================= */}

      <section className="portfolio-hero">

        <div className="portfolio-hero-yellow"></div>

        <div className="portfolio-hero-container">

          <div className="portfolio-hero-content">

            <span className="portfolio-welcome">
              » Welcome to Keyanntech Solution
            </span>

            <h1>
              Our <span>Portfolio</span>
            </h1>

            <p>
              We've had the privilege of helping businesses from
              different industries build their digital presence.
              Explore some of the projects we've worked on.
            </p>

            <Link
              to="/contact"
              className="portfolio-hero-button"
            >
              Let's Talk
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="portfolio-hero-image">

            <img
              src="/images/portfolio.gif"
              alt="Our Portfolio"
            />

          </div>

        </div>

      </section>


      {/* =================================
          TRUST LOGOS
      ================================= */}

      <section className="portfolio-trust">

        <div className="portfolio-trust-container">

          <img
            src="/images/google-1.png"
            alt="Google"
          />

          <img
            src="/images/comReg..png"
            alt="Company Registration"
          />

          <img
            src="/images/iso27001.jpg"
            alt="ISO 27001"
          />

          <img
            src="/images/Googlebusiness.png"
            alt="Google My Business"
          />

          <img
            src="/images/iso2015.png"
            alt="ISO 9001"
          />

          <img
            src="/images/clutch.png"
            alt="Clutch"
          />

        </div>

      </section>


      {/* =================================
          PORTFOLIO PROJECTS
      ================================= */}

      <section className="portfolio-projects">

        <div className="portfolio-projects-container">

          <div className="portfolio-heading">

            <span className="portfolio-label">
              OUR WORK
            </span>

            <h2>
              Explore Our <span>Portfolio</span>
            </h2>

            <p>
              Take a look at some of the digital experiences
              we've created.
            </p>

          </div>


          {/* FILTERS */}

          <div className="portfolio-filters">

            <button
              type="button"
              className={
                activeFilter === "All"
                  ? "portfolio-filter active"
                  : "portfolio-filter"
              }
              onClick={() => setActiveFilter("All")}
            >
              Show All
            </button>

            <button
              type="button"
              className={
                activeFilter === "PHP"
                  ? "portfolio-filter active"
                  : "portfolio-filter"
              }
              onClick={() => setActiveFilter("PHP")}
            >
              PHP
            </button>

            <button
              type="button"
              className={
                activeFilter === "WordPress"
                  ? "portfolio-filter active"
                  : "portfolio-filter"
              }
              onClick={() => setActiveFilter("WordPress")}
            >
              WordPress
            </button>

          </div>


          {/* PROJECT GRID */}

          <div className="portfolio-grid">

            {filteredProjects.map((project) => (

              <article
                className="portfolio-card"
                key={project.id}
              >

                <div className="portfolio-card-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="portfolio-card-overlay">

                    <Link
                      to={`/portfolio/${project.id}`}
                      className="portfolio-view-button"
                    >
                      View Project
                      <ArrowRight size={16} />
                    </Link>

                  </div>

                </div>


                <div className="portfolio-card-content">

                  <span className="portfolio-card-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =================================
          FINAL CTA
      ================================= */}

      <section className="portfolio-cta">

        <div className="portfolio-cta-container">

          <div>

            <span>
              LET'S BUILD SOMETHING GREAT
            </span>

            <h2>
              We're Ready to Develop Your Site!
            </h2>

            <p>
              Professional IT technology services you can trust.
            </p>

          </div>

          <Link
            to="/contact"
            className="portfolio-cta-button"
          >
            Get Demo
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Portfolio;