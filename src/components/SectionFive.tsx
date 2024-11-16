import BoxTitle from "./BoxTitle";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ArrowBtn from "./ArrowBtn";
import person from "../assets/tesmoni_person_1.png";
import cousine from "../assets/59d1a08b55f1f4e0621185f67f433fba.jpg";
import { IoPlay } from "react-icons/io5";
import tomato from "../assets/tomato.png";

import { useRef } from "react";
import FoodVideoItem from "./FoodVideoItem";

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

          {/* <div className="hidden md:flex gap-6">
            <ArrowBtn icon={IoIosArrowBack} />
            <ArrowBtn icon={IoIosArrowForward} />
          </div> */}
        </div>

        <FoodVideoItem/>
     

      </div>
      <img
        src={tomato}
        alt="tomato"
        className="hidden xl:flex absolute w-[307px] h-[303px] -rotate-90 -left-[9.5rem]"
      />
      {/* <div className="flex gap-6 mt-8 md:hidden">
        <ArrowBtn icon={IoIosArrowBack} />
        <ArrowBtn icon={IoIosArrowForward} />
      </div> */}
    </div>
  );
};

export default SectionFive;
