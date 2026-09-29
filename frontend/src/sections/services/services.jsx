import { useState } from "react";
import {
  Monitor,
  ShoppingCart,
  Search,
  Server,
  ArrowRight,
} from "lucide-react";

import "./services.css";


const serviceData = [
  {
    id: "web-design",
    name: "Web Design",
    icon: Monitor,
    image: "/images/web.webp",

    description:
      "Create a professional, responsive and user-friendly website that represents your brand and provides an engaging experience for your customers.",

    features: [
      "Responsive Website Design",
      "Modern User Interface",
      "Mobile Friendly Development",
      "Performance Optimized",
    ],
  },

  {
    id: "ecommerce",
    name: "Ecommerce",
    icon: ShoppingCart,
    image: "/images/eCommerce.png",

    description:
      "Build powerful ecommerce websites that make it easy for businesses to showcase products, manage orders and provide a smooth shopping experience.",

    features: [
      "Online Store Development",
      "Product & Category Management",
      "Secure Payment Integration",
      "Order Management",
    ],
  },

  {
    id: "seo",
    name: "SEO",
    icon: Search,
    image: "/images/Seo.webp",

    description:
      "Improve your website's search visibility and reach the right audience through a structured and data-driven SEO strategy.",

    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Performance Tracking",
    ],
  },

  {
    id: "hosting",
    name: "Hosting",
    icon: Server,
    image: "/images/hoting.jpg",

    description:
      "Reliable website hosting solutions designed to keep your website accessible, secure and performing smoothly.",

    features: [
      "Reliable Web Hosting",
      "Website Security",
      "Backup Management",
      "Performance Monitoring",
    ],
  },
];


function Services() {

  // Currently selected service
  const [activeService, setActiveService] = useState("web-design");

  // Find selected service
  const selectedService = serviceData.find(
    (service) => service.id === activeService
  );


  return (
    <section className="services-section">

      <div className="services-container">


        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="services-heading">

          <span className="section-label">
            OUR SERVICES
          </span>

          

          <p>
            Explore our range of technology and digital services designed to help businesses grow and succeed online.
          </p>

        </div>


        {/* =========================
            SERVICE CATEGORIES
        ========================= */}

        <div className="service-categories">

          {serviceData.map((service) => {

            const Icon = service.icon;

            return (
              <button
                key={service.id}
                className={`service-category ${
                  activeService === service.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveService(service.id)
                }
              >

                <Icon size={28} />

                <span>
                  {service.name}
                </span>

              </button>
            );

          })}

        </div>


        {/* =========================
            FEATURED SERVICE
        ========================= */}

        <div className="featured-service">


          {/* IMAGE */}

          <div className="service-image">
            <img
            src={selectedService.image}
            alt={selectedService.name}
            />
          </div>


          {/* CONTENT */}

          <div className="service-content">

            <span className="service-number">
              {selectedService.number}
            </span>

            <h3>
              {selectedService.name}
            </h3>

            <p>
              {selectedService.description}
            </p>


            {/* FEATURES */}

            <ul>

              {selectedService.features.map(
                (feature) => (

                  <li key={feature}>
                    {feature}
                  </li>

                )
              )}

            </ul>


            {/* BUTTON */}

            <a
              href={`/Contact`}
              className="service-button"
            >
              Let's Acheive your goals

              <ArrowRight size={17} />

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}


export default Services;