import { useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    // Backend API will be connected here later
  };

  return (
    <div className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero">

        <video
          className="contact-bg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/contact.mp4" type="video/mp4" />
        </video>

        <div className="contact-video-overlay"></div>

        <div className="contact-hero-content">
          <span className="contact-welcome">
            » Welcome to Keyanntech Solution
          </span>

          <h1>
            Looking For An SEO Audit?
            <br />
            PPC Consultation?
          </h1>

          <p>
            We’ve been helping businesses build their digital presence
            with modern technology and effective digital solutions.
          </p>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="contact-form-section">

        <div className="contact-container">

          <div className="contact-info">

            <span className="section-small-title">
              GET IN TOUCH
            </span>

            <h2>
              Let’s Start Something
              <span> Great Together</span>
            </h2>

            <p>
              Have a project in mind or need help with your digital
              presence? Get in touch with us and our team will get
              back to you shortly.
            </p>

            <div className="contact-info-list">

              <a href="tel:+919915960600" className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={20} />
                </div>

                <div>
                  <span>Call Us</span>
                  <strong>9915960600</strong>
                </div>
              </a>

              <a
                href="mailto:info@myagency.com"
                className="contact-info-item"
              >
                <div className="contact-info-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <span>Email Us</span>
                  <strong>info@myagency.com</strong>
                </div>
              </a>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <span>Location</span>
                  <strong>
                    Sahibzada Ajit Singh Nagar, Punjab
                  </strong>
                </div>
              </div>

            </div>
          </div>

          {/* FORM */}

          <div className="contact-form-wrapper">

            <h3>Send Us A Message</h3>

            <form onSubmit={handleSubmit}>

              <div className="contact-input-group">
                <label htmlFor="name">Name *</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="email">Email *</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="phone">Phone No. *</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                SUBMIT
                <Send size={16} />
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* ================= TRUST LOGOS ================= */}
      <section className="contact-trust-section">

        <div className="contact-container">

          <div className="contact-trust-heading">
            <span>TRUSTED & CERTIFIED</span>
            <h2>Our Certifications & Recognition</h2>
          </div>

          <div className="contact-trust-logos">

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

        </div>

      </section>

      {/* ================= LOCATIONS ================= */}
      <section className="contact-locations-section">

        <div className="contact-container">

          <div className="locations-heading">
            <span>OUR LOCATIONS</span>

            <h2>
              Visit Our <span>Offices</span>
            </h2>

            <p>
              Find us at one of our office locations and
              connect with our team.
            </p>
          </div>

          <div className="locations-grid">

            {/* MOHALI */}
            <div className="location-card">

              <div className="location-card-header">
                <div className="location-icon">
                  <MapPin size={22} />
                </div>

                <div>
                  <span>OFFICE</span>
                  <h3>MOHALI</h3>
                </div>
              </div>

              <p>
                No 5, Plot Number D, Paras Technologies,
                Floor, 235 (P), near Amazon Warehouse,
                Phase 8B, Industrial Area, Sector 74,
                Sahibzada Ajit Singh Nagar, Punjab 160071
              </p>

              <a href="tel:+919915960600">
                <Phone size={16} />
                9915960600
              </a>

              <div className="location-map">
                <iframe
                  title="Mohali Office"
                  src="https://www.google.com/maps?q=Phase+8B+Industrial+Area+Sector+74+Sahibzada+Ajit+Singh+Nagar+Punjab+160071&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

            {/* PARAS TECHNOLOGIES */}
            <div className="location-card">

              <div className="location-card-header">
                <div className="location-icon">
                  <MapPin size={22} />
                </div>

                <div>
                  <span>OFFICE</span>
                  <h3>PARAS TECHNOLOGIES</h3>
                </div>
              </div>

              <p>
                No 5, Plot Number D, Paras Technologies,
                Floor, 235 (P), near Amazon Warehouse,
                Phase 8B, Industrial Area, Sector 74,
                Sahibzada Ajit Singh Nagar, Punjab 160071
              </p>

              <a href="tel:+919915960600">
                <Phone size={16} />
                9915960600
              </a>

              <div className="location-map">
                <iframe
                  title="Paras Technologies"
                  src="https://www.google.com/maps?q=Paras+Technologies+Sector+74+Mohali+Punjab&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

            {/* NABHA */}
            <div className="location-card">

              <div className="location-card-header">
                <div className="location-icon">
                  <MapPin size={22} />
                </div>

                <div>
                  <span>OFFICE</span>
                  <h3>NABHA</h3>
                </div>
              </div>

              <p>
                Gupta Colony, SH12-A, Near Bus Stand and
                Income Tax Office, Nabha – 147201,
                Distt. Patiala, Punjab, India.
              </p>

              <a href="tel:+919915960600">
                <Phone size={16} />
                9915960600
              </a>

              <div className="location-map">
                <iframe
                  title="Nabha Office"
                  src="https://www.google.com/maps?q=Gupta+Colony+Nabha+Punjab+147201&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="contact-final-cta">

        <div className="contact-cta-content">

          <span>LET'S BUILD SOMETHING GREAT</span>

          <h2>
            We’re Ready To Develop
            <br />
            Your Site!
          </h2>

          <p>
            Professional IT technology services you can trust.
          </p>

          <a href="/Contact" className="contact-cta-button">
            Get Demo
            <ArrowRight size={17} />
          </a>

        </div>

      </section>

    </div>
  );
}

export default Contact;