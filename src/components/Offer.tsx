import React from "react";

const Offer = () => {
  return (
    <div className="w-[72px] h-[72px] md:w-[120px] md:h-[120px] bg-[#FEBF00] rounded-full flex items-center justify-center drop-shadow-xl">
      <div className="w-[63px] h-[63px] md:w-[104px] md:h-[104px] border border-dashed border-[#BD1F17] rounded-full flex items-center justify-center">
        <h3 className="uppercase font-BebasNeueRegular text-[21px] md:text-[36px] text-black leading-[1.0] text-center">today offer</h3>
      </div>
    </div>
  );
};

export default Offer;
