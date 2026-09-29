import { Link } from "react-router-dom";

import {
  Home,
  CircleUserRound,
  Rss,
  Settings,
  BriefcaseBusiness,
  Phone,
  ChevronDown,
} from "lucide-react";

import "./Navbar.css";

function Navbar() {
  const services = [
    {
      name: "Web Design",
      path: "/services/web-design",
    },
    {
      name: "SEO",
      path: "/services/seo",
    },
    {
      name: "Content Marketing",
      path: "/services/content-marketing",
    },
    {
      name: "Graphic Designing",
      path: "/services/graphic-designing",
    },
    {
      name: "Online Advertisement",
      path: "/services/online-advertisement",
    },
    {
      name: "App Development",
      path: "/services/app-development",
    },
    {
      name: "Video & Animation",
      path: "/services/video-animation",
    },
    {
      name: "Brand Building",
      path: "/services/brand-building",
    },
    {
      name: "Digital Marketing",
      path: "/services/digital-marketing",
    },
    {
      name: "Industrial Training",
      path: "/services/industrial-training",
    },
    {
      name: "YouTube Management",
      path: "/services/youtube-management",
    },
    {
      name: "Ecom. Web Development",
      path: "/services/ecommerce-web-development",
    },
  ];

  return (
    <nav className="navbar">

      {/* Yellow diagonal background */}
      <div className="navbar-yellow-shape"></div>

      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <img
          src="/images/klogo.png"
          alt="MyAgency"
        />
      </Link>

      {/* Navigation */}
      <div className="nav-menu">

        <Link to="/" className="nav-link">
          <Home size={17} />
          <span>Home</span>
        </Link>

        <Link to="/about" className="nav-link">
          <CircleUserRound size={17} />
          <span>About Us</span>
        </Link>

        <Link to="/blog" className="nav-link">
          <Rss size={17} />
          <span>Blog</span>
        </Link>

        <div className="services-dropdown">

          <button
            type="button"
            className="services-dropdown-button"
          >
            <Settings size={17} />

            <span>Services</span>

            <ChevronDown
              size={14}
              className="dropdown-arrow"
            />
          </button>

          <div className="services-dropdown-menu">

            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="services-dropdown-item"
              >
                {service.name}
              </Link>
            ))}

          </div>

        </div>

        <Link
          to="/portfolio"
          className="nav-link"
        >
          <BriefcaseBusiness size={17} />
          <span>Our Portfolio</span>
        </Link>

      </div>

      {/* Contact */}
      <Link
        to="/contact"
        className="navbar-contact"
      >
        <span className="navbar-contact-icon">
          <Phone size={15} />
        </span>

        <span>Contact Us</span>
      </Link>

    </nav>
  );
}

export default Navbar;