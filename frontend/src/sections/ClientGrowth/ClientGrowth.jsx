import "./ClientGrowth.css";

const clients = [
  {
    id: 1,
    name: "Skill School",
    logo: "/images/CG1.png",
  },
  {
    id: 2,
    name: "Dr. A.P.J. Abdul Kalam Kaushal Vikas Centre",
    logo: "/images/CG2.png",
  },
  {
    id: 3,
    name: "Organic Jaggery",
    logo: "/images/CG3.webp",
  },
  {
    id: 4,
    name: "SM Vatan City",
    logo: "/images/CG4.png",
  },
  {
    id: 5,
    name: "Easy Loan",
    logo: "/images/CG5.png",
  },
  {
    id: 6,
    name: "Trade Gate",
    logo: "/images/CG6.webp",
  },
  {
    id: 7,
    name: "Oriway Foundation",
    logo: "/images/CG7.png",
  },
  {
    id: 8,
    name: "Noor Mahal",
    logo: "/images/CG8.png",
  },
];

function ClientGrowth() {
  return (
    <section className="client-growth-section">
      <div className="client-growth-container">

        <div className="client-growth-heading">
          <span className="section-label">
            OUR CLIENTS
          </span>

          <h2>
            Client We've <span>Helped Grow</span>
          </h2>

          <p>
            We work with businesses across different industries,
            helping them build their digital presence and grow.
          </p>
        </div>

        <div className="client-logos">
          {clients.map((client) => (
            <div className="client-logo-card" key={client.id}>
              <img
                src={client.logo}
                alt={client.name}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ClientGrowth;