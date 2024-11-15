import BoxTitle from "./BoxTitle";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ArrowBtn from "./ArrowBtn";
import person from "../assets/tesmoni_person_1.png";
import cousine from "../assets/59d1a08b55f1f4e0621185f67f433fba.jpg";
import { IoPlay } from "react-icons/io5";
import tomato from "../assets/tomato.png";

const SectionFive = () => {
  return (
    <div className="md:h-[965.97px] flex flex-col md:flex-row items-center p-8">
      <div className="max-w-[1321px] mx-auto flex flex-col gap-6 md:gap-14">
        <div className="md:h-[110px] flex justify-between items-center">
          <div className="flex flex-col gap-5">
            <BoxTitle title="Crispy, Every Bite Taste" />
            <h1 className="text-[40px] md:text-6xl pr-24 md:pr-0 leading-tight font-BebasNeueRegular">
              What Some of my Customers Say
            </h1>
          </div>

          <div className="hidden md:flex gap-6">
            <ArrowBtn icon={IoIosArrowBack} />
            <ArrowBtn icon={IoIosArrowForward} />
          </div>
        </div>

        <div className="w-full md:h-[555.69px] bg-[#FEBF00] flex flex-col-reverse md:flex-row">
          <div className="md:w-[40%] flex items-center justify-center">
            
            <div className="relative py-10 md:py-0 md:pt-0 px-8 md:px-0 md:w-[386px] md:h-[412px] flex flex-col justify-between gap-9 md:gap-0">

              <div className="relative flex flex-col">
                <h1 className="absolute font-CotorisBold text-6xl ">“</h1>
                <p className="pl-5 pt-3 md:pt-5 md:pl-3 font-robotoRegular text-lg leading-relaxed md:leading-normal md:text-xl text-[#0A1425]">
                  You can't go wrong with Chicken Mandi, I had it twice. The
                  chicken was cooked perfectly, juicy & soft (usually mandi
                  chicken is a bit dry). I would defiantly recommend it.
                </p>
              </div>

              <div className="md:pl-5 md:h-[100px] flex flex-col ">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="uppercase font-BebasNeueRegular text-lg text-[#0A1425] tracking-wide">
                      Khalid Al Dawsry
                    </h2>
                    <p className="font-robotoRegular text-sm text-[#333333]">
                      Jeddah, Saudi
                    </p>
                  </div>
                  <img
                    src={person}
                    alt="person"
                    className="w-[39.62px] h-[39.62px] object-cover rounded-full"
                  />
                </div>
                <div className="w-full flex items-end pt-3">
                  <div className="h-[0.5px] bg-[#0A1425] w-full"></div>
                  <div className="h-1 bg-[#BD1F17] w-[40.45px]"></div>
                </div>
              </div>

            </div>
          </div>

          <div className="md:w-[60%] relative">
            <img src={cousine} className="w-full h-full object-cover" />
            <div className="bg-black absolute w-full inset-0 z-1 opacity-40" />

            {/* FaPlay centered */}
            <div className="w-[49.53px] h-[49.53px] bg-[#FFC900] flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
              <IoPlay size={24} /> {/* Adjust size if needed */}
            </div>
          </div>


        </div>
      </div>
      <img
        src={tomato}
        alt="tomato"
        className="hidden md:flex absolute w-[307px] h-[303px] -rotate-90 -left-[9.5rem]"
      />
      <div className="flex gap-6 mt-8 md:hidden">
        <ArrowBtn icon={IoIosArrowBack} />
        <ArrowBtn icon={IoIosArrowForward} />
      </div>
    </div>
  );
};

export default SectionFive;
