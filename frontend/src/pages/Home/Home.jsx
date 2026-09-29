import ClientGrowth from "../../sections/ClientGrowth/ClientGrowth";
import FinalCTA from "../../sections/FinalCTA/FinalCTA";
import Hero from "../../sections/Hero/Hero";
import ITSolutions from "../../sections/ITSolutions/ITSolutions";
import Technologies from "../../sections/TechStack/Technologies";
import Testimonials from "../../sections/Testimonials/Testimonials";
import TrustLogos from "../../sections/TrustLogos/TrustLogos";
import WhyChooseUs from "../../sections/WhyChooseus/WhyChooseus";
import Services from "../../sections/services/services";

function Home() {
  return (
    <>
      <Hero/>
      <TrustLogos/>
      <Services/>
      <ITSolutions/>
      <Testimonials/>
      <ClientGrowth/>
      <WhyChooseUs/>
      <Technologies/>
      <FinalCTA/>
      

    </>
   
  );
}

export default Home;