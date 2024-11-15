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
      <div className="w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center drop-shadow-xl">
        <Icon size={35} color="#BD1F17" />
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
