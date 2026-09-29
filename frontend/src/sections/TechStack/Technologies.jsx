import "./Technologies.css";

const Technologies = [
  {
    id: 1,
    name: "React.js",
    logo: "/images/T1.jpg",
  },
  {
    id: 2,
    name: "javaScript",
    logo: "/images/T2.png",
  },
  {
    id: 3,
    name: "Node.js",
    logo: "/images/T3.png",
  },
  {
    id: 4,
    name: "Flutter",
    logo: "/images/T4.png",
  },
  {
    id: 5,
    name: "CodeIgnitter",
    logo: "/images/T5.webp",
  },
  {
    id: 6,
    name: "Magento",
    logo: "/images/T6.jpg",
  },
  {
    id: 7,
    name: "Golang",
    logo: "/images/T7.jpg",
  },
  {
    id: 8,
    name: "WIX.com",
    logo: "/images/T8.png",
  },
  {
    id: 9,
    name: "WordPress",
    logo: "/images/T9.webp",
  },
  {
    id: 10,
    name: "Angular.js",
    logo: "/images/T10.webp",
  },
  {
    id: 11,
    name: "laravel",
    logo: "/images/T11.png",
  },
  {
    id: 12,
    name: "shopify",
    logo: "/images/T12.png",
  },
];

function Tech() {
  return (
    <section className="Tech-section">
      <div className="Tech-container">

        <div className="Tech-heading">
          <span className="section-label">
            Technologies
          </span>

          <h2>
            Technology We <span>Work With</span>
          </h2>

          <p>
            We use modern technologies and development tools to build reliable,
            scalable and high-performing digital solutions.
          </p>
        </div>

        <div className="Technologie-logos">
          {Technologies.map((Technologie) => (
            <div className="Technologie-logo-card" key={Technologie.id}>
              <img
                src={Technologie.logo}
                alt={Technologie.name}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Tech;