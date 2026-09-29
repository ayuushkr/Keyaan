import { Star, ExternalLink } from "lucide-react";
import "./Testimonials.css";

const googleReviewUrl =
  "https://www.google.com/search?hl=en-IN&gl=in&q=6th+Floor,+Keyanntech+Solutions,+Cyber+cube,+near+Quark+City,+Phase+8B,+Industrial+Area,+Sector+74,+Sahibzada+Ajit+Singh+Nagar,+Punjab+140307&ludocid=87865848358591916&lsig=AB86z5U_WTO3B71OF88IBT3a8KzF#lrd=";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <div className="testimonials-heading">
          <span className="section-label">OUR TESTIMONIALS</span>

          <h2>
            What Our <span>Clients Say</span>
          </h2>

          <p>
            See what our clients have to say about their experience with us.
          </p>
        </div>

        <div className="google-review-box">

          <div className="google-icon">
            G
          </div>

          <h3>Google Reviews</h3>

          <div className="google-stars">
            <Star size={22} fill="currentColor" />
            <Star size={22} fill="currentColor" />
            <Star size={22} fill="currentColor" />
            <Star size={22} fill="currentColor" />
            <Star size={22} fill="currentColor" />
          </div>

          <p>
            Read reviews from our clients or share your own experience
            with Keyanntech Solutions.
          </p>

          <div className="google-review-buttons">

            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-review-button"
            >
              <Star size={18} />
              Write a Google Review
            </a>

            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-reviews-button"
            >
              See Google Reviews
              <ExternalLink size={17} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;