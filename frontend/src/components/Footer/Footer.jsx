import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  const services = [
    "Web Design",
    "Search Engine Optimization",
    "Content Marketing Services",
    "Graphic Designing",
    "Online Advertising",
    "Mobile App Development",
    "Video & Animation",
    "Brand Building",
    "Digital Marketing",
    "Youtube Management",
    "Ecommerce Web Development",
  ];

  const resources = [
    "Blog",
    "Our Portfolio",
    "Service Terms",
    "Term & Conditions",
    "Refund Policy",
    "Privacy Terms",
    "User Data Delete Policy",
  ];

  const industries = [
    "BFSI",
    "B2B",
    "Healthcare",
    "I-Gaming",
    "Education",
    "Ecommerce",
  ];

  const locations = [
    "Website Designing Company in Mohali",
    "Website Designing Company in Jalandhar",
    "Website Designing Company in Patiala",
    "Website Designing Company in Shimla",
    "Seo Company in Panchkula",
    "Seo Company in Patiala",
    "Website Designing Company in Chandigarh",
    "Website Designing Company in Ludhiana",
    "Website Designing Company in Bathinda",
    "Seo Company in Chandigarh",
    "Seo Company in Jalandhar",
    "Seo Company in Bathinda",
    "Website Designing Company in Panchkula",
    "Website Designing Company in Amritsar",
    "Website Designing Company in Ambala",
    "Seo Company in Mohali",
    "Seo Company in Amritsar",
    "Seo Company in Shimla",
  ];

  return (
    <footer className="footer">

      {/* TOP FOOTER */}
      <div className="footer-container">

        {/* COMPANY */}
        <div className="footer-company">

          <div className="footer-logo">
            <img
              src="/images/KSlogo.png"
              alt="Keyanntech Solutions"
            />
          </div>

          <p className="footer-description">
            We provide reliable and innovative technology
            solutions designed to help businesses build,
            grow and succeed in the digital world.
          </p>

          <div className="footer-address">

            <div className="footer-contact-item">
              <MapPin size={18} />
              <p>
                No 5, Plot Number D, Paras Technologies,
                near Amazon Warehouse, Phase 8B,
                Industrial Area, Sector 74,
                Sahibzada Ajit Singh Nagar,
                Punjab 160071
              </p>
            </div>

            <div className="footer-contact-item">
              <MapPin size={18} />
              <p>
                Gupta Colony, SH12-A,
                Near Bus Stand and Income Tax Office,
                Nabha – 147201,
                Distt. Patiala, Punjab
              </p>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} />
              <a href="tel:+919915960600">
                +91 9915960600
              </a>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} />
              <a href="mailto:info@keyanntech.com">
                info@keyanntech.com
              </a>
            </div>

          </div>
        </div>


        {/* SERVICES */}
        <div className="footer-column">

          <h3>SERVICES</h3>

          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <a href="#">
                  <ArrowRight size={14} />
                  {service}
                </a>
              </li>
            ))}
          </ul>

        </div>


        {/* RESOURCES */}
        <div className="footer-column">

          <h3>RESOURCES</h3>

          <ul>
            {resources.map((resource, index) => (
              <li key={index}>
                <a href="#">
                  <ArrowRight size={14} />
                  {resource}
                </a>
              </li>
            ))}
          </ul>

        </div>


        {/* INDUSTRIES */}
        <div className="footer-column">

          <h3>INDUSTRIES</h3>

          <ul>
            {industries.map((industry, index) => (
              <li key={index}>
                <a href="#">
                  <ArrowRight size={14} />
                  {industry}
                </a>
              </li>
            ))}
          </ul>


          <div className="footer-question">

            <h3>HAVE A QUESTION?</h3>

            <p>
              Please reach out to us through our
              contact form. One of our team members
              will respond to you within one business day.
            </p>

            <a href="/contact">
              Contact Us
            </a>

            <a href="#">
              Careers
            </a>

            <a href="#">
              Employee Verification
            </a>

          </div>

        </div>

      </div>


      {/* NEWSLETTER + LOCATIONS */}
      <div className="footer-middle">

        <div className="newsletter">

          <h3>SIGN UP FOR THE NEWSLETTER</h3>

          <div className="newsletter-form">

            <input
              type="email"
              placeholder="Your mail here"
            />

            <button>
              <ArrowRight size={18} />
            </button>

          </div>

        </div>


        <div className="footer-locations">

          <h3>LOCATIONS</h3>

          <div className="locations-grid">

            {locations.map((location, index) => (
              <a href="#" key={index}>
                {location}
              </a>
            ))}

          </div>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Keyanntech Solutions Pvt. Ltd.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div className="footer-my-logo">
            <img
              src="/images/akbuild.png"
              alt="Branding"
            />
        </div>

      </div>

    </footer>
  );
}

export default Footer;