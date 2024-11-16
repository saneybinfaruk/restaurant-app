import React from "react";
import { IconType } from "react-icons";
import { BsFillBoxSeamFill } from "react-icons/bs";

interface Props {
  Icon: IconType;
  title: string;
  subTitle: string;
}
const Item = ({ Icon, title, subTitle }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px] bg-white rounded-full flex items-center justify-center drop-shadow-xl">
        <Icon
          color="#BD1F17"
          className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-BebasNeueRegular uppercase text-3xl text-[#0A1425]">
          {title}
        </h4>
        <p className="text-xl font-InterRegular text-[#0A1425]">{subTitle}</p>
      </div>
    </div>
  );
};

export default Item;
