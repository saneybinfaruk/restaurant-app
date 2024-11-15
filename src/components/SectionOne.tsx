import Navbar from "./Navbar";
import Hero from "./Hero";

const SectionOne = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#BD1F17] via-[#A51D13] to-[#8E1B0F]">
      <div className="absolute inset-0 bg-[url('../../public/pattern.png')] bg-repeat bg-[length:134px_146px] opacity-10 z-0" />

      <div className="max-w-[1321px] mx-auto relative z-10 flex flex-col ">
        <Navbar />
        <Hero />
      </div>
    </section>
  );
};

export default SectionOne;
