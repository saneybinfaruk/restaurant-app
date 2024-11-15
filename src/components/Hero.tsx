import cousine from "../assets/134a1d5ba19b25b4daf3a6c032ddbd7a.jpg";
import smallFlower from "../assets/small_flower.png";
import Offer from "./Offer";
import BgButton from "./BgButton";

const Hero = () => {
  return (
    <section className="p-8 pb-10 md:px-20 w-full md:pb-24 flex flex-col md:flex-row h-full items-center relative mt-0 md:mt-16 gap-14 md:gap-0">
      <div className="md:px-10 relative md:absolute inset-0 flex flex-col justify-center z-10 w-full gap-6 md:gap-0">
        
        <h2 className="md:max-w-[600px] lg:max-w-[750px] xl:max-w-[813px] bg-gradient-to-r from-[#BD1F1700] to-[#BD1F17B2] bg-opacity-50  font-BebasNeueRegular text-white text-5xl md:text-7xl lg:text-[96px] xl:text-[120px] leading-[1.1] relative z-10 md:py-3">
          Taste the authentic Saudi cuisine
        </h2>

        <p className="font-robotoRegular text-white text-2xl max-w-[560px] font-normal mb-8">
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.
        </p>

        <BgButton label="Explore Menu" width="w-[180px]" height="h-[56px]" />
      </div>

      <div className="flex justify-end flex-grow relative">
        <img
          src={cousine}
          alt="cousine"
          className="w-full h-[330px] md:w-[500px] md:h-[450px] lg:w-[600px] lg:h-[550px] xl:w-[700px] xl:h-[650px] object-cover transform scale-x-[-1]"
        />

        <div className="absolute bottom-4 right-4 md:bottom-2 md:right-2 lg:bottom-0 lg:-right-14">
          <Offer />
        </div>

        <div className="absolute -top-9 -right-7 w-[45px] h-[45px]">
          <img src={smallFlower} alt="small flower" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
