import React, { InputHTMLAttributes, useRef, useState } from "react";
import bgPlate from "../assets/bg_plate.jpg";
import BoxTitle from "./BoxTitle";
import BgButton from "./BgButton";
import { IoCloudyNight } from "react-icons/io5";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { FaEnvelope } from "react-icons/fa6";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { TbCaretDown, TbCaretUp } from "react-icons/tb";

const SectionFour = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [date, setDate] = useState<string>("");
  const [people, setPeople] = useState<number>(0);

  const handleIncrement = () => {
    setPeople((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setPeople((prev) => prev - 1);
  };

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker(); // For modern browsers supporting .showPicker()
      inputRef.current.focus(); // Fallback for older browsers
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-[788px] overflow-hidden relative">
      <img
        src={bgPlate}
        alt="bgPlate"
        className="absolute w-full h-full object-cover object-top z-0"
      />

      <div className="max-w-[1321px] mx-auto h-full z-10 relative flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 flex flex-col gap-2 md:gap-4 m-10">
          <BoxTitle title="Book Now" />
          <h2 className="font-BebasNeueRegular text-[40px] md:text-6xl text-white">
            Book Your Table
          </h2>
          <p className="font-robotoRegular text-base mr-28 text-white">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <form
            action=""
            className="w-full flex flex-col gap-4 md:gap-9 mt-6"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-9">
              <input
                type="text"
                className="border border-white bg-transparent w-full px-4 py-3 font-robotoRegular text-white text-sm"
                placeholder="Your Name *"
              />
              <input
                type="email"
                className="border border-white bg-transparent w-full px-4 py-3 font-robotoRegular text-white text-sm"
                placeholder="Your Email"
              />
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-9">
              <div className="relative w-full">
                <input
                  type="datetime-local"
                  ref={inputRef}
                  className="appearance-none border border-white bg-transparent w-full px-4 py-3 font-robotoRegular text-white text-sm"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  value={date || ""}
                />

                <span
                  onClick={handleIconClick}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
                >
                  <HiOutlineCalendarDays size={25} />
                </span>
              </div>

              <div className="relative w-full">
                <input
                  type="number"
                  className="border border-white bg-transparent w-full px-4 py-3 font-robotoRegular text-white text-sm appearance-none"
                  placeholder="Total People"
                  value={people >= 1 ? people : ""}
                  onChange={(e) => setPeople(Number(e.target.value))}
                />

                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col">
                  <button onClick={handleIncrement}>
                    <TbCaretUp
                      size={25}
                      className="hover:text-red-700 hover:scale-110 text-white -mb-1.5 transition-transform duration-200"
                    />
                  </button>
                  <button onClick={handleDecrement} disabled={people === 0}>
                    <TbCaretDown
                      size={25}
                      className={` hover:scale-110 ${
                        people === 0
                          ? "hover:text-gray-700 text-gray-700"
                          : "hover:text-red-700 text-white"
                      } transition-transform duration-200 -mt-2`}
                    />
                  </button>
                </div>
              </div>
            </div>
            <textarea
              className="px-4 py-3 font-robotoRegular text-white border border-white bg-transparent h-[140px] w-full"
              placeholder="Message"
            />

            <div className="mt-3 md:mt-0">
              <BgButton
                label="book now"
                height="h-[56px]"
                width="w-[142px]"
                textSize="text-lg"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
