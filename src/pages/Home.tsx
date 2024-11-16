import Footer from "../components/Footer";
import SectionFive from "../components/SectionFive";
import SectionFour from "../components/SectionFour";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";

const Home = () => {
  return (
    <section>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive/>
      <Footer/>
    </section>
  );
};

export default Home;
