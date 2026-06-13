import HomeHero from "./components/home-hero";
import HomeAbout from "./components/home-about";
import HomeServices from "./components/home-services";
import HomeProfessionalTeams from "./components/home-professional-teams";
import Testimonials from "./components/testimonials";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeProfessionalTeams />
      <Testimonials />
    </>
  );
};

export default Home;
