import React, { useEffect, useState } from "react";
import cousine from "../assets/59d1a08b55f1f4e0621185f67f433fba.jpg";
import cousine2 from "../assets/c1aa9b555693793db0fb1c4f28b22547.png";
import callIcon from "../assets/call-alt.png";
import ProgressBar from "react-customizable-progressbar";
import BgButton from "./BgButton";
import { FiPhoneCall } from "react-icons/fi";
import Item from "./Item";
import { infos } from "../constants/data";
import MarketExperiences from "./MarketExperiences";

type TabKey = "tab1" | "tab2" | "tab3";

const SectionTwo = () => {
  const [selectedTab, setSelectedTab] = useState<TabKey>("tab1");
  const tabs = [
    { id: "tab1", label: "About" },
    { id: "tab2", label: "Experiance" },
    { id: "tab3", label: "Contact" },
  ];

  const tabsDetails: { [key in TabKey]: JSX.Element } = {
    tab1: (
      <div className="w-full">
        <h2 className="text-[40px] leading-tight md:leading-snug md:text-6xl uppercase font-BebasNeueRegular pt-6 pb-4">
          Exceptional culinary experience and delicious food
        </h2>
        <p className="font-robotoRegular text-[#333333] text-base leading-relaxed md:leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
          sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
          bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur
          adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna
          minim veniam nostrud exercitation.
        </p>

        <div className="w-full flex items-center gap-5 md:gap-10 mt-10 bg-green-100">
          <div>
            <BgButton label="about more" />
          </div>
          <div className="flex items-center gap-2">
            <FiPhoneCall color="#BD1F17" size={24} />
            <p className="text-sm md:text-lg font-robotoBold text-[#0A1425]">
              +88 3426 739 485
            </p>
          </div>
        </div>
      </div>
    ),
    tab2: (
      <div>
        <h2 className="text-[40px] leading-tight md:leading-snug md:text-6xl uppercase font-BebasNeueRegular pt-6 pb-4">
          Experience the Art of Culinary Craftsmanship
        </h2>
        <p className="font-robotoRegular text-[#333333] text-base leading-relaxed md:leading-normal">
          Discover the refined skills of our chefs, combining modern techniques
          with traditional flavors to create unforgettable dishes. Each dish is
          crafted with passion and a focus on quality, from farm-fresh
          ingredients to artisanal presentation. Join us to savor culinary
          perfection.
        </p>

        <div className="w-full flex items-center gap-5 md:gap-10 mt-10">
          <BgButton label="about more" />
          <div className="flex items-center gap-2">
            <FiPhoneCall color="#BD1F17" size={24} />
            <p className="text-sm md:text-lg  font-robotoBold text-[#0A1425]">
              +88 3426 739 485
            </p>
          </div>
        </div>
      </div>
    ),
    tab3: (
      <div>
        <h2 className="text-[40px] leading-tight md:leading-snug md:text-6xl uppercase font-BebasNeueRegular pt-6 pb-4">
          Get in Touch for Reservations and Inquiries
        </h2>
        <p className="font-robotoRegular text-[#333333] text-base leading-relaxed md:leading-normal">
          Have questions or want to book a table? Our team is here to help.
          Whether you're planning a special event or simply want to experience
          our exquisite menu, feel free to reach out. We're dedicated to making
          your visit unforgettable.
        </p>

        <div className="w-full flex items-center gap-5 md:gap-10 mt-10">
          <BgButton label="about more" />
          <div className="flex items-center gap-2">
            <FiPhoneCall color="#BD1F17" size={24} />
            <p className="text-sm md:text-lg  font-robotoBold text-[#0A1425]">
              +88 3426 739 485
            </p>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <section className="p-8 w-full min-h-[864px] flex flex-col md:justify-center relative overflow-hidden">
      <div className="w-full max-w-[1321px] mx-auto min-h-[460px] flex flex-col lg:flex-row gap-9 md:gap-6 lg:gap-10 xl:gap-20 relative">
        <div className="relative">
          <MarketExperiences />
          <img
            src={cousine}
            alt="cousine"
            className="w-full h-[270px] lg:w-[617px] md:h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-[624px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${
                selectedTab === tab.id
                  ? "bg-[#B52B1D] text-white"
                  : "bg-white text-[#333333]"
              } px-3 md:px-8 py-2 font-InterMedium text-sm`}
              onClick={() => setSelectedTab(tab.id as TabKey)}
            >
              {tab.label}
            </button>
          ))}
          <div className="w-full border border-[#B52B1D]"></div>

          <div>{tabsDetails[selectedTab]}</div>
        </div>
      </div>

      <div className="max-w-[1321px] w-full mt-16 flex flex-col lg:flex-row items-start lg:items-center justify-between self-center gap-10 lg:gap-0">
        {infos.map((info) => (
          <Item Icon={info.icon} title={info.title} subTitle={info.subTitle} />
        ))}
      </div>

      <img
        src={cousine2}
        alt="cousine 2"
        className="hidden 2xl:flex w-[364px] h-[340px] absolute -right-60 bottom-20 -rotate-12"
      />
    </section>
  );
};

export default SectionTwo;
