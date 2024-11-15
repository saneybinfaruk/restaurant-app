import React from "react";
import { IconType } from "react-icons";
import { FaRegClock } from "react-icons/fa";

interface Props {
  icon: IconType;
  title: string;
  firstSubTitle: string;
  secondSubTitle: string;
}
const InfoItem = ({
  icon: Icon,
  title,
  firstSubTitle,
  secondSubTitle,
}: Props) => {
  return (
    <div className="w-[312px] h-[144px] flex flex-col items-center justify-between pt-1">
      <Icon size={24} color="#FEBF00" />
      <div className="flex flex-col items-center justify-between">
        <h1 className="font-BebasNeueRegular text-2xl py-3 uppercase text-white tracking-wider md:tracking-normal">{title}</h1>
        <p className="font-robotoRegular text-base text-center text-[#F7F8F9]">
          {firstSubTitle}
        </p>
        <p className="font-robotoRegular text-base text-center text-[#F7F8F9]">
          {secondSubTitle}
        </p>
      </div>
    </div>
  );
};

export default InfoItem;
