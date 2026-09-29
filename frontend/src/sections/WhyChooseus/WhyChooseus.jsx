import {
  Award,
  Settings,
  Target,
  Clock,
  Headphones,
} from "lucide-react";

import "./WhyChooseus.css";

const reasons = [
  {
    id: 1,
    icon: Award,
    title: "Expertise",
    description:
      "Our experienced team combines technical knowledge with practical business understanding to deliver reliable digital solutions.",
  },
  {
    id: 2,
    icon: Settings,
    title: "Customization",
    description:
      "We create solutions according to your specific business requirements instead of following a one-size-fits-all approach.",
  },
  {
    id: 3,
    icon: Target,
    title: "Strategic Approach",
    description:
      "Every project starts with understanding your goals so that the technology we build supports your long-term growth.",
  },
  {
    id: 4,
    icon: Clock,
    title: "Quality & Timely Delivery",
    description:
      "We focus on maintaining development quality while keeping projects organized and delivering within agreed timelines.",
  },
  {
    id: 5,
    icon: Headphones,
    title: "Excellent Customer Support",
    description:
      "Our support continues beyond development so clients can get help whenever they need it.",
  },
];

function WhyChooseus() {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">

        {/* Heading */}
        <div className="why-choose-heading">
          <span className="section-label">
            WHY CHOOSE US
          </span>

          <h2>
            There Are Several Reasons
            <span> Why You Should Choose Us</span>
          </h2>

          <p>
            We combine technology, experience and customer-focused
            service to create digital solutions that help businesses
            move forward.
          </p>
        </div>

        {/* Reasons */}
        <div className="reasons-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div className="reason-card" key={reason.id}>

                <div className="reason-icon">
                  <Icon size={25} />
                </div>

                <div className="reason-content">
                  <h3>{reason.title}</h3>

                  <p>{reason.description}</p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseus;