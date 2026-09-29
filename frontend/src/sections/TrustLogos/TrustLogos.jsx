import "./TrustLogos.css";

import googleLogo from "../../assets/Trust/google-1.png";
import companyRegistrationLogo from "../../assets/Trust/comReg..png";
import iso27001Logo from "../../assets/Trust/iso27001.jpg";
import googleBusinessLogo from "../../assets/Trust/Googlebusiness.png";
import iso9001Logo from "../../assets/Trust/iso2015.png";
import clutchLogo from "../../assets/Trust/clutch.png";

function TrustLogos() {
  return (
    <section className="trust-section">

      <div className="trust-container">

        <p className="trust-heading">
          Trusted by businesses and recognized platforms
        </p>

        <div className="trust-logos">

          <div className="trust-logo">
            <img
              src={googleLogo}
              alt="google-1"
            />
          </div>

          <div className="trust-logo">
            <img
              src={companyRegistrationLogo}
              alt="ComReg."
            />
          </div>

          <div className="trust-logo">
            <img
              src={iso27001Logo}
              alt="iso27001"
            />
          </div>

          <div className="trust-logo">
            <img
              src={googleBusinessLogo}
              alt="Googlebusiness"
            />
          </div>

          <div className="trust-logo">
            <img
              src={iso9001Logo}
              alt="iso2015"
            />
          </div>

          <div className="trust-logo">
            <img
              src={clutchLogo}
              alt="clutch"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default TrustLogos;