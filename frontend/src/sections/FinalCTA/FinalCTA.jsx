import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-container">

        <div className="final-cta-content">
          <span className="section-label">
            LET'S WORK TOGETHER
          </span>

          <h2>
            We're Ready to
            <span> Develop Your Site!</span>
          </h2>

          <p>
            Have a project in mind? Let's turn your ideas into a
            modern, reliable and high-performing digital solution.
          </p>

          <div className="final-cta-buttons">
            <Link to="/contact" className="final-cta-primary">
              Get Demo
              <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="final-cta-secondary">
              <MessageCircle size={18} />
              Let's Talk
            </Link>
          </div>
        </div>

        <div className="final-cta-visual">
          <div className="cta-circle cta-circle-one"></div>
          <div className="cta-circle cta-circle-two"></div>

          <div className="cta-card">
            <span>IT SOLUTIONS</span>
            <h3>Build. Grow. Succeed.</h3>
            <p>
              Professional technology services you can trust.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FinalCTA;