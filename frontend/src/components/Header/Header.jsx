import {
  FaLightbulb,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <>
      {/* ================================
          ANNOUNCEMENT BAR
      ================================= */}
      <div className="announcement-bar">
        <div className="announcement-container">

          <div className="announcement-content">
            <FaLightbulb className="announcement-icon" />

            <div>
              <div className="announcement-title">
                No confidence in your Digital Marketing?
              </div>

              <div className="announcement-subtitle">
                Your campaigns can work harder (and we'll prove it every month)
              </div>
            </div>
          </div>

          <a
            href="/Contact"
            className="announcement-button"
          >
            Get A Consultation
          </a>

        </div>
      </div>


      {/* ================================
          CONTACT BAR
      ================================= */}
      <div className="contact-bar">
        <div className="contact-bar-container">

          <div className="contact-left">

            <a href="tel:+919915960600">
              <FaPhone />
              <span>9915960600</span>
            </a>

            <a href="mailto:info@keyanntech.com">
              <FaEnvelope />
              <span>info@keyanntech.com</span>
            </a>

            <span className="location-info">
              <FaLocationDot />
              <span>
                Sahibzada Ajit Singh Nagar, Punjab 140308, India
              </span>
            </span>

          </div>


          {/* Social Icons */}
          <div className="social-links">

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>

          </div>

        </div>
      </div>


      {/* ================================
          NAVBAR
      ================================= */}
      <Navbar />
    </>
  );
}

export default Header;