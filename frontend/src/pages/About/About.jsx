import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* =====================================
          ABOUT HERO
      ===================================== */}

      <section className="about-hero">
        <video
          className="about-bg-video"
          src="/videos/BgAi.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="about-bg-overlay"></div>

        <div className="about-hero-container">

          <div className="about-hero-content">

            <span className="section-label">
              ABOUT US
            </span>

            <h1>
              The Best Source For
              <span> IT Solutions</span>
            </h1>

            <p>
              We are a technology-driven company focused on
              creating reliable, modern and user-friendly digital
              solutions that help businesses grow and succeed.
            </p>

          </div>

        <div className="about-hero-visual">

</div>

      </div>
      </section>


      {/* =====================================
          SOFTWARE DEVELOPMENT
      ===================================== */}

      <section className="about-service-section">

        <div className="about-service-container">

          <div className="about-service-content">

            <span className="section-label">
              OUR EXPERTISE
            </span>

            <h2>
              Software <span>Development</span>
            </h2>

            <p>
              We develop custom software solutions designed
              around specific business requirements. Our goal
              is to create scalable and reliable applications
              that solve real-world business problems.
            </p>

            <p>
              From business applications to customized
              enterprise solutions, we focus on clean
              development practices, performance and
              long-term maintainability.
            </p>

          </div>

          <div className="about-service-image">

            <img
              src="/images/sdlc.gif"
              alt="Software development"
            />

          </div>

        </div>

      </section>


      {/* =====================================
          WEB DEVELOPMENT
      ===================================== */}

      <section className="about-service-section about-service-reverse">

        <div className="about-service-container">

          <div className="about-service-image">

            <img
              src="/images/webD.gif"
              alt="Web development"
            />

          </div>

          <div className="about-service-content">

            <span className="section-label">
              WEB SOLUTIONS
            </span>

            <h2>
              Web <span>Development</span>
            </h2>

            <p>
              We create modern and responsive websites that
              provide businesses with a strong digital presence.
              Our websites are designed to work smoothly across
              desktop, tablet and mobile devices.
            </p>

            <p>
              We focus on usability, performance, responsive
              design and a seamless experience for visitors.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          MOBILE APP DEVELOPMENT
      ===================================== */}

      <section className="about-service-section">

        <div className="about-service-container">

          <div className="about-service-content">

            <span className="section-label">
              MOBILE SOLUTIONS
            </span>

            <h2>
              Mobile App <span>Development</span>
            </h2>

            <p>
              We build user-friendly mobile applications that
              help businesses connect with their customers
              through modern mobile experiences.
            </p>

            <p>
              Our approach focuses on performance, usability,
              security and scalable application architecture.
            </p>

          </div>

          <div className="about-service-image">

            <img
              src="/images/android.gif"
              alt="Mobile app development"
            />

          </div>

        </div>

      </section>


      {/* =====================================
          CLOUD COMPUTING
      ===================================== */}

      <section className="about-service-section about-service-reverse">

        <div className="about-service-container">

          <div className="about-service-image">

            <img
              src="/images/cc.gif"
              alt="Cloud computing"
            />

          </div>

          <div className="about-service-content">

            <span className="section-label">
              CLOUD TECHNOLOGY
            </span>

            <h2>
              Cloud <span>Computing</span>
            </h2>

            <p>
              Cloud technologies help businesses build flexible,
              scalable and accessible digital infrastructure.
              We help organizations use modern cloud solutions
              according to their requirements.
            </p>

            <p>
              Our focus is on reliability, scalability,
              performance and efficient technology management.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          DATA ANALYTICS & CYBERSECURITY
      ===================================== */}

      <section className="about-service-section">

        <div className="about-service-container">

          <div className="about-service-content">

            <span className="section-label">
              DATA & SECURITY
            </span>

            <h2>
              Data Analytics &
              <span> Cybersecurity</span>
            </h2>

            <p>
              Data helps businesses make better decisions.
              We provide data-focused solutions that help
              organizations understand information and use
              it more effectively.
            </p>

            <p>
              We also focus on cybersecurity practices that
              help protect applications, systems and business
              data from potential digital threats.
            </p>

          </div>

          <div className="about-service-image">

            <img
              src="/images/security.gif"
              alt="Data analytics and cybersecurity"
            />

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;