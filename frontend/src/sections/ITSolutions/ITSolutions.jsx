import {
  Settings,
  Network,
  ArrowRight,
  CheckCircle,
  Rocket,
} from "lucide-react";

import "./ITSolutions.css";

function ITSolutions() {
  return (
    <section className="it-solutions-section">
      <div className="it-solutions-container">

        {/* Left Content */}
        <div className="it-solutions-content">

          <span className="section-label">
            WHY CHOOSE OUR IT SOLUTIONS
          </span>

          <h2>
            Driving Innovation And Success Through
            <span> Expert IT Solutions</span>
          </h2>

          <p className="it-solutions-description">
            We provide reliable and innovative technology solutions
            designed to help businesses improve their digital presence,
            streamline operations and achieve sustainable growth.
          </p>

          {/* Solution Item 1 */}
          <div className="solution-item">
            <div className="solution-icon">
              <Settings size={24} />
            </div>

            <div className="solution-text">
              <h3>Manage Tech Services</h3>

              <p>
                Get dependable technology solutions and support that
                keep your business running efficiently.
              </p>
            </div>
          </div>

          {/* Solution Item 2 */}
          <div className="solution-item">
            <div className="solution-icon">
              <Network size={24} />
            </div>

            <div className="solution-text">
              <h3>Internal Networking</h3>

              <p>
                Build secure and efficient digital infrastructure
                that keeps your teams and systems connected.
              </p>
            </div>
          </div>

          {/* CTA */}
          <a href="/about" className="solutions-button">
            More About Us
            <ArrowRight size={18} />
          </a>

        </div>

        {/* Right Visual */}
        <div className="it-solutions-visual">

          <div className="visual-card">

            <div className="visual-card-header">
              <span>IT SOLUTIONS</span>
              <CheckCircle size={22} />
            </div>

            <div className="visual-main">
              <div className="visual-circle">
                <Rocket size={55} />
              </div>

              <h3>Smart Technology</h3>

              <p>
                Modern solutions for modern businesses.
              </p>
            </div>

            <div className="visual-stats">
              <div>
                <strong>100+</strong>
                <span>Services</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Support</span>
              </div>

              <div>
                <strong>99%</strong>
                <span>Quality</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ITSolutions;